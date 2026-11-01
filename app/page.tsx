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
            Executive Advisory · Distributed Execution &amp; AI
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
          VIEWPORT 2: THE STORAGE TRAP (4–8s)
          Storyline: Information vs. Understanding
          =================================================================== */}
      <section aria-labelledby="challenge-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>The Storage Trap</span>
            <h2 className={styles.sectionTitle} id="challenge-title">
              Enterprises store records. Understanding is what fades.
            </h2>
            <p className={styles.sectionSubtitle}>
              Storing more documentation does not solve the problem—it simply creates
              static records that preserve what happened, but lose the living rationale behind it. Systems preserve artifacts, but context dissolves:
            </p>
          </div>

          <div className={styles.contrastBox} aria-label="Stored Artifacts versus Understanding comparison">
            <div className={styles.contrastColumn}>
              <div className={styles.contrastHeader}>
                <span className={styles.contrastBadgeSurvives}>Survives in Enterprise Systems</span>
                <h3 className={styles.contrastTitle}>Business Data &amp; Stored Artifacts</h3>
              </div>
              <ul className={styles.contrastList}>
                <li className={`${styles.contrastItem} ${styles.contrastItemSurvives}`}>
                  ERP batch logs, supplier records, and lakehouse master data
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemSurvives}`}>
                  Compliance registers, audit inspection files, and signed policies
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemSurvives}`}>
                  Curated vector stores, API schemas, and pipeline logs
                </li>
              </ul>
            </div>

            <div className={styles.contrastColumn}>
              <div className={styles.contrastHeader}>
                <span className={styles.contrastBadgeLost}>Fades Across Transitions</span>
                <h3 className={styles.contrastTitle}>Systemic Context &amp; Intent</h3>
              </div>
              <ul className={styles.contrastList}>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  Why a supplier substitution, material variance, or operational waiver was approved
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  The unstated regulatory, safety, and operating assumptions under which data remains valid
                </li>
                <li className={`${styles.contrastItem} ${styles.contrastItemLost}`}>
                  Who holds legitimate authority and answerability when exceptions or failures occur
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
          VIEWPORT 3: THE UNDERSTANDING PARADOX (8–12s)
          Storyline: If Humans Cannot Understand, How Will AI?
          =================================================================== */}
      <section aria-labelledby="ai-danger-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>The Understanding Paradox</span>
          <h2 className={styles.sectionTitle} id="ai-danger-title">
            If domain experts cannot reconstruct the context, AI will not infer it either.
          </h2>
          <p className={styles.sectionSubtitle}>
            Understanding has always degraded across human handoffs and system migrations. AI did
            not create this breakdown—it inherits the context gap and amplifies it at machine speed:
          </p>
        </div>

        <div className={styles.driftGrid}>
          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>01 / An Enduring Problem</span>
            <h3 className={styles.driftTitle}>Context Has Always Faded</h3>
            <p className={styles.driftText}>
              Long before AI, organizations struggled with context loss. When staff leave or systems
              migrate, enterprise systems preserve recorded transactions, but the human rationale
              that validated them vanishes.
            </p>
          </article>

          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>02 / The AI Illusion</span>
            <h3 className={styles.driftTitle}>AI Cannot Infer What Humans Lost</h3>
            <p className={styles.driftText}>
              If domain experts cannot reconstruct why a decision was made from stored records, an AI
              model cannot either. It substitutes statistical plausibility for true understanding.
            </p>
          </article>

          <article className={styles.driftCard}>
            <span className={styles.driftIndex}>03 / The Amplification</span>
            <h3 className={styles.driftTitle}>Machine Speed Multiplies Drift</h3>
            <p className={styles.driftText}>
              Humans hesitate or ask when context is missing. Automated AI workflows execute with
              unwavering confidence at scale—silently compounding unverified assumptions across systems.
            </p>
          </article>
        </div>
      </section>

      {/* ===================================================================
          VIEWPORT 4: THE ARCHITECTURE (12–17s)
          Storyline: Connect, Bound, and Govern
          =================================================================== */}
      <section aria-labelledby="capabilities-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>The Three Disciplines</span>
            <h2 className={styles.sectionTitle} id="capabilities-title">
              Understanding cannot be archived or automated away. It must be connected, bounded, and governed.
            </h2>
            <p className={styles.sectionSubtitle}>
              Sustaining capability through change requires more than accumulating documentation or relying
              on automated workflows. ShiftBy establishes three interlocking disciplines
              that keep enterprise execution grounded:
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
                  Connects rationale and decision lineage directly to enterprise data so knowledge survives personnel turnover and system migrations.
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
                  Enforces explicit operational boundaries on inputs, reasoning responsibilities, tool calls, and costs so models cannot drift.
                </p>
                <ul className={styles.capabilityList}>
                  <li className={styles.capabilityListItem}>Explicit reasoning &amp; tool boundaries</li>
                  <li className={styles.capabilityListItem}>Verified operational context grounding</li>
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
                  Ensures legitimate human authority, active intervention rights, and audit trails remain non-delegable.
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
              Diagnosing context decay and structuring knowledge for lasting operational reuse.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>
                <Link href="/services#ai-knowledge-context-architecture">
                  AI Knowledge &amp; Context Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#rag-retrieval-assessment">
                  Enterprise Retrieval &amp; Grounding Assessment
                </Link>
              </li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Bounded Workflow Design</h3>
            </div>
            <p className={styles.breakdownText}>
              Setting explicit operational, reasoning, and tool boundaries for AI tasks and workflows.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>
                <Link href="/services#ai-task-agent-workflow-advisory">
                  AI Task, Agent &amp; Workflow Advisory
                </Link>
              </li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Governance &amp; Oversight Architecture</h3>
            </div>
            <p className={styles.breakdownText}>
              Establishing legitimate authority structures and defensible reliance evidence.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>
                <Link href="/services#ai-governance-human-oversight">
                  AI Governance &amp; Human Oversight
                </Link>
              </li>
              <li>
                <Link href="/services#ai-assurance-evidence-review">
                  AI Assurance &amp; Evidence Review
                </Link>
              </li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Security &amp; Operational Reliability</h3>
            </div>
            <p className={styles.breakdownText}>
              Stress-testing trust boundaries and measuring behavioral drift across system changes.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>
                <Link href="/services#ai-security-red-teaming">
                  AI Security Assessment &amp; Red Teaming
                </Link>
              </li>
              <li>
                <Link href="/services#ai-evaluation-continuous-retesting">
                  AI Evaluation &amp; Continuous Retesting
                </Link>
              </li>
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
              Direct conversation with founder Ananda Krishna (AIGP) to examine where context is fading,
              workflows experiencing drift, or boundaries needing definition. Direct peer advisory with zero sales decks or intermediate hand-offs.
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
            Have a specific workflow, context transition, or AI deployment to evaluate?
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
