import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import path from "node:path";

const capabilityRoutes = [
  "/capabilities/decision-integrity",
  "/capabilities/organizational-memory",
  "/capabilities/human-ai-accountability"
] as const;

test("Capabilities overview presents exactly three canonical capabilities", async ({ page }) => {
  await page.goto("/capabilities");

  await expect(page.locator(".wp-f-overview-card")).toHaveCount(3);
  await expect(page.locator(".wp-f-overview-card").nth(0)).toContainText("Decision Integrity");
  await expect(page.locator(".wp-f-overview-card").nth(1)).toContainText("Organizational Memory");
  await expect(page.locator(".wp-f-overview-card").nth(2)).toContainText("Human–AI Accountability");
  await expect(page.locator(".wp-f-overview-card").getByText("Enterprise Understanding")).toHaveCount(0);

  const overviewLinks = await page.locator(".wp-f-overview-card a").all();
  expect(await Promise.all(overviewLinks.map((link) => link.getAttribute("href")))).toEqual(
    [...capabilityRoutes]
  );
});

for (const route of capabilityRoutes) {
  test(`${route} is a child route with the Capabilities parent active`, async ({ page }) => {
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("requestfailed", (request) => failedRequests.push(request.url()));

    await page.goto(route);

    await expect(page.locator("main#main-content h1")).toBeVisible();
    await expect(page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Capabilities" })).toHaveAttribute("aria-current", "page");
    await expect(page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: /Decision Integrity|Organizational Memory|Human–AI Accountability/ })).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Discuss a concern" }).first()).toHaveAttribute("href", "/discuss-a-concern");
    expect(consoleErrors).toEqual([]);
    expect(failedRequests).toEqual([]);
  });
}

test("production capability content passes semantic terminology controls", async () => {
  const files = [
    "app/capabilities/page.tsx",
    "app/capabilities/decision-integrity/page.tsx",
    "app/capabilities/organizational-memory/page.tsx",
    "app/capabilities/human-ai-accountability/page.tsx",
    "content/capability-pages.ts"
  ];
  const source = (await Promise.all(files.map((file) => readFile(path.resolve(process.cwd(), file), "utf8")))).join("\n");

  expect(source).not.toContain("Decision Traceability");
  expect(source).not.toContain("Adaptive Execution");
  expect(source).toContain("Enterprise Understanding is the overarching need");
  expect(source).toContain("not a storage, RAG, vector or search implementation");
  expect(source).toContain("authority, ownership, oversight, intervention");
  expect(source).toContain("not a logging or audit-trail exercise");
});

test("capability pages remain responsive with semantic landmarks", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  for (const route of ["/capabilities", ...capabilityRoutes]) {
    await page.goto(route);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  }
});
