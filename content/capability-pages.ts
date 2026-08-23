import {
  canonicalCapabilities,
  type CapabilityId
} from "@/content/v2-contract";

export type CapabilityPageContent = {
  purpose: string;
  problem: string;
  meaning: string;
  relevance: string;
  boundary: string;
  examples: readonly string[];
};

export const capabilityPageContent: Record<CapabilityId, CapabilityPageContent> = {
  "decision-integrity": {
    purpose: "Keep consequential decisions explainable as conditions, evidence and authority change.",
    problem: "A decision can remain visible while its rationale, assumptions, approvals, dependencies or supporting evidence become difficult to reconstruct.",
    meaning: "Decision Integrity connects intent, rationale, assumptions, evidence, authority, divergence and decision context so leaders can reassess what remains valid.",
    relevance: "It matters where decisions persist across teams, systems, suppliers, automation or AI and where material change may require intervention or a new decision.",
    boundary: "Decision Integrity is not a logging or audit-trail exercise. It does not guarantee that a decision remains correct; it helps make the basis for reassessment visible.",
    examples: [
      "Reconstructing the evidence and assumptions behind a long-lived decision.",
      "Making material divergence visible before downstream execution continues.",
      "Clarifying what should be reassessed when context or authority changes."
    ]
  },
  "organizational-memory": {
    purpose: "Keep important knowledge usable as people, systems, practices and operating conditions change.",
    problem: "Artifacts can survive while provenance, context, relationships and interpretation fragment through turnover, system change or reuse.",
    meaning: "Organizational Memory preserves continuity, provenance, relationships and changing context so knowledge remains attributable and fit for use.",
    relevance: "It matters where teams need reliable context across organizational change, distributed work and AI-assisted reuse.",
    boundary: "Organizational Memory is not a storage, RAG, vector or search implementation. Technical mechanisms are subordinate to whether meaning and context remain usable.",
    examples: [
      "Reconnecting knowledge to the people, decisions and context that shaped it.",
      "Identifying stale or superseded context before it is reused.",
      "Preserving continuity when roles, systems or operating models change."
    ]
  },
  "human-ai-accountability": {
    purpose: "Keep authority, ownership and intervention visible when humans and AI participate in execution together.",
    problem: "Responsibility becomes harder to explain when decisions, delegated action, evidence, review and escalation cross people, AI and systems.",
    meaning: "Human–AI Accountability makes legitimate authority, ownership, oversight, intervention, escalation and evidence explicit across the work.",
    relevance: "It matters where AI-assisted or agentic execution can act, persist, hand off work or affect consequential decisions.",
    boundary: "Human–AI Accountability is not generic human-in-the-loop approval. It does not make responsibility ownerless or replace the organization’s authority to decide.",
    examples: [
      "Clarifying who owns a decision when AI contributes analysis or action.",
      "Making review, intervention and escalation conditions explicit.",
      "Connecting evidence and authority across human–AI handoffs."
    ]
  }
} as const;

export function getCapabilityPageContent(id: CapabilityId): CapabilityPageContent {
  return capabilityPageContent[id];
}

export const capabilityPageIds = canonicalCapabilities.map(
  (capability) => capability.id
);
