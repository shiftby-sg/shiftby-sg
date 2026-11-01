import Link from "next/link";
import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./perspective.module.css";

export const metadata = getPageMetadata(pageMetadataEntries.perspective);

export default function PerspectivePage() {
  return (
    <div className={styles.page}>
      {/* 1. Perspective Hero */}
      <section className={styles.section} aria-labelledby="perspective-hero-title">
        <div className={styles.proseStack}>
          <span className={styles.kicker}>Strategic Perspective</span>
          <h1 id="perspective-hero-title">
            The perspective came from observing the same pattern in different places.
          </h1>
          <p className={styles.lead}>
            Not from one technology stack. Not from one industry. Not from one transformation.
          </p>
          <p>
            Across enterprise architecture, cybersecurity investigations, and complex AI
            deployments, the operational surface changed constantly. The underlying structural
            question remained strikingly familiar.
          </p>
        </div>
      </section>

      {/* 2. The Recurring Pattern Across Environments */}
      <section className={styles.quietBand} aria-labelledby="pattern-title">
        <div className={styles.section}>
          <div className={styles.proseStack}>
            <span className={styles.kicker}>The Three Questions</span>
            <h2 id="pattern-title">Different environments. Similar questions.</h2>
            <p>
              Whenever operational complexity outpaced shared understanding, the same
              critical questions reappeared:
            </p>
          </div>

          <div className={styles.patternGrid} aria-label="Pattern occurrences across environments">
            <article className={styles.patternCard}>
              <span className={styles.kicker}>Cybersecurity Investigation</span>
              <b>What evidence shaped the response?</b>
              <p>
                When a security incident unfolds across cloud environments, logs record
                events, but the rationale connecting actions to threat assessments
                often evaporates.
              </p>
            </article>

            <article className={styles.patternCard}>
              <span className={styles.kicker}>Technology Transformation</span>
              <b>Which assumptions moved with the systems?</b>
              <p>
                When legacy cores are migrated to modern platforms, specifications record
                data schemas, but unstated operational assumptions fail to carry forward.
              </p>
            </article>

            <article className={styles.patternCard}>
              <span className={styles.kicker}>Autonomous AI Deployment</span>
              <b>Who remains accountable for the outcome?</b>
              <p>
                When autonomous agents and multi-model pipelines execute work, outputs
                proliferate rapidly, but legitimate authority and human answerability
                become diffused.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. The Contrast: Artifacts vs Understanding */}
      <section className={styles.section} aria-labelledby="contrast-title">
        <div className={styles.proseStack}>
          <span className={styles.kicker}>The Decay Pattern</span>
          <h2 id="contrast-title">The artifacts remain. The explanation fades.</h2>
          <p className={styles.lead}>
            Organizations invest heavily in capturing artifacts—tickets, documentation,
            code commits, and dashboard metrics. Yet when a key decision is challenged six
            months later, the context that justified it is nearly impossible to reconstruct.
          </p>
        </div>

        <div className={styles.contrastTrio} aria-label="Artifacts versus Understanding comparison">
          <div className={styles.contrastBox}>
            <span className={styles.kicker}>What Organizations Retain</span>
            <h3>The Surface Artifacts</h3>
            <ul className={styles.contrastList}>
              <li>Decision formally signed off in a system</li>
              <li>Source code merged and deployed to production</li>
              <li>Control implemented and marked compliant</li>
              <li>RAG retrieval documents returned with similarity scores</li>
              <li>Autonomous agent execution traces recorded in telemetry</li>
            </ul>
          </div>

          <div className={styles.contrastBox}>
            <span className={styles.kicker}>What Organizations Lose</span>
            <h3>The Underlying Understanding</h3>
            <ul className={styles.contrastList}>
              <li>Why this alternative was chosen over competing options</li>
              <li>Which unstated assumptions made the architecture viable</li>
              <li>What operational boundaries the agent was expected to observe</li>
              <li>Whether cited retrieval chunks actually ground the final answer</li>
              <li>Which human leader retains non-transferable answerability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. The Governing Doctrine */}
      <section className={styles.quietBand} aria-labelledby="doctrine-title">
        <div className={styles.section}>
          <div className={styles.doctrineHero}>
            <span className={styles.kicker}>ShiftBy Governing Doctrine</span>
            <h2 id="doctrine-title">
              <span>Execution changes.</span>
              <span>Understanding preserves confidence.</span>
            </h2>
            <p>
              Tools, frameworks, models, and organizational charts will continue to cycle.
              Attempting to preserve stability by freezing execution is futile.
              Confidence is sustained only when understanding—the context connecting
              decisions, boundaries, and accountability—survives technological change.
            </p>
          </div>
        </div>
      </section>

      {/* 5. The Bridges to Capabilities, Services & Resources */}
      <section className={styles.section} aria-labelledby="bridges-title">
        <div className={styles.proseStack}>
          <span className={styles.kicker}>Operationalizing The Perspective</span>
          <h2 id="bridges-title">How the perspective is put into practice.</h2>
          <p>
            ShiftBy translates this strategic perspective into concrete organizational
            capabilities, defined advisory engagements, and ongoing research investigations:
          </p>
        </div>

        <div className={styles.bridgesGrid} aria-label="Bridges to ShiftBy solutions">
          <article className={styles.bridgeCard}>
            <span className={styles.kicker}>Architecture</span>
            <h3>The Three Capabilities</h3>
            <p>
              Explore our core disciplines: Organizational Memory, Bounded AI,
              and Human–AI Accountability.
            </p>
            <Link className={styles.cardLink} href="/capabilities">
              View Capabilities Hub &rarr;
            </Link>
          </article>

          <article className={styles.bridgeCard}>
            <span className={styles.kicker}>Advisory</span>
            <h3>The Service Catalog</h3>
            <p>
              Review our 7 structured advisory, assessment, and assurance engagements
              with explicit deliverables and boundaries.
            </p>
            <Link className={styles.cardLink} href="/services">
              Browse Service Offerings &rarr;
            </Link>
          </article>

          <article className={styles.bridgeCard}>
            <span className={styles.kicker}>Research</span>
            <h3>Insights &amp; Investigations</h3>
            <p>
              Read our doctrine essays, executive briefs, and technical investigations into
              semantic drift and boundary architecture.
            </p>
            <Link className={styles.cardLink} href="/resources">
              Read Publications &rarr;
            </Link>
          </article>
        </div>
      </section>

      {/* 6. Conversion CTA */}
      <section className={styles.ctaBand} aria-labelledby="perspective-cta-title">
        <div className={styles.ctaInner}>
          <span className={styles.kicker}>Next Step</span>
          <h2 id="perspective-cta-title">Explore where understanding is drifting in your stack.</h2>
          <p style={{ maxWidth: "700px" }}>
            Whether you are deploying agentic systems, navigating audit scrutiny, or seeking
            to prevent context loss during organizational change, we invite a direct, unhurried
            conversation with our advisory team.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.primaryButton} href="/contact">
              Start a Conversation &rarr;
            </Link>
            <Link className={styles.secondaryButton} href="/capabilities">
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
