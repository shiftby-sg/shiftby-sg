import type { Metadata } from "next";

import { CapabilityDetailLayout } from "@/components/capabilities/CapabilityDetailLayout";
import styles from "@/components/capabilities/capability.module.css";
import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata(
  pageMetadataEntries.organizationalMemory
);

const relatedServices = [
  {
    title: "AI Knowledge & Context Architecture",
    description:
      "Assess or design how defined knowledge domains preserve meaning, relationships, provenance, and historical state across transitions.",
    href: "/services#ai-knowledge-context-architecture"
  },
  {
    title: "RAG & Enterprise Retrieval Assessment",
    description:
      "Evaluate source suitability, data freshness, permissions, and answer grounding to prevent corrupted or stale AI responses.",
    href: "/services#rag-retrieval-assessment"
  }
];

export default function OrganizationalMemoryPage() {
  return (
    <CapabilityDetailLayout
      ctaSubtitle="If critical context is at risk during team changes or AI adoption, begin with a focused discovery call."
      ctaTitle="Preserve the context that makes your enterprise knowledge usable"
      currentSlug="organizational-memory"
      formalQuote="Organizational Memory is the organizational capability to preserve, connect, recover, distinguish, and responsibly reuse significant knowledge, context, relationships, provenance, prior state, uncertainty, and learning so continuity of organizational understanding can be maintained across time and change."
      formalQuoteTag="ShiftBy Capability Definition: Organizational Memory"
      kicker="Capability / Knowledge Continuity"
      relatedServices={relatedServices}
      subtitle="Organizations preserve documents and repositories, yet the rationale that makes those records usable is often distributed across people, informal conversations, prior states, and unrecorded exceptions. ShiftBy helps organizations sustain continuity of understanding beyond individual memory."
      title="Organizational Memory"
    >
      {/* 1. The Organizational Problem */}
      <section aria-labelledby="problem-heading" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>The Organizational Problem</span>
            <h2 className={styles.sectionTitle} id="problem-heading">
              Records remain while meaning fades.
            </h2>
            <p className={styles.sectionLead}>
              Organizations preserve tickets, policies, dashboards, and codebases.
              Yet future teams cannot recover why a decision was made, what trade-offs
              were accepted, or what dependencies remain hidden:
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Repeated Rediscovery</h3>
              <p className={styles.cardBody}>
                Valuable experience and past lessons are lost when individuals leave,
                forcing successor teams to repeatedly reconstruct identical solutions from scratch.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Separation of Artifacts from Context</h3>
              <p className={styles.cardBody}>
                Formal specifications capture what exists, but omit the operational
                exceptions, edge-case workarounds, and rejected alternatives that give systems meaning.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Stale Context in AI Systems</h3>
              <p className={styles.cardBody}>
                When AI models and RAG pipelines ingest uncurated or superseded context,
                they generate plausible answers with outdated or invalid premises.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Vulnerability During Transitions</h3>
              <p className={styles.cardBody}>
                During supplier handovers, re-organizations, or system migrations,
                continuity breaks at the seam where personal memory ends.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 2. The Meaningful State Model */}
      <section aria-labelledby="state-model-heading" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>State Integrity</span>
          <h2 className={styles.sectionTitle} id="state-model-heading">
            Preserving distinct knowledge states.
          </h2>
          <p className={styles.sectionLead}>
            A mature Organizational Memory does not treat all text equally. It
            strictly maintains the boundaries between different operational states:
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Contemporaneous vs. Reconstructed</span>
            <h3 className={styles.mechanismTitle}>Preserving State Lineage</h3>
            <p className={styles.cardBody}>
              Later interpretation may update current understanding, but must
              not silently rewrite what was previously recorded. A retrospective
              reconstruction must remain explicitly identified as a reconstruction.
            </p>
          </article>

          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Uncertainty Visibility</span>
            <h3 className={styles.mechanismTitle}>Making Unknowns Explicit</h3>
            <p className={styles.cardBody}>
              Superseded, provisional, disputed, and unresolved findings must remain
              visible rather than being silently converted into verified facts or approved rationale.
            </p>
          </article>

          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Semantic Relationships</span>
            <h3 className={styles.mechanismTitle}>Connected Context</h3>
            <p className={styles.cardBody}>
              Information is connected through explicit relationships (decisions,
              evidence, owners, and dependencies) rather than superficial keyword proximity.
            </p>
          </article>
        </div>
      </section>

      {/* 3. When the Capability Matters */}
      <section aria-labelledby="triggers-heading" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Applicability</span>
            <h2 className={styles.sectionTitle} id="triggers-heading">
              Situations where this capability matters most.
            </h2>
            <p className={styles.sectionLead}>
              Organizational Memory becomes critical during specific inflection points:
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <article className={styles.card}>
              <span className={styles.scenarioTag}>Inflection Point 1</span>
              <h3 className={styles.cardTitle}>Key Personnel & Supplier Transitions</h3>
              <p className={styles.cardBody}>
                When architects or vendors transfer responsibilities, preserving
                the &ldquo;why&rdquo; prevents operational disruptions and costly rework.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.scenarioTag}>Inflection Point 2</span>
              <h3 className={styles.cardTitle}>Autonomous Agent Handoffs</h3>
              <p className={styles.cardBody}>
                Long-running agents and multi-agent workflows require reliable,
                uncompromised historical context to ensure subsequent actions remain grounded.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.scenarioTag}>Inflection Point 3</span>
              <h3 className={styles.cardTitle}>Regulatory & Post-Incident Audit</h3>
              <p className={styles.cardBody}>
                Recovering contemporaneous evidence and decision paths during
                compliance examinations or cybersecurity breach reviews.
              </p>
            </article>
          </div>
        </div>
      </section>
    </CapabilityDetailLayout>
  );
}
