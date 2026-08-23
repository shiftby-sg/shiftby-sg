import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import path from "node:path";

import {
  designSystemContent,
  designSystemContract
} from "@/content/design-system";
import {
  designTokenCategories,
  designTokens
} from "@/lib/design-tokens";

const globalsPath = path.resolve(process.cwd(), "app/globals.css");

test("design tokens and runtime CSS variables stay aligned", async () => {
  const globals = await readFile(globalsPath, "utf8");

  expect(designTokenCategories).toEqual([
    "colors",
    "type",
    "spacing",
    "radius",
    "shadows",
    "breakpoints"
  ]);
  expect(designTokens.spacing.measure).toBe("47.5rem");
  expect(designTokens.breakpoints.sm).toBe("768px");

  for (const variable of [
    "--color-bg",
    "--color-ink",
    "--color-accent",
    "--gutter",
    "--container",
    "--measure",
    "--display",
    "--heading-1",
    "--space-section",
    "--radius-lg",
    "--shadow-soft",
    "--breakpoint-sm"
  ]) {
    expect(globals).toContain(variable);
  }
});

test("global CSS preserves focus and reduced-motion foundations", async () => {
  const globals = await readFile(globalsPath, "utf8");

  expect(globals).toContain(":focus-visible");
  expect(globals).toContain("outline: 3px solid var(--color-accent)");
  expect(globals).toContain("@media (prefers-reduced-motion: reduce)");
  expect(globals).toContain("scroll-behavior: auto");
  expect(globals).not.toContain("will-change: transform");
});

test("shared shell and landmarks remain readable on desktop and mobile", async ({
  page
}) => {
  await page.goto("/");

  await expect(page.locator(".shell")).toBeVisible();
  await expect(page.locator("main#main-content")).toBeVisible();
  await expect(page.locator("header.site-header")).toBeVisible();
  await expect(page.locator("footer.site-footer")).toBeVisible();

  const desktopShell = await page.locator(".shell").boundingBox();
  expect(desktopShell?.width).toBeGreaterThan(0);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();

  const mobileShell = await page.locator(".shell").boundingBox();
  expect(mobileShell?.width).toBeLessThanOrEqual(390);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await expect(page.locator("header.site-header")).toBeVisible();
  await expect(page.locator("footer.site-footer")).toBeVisible();
});

test("shared contract supports narrative rhythm without promoting placeholder copy", async () => {
  expect(designSystemContract.narrativeGrammar).toEqual([
    "Signal",
    "Meaning",
    "Relevance",
    "Implication",
    "Bridge"
  ]);
  expect(designSystemContract.placeholderContentStatus).toBe(
    "scaffolding-only"
  );
  expect(designSystemContent.shellNote).toContain("Design authority remains upstream");
});
