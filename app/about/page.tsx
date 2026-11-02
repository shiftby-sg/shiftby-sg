import Link from "next/link";
import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./about.module.css";

export const metadata = getPageMetadata(pageMetadataEntries.about);

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* 1. Observation Hero */}
      <section className={styles.section} aria-labelledby="observation-title">
        <div className={styles.proseStack}>
          <span className={styles.kicker}>About ShiftBy</span>
          <h1 id="observation-title">The perspective begins with an observation.</h1>
          <p className={styles.lead}>
            Organizations constantly change. Strategies evolve. Leadership rotates.
            Systems are decommissioned and replaced. Operating models restructure.
            AI accelerates execution across autonomous workflows.
          </p>
          <p>
            Yet confidence does not come from preserving execution.
            Confidence comes from preserving understanding.
          </p>
          <div className={styles.observationBox} aria-label="Core doctrine contrast">
            <p>Organizations preserve artifacts.</p>
            <p>Understanding is harder to preserve.</p>
          </div>
          <p>
            Understanding is not merely information. Enterprises already possess immense
            quantities of information: repositories, tickets, logs, design documents,
            and data warehouses.
          </p>
          <p>
            Understanding is the context that connects decisions, assumptions,
            evidence, boundaries, accountability, and outcomes. Information records
            what happened. Understanding explains why it mattered, what constraints
            governed it, and who holds legitimate authority over it.
          </p>
        </div>
      </section>

      {/* 2. Founder Credential & Observation Origin */}
      <section className={styles.quietBand} aria-labelledby="origin-title">
        <div className={styles.section}>
          <div className={styles.proseStack}>
            <span className={styles.kicker}>Practice Origin &amp; Scale</span>
            <h2 id="origin-title">A pattern observed across decades of enterprise scale.</h2>
            <p>
              The observation did not emerge in the abstract. It arose from direct,
              cross-disciplinary leadership spanning enterprise architecture,
              cybersecurity investigations, operational resilience, and complex
              transformations across Fortune-scale technology, healthcare, and
              consumer enterprises in APAC.
            </p>
          </div>

          <aside className={styles.founderCard} aria-label="Founder credentials and framing">
            <div className={styles.founderHeader}>
              <p className={styles.founderName}>Ananda Krishna Marri</p>
              <p className={styles.founderRole}>Founder &amp; Principal Advisor, ShiftBy</p>
              <span className={styles.founderBadge}>
                IAPP Certified AI Governance Professional (AIGP)
              </span>
            </div>
            <div className={styles.proseStack}>
              <p>
                &ldquo;Across global enterprise landscapes, technologies cycled, operating models
                restructured, and regulatory pressures intensified. Yet the same core questions
                consistently recurred:
              </p>
              <p style={{ fontStyle: "italic", color: "var(--about-fg)" }}>
                What was decided? What evidence supported it? What unstated assumptions
                shaped it? Who understood the operating context? How does accountability carry
                forward when the team turns over or the agent executes autonomously?
              </p>
              <p>
                The consistency of this pattern across decades made it clear: organizations
                do not suffer from a deficit of documentation. They suffer from systemic
                context decay.&rdquo;
              </p>
            </div>
          </aside>

          <div className={styles.contrastTrio} aria-label="The decay pattern">
            <div className={styles.contrastItem}>
              <span>Storage</span>
              <p>Data remained available in databases.</p>
            </div>
            <div className={styles.contrastItem}>
              <span>Visibility</span>
              <p>Artifacts remained indexed in search.</p>
            </div>
            <div className={styles.contrastItem}>
              <span>Decay</span>
              <p>Understanding became harder to recover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI and Drift Amplification */}
      <section className={styles.section} aria-labelledby="ai-amplification-title">
        <div className={styles.proseStack}>
          <span className={styles.kicker}>The Catalyst: Autonomous AI</span>
          <h2 id="ai-amplification-title">AI did not create the challenge. AI makes it urgent.</h2>
          <p className={styles.lead}>
            When humans execute tasks slowly, tacit context and verbal alignment
            often mask structural gaps in organizational understanding.
          </p>
          <p>
            When autonomous agents, multi-model pipelines, and RAG architectures are introduced,
            they execute at speeds that rapidly outrun informal human alignment. An agent
            given unbounded discretion will generate plausible, cited answers that slowly
            drift from institutional policy. A workflow spanning multiple models will lose
            provenance across hops.
          </p>
          <p>
            AI accelerates execution. Without explicit boundaries and structured memory,
            it accelerates drift just as efficiently.
          </p>
        </div>
      </section>

      {/* 4. The Three Capabilities & Governing Outcome */}
      <section className={styles.quietBand} aria-labelledby="capabilities-title">
        <div className={styles.section}>
          <div className={styles.proseStack}>
            <span className={styles.kicker}>Codified Methodology</span>
            <h2 id="capabilities-title">How ShiftBy addresses the challenge.</h2>
            <p>
              ShiftBy establishes three interlocking capabilities designed to ensure that
              understanding survives technological and organizational change:
            </p>
          </div>

          <div className={styles.capabilitiesGrid} aria-label="ShiftBy Three Capabilities">
            <article className={styles.capabilityCard}>
              <span className={styles.kicker}>Capability 01</span>
              <h3>Organizational Memory</h3>
              <p>
                Preserves context, rationale, and provenance beyond individual tenure.
                Ensures that institutional learning remains accessible, queryable, and
                verifiable over time.
              </p>
              <Link className={styles.cardLink} href="/capabilities/organizational-memory">
                Explore Organizational Memory &rarr;
              </Link>
            </article>

            <article className={styles.capabilityCard}>
              <span className={styles.kicker}>Capability 02</span>
              <h3>Bounded AI</h3>
              <p>
                Constrains reasoning and execution drift across tasks, agents, and pipelines
                by enforcing explicit operational boundaries, verified retrieval, and resource caps.
              </p>
              <Link className={styles.cardLink} href="/capabilities/bounded-ai">
                Explore Bounded AI &rarr;
              </Link>
            </article>

            <article className={styles.capabilityCard}>
              <span className={styles.kicker}>Capability 03</span>
              <h3>Human–AI Accountability</h3>
              <p>
                Ensures legitimate authority and non-transferable answerability across
                autonomous systems. Defines explicit human ownership boundaries that cannot
                be delegated.
              </p>
              <Link className={styles.cardLink} href="/capabilities/human-ai-accountability">
                Explore Human–AI Accountability &rarr;
              </Link>
            </article>
          </div>

          <div className={styles.investigationsNote}>
            <span className={styles.kicker}>Research Investigations</span>
            <h3>From Explorations to Codified Methodology</h3>
            <p>
              Our internal investigative prototypes—formerly known as <em>UnifyPlane</em> (execution traceability),
              <em>CanonLens</em> (semantic boundary enforcement), and <em>Inspiral</em> (observation-to-knowledge synthesis)—have
              been reframed as ongoing research investigations into context drift and boundary architecture.
            </p>
            <Link className={styles.cardLink} href="/resources/investigations-in-context-drift">
              Read the Research Brief on Context Drift Investigations &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Conversion CTA */}
      <section className={styles.ctaBand} aria-labelledby="about-cta-title">
        <div className={styles.ctaInner}>
          <span className={styles.kicker}>Next Step</span>
          <h2 id="about-cta-title">Start with the question that matters most.</h2>
          <p style={{ maxWidth: "700px" }}>
            If your organization is navigating AI adoption, agentic workflow scaling,
            or enterprise knowledge decay, the most effective next step is a direct conversation
            with our advisory team.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.primaryButton} href="/contact">
              Start a Conversation &rarr;
            </Link>
            <Link className={styles.secondaryButton} href="/services">
              Explore Our Service Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
