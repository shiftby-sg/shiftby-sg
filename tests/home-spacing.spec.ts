import { expect, test } from "@playwright/test";

test.describe("home page spacing", () => {
  test("keeps main section content away from the left viewport edge", async ({ page }) => {
    await page.setViewportSize({ width: 1155, height: 661 });
    await page.goto("/");

    const heading = page.getByRole("heading", { name: "Where ShiftBy helps." });

    await expect(heading).toBeVisible();

    const box = await heading.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(72);
  });
});
