import {
  getCanonicalCapabilityById,
  type InsightContract
} from "@/content/v2-contract";

export type InsightRecord = InsightContract;

export const insightSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function freezeInsightRecord(record: InsightRecord): InsightRecord {
  return Object.freeze({
    ...record,
    relevantProblems: Object.freeze([...record.relevantProblems]),
    relevantCapabilities: Object.freeze([...record.relevantCapabilities])
  });
}

export function validateInsightRecords(
  records: readonly InsightRecord[]
): void {
  const seenSlugs = new Set<string>();

  for (const record of records) {
    if (!insightSlugPattern.test(record.slug)) {
      throw new Error(`Invalid Insight slug: ${record.slug}`);
    }

    if (seenSlugs.has(record.slug)) {
      throw new Error(`Duplicate Insight slug: ${record.slug}`);
    }

    seenSlugs.add(record.slug);

    for (const capabilityId of record.relevantCapabilities) {
      if (!getCanonicalCapabilityById(capabilityId)) {
        throw new Error(
          `Unknown canonical capability for Insight ${record.slug}: ${capabilityId}`
        );
      }
    }
  }
}

export function createInsightRegistry(
  records: readonly InsightRecord[]
): readonly InsightRecord[] {
  validateInsightRecords(records);
  return Object.freeze(records.map(freezeInsightRecord));
}

// WP-B intentionally carries no invented production Insight copy.
export const insightRecords = createInsightRegistry([]);

export function getInsightBySlug(
  slug: string,
  registry: readonly InsightRecord[] = insightRecords
): InsightRecord | undefined {
  return registry.find((record) => record.slug === slug);
}
