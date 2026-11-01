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
          1. HERO SECTION
          =================================================================== */}
      <section aria-labelledby="hero-title" className={`${styles.section} ${styles.hero}`}>
        <BrandLogo className={styles.heroWatermark} size={580} />
        
        <div className={styles.heroContent}>
          <p className={styles.categoryDescriptor}>
            Executive Advisory & Governance Practice
          </p>
          <h1 className={styles.heroTitle} id="hero-title">
            <span className={styles.heroTitleLine}>Execution changes.</span>
            <span className={`${styles.heroTitleLine} ${styles.heroTitleAccent}`}>
              Understanding preserves confidence.
            </span>
          </h1>
          <p className={styles.heroLead}>
            Organizations execute across people, systems, suppliers, automation,
            and AI. ShiftBy helps enterprise leaders preserve, develop, and apply
            the understanding required to govern and transform with confidence
            through change.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} href="/contact">
              Start a conversation →
            </Link>
            <Link className={styles.buttonSecondary} href="/capabilities">
              Explore capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. THE TENSION (THE CHALLENGE)
          =================================================================== */}
      <section aria-labelledby="challenge-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>The Organizational Problem</span>
            <h2 className={styles.sectionTitle} id="challenge-title">
              Organizations preserve artifacts. Understanding is harder to preserve.
            </h2>
            <p className={styles.sectionSubtitle}>
              Over time, decisions lose context, assumptions become invisible,
              evidence becomes difficult to recover, accountability fragments,
              and execution drifts from its original intent.
            </p>
          </div>

          <div className={styles.tensionQuoteBlock}>
            <p className={styles.tensionQuote}>
              &ldquo;Understanding is not information. It is the connected,
              supported context that explains meaning, authority, evidence, and
              consequences.&rdquo;
            </p>
            <p className={styles.tensionSupport}>
              ShiftBy Doctrine on Enterprise Understanding
            </p>
          </div>

          <div className={styles.breakdownGrid}>
            <article className={styles.breakdownCard}>
              <h3 className={styles.breakdownTitle}>Context Loss After Change</h3>
              <p className={styles.breakdownText}>
                When key personnel transition or systems are upgraded, the
                rationale, rejected alternatives, and trade-offs behind critical
                decisions vanish.
              </p>
            </article>

            <article className={styles.breakdownCard}>
              <h3 className={styles.breakdownTitle}>Invisible Assumptions</h3>
              <p className={styles.breakdownText}>
                Assumptions embedded inside complex systems and AI prompts become
                unexamined dogmas, causing quiet drift in operations.
              </p>
            </article>

            <article className={styles.breakdownCard}>
              <h3 className={styles.breakdownTitle}>Accountability Fragmentation</h3>
              <p className={styles.breakdownText}>
                As AI generates recommendations and automates actions, human
                oversight becomes nominal, obscuring who holds legitimate authority.
              </p>
            </article>

            <article className={styles.breakdownCard}>
              <h3 className={styles.breakdownTitle}>Execution Drift in AI</h3>
              <p className={styles.breakdownText}>
                Without explicit reasoning and flow boundaries, tasks, agents,
                and workflows substitute general plausibility for enterprise suitability.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. THE THREE CAPABILITIES (ENTERPRISE UNDERSTANDING)
          =================================================================== */}
      <section aria-labelledby="capabilities-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>The 3 Complementary Capabilities</span>
          <h2 className={styles.sectionTitle} id="capabilities-title">
            Enterprise Understanding through 3 complementary capabilities.
          </h2>
          <p className={styles.sectionSubtitle}>
            Enterprise Understanding is the organizational ability to preserve,
            connect, retrieve, apply appropriately, and govern context through
            change. ShiftBy practices three complementary capabilities to enable it:
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
                Preserves relevant knowledge, connected relationships,
                provenance, prior state, and learning so that understanding
                remains reusable and recoverable through personnel and system transitions.
              </p>
            </div>
            <Link
              className={styles.capabilityLink}
              href="/capabilities/organizational-memory"
            >
              Explore Organizational Memory →
            </Link>
          </article>

          {/* Capability 2: Bounded AI */}
          <article className={styles.capabilityCard}>
            <div className={styles.capabilityTop}>
              <span className={styles.capabilityBadge}>Alignment & Drift Reduction</span>
              <h3 className={styles.capabilityName}>Bounded AI</h3>
              <p className={styles.capabilityContribution}>
                Reduced drift in AI-supported reasoning and execution.
              </p>
              <p className={styles.capabilityDescription}>
                Keeps AI tasks, agents, and coordinated workflows aligned with
                their intended purpose by establishing explicit boundaries for
                inputs, reasoning guidance, flow progression, outputs, and resource use.
              </p>
            </div>
            <Link
              className={styles.capabilityLink}
              href="/capabilities/bounded-ai"
            >
              Explore Bounded AI →
            </Link>
          </article>

          {/* Capability 3: Human-AI Accountability */}
          <article className={styles.capabilityCard}>
            <div className={styles.capabilityTop}>
              <span className={styles.capabilityBadge}>Governance & Authority</span>
              <h3 className={styles.capabilityName}>Human–AI Accountability</h3>
              <p className={styles.capabilityContribution}>
                Sustained answerability and legitimate authority.
              </p>
              <p className={styles.capabilityDescription}>
                Ensures human and organizational answerability remains active
                throughout AI-enabled work through explicit ownership, meaningful
                oversight, intervention rights, and traceable assurance evidence.
              </p>
            </div>
            <Link
              className={styles.capabilityLink}
              href="/capabilities/human-ai-accountability"
            >
              Explore Human–AI Accountability →
            </Link>
          </article>
        </div>
      </section>

      {/* ===================================================================
          4. PERSONA BUYING CUES (WHERE SHIFTBY ENGAGES)
          =================================================================== */}
      <section aria-labelledby="personas-title" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.challengeHeader}>
            <span className={styles.kicker}>Enterprise Relevance</span>
            <h2 className={styles.sectionTitle} id="personas-title">
              Where ShiftBy engages across leadership remits.
            </h2>
            <p className={styles.sectionSubtitle}>
              We partner with enterprise leaders when execution becomes
              distributed and understanding is at risk of fragmentation:
            </p>
          </div>

          <div className={styles.personaGrid}>
            <article className={styles.personaCard}>
              <h3 className={styles.personaRole}>For the CIO & CTO</h3>
              <p className={styles.personaDescription}>
                Moving beyond experimental demos into bounded, observable,
                production-grade agent workflows without reasoning or execution drift.
              </p>
            </article>

            <article className={styles.personaCard}>
              <h3 className={styles.personaRole}>For the CISO & Risk Officer</h3>
              <p className={styles.personaDescription}>
                Defining trust boundaries, red-teaming adversarial prompt injection
                and tool manipulation, and verifying control effectiveness.
              </p>
            </article>

            <article className={styles.personaCard}>
              <h3 className={styles.personaRole}>For the CDO & Knowledge Leader</h3>
              <p className={styles.personaDescription}>
                Semantic context modeling, enterprise knowledge graphs, and
                preventing poisoned or stale context in retrieval and AI memory systems.
              </p>
            </article>

            <article className={styles.personaCard}>
              <h3 className={styles.personaRole}>For Assurance & Transformation</h3>
              <p className={styles.personaDescription}>
                Reconstructing decision lineage, defining legitimate decision rights,
                and establishing meaningful human oversight before regulatory reliance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. SERVICES PREVIEW
          =================================================================== */}
      <section aria-labelledby="services-preview-title" className={styles.section}>
        <div className={styles.challengeHeader}>
          <span className={styles.kicker}>Defined Engagements</span>
          <h2 className={styles.sectionTitle} id="services-preview-title">
            Structured advisory, assessment, and testing services.
          </h2>
          <p className={styles.sectionSubtitle}>
            Our services draw on our three capabilities. Each engagement starts
            with a defined enterprise problem and concludes with evidence,
            findings, practical deliverables, and agreed next steps:
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Knowledge & Context Architecture</h3>
            </div>
            <p className={styles.breakdownText}>
              Preserve context and meaning for human and AI reuse.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>AI Knowledge & Context Architecture</li>
              <li>RAG & Enterprise Retrieval Assessment</li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Bounded AI Advisory</h3>
            </div>
            <p className={styles.breakdownText}>
              Keep AI reasoning and execution aligned with assigned responsibilities.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>AI Task, Agent & Workflow Advisory</li>
              <li>Multi-Agent Boundary & Control Design</li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Governance & Assurance</h3>
            </div>
            <p className={styles.breakdownText}>
              Sustain human answerability, decision rights, and reliance evidence.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>AI Governance & Human Oversight Design</li>
              <li>AI Assurance & Evidence Review</li>
            </ul>
          </article>

          <article className={styles.serviceClusterCard}>
            <div className={styles.serviceClusterHeader}>
              <h3 className={styles.serviceClusterTitle}>Security & Reliability</h3>
            </div>
            <p className={styles.breakdownText}>
              Identify vulnerabilities and measure quality across changing conditions.
            </p>
            <ul className={styles.serviceClusterItems}>
              <li>AI Security Assessment & Red Teaming</li>
              <li>AI Evaluation, Reliability & Retesting</li>
            </ul>
          </article>
        </div>

        <div>
          <Link className={styles.buttonSecondary} href="/services">
            View full service catalog →
          </Link>
        </div>
      </section>

      {/* ===================================================================
          6. CONVERSION BLOCK (WHAT HAPPENS ON OUR FIRST CALL)
          =================================================================== */}
      <section aria-labelledby="first-call-title" className={styles.conversionSection}>
        <div className={styles.conversionHeader}>
          <span className={styles.kicker}>First Steps</span>
          <h2 className={styles.sectionTitle} id="first-call-title">
            What happens when you start a conversation?
          </h2>
          <p className={styles.sectionSubtitle}>
            Understanding often begins when a challenge is not yet fully defined.
            Our introductory process is designed to deliver clarity with zero
            high-pressure sales tactics:
          </p>
        </div>

        <div className={styles.timelineGrid}>
          <div className={styles.timelineStep}>
            <span className={styles.stepNumber}>1</span>
            <h3 className={styles.stepTitle}>30-Minute Context Call</h3>
            <p className={styles.stepDescription}>
              A focused discussion with founder Ananda Krishna to examine your
              operational context, systems at risk, and current concerns. No generic slides.
            </p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNumber}>2</span>
            <h3 className={styles.stepTitle}>Scoped Boundary Outline</h3>
            <p className={styles.stepDescription}>
              Within 48 hours, you receive a concise summary defining the
              problem boundary, required authorizations, and recommended deliverables.
            </p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNumber}>3</span>
            <h3 className={styles.stepTitle}>Agreed Plan or Referral</h3>
            <p className={styles.stepDescription}>
              If there is a mutual fit, we agree on a bounded engagement with
              fixed deliverables. If not, we point you to the appropriate specialist tools or partners.
            </p>
          </div>
        </div>

        <div className={styles.conversionCtaWrapper}>
          <p className={styles.conversionCtaText}>
            Ready to explore what needs to remain understood in your organization?
          </p>
          <Link className={styles.buttonPrimary} href="/contact">
            Start a conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}
