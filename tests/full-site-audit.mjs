import { chromium } from "playwright";
import http from "node:http";

const BASE_URL = "http://localhost:3088";

function fetchText(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, data }));
    }).on("error", reject);
  });
}

async function runFullAudit() {
  console.log("=== FULL WEBSITE AUDIT COMMENCING ===");
  console.log(`Target: ${BASE_URL}\n`);

  // 1. Verify robots.txt, sitemap.xml, llms.txt
  console.log("--- 1. Infrastructure Endpoints ---");
  const robots = await fetchText(`${BASE_URL}/robots.txt`);
  console.log(`robots.txt: Status ${robots.status}, Length: ${robots.data.length} chars`);

  const sitemapRes = await fetchText(`${BASE_URL}/sitemap.xml`);
  console.log(`sitemap.xml: Status ${sitemapRes.status}, Length: ${sitemapRes.data.length} chars`);
  const sitemapUrls = [...sitemapRes.data.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  console.log(`Found ${sitemapUrls.length} URLs in sitemap.xml:`);
  sitemapUrls.forEach(u => console.log(`  - ${u}`));

  const llms = await fetchText(`${BASE_URL}/llms.txt`);
  console.log(`llms.txt: Status ${llms.status}, Length: ${llms.data.length} chars\n`);

  // 2. Playwright Crawl Setup
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();

  const auditResults = [];
  const internalLinksToVerify = new Map(); // targetUrl -> Set of referencing pages
  const crawledPages = new Set();
  const queue = [...sitemapUrls.map(u => u.replace("https://shiftby.sg", BASE_URL))];

  // Disallowed doctrinal / SaaS keywords
  const forbiddenPhrases = [
    /\bsaas\b/i,
    /\bplatform vendor\b/i,
    /\ball-in-one platform\b/i,
    /\bfree trial\b/i,
    /\bdownload now\b/i,
    /\bpricing tier\b/i,
    /\bsubscription model\b/i
  ];

  console.log("--- 2. Page-by-Page Deep Audit ---");

  while (queue.length > 0) {
    const currentUrl = queue.shift();
    if (crawledPages.has(currentUrl)) continue;
    crawledPages.add(currentUrl);

    const relativePath = currentUrl.replace(BASE_URL, "") || "/";
    process.stdout.write(`Auditing [${relativePath}] ... `);

    const res = await page.goto(currentUrl, { waitUntil: "networkidle" });
    const status = res ? res.status() : 0;

    // Technical SEO extraction
    const pageData = await page.evaluate(() => {
      const title = document.title || "";
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "";
      const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "";
      const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute("content") || "";
      const ogType = document.querySelector('meta[property="og:type"]')?.getAttribute("content") || "";

      // Semantic outline
      const h1s = Array.from(document.querySelectorAll("h1")).map(h => h.textContent.trim());
      const h2s = Array.from(document.querySelectorAll("h2")).map(h => h.textContent.trim());
      const h3s = Array.from(document.querySelectorAll("h3")).map(h => h.textContent.trim());

      const hasMain = !!document.querySelector("main");
      const hasNav = !!document.querySelector("nav");
      const hasFooter = !!document.querySelector("footer");

      // Schema.org JSON-LD
      const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(s => {
        try { return JSON.parse(s.textContent || "{}"); } catch { return { error: "INVALID_JSON" }; }
      });

      // Links on page
      const anchors = Array.from(document.querySelectorAll("a[href]")).map(a => ({
        href: a.getAttribute("href"),
        text: a.textContent.trim()
      }));

      // Images / SVGs accessibility
      const images = Array.from(document.querySelectorAll("img")).map(img => ({
        src: img.getAttribute("src"),
        alt: img.getAttribute("alt"),
        hasAlt: img.hasAttribute("alt")
      }));

      // Body text for doctrinal checks
      const bodyText = document.body.innerText || "";

      // IDs on page for anchor checking
      const elementIds = Array.from(document.querySelectorAll("[id]")).map(el => el.id);

      // Layout overflow check
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      const hasOverflow = docWidth > winWidth;

      return {
        title,
        metaDesc,
        canonical,
        ogTitle,
        ogDesc,
        ogUrl,
        ogType,
        h1s,
        h2Count: h2s.length,
        h3Count: h3s.length,
        hasMain,
        hasNav,
        hasFooter,
        jsonLdScripts,
        anchors,
        images,
        bodyText,
        elementIds,
        hasOverflow
      };
    });

    // Check mobile overflow
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(50);
    const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    await page.setViewportSize({ width: 1440, height: 1000 });

    // Collect internal links to verify
    for (const a of pageData.anchors) {
      if (a.href && (a.href.startsWith("/") || a.href.startsWith(BASE_URL))) {
        const full = a.href.startsWith("/") ? `${BASE_URL}${a.href}` : a.href;
        if (!internalLinksToVerify.has(full)) {
          internalLinksToVerify.set(full, new Set());
        }
        internalLinksToVerify.get(full).add(relativePath);
      }
    }

    // Doctrinal forbidden word check
    const forbiddenMatches = [];
    for (const re of forbiddenPhrases) {
      if (re.test(pageData.bodyText)) {
        forbiddenMatches.push(re.toString());
      }
    }

    auditResults.push({
      path: relativePath,
      status,
      title: pageData.title,
      titleLength: pageData.title.length,
      metaDesc: pageData.metaDesc,
      descLength: pageData.metaDesc.length,
      canonical: pageData.canonical,
      ogTitle: pageData.ogTitle,
      h1s: pageData.h1s,
      h2Count: pageData.h2Count,
      h3Count: pageData.h3Count,
      hasMain: pageData.hasMain,
      hasNav: pageData.hasNav,
      hasFooter: pageData.hasFooter,
      jsonLdCount: pageData.jsonLdScripts.length,
      jsonLdErrors: pageData.jsonLdScripts.filter(s => s.error).length,
      imagesMissingAlt: pageData.images.filter(i => !i.hasAlt).length,
      desktopOverflow: pageData.hasOverflow,
      mobileOverflow,
      elementIds: new Set(pageData.elementIds),
      forbiddenMatches
    });

    console.log(`OK (Status ${status}, Title: "${pageData.title.slice(0, 35)}...", H1: ${pageData.h1s.length})`);
  }

  console.log(`\n--- 3. Verifying ${internalLinksToVerify.size} Internal Link Targets ---`);
  let brokenLinks = 0;
  let brokenAnchors = 0;

  // Map of URL without hash -> page data
  const pageDataMap = new Map();
  for (const r of auditResults) {
    pageDataMap.set(`${BASE_URL}${r.path}`, r);
  }

  for (const [targetUrl, referrers] of internalLinksToVerify.entries()) {
    const [basePart, hashPart] = targetUrl.split("#");
    const cleanUrl = basePart.split("?")[0];
    const targetPage = pageDataMap.get(cleanUrl);

    if (!targetPage) {
      // Test via HTTP fetch if it wasn't in the initial sitemap (e.g. static asset or query string)
      const testRes = await fetchText(targetUrl);
      if (testRes.status !== 200) {
        console.error(`  [BROKEN LINK 404]: ${targetUrl} (Referenced from: ${[...referrers].join(", ")})`);
        brokenLinks++;
      }
    } else {
      if (hashPart && !targetPage.elementIds.has(hashPart)) {
        console.error(`  [BROKEN ANCHOR #${hashPart}]: on ${cleanUrl} (Referenced from: ${[...referrers].join(", ")})`);
        brokenAnchors++;
      }
    }
  }

  console.log(`Internal Links Summary: ${internalLinksToVerify.size} targets verified. Broken Links: ${brokenLinks}, Broken Anchors: ${brokenAnchors}\n`);

  await browser.close();

  const fs = await import("node:fs/promises");
  await fs.writeFile(
    "/Users/anandakrishnamarri/.gemini/antigravity/brain/8c13fc48-a15f-4fcb-9f7d-e285735ec597/scratch/audit-report.json",
    JSON.stringify({ auditResults, sitemapUrls, brokenLinks, brokenAnchors }, null, 2)
  );

  return { auditResults, sitemapUrls, brokenLinks, brokenAnchors };
}

runFullAudit().then(() => {
  console.log("=== AUDIT EXECUTION COMPLETE ===");
}).catch(console.error);
