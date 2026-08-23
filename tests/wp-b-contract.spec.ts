import { expect, test } from "@playwright/test";

import {
  canonicalCapabilities,
  getCanonicalCapabilities,
  getCanonicalCapabilityById,
  type InsightContract,
  v2PrimaryNavigation
} from "@/content/v2-contract";
import {
  createInsightRegistry,
  getInsightBySlug,
  insightRecords
} from "@/content/insights";

const validInsight: InsightContract = {
  slug: "contract-fixture",
  title: "Contract fixture",
  description: "A neutral test-only Insight record.",
  contentType: "Research Note",
  publicationState: "DRAFT",
  relevantProblems: ["contract verification"],
  relevantCapabilities: ["decision-integrity"],
  proofClass: "RESEARCH"
};

test("canonical capabilities remain exactly the WP-A registry", () => {
  expect(getCanonicalCapabilities()).toEqual(canonicalCapabilities);
  expect(getCanonicalCapabilities()).toHaveLength(3);
  expect(getCanonicalCapabilities().map((capability) => capability.label)).toEqual([
    "Decision Integrity",
    "Organizational Memory",
    "Human–AI Accountability"
  ]);
  expect(getCanonicalCapabilityById("missing-capability")).toBeUndefined();
});

test("valid Insight records are immutable and searchable by slug", () => {
  const registry = createInsightRegistry([validInsight]);

  expect(Object.isFrozen(registry)).toBe(true);
  expect(Object.isFrozen(registry[0])).toBe(true);
  expect(getInsightBySlug("contract-fixture", registry)).toEqual(validInsight);
  expect(getInsightBySlug("missing-insight", registry)).toBeUndefined();
  expect(insightRecords).toHaveLength(0);
});

test("duplicate and malformed Insight slugs fail validation", () => {
  const invalidSlugs = ["", "UPPERCASE", "has space", "has/slash", "-leading", "trailing-"];

  for (const slug of invalidSlugs) {
    expect(() => createInsightRegistry([{ ...validInsight, slug }])).toThrow(
      /Invalid Insight slug/
    );
  }

  expect(() =>
    createInsightRegistry([
      validInsight,
      { ...validInsight, title: "Duplicate fixture" }
    ])
  ).toThrow(/Duplicate Insight slug/);
});

test("Insight capability references must use canonical capability IDs", () => {
  const invalidRecord = {
    ...validInsight,
    relevantCapabilities: ["not-a-capability"]
  } as unknown as InsightContract;

  expect(() => createInsightRegistry([invalidRecord])).toThrow(
    /Unknown canonical capability/
  );
});

test("adding an Insight does not change primary navigation", () => {
  const before = v2PrimaryNavigation.map((route) => route.canonicalPath);
  createInsightRegistry([validInsight, { ...validInsight, slug: "second-fixture" }]);
  const after = v2PrimaryNavigation.map((route) => route.canonicalPath);

  expect(after).toEqual(before);
  expect(after).toHaveLength(8);
});
