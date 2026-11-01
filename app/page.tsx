import Link from "next/link";
import type { Metadata } from "next";

import { BrandLogo } from "@/components/BrandLogo";
import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./page.module.css";

export const metadata: Metadata = getPageMetadata(pageMetadataEntries.home);

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* ===================================================================
          VIEWPORT 1: THE HOOK (0–4s)
          Storyline: The Inevitable Reality
          =================================================================== */}
      <section aria-labelledby="hero-title" className={`${styles.section} ${styles.hero}`}>
        <BrandLogo className={styles.heroWatermark} size={580} />

        <div className={styles.heroContent}>
          <p className={styles.categoryDescriptor}>
            Executive Advisory &amp; AI Governance
          </p>
          <h1 className={styles.heroTitle} id="hero-title">
            <span className={styles.heroTitleLine}>Execution changes.</span>
            <span className={`${styles.heroTitleLine} ${styles.heroTitleAccent}`}>
              Understanding preserves confidence.
            </span>
          </h1>
          <p className={styles.heroLead}>
            Teams reorganize. Systems migrate. Autonomous AI accelerates work.
            Confidence does not come from freezing execution—it comes from preserving
            the understanding required to govern it.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} href="/contact">
              Schedule Scoping Call &rarr;
            </Link>
            <Link className={styles.buttonSecondary} href="/capabilities">
              Explore Capabilities &rarr;
            </Link>
          </div>

          <div className={styles.heroSignals} aria-label="Key Practice Indicators">
            <span className={styles.heroSignalItem}>
              <span className={styles.heroSignalDot} />
              3 Complementary Capabilities
            </span>
            <span className={styles.heroSignalItem}>
              <span className={styles.heroSignalDot} />
              7 Fixed-Boundary Services
            </span>
            <span className={styles.heroSignalItem}>
              <span className={styles.heroSignalDot} />
              30-Min Scoping &bull; Zero Sales Pressure
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          VIEWPORT 2: THE TRAP (4–8s)
          Storyline: Information vs. Understanding
          =================================================================== */}
      <section aria-labelledby="challenge-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>The Core Dilemma</span>
            <h2 className={styles.sectionTitle} id="challenge-title">
              Enterprises preserve artifacts. Understanding is what gets lost.
            </h2>
            <p className={styles.sectionSubtitle}>
              Even your most curated records, clean databases, and vector stores only show
              what happened. They do not preserve why it mattered:
            </p>
          </div>

          <div className={styles.contrastBox} aria-label="Artifacts versus Understanding comparison">
            <div className={styles.contrastColumn}>
              <div className={styles.contrastHeader}>
                <span className={styles.contrastBadgeSurvives}>Survives in Systems</span>
                <h3 className={styles.contrastTitle}>Artifacts &amp; Curated Records</h3>
              </div>
              <ul className={styles.contrastList}>
                <li className={`${styles.contrastItem} ${styles.contrastItemSurvives}`}>
                  Approved policy documents in repositories and wikis
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemSurvives}`}>
                  Deployed source code, pipelines, and model checkpoints
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemSurvives}`}>
                  System telemetry, execution logs, and vector embeddings
                </li>
              </ul>
            </div>

            <div className={styles.contrastColumn}>
              <div className={styles.contrastHeader}>
                <span className={styles.contrastBadgeLost}>Dissolves Over Time</span>
                <h3 className={styles.contrastTitle}>Organizational Understanding</h3>
              </div>
              <ul className={styles.contrastList}>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  Why the decision was approved and what trade-offs were rejected
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  Unstated assumptions, operating conditions, and fragile constraints
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  Who holds legitimate authority and answerability for the outcome
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.tensionQuoteBlock}>
            <p className={styles.tensionQuote}>
              &ldquo;Understanding is not information. It is the connected context that explains
              meaning, authority, evidence, and consequences.&rdquo;
            </p>
            <p className={styles.tensionSupport}>
              ShiftBy Doctrine on Enterprise Understanding
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          VIEWPORT 3: THE DANGER (8–12s)
          Storyline: When AI Meets Curated Data
          =================================================================== */}
      <section aria-labelledby="ai-danger-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>The Drift Catalyst</span>
          <h2 className={styles.sectionTitle} id="ai-danger-title">
            AI processes curated data. It does not possess understanding.
          </h2>
          <p className={styles.sectionSubtitle}>
            When autonomous agents and pipelines query clean data without explicit boundaries
            and context, they do not stop—they guess:
          </p>
        </div>

        <div className={styles.driftGrid}>
          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>01 / Retrieval Drift</span>
            <h3 className={styles.driftTitle}>Vector Similarity &ne; Truth</h3>
            <p className={styles.driftText}>
              Semantic search retrieves text by keyword proximity, not authority.
              Outdated proposals appear just as relevant as board-approved enterprise policy.
            </p>
          </article>

          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>02 / Reasoning Drift</span>
            <h3 className={styles.driftTitle}>Invisible Prompt Dogmas</h3>
            <p className={styles.driftText}>
              Hidden assumptions hardcoded in complex prompts quietly replace enterprise
              governance with plausible synthetic fiction.
            </p>
          </article>

          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>03 / Authority Drift</span>
            <h3 className={styles.driftTitle}>Diffused Human Authority</h3>
            <p className={styles.driftText}>
              As agents execute autonomously across APIs and tools, human oversight becomes
              nominal, obscuring who remains legally accountable.
            </p>
          </article>
        </div>
      </section>

      {/* ===================================================================
          VIEWPORT 4: THE ARCHITECTURE (12–17s)
          Storyline: The Three Complementary Capabilities
          =================================================================== */}
      <section aria-labelledby="capabilities-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>The Architecture</span>
            <h2 className={styles.sectionTitle} id="capabilities-title">
              Enterprise Understanding through 3 complementary capabilities.
            </h2>
            <p className={styles.sectionSubtitle}>
              Three interlocking disciplines that ensure institutional understanding survives
              technological change, personnel turnover, and agentic scaling:
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {/* Capability 1: Organizational Memory */}
            <article className={styles.capabilityCard}>
              <div className={styles.capabilityTop}>
                <span className={styles.capabilityBadge}>Knowledge Continuity</span>
                <h3 className={styles.capabilityName}>Organizational Memory</h3>
                <p className={styles.capabilityContribution}>
                  Continuity of understanding beyond individual memory.
                </p>
                <p className={styles.capabilityDescription}>
                  Preserves context, rationale, and provenance across personnel transitions and system migrations.
                </p>
                <ul className={styles.capabilityList}>
                  <li className={styles.capabilityListItem}>Reconstructable decision lineage</li>
                  <li className={styles.capabilityListItem}>Connected enterprise context graphs</li>
                  <li className={styles.capabilityListItem}>Context retention across handoffs</li>
                </ul>
              </div>
              <Link
                className={styles.capabilityLink}
                href="/capabilities/organizational-memory"
              >
                Explore Organizational Memory &rarr;
              </Link>
            </article>

            {/* Capability 2: Bounded AI */}
            <article className={styles.capabilityCard}>
              <div className={styles.capabilityTop}>
                <span className={styles.capabilityBadge}>Drift Reduction</span>
                <h3 className={styles.capabilityName}>Bounded AI</h3>
                <p className={styles.capabilityContribution}>
                  Constrained reasoning across tasks, agents &amp; workflows.
                </p>
                <p className={styles.capabilityDescription}>
                  Keeps AI workflows aligned by enforcing explicit boundaries for inputs, tools, reasoning, and costs.
                </p>
                <ul className={styles.capabilityList}>
                  <li className={styles.capabilityListItem}>Explicit reasoning &amp; tool boundaries</li>
                  <li className={styles.capabilityListItem}>Verified RAG retrieval grounding</li>
                  <li className={styles.capabilityListItem}>Multi-agent coordination safeguards</li>
                </ul>
              </div>
              <Link
                className={styles.capabilityLink}
                href="/capabilities/bounded-ai"
              >
                Explore Bounded AI &rarr;
              </Link>
            </article>

            {/* Capability 3: Human-AI Accountability */}
            <article className={styles.capabilityCard}>
              <div className={styles.capabilityTop}>
                <span className={styles.capabilityBadge}>Legitimate Authority</span>
                <h3 className={styles.capabilityName}>Human–AI Accountability</h3>
                <p className={styles.capabilityContribution}>
                  Sustained answerability and non-delegable oversight.
                </p>
                <p className={styles.capabilityDescription}>
                  Ensures human authority remains active with explicit intervention rights and inspectable audit evidence.
                </p>
                <ul className={styles.capabilityList}>
                  <li className={styles.capabilityListItem}>Non-delegable human decision rights</li>
                  <li className={styles.capabilityListItem}>Verifiable audit &amp; reliance trails</li>
                  <li className={styles.capabilityListItem}>Escalation &amp; kill-switch protocols</li>
                </ul>
              </div>
              <Link
                className={styles.capabilityLink}
                href="/capabilities/human-ai-accountability"
              >
                Explore Human–AI Accountability &rarr;
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================
          VIEWPORT 5: ENGAGEMENTS & RELEVANCE (17–21s)
          Storyline: Concrete Service Offerings
          =================================================================== */}
      <section aria-labelledby="services-preview-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>Defined Engagements</span>
          <h2 className={styles.sectionTitle} id="services-preview-title">
            Fixed-boundary advisory, diagnostics, and assurance.
          </h2>
          <p className={styles.sectionSubtitle}>
            Seven structured service offerings with explicit deliverables, clear boundaries,
            and fixed-scope engagement models:
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Knowledge &amp; Context Architecture</h3>
            </div>
            <p className={styles.breakdownText}>
              Forensic diagnostics of context decay and enterprise retrieval pipelines.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>Knowledge &amp; Context Architecture Assessment</li>
              <li>RAG &amp; Enterprise Retrieval Assessment</li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Bounded AI Advisory</h3>
            </div>
            <p className={styles.breakdownText}>
              Setting runtime reasoning boundaries and tool permissions for multi-agent systems.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>Bounded AI &amp; Multi-Agent Workflow Design</li>
              <li>Context Drift &amp; Diagnostic Investigation</li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Governance &amp; Human Oversight</h3>
            </div>
            <p className={styles.breakdownText}>
              Designing legitimate authority structures and non-delegable accountability protocols.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>AI Governance &amp; Human Oversight Architecture</li>
              <li>Enterprise Understanding Executive Advisory</li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Assurance &amp; Red Teaming</h3>
            </div>
            <p className={styles.breakdownText}>
              Stress-testing boundaries against prompt injection, drift, and regulatory failure.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>AI Assurance &amp; Adversarial Red Teaming</li>
              <li>Continuous Evaluation &amp; Retesting Protocols</li>
            </ul>
          </article>
        </div>

        <div style={{ marginTop: "2.25rem" }}>
          <Link className={styles.buttonSecondary} href="/services">
            Browse All 7 Service Offerings &rarr;
          </Link>
        </div>
      </section>

      {/* ===================================================================
          VIEWPORT 6: THE RESOLUTION (21–25s)
          Storyline: Zero-Friction Conversion Protocol
          =================================================================== */}
      <section aria-labelledby="first-call-title" className={styles.conversionSection}>
        <div className={styles.conversionHeader}>
          <span className={styles.kicker}>Evaluation Protocol</span>
          <h2 className={styles.sectionTitle} id="first-call-title">
            Start with the question, not a sales pitch.
          </h2>
          <p className={styles.sectionSubtitle}>
            A predictable, zero-pressure evaluation process designed to respect your time
            and establish immediate clarity:
          </p>
        </div>

        <div className={styles.timelineGrid}>
          <div className={styles.timelineStep}>
            <span className={styles.stepNumber}>1</span>
            <h3 className={styles.stepTitle}>30-Minute Context Call</h3>
            <p className={styles.stepDescription}>
              Direct conversation with founder Ananda Krishna (AIGP). We discuss your current state,
              systems at risk, and specific operational questions. No generic slides or junior triage.
            </p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNumber}>2</span>
            <h3 className={styles.stepTitle}>48-Hour Boundary Outline</h3>
            <p className={styles.stepDescription}>
              Within 48 hours, you receive a scoped summary of potential engagement boundaries,
              required authorizations, and expected concrete outputs.
            </p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNumber}>3</span>
            <h3 className={styles.stepTitle}>Agreed Plan or Direct Referral</h3>
            <p className={styles.stepDescription}>
              If there is mutual alignment, work begins under an agreed fixed boundary. If another
              specialist partner or internal route is better suited, we point you there directly.
            </p>
          </div>
        </div>

        <div className={styles.conversionCtaWrapper}>
          <p className={styles.conversionCtaText}>
            Ready to establish boundaries and preserve understanding in your organization?
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link className={styles.buttonPrimary} href="/contact">
              Schedule Scoping Call &rarr;
            </Link>
            <Link className={styles.buttonSecondary} href="/resources">
              Read Executive Briefs &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
