import type { Metadata } from "next";

import { CapabilityDetailLayout } from "@/components/capabilities/CapabilityDetailLayout";
import styles from "@/components/capabilities/capability.module.css";
import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata(
  pageMetadataEntries.humanAiAccountability
);

const relatedServices = [
  {
    title: "AI Governance & Human-Oversight Architecture",
    description:
      "Assess or design decision-rights maps, legitimate authority, review conditions, and practical intervention capabilities for AI-supported work.",
    href: "/services#ai-governance-human-oversight"
  },
  {
    title: "AI Assurance & Evidence Review",
    description:
      "Review the connections among requirements, controls, test evidence, decisions, and outcomes to support defensible reliance decisions.",
    href: "/services#ai-assurance-evidence-review"
  }
];

export default function HumanAiAccountabilityPage() {
  return (
    <CapabilityDetailLayout
      ctaSubtitle="Establish legitimate authority, meaningful human oversight, and verifiable assurance across your AI initiatives."
      ctaTitle="Sustain human and organizational answerability throughout AI use"
      currentSlug="human-ai-accountability"
      formalQuote="Human–AI Accountability is the organizational capability to assign, preserve, exercise, evidence, review, challenge, and adapt explicit human and organizational responsibility and authority throughout AI-enabled work, across people, systems, suppliers, decisions, policies, controls, lifecycle changes, incidents, and outcomes."
      formalQuoteTag="ShiftBy Capability Definition: Human–AI Accountability"
      kicker="Capability / Governance & Oversight"
      relatedServices={relatedServices}
      subtitle="AI participation can obscure who made a decision, what was reviewed, what evidence supported action, and who remains answerable. ShiftBy ensures that human and organizational responsibility remains explicit, legitimate, and evidenced throughout AI-enabled execution."
      title="Human–AI Accountability"
    >
      {/* 1. Core Distinctions */}
      <section aria-labelledby="distinctions-heading" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Conceptual Integrity</span>
            <h2 className={styles.sectionTitle} id="distinctions-heading">
              Preserving essential governance distinctions.
            </h2>
            <p className={styles.sectionLead}>
              Human–AI Accountability avoids the confusion between automation,
              delegation, and authority by enforcing distinct operational concepts:
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Responsibility vs. Accountability</h3>
              <p className={styles.cardBody}>
                Responsibility is the duty to perform work or review outputs.
                Accountability is the non-transferable obligation to answer for
                resulting business and legal consequences.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Permission vs. Authority</h3>
              <p className={styles.cardBody}>
                Technical access (an API key, IAM role, or tool execution token)
                demonstrates how work was enabled; it does not establish
                legitimate organizational authority or risk-acceptance rights.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Delegation vs. Abdication</h3>
              <p className={styles.cardBody}>
                Assigning an analysis or draft to an AI system does not silently
                transfer organizational accountability. The human owner retains
                stewardship of the business outcome.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Oversight vs. Assurance</h3>
              <p className={styles.cardBody}>
                Oversight is ongoing, informed supervision and intervention.
                Assurance is evidence-based evaluation of whether controls and
                accountability arrangements operate as intended.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 2. What the Capability Establishes */}
      <section aria-labelledby="principles-heading" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>Oversight in Practice</span>
          <h2 className={styles.sectionTitle} id="principles-heading">
            What the capability establishes in practice.
          </h2>
          <p className={styles.sectionLead}>
            Effective accountability requires more than high-level policies. It
            establishes actionable operating arrangements:
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Governance Pillar 1</span>
            <h3 className={styles.mechanismTitle}>Explicit Decision Rights & Risk Ownership</h3>
            <p className={styles.cardBody}>
              Mapping exactly who authorizes AI participation, who accepts
              residual operational risk, and who can pause or revoke delegated
              execution across internal teams and suppliers.
            </p>
          </article>

          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Governance Pillar 2</span>
            <h3 className={styles.mechanismTitle}>Meaningful Human Oversight</h3>
            <p className={styles.cardBody}>
              Ensuring reviewers have the domain competence, necessary information,
              sufficient time, and practical authority to challenge, reject, or
              override AI outputs rather than rubber-stamping results.
            </p>
          </article>

          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Governance Pillar 3</span>
            <h3 className={styles.mechanismTitle}>Decision & Evidence Traceability</h3>
            <p className={styles.cardBody}>
              Connecting requirements, controls, test evidence, review records,
              and resulting actions so that consequential outcomes can be
              defensibly reconstructed during internal audits or regulatory review.
            </p>
          </article>

          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Governance Pillar 4</span>
            <h3 className={styles.mechanismTitle}>Intervention & Remedy Paths</h3>
            <p className={styles.cardBody}>
              Establishing explicit stopping conditions, escalation triggers, and
              remedy procedures when an AI system encounters uncertainty, conflicting
              evidence, or operational failure.
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
              Situations where accountability must be strengthened.
            </h2>
            <p className={styles.sectionLead}>
              Human–AI Accountability is particularly critical in these scenarios:
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <article className={styles.card}>
              <span className={styles.scenarioTag}>Scenario 1</span>
              <h3 className={styles.cardTitle}>Consequential Decisions Influenced by AI</h3>
              <p className={styles.cardBody}>
                When AI recommendations inform financial, security, compliance, or
                customer outcomes where regulators or auditors expect verifiable human oversight.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.scenarioTag}>Scenario 2</span>
              <h3 className={styles.cardTitle}>Multi-Supplier & Third-Party AI Models</h3>
              <p className={styles.cardBody}>
                Clarifying who owns protection requirements, access boundaries, and
                liability when proprietary data moves across third-party LLM providers.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.scenarioTag}>Scenario 3</span>
              <h3 className={styles.cardTitle}>Audit & Regulatory Examination</h3>
              <p className={styles.cardBody}>
                Demonstrating compliance with frameworks such as the EU AI Act,
                NIST AI RMF, and ISO 42001 through auditable control evidence rather
                than verbal assertions.
              </p>
            </article>
          </div>
        </div>
      </section>
    </CapabilityDetailLayout>
  );
}
