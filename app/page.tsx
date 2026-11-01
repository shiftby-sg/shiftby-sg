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
          Storyline: The Enduring Reality
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
            Teams reorganize. Systems migrate. Now, AI accelerates tasks and workflows.
            Confidence has never come from freezing how work gets done—it comes from preserving
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
              30-Min Diagnostic Scoping
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          VIEWPORT 2: THE ROOT PROBLEM (4–8s)
          Storyline: Information vs. Understanding
          =================================================================== */}
      <section aria-labelledby="challenge-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>The Root Problem</span>
            <h2 className={styles.sectionTitle} id="challenge-title">
              Organizations preserve records. Understanding is what fades.
            </h2>
            <p className={styles.sectionSubtitle}>
              Long before AI, enterprises struggled with the same pattern: systems retain files,
              tickets, and data, but the context connecting decisions, trade-offs, and authority
              quietly dissolves when teams change:
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
                  Deployed source code, configurations, and pipeline checkpoints
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemSurvives}`}>
                  System telemetry, execution logs, and curated vector stores
                </li>
              </ul>
            </div>

            <div className={styles.contrastColumn}>
              <div className={styles.contrastHeader}>
                <span className={styles.contrastBadgeLost}>Fades Over Time</span>
                <h3 className={styles.contrastTitle}>Organizational Understanding</h3>
              </div>
              <ul className={styles.contrastList}>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  Why a specific trade-off was accepted over competing alternatives
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  Unstated assumptions, operating conditions, and fragile constraints
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  Who holds legitimate authority and answerability when things break
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
          VIEWPORT 3: THE ACCELERATION (8–12s)
          Storyline: AI Exposes the Context Gap at Scale
          =================================================================== */}
      <section aria-labelledby="ai-danger-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>The Acceleration</span>
          <h2 className={styles.sectionTitle} id="ai-danger-title">
            AI did not create the context gap. It exposes it at scale.
          </h2>
          <p className={styles.sectionSubtitle}>
            When work was manual, informal human conversations masked missing documentation.
            When AI models and multi-step workflows execute across systems, they cannot rely on
            hallway chats—they fill the gaps with plausible guesswork:
          </p>
        </div>

        <div className={styles.driftGrid}>
          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>01 / Retrieval Drift</span>
            <h3 className={styles.driftTitle}>Retrieval Without Authority</h3>
            <p className={styles.driftText}>
              Semantic search retrieves text by keyword proximity, not enterprise status.
              Outdated proposals appear just as relevant as active board-approved policy.
            </p>
          </article>

          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>02 / Reasoning Drift</span>
            <h3 className={styles.driftTitle}>Unbounded Workflow Inference</h3>
            <p className={styles.driftText}>
              When models or multi-step agentic chains encounter ambiguity between steps,
              they bridge it with statistical plausibility instead of enterprise policy.
            </p>
          </article>

          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>03 / Authority Drift</span>
            <h3 className={styles.driftTitle}>Diffused Human Responsibility</h3>
            <p className={styles.driftText}>
              As automated workflows touch more systems, human oversight becomes passive,
              blurring who is actually answerable to auditors and regulators.
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
            <span className={styles.kicker}>The Three Disciplines</span>
            <h2 className={styles.sectionTitle} id="capabilities-title">
              Enterprise Understanding through 3 complementary capabilities.
            </h2>
            <p className={styles.sectionSubtitle}>
              We don&apos;t offer a silver bullet or a promise of risk-free automation.
              We help organizations establish the boundaries and continuity needed to reduce drift:
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
                  Preserves rationale, provenance, and decision lineage so knowledge survives personnel turnover and system upgrades.
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
                  Reduced drift across tasks, workflows &amp; tool calls.
                </p>
                <p className={styles.capabilityDescription}>
                  Establishes explicit boundaries for inputs, reasoning responsibilities, tool access, and resource caps.
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
                  Sustained human &amp; organizational answerability.
                </p>
                <p className={styles.capabilityDescription}>
                  Ensures legitimate human authority, active intervention rights, and inspectable audit trails remain non-delegable.
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
          VIEWPORT 5: STRUCTURED PRACTICE (17–21s)
          Storyline: Defined Service Offerings
          =================================================================== */}
      <section aria-labelledby="services-preview-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>Structured Practice</span>
          <h2 className={styles.sectionTitle} id="services-preview-title">
            Defined advisory, diagnostic, and assurance engagements.
          </h2>
          <p className={styles.sectionSubtitle}>
            Rather than open-ended consulting retainers, ShiftBy delivers 7 structured,
            fixed-boundary services:
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Knowledge &amp; Context Architecture</h3>
            </div>
            <p className={styles.breakdownText}>
              Diagnosing context decay and evaluating enterprise retrieval suitability.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>Knowledge &amp; Context Architecture Assessment</li>
              <li>RAG &amp; Enterprise Retrieval Assessment</li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Bounded Workflow Design</h3>
            </div>
            <p className={styles.breakdownText}>
              Setting explicit reasoning and tool-calling boundaries for AI tasks and multi-agent chains.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>Bounded AI &amp; Multi-Agent Workflow Design</li>
              <li>Context Drift &amp; Diagnostic Investigation</li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Governance &amp; Oversight Architecture</h3>
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
              <h3 className={styles.serviceClusterTitle}>AI Assurance &amp; Boundary Testing</h3>
            </div>
            <p className={styles.breakdownText}>
              Stress-testing system boundaries against drift, prompt manipulation, and policy non-conformance.
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
          VIEWPORT 6: THE EVALUATION PROTOCOL (21–25s)
          Storyline: Zero-Friction Conversion Protocol
          =================================================================== */}
      <section aria-labelledby="first-call-title" className={styles.conversionSection}>
        <div className={styles.conversionHeader}>
          <span className={styles.kicker}>First Step</span>
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
            <h3 className={styles.stepTitle}>30-Minute Context Discussion</h3>
            <p className={styles.stepDescription}>
              Direct conversation with founder Ananda Krishna (AIGP) to examine your current friction,
              systems at risk, and operating boundaries. No generic slides or junior triage.
            </p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNumber}>2</span>
            <h3 className={styles.stepTitle}>Scoped Boundary Outline</h3>
            <p className={styles.stepDescription}>
              Within 48 hours, you receive a scoped summary of potential engagement boundaries,
              required authorizations, and expected concrete outputs.
            </p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNumber}>3</span>
            <h3 className={styles.stepTitle}>Agreed Scope or Direct Referral</h3>
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
