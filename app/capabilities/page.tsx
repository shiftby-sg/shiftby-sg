import Link from "next/link";
import type { Metadata } from "next";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./capabilities.module.css";

export const metadata: Metadata = getPageMetadata(
  pageMetadataEntries.capabilities
);

export default function CapabilitiesHubPage() {
  return (
    <div className={styles.page}>
      {/* 1. Hero: Enterprise Understanding */}
      <section aria-labelledby="capabilities-hub-title" className={`${styles.section} ${styles.hero}`}>
        <span className={styles.kicker}>The Transformation Outcome</span>
        <h1 className={styles.heroTitle} id="capabilities-hub-title">
          Enterprise Understanding through 3 complementary capabilities.
        </h1>

        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            &ldquo;Enterprise Understanding is the organizational ability to
            preserve, connect, retrieve, apply appropriately, and govern the
            context required to understand, decide, act, adapt, and remain
            accountable through change.&rdquo;
          </p>
          <p className={styles.quoteSource}>
            ShiftBy Doctrine on Enterprise Understanding
          </p>
        </div>

        <p className={styles.heroSubtitle}>
          Enterprise Understanding is the broader business transformation outcome.
          It is not a software product, single tool, or maturity ladder. ShiftBy has
          developed and practises three complementary capabilities that operate
          together to enable it:
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.buttonPrimary} href="/contact">
            Start a conversation →
          </Link>
          <Link className={styles.buttonSecondary} href="/services">
            View service engagements →
          </Link>
        </div>
      </section>

      {/* 2. The 3 Capabilities Grid */}
      <section aria-labelledby="capabilities-list-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Core Capabilities</span>
            <h2 className={styles.sectionTitle} id="capabilities-list-title">
              The three complementary capabilities.
            </h2>
            <p className={styles.sectionLead}>
              Each capability contributes a distinct, indispensable dimension to
              Enterprise Understanding. Their contributions are complementary, not interchangeable:
            </p>
          </div>

          <div className={styles.capabilityGrid}>
            {/* Capability 1: Organizational Memory */}
            <article className={styles.capabilityCard}>
              <div className={styles.capabilityHeader}>
                <span className={styles.capabilityBadge}>Knowledge Continuity</span>
                <h3 className={styles.capabilityName}>Organizational Memory</h3>
                <p className={styles.capabilityContribution}>
                  Continuity of understanding beyond individual memory.
                </p>
              </div>
              <p className={styles.capabilityBody}>
                Preserves relevant knowledge, connected relationships, provenance,
                prior state, uncertainty, and learning so that context remains
                recoverable through personnel changes, re-organizations, and system migrations.
              </p>
              <div className={styles.capabilityFooter}>
                <Link
                  className={styles.capabilityLink}
                  href="/capabilities/organizational-memory"
                >
                  Explore Organizational Memory →
                </Link>
              </div>
            </article>

            {/* Capability 2: Bounded AI */}
            <article className={styles.capabilityCard}>
              <div className={styles.capabilityHeader}>
                <span className={styles.capabilityBadge}>Alignment & Drift Reduction</span>
                <h3 className={styles.capabilityName}>Bounded AI</h3>
                <p className={styles.capabilityContribution}>
                  Reduced drift in AI-supported reasoning and execution.
                </p>
              </div>
              <p className={styles.capabilityBody}>
                Keeps AI tasks, autonomous agents, and coordinated workflows aligned
                with their intended purpose through prepared inputs, explicit reasoning
                guidance, validation gates, controlled progression, and cumulative resource caps.
              </p>
              <div className={styles.capabilityFooter}>
                <Link
                  className={styles.capabilityLink}
                  href="/capabilities/bounded-ai"
                >
                  Explore Bounded AI →
                </Link>
              </div>
            </article>

            {/* Capability 3: Human-AI Accountability */}
            <article className={styles.capabilityCard}>
              <div className={styles.capabilityHeader}>
                <span className={styles.capabilityBadge}>Governance & Oversight</span>
                <h3 className={styles.capabilityName}>Human–AI Accountability</h3>
                <p className={styles.capabilityContribution}>
                  Sustained human and organizational answerability for AI-enabled work.
                </p>
              </div>
              <p className={styles.capabilityBody}>
                Ensures that AI participation does not obscure who holds legitimate
                authority, what was reviewed, what evidence supported action, and
                who can intervene, pause, override, or accept residual operational risk.
              </p>
              <div className={styles.capabilityFooter}>
                <Link
                  className={styles.capabilityLink}
                  href="/capabilities/human-ai-accountability"
                >
                  Explore Human–AI Accountability →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Doctrinal Clarification: How They Operate Together */}
      <section aria-labelledby="interaction-title" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>Doctrinal Integration</span>
          <h2 className={styles.sectionTitle} id="interaction-title">
            How the capabilities operate together.
          </h2>
          <p className={styles.sectionLead}>
            The capabilities do not function as a sequential maturity ladder or
            competing silos. They operate as simultaneous conditions:
          </p>
        </div>

        <div className={styles.integrationGrid}>
          <div className={styles.integrationBlock}>
            <h3 className={styles.integrationTitle}>Memory Sustains Context</h3>
            <p className={styles.integrationText}>
              Organizational Memory provides the historical context, provenance,
              and semantic grounding needed for decisions and AI systems.
            </p>
          </div>

          <div className={styles.integrationBlock}>
            <h3 className={styles.integrationTitle}>Bounded AI Reduces Drift</h3>
            <p className={styles.integrationText}>
              Bounded AI ensures that when AI interprets, applies, or acts upon
              that context, it does not depart from agreed business boundaries.
            </p>
          </div>

          <div className={styles.integrationBlock}>
            <h3 className={styles.integrationTitle}>Accountability Cross-Cuts Both</h3>
            <p className={styles.integrationText}>
              Human–AI Accountability is not an afterthought or final check—it
              establishes legitimate ownership and oversight across both memory and AI.
            </p>
          </div>
        </div>

        {/* Note on Adaptive Execution */}
        <div className={styles.noteBox}>
          <h4 className={styles.noteTitle}>On Execution and Adaptation</h4>
          <p className={styles.noteText}>
            In ShiftBy doctrine, execution and adaptation are operational
            activities and business outcomes supported by the three capabilities,
            rather than a separate canonical capability. When memory, boundaries,
            and accountability are preserved, organizations can adapt execution
            rapidly without losing continuity or control.
          </p>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section aria-labelledby="hub-cta-title" className={styles.quietBand}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle} id="hub-cta-title">
            Ready to assess where these capabilities apply to your stack?
          </h2>
          <p className={styles.ctaSubtitle}>
            We work with enterprise teams through bounded advisory, control design,
            and testing engagements.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} href="/contact">
              Start a conversation →
            </Link>
            <Link className={styles.buttonSecondary} href="/services">
              View the service catalog →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
