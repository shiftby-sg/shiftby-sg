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
          1. HERO VIEWPORT (3–5 Second Signal: What is ShiftBy & Core Thesis)
          =================================================================== */}
      <section aria-labelledby="hero-title" className={`${styles.section} ${styles.hero}`}>
        <BrandLogo className={styles.heroWatermark} size={580} />

        <div className={styles.heroContent}>
          <p className={styles.categoryDescriptor}>
            Executive Advisory &amp; AI Governance Practice
          </p>
          <h1 className={styles.heroTitle} id="hero-title">
            <span className={styles.heroTitleLine}>Execution changes.</span>
            <span className={`${styles.heroTitleLine} ${styles.heroTitleAccent}`}>
              Understanding preserves confidence.
            </span>
          </h1>
          <p className={styles.heroLead}>
            As AI workflows, autonomous agents, and digital transformations accelerate execution,
            organizations lose the rationale behind critical decisions. ShiftBy establishes the
            structured memory, operational boundaries, and human accountability needed to govern
            and scale with confidence.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} href="/contact">
              Start a Conversation &rarr;
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
              7 Defined Advisory Services
            </span>
            <span className={styles.heroSignalItem}>
              <span className={styles.heroSignalDot} />
              30-Min Scoping &bull; Zero Sales Pressure
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. THE TENSION (3–5 Second Signal: The Core Dilemma Executives Feel)
          =================================================================== */}
      <section aria-labelledby="challenge-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>The Executive Dilemma</span>
            <h2 className={styles.sectionTitle} id="challenge-title">
              Organizations preserve artifacts. Understanding is harder to preserve.
            </h2>
            <p className={styles.sectionSubtitle}>
              Enterprises retain tickets, logs, code, and documents. Yet when a key decision
              or AI output is challenged months later, the underlying context has dissolved:
            </p>
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

          <div className={styles.breakdownGrid}>
            <article className={styles.breakdownCard}>
              <h3 className={styles.breakdownTitle}>Context Decay</h3>
              <p className={styles.breakdownText}>
                When key leaders rotate or systems migrate, the rationale, trade-offs, and
                rejected alternatives vanish from organizational memory.
              </p>
            </article>

            <article className={styles.breakdownCard}>
              <h3 className={styles.breakdownTitle}>Invisible Prompt Dogmas</h3>
              <p className={styles.breakdownText}>
                Unexamined assumptions hardcoded in complex prompts and pipelines create
                quiet reasoning drift across enterprise workflows.
              </p>
            </article>

            <article className={styles.breakdownCard}>
              <h3 className={styles.breakdownTitle}>Diffused Accountability</h3>
              <p className={styles.breakdownText}>
                As autonomous agents generate outputs and execute steps, human oversight becomes
                nominal, obscuring who holds legitimate decision authority.
              </p>
            </article>

            <article className={styles.breakdownCard}>
              <h3 className={styles.breakdownTitle}>Autonomous Execution Drift</h3>
              <p className={styles.breakdownText}>
                Without explicit boundaries, multi-agent systems substitute general plausibility
                for verified policy compliance and regulatory truth.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. THE 3 CAPABILITIES (3–5 Second Signal: The Solution Architecture)
          =================================================================== */}
      <section aria-labelledby="capabilities-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>The Architecture</span>
          <h2 className={styles.sectionTitle} id="capabilities-title">
            Enterprise Understanding through 3 complementary capabilities.
          </h2>
          <p className={styles.sectionSubtitle}>
            Three interlocking disciplines that ensure institutional understanding survives
            personnel turnover, system replacements, and AI scaling:
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
      </section>

      {/* ===================================================================
          4. PERSONA RELEVANCE (3–5 Second Signal: "Which one am I?")
          =================================================================== */}
      <section aria-labelledby="personas-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>Leadership Remit</span>
            <h2 className={styles.sectionTitle} id="personas-title">
              Where ShiftBy engages across enterprise leadership.
            </h2>
            <p className={styles.sectionSubtitle}>
              We partner with executive leaders at the point where distributed execution
              puts organizational confidence at risk:
            </p>
          </div>

          <div className={styles.personaGrid}>
            <article className={styles.personaCard}>
              <h3 className={styles.personaRole}>For the CIO &amp; CTO</h3>
              <p className={styles.personaDescription}>
                Scale production-grade agentic workflows with explicit reasoning boundaries,
                verifiable tool permissions, and zero runaway compute drift.
              </p>
            </article>

            <article className={styles.personaCard}>
              <h3 className={styles.personaRole}>For the CISO &amp; Risk Officer</h3>
              <p className={styles.personaDescription}>
                Establish verified AI trust boundaries, defend against prompt injection and tool
                manipulation, and satisfy rigorous compliance scrutiny.
              </p>
            </article>

            <article className={styles.personaCard}>
              <h3 className={styles.personaRole}>For the CDO &amp; Data Leader</h3>
              <p className={styles.personaDescription}>
                Architect enterprise context graphs and eliminate hallucinated, stale, or
                unvetted retrieval pipelines in production RAG systems.
              </p>
            </article>

            <article className={styles.personaCard}>
              <h3 className={styles.personaRole}>For Assurance &amp; Governance</h3>
              <p className={styles.personaDescription}>
                Reconstruct decision lineage, enforce legitimate human authority, and establish
                unambiguous audit trails before regulatory reliance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. SERVICES PREVIEW (3–5 Second Signal: Concrete, Fixed Deliverables)
          =================================================================== */}
      <section aria-labelledby="services-preview-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>Defined Engagements</span>
          <h2 className={styles.sectionTitle} id="services-preview-title">
            Structured advisory, assessment, and testing services.
          </h2>
          <p className={styles.sectionSubtitle}>
            Seven defined service offerings with explicit deliverables, clear boundaries,
            and fixed-scope engagement models:
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Knowledge &amp; Context Architecture</h3>
            </div>
            <p className={styles.breakdownText}>
              Preserve context and provenance for human and AI reuse.
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
              Constrain agentic reasoning and execution drift.
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
              Sustain legitimate authority and non-delegable accountability.
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
              Adversarial evaluation, boundary testing, and retesting.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>AI Assurance &amp; Adversarial Red Teaming</li>
              <li>Continuous Evaluation &amp; Retesting Protocols</li>
            </ul>
          </article>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <Link className={styles.buttonSecondary} href="/services">
            Browse All 7 Service Offerings &rarr;
          </Link>
        </div>
      </section>

      {/* ===================================================================
          6. CONVERSION VIEWPORT (3–5 Second Signal: Zero Friction Scoping)
          =================================================================== */}
      <section aria-labelledby="first-call-title" className={styles.conversionSection}>
        <div className={styles.conversionHeader}>
          <span className={styles.kicker}>Zero-Risk Evaluation</span>
          <h2 className={styles.sectionTitle} id="first-call-title">
            What happens when you reach out?
          </h2>
          <p className={styles.sectionSubtitle}>
            A structured, unhurried evaluation process designed to respect your time
            and establish immediate clarity with zero sales pressure:
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
            <h3 className={styles.stepTitle}>48-Hour Boundary Summary</h3>
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
              Schedule an Scoping Call &rarr;
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
