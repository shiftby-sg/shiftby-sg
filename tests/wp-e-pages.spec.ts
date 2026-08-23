import { expect, test } from "@playwright/test";

const pageCases = [
  { path: "/", identity: "When execution becomes distributed" },
  { path: "/where-shiftby-helps", identity: "When decisions, knowledge" },
  { path: "/services", identity: "Engage where a consequential" }
] as const;

test.describe("WP-E page migration", () => {
  for (const pageCase of pageCases) {
    test(`${pageCase.path} has its governed page identity and CTA`, async ({ page }) => {
      await page.goto(pageCase.path);

      await expect(page.locator("main#main-content")).toContainText(pageCase.identity);
      await expect(page.getByRole("link", { name: "Discuss a concern" }).first()).toHaveAttribute(
        "href",
        "/discuss-a-concern"
      );
      await expect(page.locator("body")).not.toContainText("/contact");
      await expect(page.locator("body")).not.toContainText("/perspective");
      await expect(page.locator("body")).not.toContainText("Decision Traceability");
      await expect(page.locator("body")).not.toContainText("Adaptive Execution");
    });
  }

  test("Home exposes the carried proof-control status", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("note")).toContainText("remain provisional");
  });

  test("Services keeps three families distinct from canonical capabilities", async ({ page }) => {
    await page.goto("/services");

    await expect(page.getByRole("heading", { name: "AI Governance, Agent Control & Assurance" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "AI Security & Red Teaming" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "AI Knowledge, Context & Semantic Architecture" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Decision Integrity" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Organizational Memory" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Human–AI Accountability" })).toHaveCount(0);
  });

  test("WP-E pages remain usable on mobile without horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    for (const pageCase of pageCases) {
      await page.goto(pageCase.path);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
      await expect(page.locator("header.site-header")).toBeVisible();
      await expect(page.locator("footer.site-footer")).toBeVisible();
    }
  });
});
