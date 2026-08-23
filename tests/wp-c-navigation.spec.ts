import { expect, test } from "@playwright/test";

import {
  getActivePrimaryRoute,
  routeDefinitions
} from "@/lib/site-data";

const expectedPrimaryLabels = [
  "Home",
  "Where ShiftBy Helps",
  "Services",
  "Capabilities",
  "Explorations",
  "Insights",
  "About",
  "Discuss a Concern"
];

test("primary navigation follows the frozen V2 order", () => {
  expect(routeDefinitions.map((route) => route.label)).toEqual(
    expectedPrimaryLabels
  );
  expect(routeDefinitions).toHaveLength(8);
  expect(routeDefinitions.every((route) => route.primaryNavigation)).toBe(true);
});

test("child paths activate their governed primary parent", () => {
  expect(getActivePrimaryRoute("/")).toBe("/");
  expect(getActivePrimaryRoute("/capabilities")).toBe("/capabilities");
  expect(getActivePrimaryRoute("/capabilities/decision-integrity")).toBe(
    "/capabilities"
  );
  expect(getActivePrimaryRoute("/capabilities/unknown-child")).toBe(
    "/capabilities"
  );
  expect(getActivePrimaryRoute("/insights")).toBe("/insights");
  expect(getActivePrimaryRoute("/insights/example-insight")).toBe("/insights");
  expect(getActivePrimaryRoute("/perspective")).toBeUndefined();
  expect(getActivePrimaryRoute("/unknown")).toBeUndefined();
});

test("child routes do not appear in primary navigation", () => {
  expect(routeDefinitions.some((route) => route.href.includes("/capabilities/"))).toBe(false);
  expect(routeDefinitions.some((route) => route.href.includes("/insights/"))).toBe(false);
});

test("footer exposes V2 links and preserves the utility link", async ({ page }) => {
  await page.goto("/");

  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: "Insights" })).toHaveAttribute(
    "href",
    "/insights"
  );
  await expect(
    footer.getByRole("link", { name: "Discuss a Concern" })
  ).toHaveAttribute("href", "/discuss-a-concern");
  await expect(footer.getByRole("link", { name: "AI Policy" })).toHaveAttribute(
    "href",
    "/ai-policy"
  );
  await expect(footer.getByRole("link", { name: "Perspective" })).toHaveCount(0);
  await expect(footer.getByRole("link", { name: "Contact" })).toHaveCount(0);
});

test("header retains the primary navigation landmark and mobile menu controls", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto("/");

  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
  await expect(page.locator("#primary-navigation")).toHaveCount(1);

  await page.setViewportSize({ width: 390, height: 1200 });
  await page.reload();
  await expect(page.getByRole("button", { name: /menu/i })).toBeVisible();
});

test("legacy routes permanently redirect to V2 destinations", async ({ request }) => {
  const perspective = await request.get("/perspective", { maxRedirects: 0 });
  const contact = await request.get("/contact", { maxRedirects: 0 });

  expect(perspective.status()).toBe(308);
  expect(perspective.headers().location).toBe("/insights");
  expect(contact.status()).toBe(308);
  expect(contact.headers().location).toBe("/discuss-a-concern");
});
