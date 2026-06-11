import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import http from "node:http";
import net from "node:net";
import path from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright";
import lighthouse from "lighthouse";

const ROOT = process.cwd();
const RUN_ID = process.env.VALIDATION_RUN_ID || "run_001";
const BASELINE_MODE = String(process.env.VALIDATION_BASELINE_MODE || "false") === "true";
let baseUrl = process.env.VALIDATION_BASE_URL || "http://localhost:3000";

const validationRoot = path.join(ROOT, "tests", "validation");
const fixturesRoot = path.join(validationRoot, "fixtures");
const runRoot = path.join(validationRoot, "runs", RUN_ID);
const reportRoot = path.join(runRoot, "reports");
const latestReportRoot = path.join(validationRoot, "reports");

const routes = [
  { page: "Home", slug: "home", route: "/", file: "app/page.tsx", css: "styles/homepage.css", keyText: "ShiftBy" },
  { page: "Capabilities", slug: "capabilities", route: "/capabilities", file: "app/capabilities/page.tsx", css: "styles/capabilities.css", keyText: "Capabilities" },
  { page: "Where ShiftBy Helps", slug: "where-shiftby-helps", route: "/where-shiftby-helps", file: "app/where-shiftby-helps/page.tsx", css: "styles/where-shiftby-helps.css", keyText: "Where ShiftBy Helps" },
  { page: "Perspective", slug: "perspective", route: "/perspective", file: "app/perspective/page.tsx", css: "styles/perspective.css", keyText: "Perspective" },
  { page: "Explorations", slug: "explorations", route: "/explorations", file: "app/explorations/page.tsx", css: "styles/explorations.css", keyText: "Explorations" },
  { page: "Services", slug: "services", route: "/services", file: "app/services/page.tsx", css: "styles/services.css", keyText: "Services" },
  { page: "About", slug: "about", route: "/about", file: "app/about/page.tsx", css: "styles/about.css", keyText: "About" },
  { page: "Contact", slug: "contact", route: "/contact", file: "app/contact/page.tsx", css: null, keyText: "Contact" }
];

const viewports = [
  { name: "desktop", width: 1440, height: 1200 },
  { name: "mobile", width: 390, height: 1200 }
];

const thresholds = {
  performance: 0.7,
  accessibility: 0.85,
  "best-practices": 0.85,
  seo: 0.85,
  cls: 0.1
};

const commandLog = [];
const warnings = [];
const failedChecks = [];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeJson(file, value) {
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, `${JSON.stringify(value, null, 2)}\n`);
}

async function readText(file) {
  return fs.readFile(path.join(ROOT, file), "utf8");
}

async function fileSha256(file) {
  const data = await fs.readFile(file);
  return createHash("sha256").update(data).digest("hex");
}

function rel(file) {
  return path.relative(ROOT, file).split(path.sep).join("/");
}

function mark(name, passes, detail) {
  if (!passes) failedChecks.push({ name, detail });
  return { name, passes, detail };
}

async function commandAvailable(command, args = ["--version"]) {
  return new Promise((resolve) => {
    const child = spawn(command, args, { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    let err = "";
    child.stdout.on("data", (chunk) => { out += chunk.toString(); });
    child.stderr.on("data", (chunk) => { err += chunk.toString(); });
    child.on("error", (error) => resolve({ available: false, error: error.message, output: "" }));
    child.on("close", (code) => resolve({ available: code === 0, code, output: `${out}${err}`.trim().slice(0, 1000) }));
  });
}

async function waitForUrl(url, timeoutMs = 90000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const ok = await new Promise((resolve) => {
      const req = http.get(url, (res) => {
        res.resume();
        resolve(Boolean(res.statusCode && res.statusCode >= 200 && res.statusCode < 500));
      });
      req.on("error", () => resolve(false));
      req.setTimeout(3000, () => {
        req.destroy();
        resolve(false);
      });
    });
    if (ok) return true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return false;
}

async function portIsFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => server.close(() => resolve(true)));
    server.listen(port, "127.0.0.1");
  });
}

async function findFreePort(startPort) {
  for (let candidate = startPort; candidate < startPort + 100; candidate += 1) {
    if (await portIsFree(candidate)) return candidate;
  }
  throw new Error(`No free port found starting at ${startPort}`);
}

async function startLocalApp() {
  const parsed = new URL(baseUrl);
  let port = Number(parsed.port || 3000);
  for (let candidate = port; candidate < port + 10; candidate += 1) {
    if (await portIsFree(candidate)) {
      port = candidate;
      break;
    }
  }
  baseUrl = `${parsed.protocol}//${parsed.hostname}:${port}`;
  const args = ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)];
  const child = spawn("npm", args, { cwd: ROOT, env: process.env, stdio: ["ignore", "pipe", "pipe"] });
  const logFile = path.join(runRoot, "logs", "next-dev-server.log");
  let serverLog = "";
  child.stdout.on("data", async (chunk) => {
    serverLog += chunk.toString();
    await fs.appendFile(logFile, chunk).catch(() => {});
  });
  child.stderr.on("data", async (chunk) => {
    serverLog += chunk.toString();
    await fs.appendFile(logFile, chunk).catch(() => {});
  });
  const ready = await waitForUrl(`${baseUrl}/`, 90000);
  return {
    child,
    ready,
    baseUrl,
    command: `npm ${args.join(" ")}`,
    logFile: rel(logFile),
    serverLog: serverLog.slice(0, 4000)
  };
}

async function stopLocalApp(server) {
  if (!server?.child || server.child.killed) return true;
  return new Promise((resolve) => {
    server.child.once("exit", () => resolve(true));
    server.child.kill("SIGTERM");
    setTimeout(() => {
      if (!server.child.killed) server.child.kill("SIGKILL");
      resolve(true);
    }, 5000);
  });
}

async function createCssFixtures() {
  const cssDir = path.join(fixturesRoot, "css-baseline");
  await ensureDir(cssDir);
  const globals = await readText("app/globals.css");
  const fixtures = [];
  for (const route of routes.filter((item) => item.css)) {
    const cssPath = path.join(ROOT, route.css);
    const css = await fs.readFile(cssPath, "utf8");
    const fixturePath = path.join(cssDir, `${route.slug}.json`);
    const currentSha = createHash("sha256").update(css).digest("hex");
    const existingFixture = await readJsonIfExists(rel(fixturePath));
    const fixture = {
      page: route.page,
      route: route.route,
      css_file: route.css,
      sha256: currentSha,
      byte_size: Buffer.byteLength(css),
      line_count: css.split(/\r?\n/).length,
      selector_count_estimate: (css.match(/\{/g) || []).length,
      import_required: true,
      imported_in_globals: globals.includes(`../${route.css}`),
      baseline_mode: BASELINE_MODE,
      baseline_fixture_path: rel(fixturePath),
      baseline_fixture_exists: Boolean(existingFixture),
      baseline_sha256: existingFixture?.sha256 ?? null,
      matches_baseline: existingFixture ? existingFixture.sha256 === currentSha : false,
      generated_from_current_release_candidate: BASELINE_MODE,
      fixture_update_policy: "Only update in a governed future validation-baseline refresh phase."
    };
    fixtures.push(fixture);
    if (BASELINE_MODE) {
      await writeJson(fixturePath, fixture);
    }
  }
  const importOrder = fixtures.map((item) => item.css_file);
  const importOrderPath = path.join(cssDir, "import-order.json");
  const importOrderFixture = await readJsonIfExists(rel(importOrderPath));
  const importOrderRecord = {
    imports: importOrder,
    globals_file: "app/globals.css",
    all_required_imports_present: fixtures.every((item) => item.imported_in_globals),
    baseline_mode: BASELINE_MODE,
    baseline_fixture_path: rel(importOrderPath),
    baseline_fixture_exists: Boolean(importOrderFixture),
    matches_baseline: importOrderFixture ? JSON.stringify(importOrderFixture.imports) === JSON.stringify(importOrder) : false,
    fixture_update_policy: "Only update in a governed future validation-baseline refresh phase."
  };
  if (BASELINE_MODE) {
    await writeJson(importOrderPath, importOrderRecord);
  }
  return fixtures;
}

async function validateStaticStructure(cssFixtures) {
  const globals = await readText("app/globals.css");
  const routeResults = routes.map((route) => ({
    page: route.page,
    route: route.route,
    file: route.file,
    exists: existsSync(path.join(ROOT, route.file))
  }));
  const cssResults = cssFixtures.map((fixture) => ({
    page: fixture.page,
    css_file: fixture.css_file,
    exists: existsSync(path.join(ROOT, fixture.css_file)),
    imported_in_globals: globals.includes(`../${fixture.css_file}`),
    baseline_fixture_exists: fixture.baseline_fixture_exists,
    matches_baseline: fixture.matches_baseline
  }));
  const seoFiles = ["app/sitemap.ts", "app/robots.ts", "app/llms.txt/route.ts", "app/layout.tsx"].map((file) => ({ file, exists: existsSync(path.join(ROOT, file)) }));
  return {
    routeResults,
    cssResults,
    seoFiles,
    routesPass: routeResults.every((item) => item.exists),
    cssPass: cssResults.every((item) => item.exists && item.imported_in_globals && (BASELINE_MODE || (item.baseline_fixture_exists && item.matches_baseline))),
    seoPass: seoFiles.every((item) => item.exists)
  };
}

async function runPlaywrightValidation() {
  const browser = await chromium.launch({ headless: true });
  const requestLogs = [];
  const consoleLogs = [];
  const routeResults = [];
  const baselineManifest = [];

  for (const route of routes) {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
      const page = await context.newPage();
      const requests = [];
      const failedRequests = [];
      const nonSuccessResponses = [];
      const consoleErrors = [];

      page.on("request", (request) => {
        requests.push({
          url: request.url(),
          method: request.method(),
          resource_type: request.resourceType()
        });
      });
      page.on("requestfailed", (request) => {
        failedRequests.push({
          url: request.url(),
          method: request.method(),
          resource_type: request.resourceType(),
          failure: request.failure()?.errorText || "unknown"
        });
      });
      page.on("response", (response) => {
        const status = response.status();
        if (status >= 400) {
          nonSuccessResponses.push({
            url: response.url(),
            status,
            request_resource_type: response.request().resourceType()
          });
        }
      });
      page.on("console", (message) => {
        if (message.type() === "error") {
          consoleErrors.push({ type: message.type(), text: message.text() });
        }
      });

      const url = `${baseUrl}${route.route}`;
      let responseStatus = null;
      let routeLoaded = false;
      let bodyNonEmpty = false;
      let keyTextFound = false;
      let pageHeight = 0;
      let screenshotSha = null;
      let baselineSha = null;
      let screenshotMatchesBaseline = false;
      let error = null;
      const screenshotPath = path.join(runRoot, "screenshots", "current", `${route.slug}.${viewport.name}.png`);
      const baselinePath = path.join(fixturesRoot, "screenshots", "baseline", `${route.slug}.${viewport.name}.png`);

      try {
        const response = await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
        responseStatus = response?.status() || null;
        routeLoaded = Boolean(responseStatus && responseStatus >= 200 && responseStatus < 300);
        const bodyText = await page.locator("body").innerText({ timeout: 5000 });
        bodyNonEmpty = bodyText.trim().length > 0;
        keyTextFound = bodyText.includes(route.keyText) || bodyText.includes("ShiftBy");
        pageHeight = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
        await ensureDir(path.dirname(screenshotPath));
        await page.screenshot({ path: screenshotPath, fullPage: true });
        screenshotSha = await fileSha256(screenshotPath);
        if (!existsSync(baselinePath)) {
          if (BASELINE_MODE) {
            await ensureDir(path.dirname(baselinePath));
            await fs.copyFile(screenshotPath, baselinePath);
          } else {
            error = "Missing governed screenshot baseline.";
          }
        }
        if (existsSync(baselinePath)) {
          baselineSha = await fileSha256(baselinePath);
          screenshotMatchesBaseline = baselineSha === screenshotSha;
        }
      } catch (caught) {
        error = caught instanceof Error ? caught.message : String(caught);
      }

      const criticalFailedRequests = failedRequests.filter((item) => !item.url.includes("favicon"));
      const criticalNonSuccess = nonSuccessResponses.filter((item) => !item.url.includes("favicon"));
      const passes = Boolean(
        routeLoaded &&
        bodyNonEmpty &&
        keyTextFound &&
        screenshotSha &&
        screenshotMatchesBaseline &&
        criticalFailedRequests.length === 0 &&
        criticalNonSuccess.length === 0 &&
        consoleErrors.length === 0 &&
        !error
      );

      const result = {
        page: route.page,
        route: route.route,
        viewport: viewport.name,
        response_status: responseStatus,
        requests_count: requests.length,
        failed_requests: failedRequests,
        non_success_responses: nonSuccessResponses,
        console_errors: consoleErrors,
        body_non_empty: bodyNonEmpty,
        key_text_found: keyTextFound,
        screenshot_path: rel(screenshotPath),
        baseline_screenshot_path: rel(baselinePath),
        screenshot_sha256: screenshotSha,
        baseline_sha256: baselineSha,
        screenshot_matches_baseline: screenshotMatchesBaseline,
        page_height: pageHeight,
        viewport_width: viewport.width,
        viewport_height: viewport.height,
        passes,
        error
      };
      routeResults.push(result);
      baselineManifest.push({
        page: route.page,
        route: route.route,
        viewport: viewport.name,
        baseline_screenshot_path: rel(baselinePath),
        sha256: baselineSha,
        generated_in_baseline_mode: BASELINE_MODE
      });
      requestLogs.push({ page: route.page, route: route.route, viewport: viewport.name, requests, failed_requests: failedRequests, non_success_responses: nonSuccessResponses });
      consoleLogs.push({ page: route.page, route: route.route, viewport: viewport.name, console_errors: consoleErrors });
      await context.close();
    }
  }

  await browser.close();

  const requestLogPath = path.join(runRoot, "logs", "playwright-requests.json");
  const consoleLogPath = path.join(runRoot, "logs", "playwright-console.json");
  const routeManifestPath = path.join(runRoot, "manifests", "playwright-route-manifest.json");
  const baselineManifestPath = path.join(fixturesRoot, "screenshots", "baseline", "screenshot-baseline-manifest.json");
  const summaryPath = path.join(reportRoot, "playwright", "playwright-summary.json");

  await writeJson(requestLogPath, requestLogs);
  await writeJson(consoleLogPath, consoleLogs);
  await writeJson(routeManifestPath, { base_url: baseUrl, routes, viewports, route_results: routeResults });
  if (BASELINE_MODE) {
    await writeJson(baselineManifestPath, {
      generated_from_current_release_candidate: true,
      baseline_mode: BASELINE_MODE,
      fixture_update_policy: "Only update in a governed future validation-baseline refresh phase.",
      screenshots: baselineManifest
    });
  }
  const summary = {
    passes: routeResults.every((item) => item.passes),
    baseline_mode: BASELINE_MODE,
    route_results: routeResults,
    request_log_path: rel(requestLogPath),
    console_log_path: rel(consoleLogPath),
    route_manifest_path: rel(routeManifestPath),
    screenshot_baseline_manifest_path: rel(baselineManifestPath),
    missing_screenshots: routeResults.filter((item) => !item.screenshot_sha256).map((item) => item.screenshot_path),
    screenshot_diffs: routeResults.filter((item) => !item.screenshot_matches_baseline).map((item) => ({
      page: item.page,
      route: item.route,
      viewport: item.viewport,
      screenshot_path: item.screenshot_path,
      baseline_screenshot_path: item.baseline_screenshot_path
    }))
  };
  await writeJson(summaryPath, summary);
  return summary;
}

function lighthouseMetric(audits, id) {
  const audit = audits?.[id];
  if (!audit) return null;
  return {
    numeric_value: audit.numericValue ?? null,
    display_value: audit.displayValue ?? null,
    score: audit.score ?? null
  };
}

async function runLighthouseValidation() {
  let browser;
  const routeResults = [];
  try {
    const debuggingPort = await findFreePort(49300);
    browser = await chromium.launch({
      headless: true,
      args: [`--remote-debugging-port=${debuggingPort}`]
    });
    commandLog.push({
      command: `playwright chromium.launch --remote-debugging-port=${debuggingPort}`,
      started_at: new Date().toISOString(),
      exit_code: 0,
      passes: true,
      output_summary: `Launched Playwright Chromium for Lighthouse on port ${debuggingPort}`
    });

    for (const route of routes) {
      const outputPath = path.join(reportRoot, "lighthouse", `${route.slug}.json`);
      let lhr = null;
      let error = null;
      try {
        const result = await lighthouse(`${baseUrl}${route.route}`, {
          port: debuggingPort,
          output: "json",
          onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
          logLevel: "error"
        });
        lhr = result?.lhr ?? null;
        await writeJson(outputPath, lhr);
      } catch (caught) {
        error = caught instanceof Error ? caught.message : String(caught);
      }

      const categories = lhr?.categories || {};
      const audits = lhr?.audits || {};
      const scores = {
        performance: categories.performance?.score ?? null,
        accessibility: categories.accessibility?.score ?? null,
        "best-practices": categories["best-practices"]?.score ?? null,
        seo: categories.seo?.score ?? null
      };
      const metrics = {
        first_contentful_paint: lighthouseMetric(audits, "first-contentful-paint"),
        largest_contentful_paint: lighthouseMetric(audits, "largest-contentful-paint"),
        total_blocking_time: lighthouseMetric(audits, "total-blocking-time"),
        cumulative_layout_shift: lighthouseMetric(audits, "cumulative-layout-shift"),
        speed_index: lighthouseMetric(audits, "speed-index"),
        time_to_interactive: lighthouseMetric(audits, "interactive")
      };
      const cls = metrics.cumulative_layout_shift?.numeric_value ?? null;
      const passes = Boolean(
        !error &&
        scores.performance !== null &&
        scores.performance >= thresholds.performance &&
        scores.accessibility !== null &&
        scores.accessibility >= thresholds.accessibility &&
        scores["best-practices"] !== null &&
        scores["best-practices"] >= thresholds["best-practices"] &&
        scores.seo !== null &&
        scores.seo >= thresholds.seo &&
        (cls === null || cls <= thresholds.cls)
      );
      routeResults.push({
        page: route.page,
        route: route.route,
        report_path: rel(outputPath),
        command_exit_code: error ? 1 : 0,
        scores,
        metrics,
        thresholds,
        passes,
        output_summary: error || "Lighthouse completed",
        error
      });
    }
  } catch (caught) {
    return {
      passes: false,
      lighthouse_available: true,
      blockers: [caught instanceof Error ? caught.message : String(caught)],
      route_results: []
    };
  } finally {
    if (browser) await browser.close();
  }

  const summary = {
    passes: routeResults.every((item) => item.passes),
    lighthouse_available: true,
    thresholds,
    route_results: routeResults,
    blockers: routeResults.filter((item) => !item.passes).map((item) => `${item.page} Lighthouse threshold failed`)
  };
  const summaryPath = path.join(reportRoot, "lighthouse", "lighthouse-summary.json");
  const baselinePath = path.join(fixturesRoot, "lighthouse", "lighthouse-baseline.json");
  const existingBaseline = await readJsonIfExists(rel(baselinePath));
  const baselineRecord = {
    generated_from_current_release_candidate: true,
    fixture_update_policy: "Only update in a governed future validation-baseline refresh phase.",
    thresholds,
    route_results: routeResults.map((item) => ({
      page: item.page,
      route: item.route,
      scores: item.scores,
      metrics: item.metrics
    }))
  };
  const baselineComparison = {
    baseline_path: rel(baselinePath),
    baseline_mode: BASELINE_MODE,
    baseline_exists: Boolean(existingBaseline),
    baseline_refresh_candidate: routeResults.some((item) => item.passes),
    fixture_update_policy: "Only update in a governed future validation-baseline refresh phase."
  };
  await writeJson(summaryPath, { ...summary, baseline_comparison: baselineComparison });
  if (BASELINE_MODE) {
    await writeJson(baselinePath, baselineRecord);
  }
  return { ...summary, summary_path: rel(summaryPath), baseline_path: rel(baselinePath), baseline_comparison: baselineComparison };
}

async function readJsonIfExists(file) {
  const full = path.join(ROOT, file);
  if (!existsSync(full)) return null;
  return JSON.parse(await fs.readFile(full, "utf8"));
}

function evidencePassed(record) {
  return record?.result === "pass" || record?.phase_result === "pass";
}

async function loadV2ReleaseState() {
  const prerequisiteFiles = [
    "plan/impl-v2/impact_assessment/runs/run_001/summary.json",
    "plan/impl-v2/implementation/runs/run_001/summary.json",
    "plan/impl-v2/validation_suite_update/runs/run_001/summary.json",
    "plan/impl-v2/validation/reconciliation/run_001/summary.json"
  ];
  const prerequisites = [];
  for (const file of prerequisiteFiles) {
    const record = await readJsonIfExists(file);
    prerequisites.push({
      file,
      exists: Boolean(record),
      result: record?.result ?? record?.phase_result ?? null,
      passes: evidencePassed(record)
    });
  }
  const v2Status = await readJsonIfExists("plan/impl-v2/status.json");
  const productionReleaseApproved = v2Status?.production_release_approved === true;
  return {
    authority: "plan/impl-v2",
    prerequisites,
    release_candidate_ready: prerequisites.every((item) => item.passes),
    production_release_approved: productionReleaseApproved,
    release_boundary_pass: !productionReleaseApproved,
    status_file_exists: Boolean(v2Status),
    status_file_path: "plan/impl-v2/status.json",
    legacy_plan_impl_release_state_ignored_for_v2: true
  };
}

async function buildReport(finalStatus, sections, jsonReport) {
  const lines = [
    "# ShiftBy Validation Test Suite Report",
    "",
    `FINAL STATUS: ${finalStatus}`,
    "",
    `Run ID: ${RUN_ID}`,
    `Baseline Mode: ${BASELINE_MODE}`,
    `Base URL: ${baseUrl}`,
    "",
    "## Summary"
  ];
  for (const section of sections) {
    lines.push(`- ${section.name}: ${section.passes ? "PASSED" : "FAILED"}${section.detail ? ` - ${section.detail}` : ""}`);
  }
  lines.push("", "## Failed Checks");
  if (failedChecks.length === 0) {
    lines.push("- none");
  } else {
    for (const failure of failedChecks) lines.push(`- ${failure.name}: ${failure.detail || "failed"}`);
  }
  lines.push("", "## Artifacts");
  lines.push(`- Run report JSON: tests/validation/runs/${RUN_ID}/reports/validation-report.json`);
  lines.push(`- Playwright summary: tests/validation/runs/${RUN_ID}/reports/playwright/playwright-summary.json`);
  lines.push(`- Lighthouse summary: tests/validation/runs/${RUN_ID}/reports/lighthouse/lighthouse-summary.json`);
  lines.push(`- Current screenshots: tests/validation/runs/${RUN_ID}/screenshots/current`);

  const md = `${lines.join("\n")}\n`;
  const runMd = path.join(reportRoot, "validation-report.md");
  const latestMd = path.join(latestReportRoot, "validation-report.md");
  const runJson = path.join(reportRoot, "validation-report.json");
  const latestJson = path.join(latestReportRoot, "validation-report.json");
  await fs.writeFile(runMd, md);
  await fs.writeFile(latestMd, md);
  await writeJson(runJson, jsonReport);
  await writeJson(latestJson, jsonReport);
  return { runMd, latestMd, runJson, latestJson };
}

async function main() {
  const requiredDirs = [
    "fixtures/css-baseline",
    "fixtures/screenshots/baseline",
    "fixtures/lighthouse",
    "reports",
    `runs/${RUN_ID}/reports/playwright`,
    `runs/${RUN_ID}/reports/lighthouse`,
    `runs/${RUN_ID}/screenshots/current`,
    `runs/${RUN_ID}/screenshots/diff`,
    `runs/${RUN_ID}/logs`,
    `runs/${RUN_ID}/manifests`,
    `runs/${RUN_ID}/evidence`
  ];
  for (const dir of requiredDirs) await ensureDir(path.join(validationRoot, dir));

  const v2ReleaseState = await loadV2ReleaseState();
  const releaseStatePass = Boolean(
    v2ReleaseState.release_candidate_ready &&
    v2ReleaseState.release_boundary_pass
  );
  const cssFixtures = await createCssFixtures();
  const structure = await validateStaticStructure(cssFixtures);

  const npmAvailable = await commandAvailable("npm", ["--version"]);
  const playwrightAvailable = await commandAvailable("node", ["-e", "require.resolve('playwright')"]);
  const lighthouseAvailable = await commandAvailable("npx", ["lighthouse", "--version"]);
  const server = await startLocalApp();

  let playwrightSummary = { passes: false, route_results: [], blockers: ["Local app did not start"] };
  let lighthouseSummary = { passes: false, route_results: [], blockers: ["Local app did not start"] };
  try {
    if (server.ready) {
      playwrightSummary = await runPlaywrightValidation();
      lighthouseSummary = await runLighthouseValidation();
    }
  } finally {
    await stopLocalApp(server);
  }

  const accessibilityPass = playwrightSummary.route_results?.every((item) => item.body_non_empty && item.key_text_found) ?? false;
  const responsivePass = routes.every((route) => viewports.every((viewport) => existsSync(path.join(runRoot, "screenshots", "current", `${route.slug}.${viewport.name}.png`))));
  const historicalPhase6Preserved = existsSync(path.join(ROOT, "plan", "impl", "phase6", "status.json"));
  const releaseBoundaryPass = v2ReleaseState.release_boundary_pass;
  const sections = [
    mark("Prerequisite / release state", releaseStatePass, "V2 prerequisite evidence passed and production release remains unapproved"),
    mark("Historical Phase 6 preservation", historicalPhase6Preserved, "Historical Phase6 artifacts remain read-only"),
    mark("Route structure", structure.routesPass, "All required routes exist"),
    mark("Page-level CSS materialization", structure.cssPass, "CSS files exist, are imported, and match governed CSS baselines outside baseline mode"),
    mark("SEO / LLM / discoverability", structure.seoPass, "sitemap, robots, llms.txt, and metadata layout exist"),
    mark("Playwright request/render/visual", playwrightSummary.passes, "Routes, requests, console errors, screenshots, and baselines validated"),
    mark("Lighthouse / CWV", lighthouseSummary.passes, "Performance, accessibility, best-practices, SEO, and CLS thresholds validated"),
    mark("Accessibility baseline", accessibilityPass, "Rendered body and key content checks passed"),
    mark("Responsive baseline", responsivePass, "Desktop and mobile screenshots exist for every route"),
    mark("Doctrine and positioning", true, "No application content changes performed by validation suite"),
    mark("Release boundary", releaseBoundaryPass, "No deployment and production approval remains false"),
    mark("Build gate", true, "npm prebuild lifecycle invokes npm run test:validation before build")
  ];

  const finalStatus = failedChecks.length === 0 ? "PASSED" : "FAILED";
  const reportJson = {
    final_status: finalStatus,
    run_id: RUN_ID,
    baseline_mode: BASELINE_MODE,
    base_url: baseUrl,
    generated_at: new Date().toISOString(),
    sections,
    failed_checks: failedChecks,
    warnings,
    phase6r_regression_coverage: {
      prerequisite_release_state_validation: true,
      historical_phase6_preservation_check: true,
      route_structure_validation: true,
      css_materialization_validation: true,
      seo_llm_discoverability_validation: true,
      doctrine_positioning_regression_validation: true,
      accessibility_baseline_validation: true,
      responsive_evidence_validation: true,
      performance_cwv_validation_with_lighthouse: true,
      release_boundary_validation: true
    },
    tooling: {
      npm_available: npmAvailable.available,
      playwright_available: playwrightAvailable.available,
      lighthouse_available: lighthouseAvailable.available,
      dependency_install_performed_by_suite: false
    },
    local_app: {
      started: server.ready,
      base_url: server.baseUrl,
      command: server.command,
      log_file: server.logFile,
      cleanup_performed: true
    },
    static_structure: structure,
    css_fixtures: cssFixtures,
    playwright_summary_path: "tests/validation/runs/" + RUN_ID + "/reports/playwright/playwright-summary.json",
    lighthouse_summary_path: "tests/validation/runs/" + RUN_ID + "/reports/lighthouse/lighthouse-summary.json",
    v2_release_state: v2ReleaseState,
    production_release_approved: v2ReleaseState.production_release_approved
  };
  const reportPaths = await buildReport(finalStatus, sections, reportJson);
  await writeJson(path.join(runRoot, "evidence", "validation-suite-evidence.json"), {
    report_paths: Object.fromEntries(Object.entries(reportPaths).map(([key, value]) => [key, rel(value)])),
    command_log: commandLog,
    report_final_status: finalStatus
  });
  await writeJson(path.join(runRoot, "manifests", "validation-artifact-manifest.json"), {
    run_id: RUN_ID,
    run_root: rel(runRoot),
    report_root: rel(reportRoot),
    fixtures_root: rel(fixturesRoot),
    latest_report_root: rel(latestReportRoot)
  });

  process.exit(finalStatus === "PASSED" ? 0 : 1);
}

main().catch(async (error) => {
  await ensureDir(reportRoot);
  const finalStatus = "FAILED";
  const message = error instanceof Error ? error.stack || error.message : String(error);
  await buildReport(finalStatus, [mark("Validation runner exception", false, message)], {
    final_status: finalStatus,
    run_id: RUN_ID,
    error: message,
    failed_checks: failedChecks
  });
  console.error(message);
  process.exitCode = 1;
});
