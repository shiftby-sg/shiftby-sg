import Link from "next/link";
import type { Metadata } from "next";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./doctrine.module.css";

export const metadata: Metadata = getPageMetadata(pageMetadataEntries.doctrine);

const outlineItems = [
  { href: "#founder-proposition", label: "§1. Founder Proposition" },
  { href: "#the-organizational-problem", label: "§2. The Organizational Problem" },
  { href: "#the-business-transformation", label: "§3. The Business Transformation" },
  { href: "#meaning-of-understanding", label: "§4. Meaning of Understanding" },
  { href: "#enterprise-understanding", label: "§5. Enterprise Understanding" },
  { href: "#the-three-capabilities", label: "§6. The Three Capabilities" },
  { href: "#role-and-boundaries", label: "§7. Role and Boundaries" },
  { href: "#ai-participation", label: "§8. AI in ShiftBy's Practice" },
  { href: "#trustworthy-enablement", label: "§9. Trustworthy Enablement" },
  { href: "#boundaries-and-exclusions", label: "§10. Boundaries & Exclusions" },
  { href: "#founder-principle", label: "§11. Founder Principle" }
];

export default function DoctrinePage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection} aria-labelledby="doctrine-hero-title">
        <div className={styles.heroStack}>
          <span className={styles.kicker}>ShiftBy Foundational Codex</span>
          <h1 id="doctrine-hero-title">ShiftBy Governing Doctrine</h1>
          <div className={styles.heroLead}>
            <span>Execution changes.</span>
            <span>Understanding preserves confidence.</span>
          </div>
          <p className={styles.heroSubtitle}>
            The foundational principles governing organizational memory, bounded artificial intelligence,
            and sustained human answerability across distributed enterprise execution.
          </p>
        </div>

        <div className={styles.metaBadgeBar} aria-label="Doctrine Document Metadata">
          <div className={styles.badgeItem}>
            <span className={styles.badgeLabel}>Document:</span>
            <span>SB-DOC-2026-V2</span>
          </div>
          <div className={styles.badgeItem}>
            <span className={styles.badgeLabel}>Status:</span>
            <span>Controlled Institutional Standard</span>
          </div>
          <div className={styles.badgeItem}>
            <span className={styles.badgeLabel}>Jurisdiction:</span>
            <span>Singapore (UEN: 202426424E)</span>
          </div>
          <div className={styles.badgeItem}>
            <span className={styles.badgeLabel}>Authority:</span>
            <span>Founder &amp; Principal Practice</span>
          </div>
        </div>
      </section>

      {/* Main Codex Content */}
      <div className={styles.codexLayout}>
        {/* Sticky Table of Contents Sidebar */}
        <aside className={styles.outlineSidebar} aria-label="Codex Table of Contents">
          <div className={styles.outlineTitle}>Codex Sections</div>
          <nav>
            <ul className={styles.outlineList}>
              {outlineItems.map((item) => (
                <li key={item.href}>
                  <a className={styles.outlineLink} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* The 11 Doctrinal Clauses */}
        <main className={styles.documentStream}>
          {/* §1. Founder Proposition */}
          <section className={styles.docSection} id="founder-proposition">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 01</span>
              <h2>1. Founder Proposition</h2>
            </div>
            <div className={styles.calloutCard}>
              <div className={styles.calloutMaxim}>
                Execution changes. Understanding preserves confidence.
              </div>
              <p>
                Organizations constantly change. Strategies evolve. Teams reorganize. Systems are replaced.
                Processes adapt. Technologies advance. AI accelerates analysis and execution.
              </p>
            </div>
            <p>
              Confidence does not come from preserving execution exactly as it was. Confidence comes from
              preserving the understanding required to explain, govern, and adapt execution as circumstances
              change.
            </p>
            <p>
              ShiftBy exists to help organizations preserve, develop, and apply that understanding through
              change.
            </p>
          </section>

          {/* §2. The Organizational Problem */}
          <section className={styles.docSection} id="the-organizational-problem">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 02</span>
              <h2>2. The Organizational Problem</h2>
            </div>
            <p>
              Organizations often preserve artifacts more successfully than the understanding that gives
              those artifacts meaning.
            </p>
            <p>
              Over time, decisions lose context, assumptions become invisible, evidence becomes difficult
              to recover, accountability becomes unclear, dependencies become hidden, knowledge is
              rediscovered, execution drifts from intent, and outcomes become disconnected from their origins.
            </p>
            <p>
              This creates avoidable reconstruction effort, slower decisions, inconsistent interpretation,
              dependence on individual memory, and greater risk when work is transferred or automated.
            </p>
            <p>
              ShiftBy addresses this problem by helping organizations preserve and apply understanding
              through change.
            </p>
          </section>

          {/* §3. The Business Transformation */}
          <section className={styles.docSection} id="the-business-transformation">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 03</span>
              <h2>3. The Business Transformation</h2>
            </div>
            <p>
              The business transformation is the organization’s improved ability to preserve and apply
              understanding through change. When this transformation is present:
            </p>
            <ul className={styles.styledList}>
              <li className={styles.styledListItem}>
                <strong>Context Continuity:</strong> Important context remains recoverable after personnel
                and system changes.
              </li>
              <li className={styles.styledListItem}>
                <strong>Decision Reconstructability:</strong> Decisions remain explainable and reconstructable
                through their rationale, evidence, authority, assumptions, dependencies, and outcomes.
              </li>
              <li className={styles.styledListItem}>
                <strong>Knowledge Reuse:</strong> Institutional knowledge is reused systematically instead
                of repeatedly reconstructed or rediscovered from scratch.
              </li>
              <li className={styles.styledListItem}>
                <strong>Visible Accountability:</strong> Accountability remains visible when work crosses
                teams, suppliers, systems, or AI boundaries.
              </li>
              <li className={styles.styledListItem}>
                <strong>Safe Progression:</strong> Changes can be introduced without silently losing intent,
                continuity, or control.
              </li>
              <li className={styles.styledListItem}>
                <strong>Early Uncertainty Detection:</strong> Conflicts, missing evidence, outdated assumptions,
                and material uncertainty become visible early enough to affect action.
              </li>
            </ul>
            <p>
              This is not a promise that change becomes risk-free or that every past decision can be
              reconstructed perfectly. It is a commitment to improve the organization’s ability to
              understand, decide, act, adapt, and remain accountable through change.
            </p>
          </section>

          {/* §4. What ShiftBy Means by Understanding */}
          <section className={styles.docSection} id="meaning-of-understanding">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 04</span>
              <h2>4. What ShiftBy Means by Understanding</h2>
            </div>
            <p>
              Information records or communicates facts, events, and artifacts. Understanding is the
              connected, supported context relevant to a decision, action, change, responsibility, or business
              outcome that explains their meaning, authority, relationships, implications, and provenance.
            </p>
            <div className={styles.contrastGrid}>
              <div className={styles.contrastCol}>
                <span className={styles.kicker}>What Constitutes Understanding</span>
                <h3>Supported Context</h3>
                <ul className={styles.styledList}>
                  <li className={styles.styledListItem}>Why a decision was made</li>
                  <li className={styles.styledListItem}>What evidence supported it</li>
                  <li className={styles.styledListItem}>What assumptions existed</li>
                  <li className={styles.styledListItem}>Who had authority and accountability</li>
                  <li className={styles.styledListItem}>What dependencies were affected</li>
                  <li className={styles.styledListItem}>What outcomes were observed</li>
                  <li className={styles.styledListItem}>How the elements are connected</li>
                </ul>
              </div>
              <div className={styles.contrastCol}>
                <span className={styles.kicker}>Governing Discipline</span>
                <h3>Proportion &amp; Uncertainty</h3>
                <ul className={styles.styledList}>
                  <li className={styles.styledListItem}>
                    Understanding is proportionate to the need it serves; it does not capture every trivial fact.
                  </li>
                  <li className={styles.styledListItem}>
                    Records are not connected merely because they are stored together or returned by vector search.
                  </li>
                  <li className={styles.styledListItem}>
                    Unknown, missing, conflicting, inferred, and low-confidence material must remain visible.
                  </li>
                  <li className={styles.styledListItem}>
                    Uncertainty must produce a proportionate consequence: review, escalation, or limitation.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* §5. Enterprise Understanding */}
          <section className={styles.docSection} id="enterprise-understanding">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 05</span>
              <h2>5. Enterprise Understanding</h2>
            </div>
            <div className={styles.calloutCard}>
              <p style={{ color: "var(--doc-fg)", fontWeight: 550, fontSize: "17px" }}>
                Enterprise Understanding is the organizational ability to preserve, connect, retrieve, apply
                appropriately, and govern the context required to understand, decide, act, adapt, and remain
                accountable through change.
              </p>
            </div>
            <p>
              Enterprise Understanding is the broader transformation outcome supported by ShiftBy’s current
              three-capability model. It is not a fourth capability, product, technology, or claim that every
              relevant organizational concern has been exhaustively classified.
            </p>
            <p>
              ShiftBy has developed and practices three complementary capabilities: Organizational Memory,
              Bounded AI, and Human–AI Accountability. Enterprises can leverage their contributions within
              their own context; the capabilities are not a model to adopt unchanged.
            </p>
          </section>

          {/* §6. The Three Complementary Capabilities */}
          <section className={styles.docSection} id="the-three-capabilities">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 06</span>
              <h2>6. The Three Complementary Capabilities</h2>
            </div>
            <p>
              The three capabilities contribute to Enterprise Understanding without replacing the organization’s
              own authority, context, or responsibilities:
            </p>
            <div className={styles.capabilityGrid}>
              <article className={styles.capabilityCard}>
                <span className={styles.kicker}>Capability 01</span>
                <h3>Organizational Memory</h3>
                <div className={styles.capabilityContribution}>
                  Continuity of organizational understanding beyond individual memory.
                </div>
                <p>
                  Preserves relevant knowledge, context, connected relationships, experience, and learning
                  so that understanding remains reusable and recoverable through change.
                </p>
                <Link className={styles.cardFooterLink} href="/capabilities/organizational-memory">
                  Explore Organizational Memory &rarr;
                </Link>
              </article>

              <article className={styles.capabilityCard}>
                <span className={styles.kicker}>Capability 02</span>
                <h3>Bounded AI</h3>
                <div className={styles.capabilityContribution}>
                  Reduced drift in AI-supported reasoning and execution.
                </div>
                <p>
                  Establishes boundaries for prepared inputs, reasoning responsibilities, permitted flow,
                  output acceptance, and resource use, supported by validation and observability.
                </p>
                <Link className={styles.cardFooterLink} href="/capabilities/bounded-ai">
                  Explore Bounded AI &rarr;
                </Link>
              </article>

              <article className={styles.capabilityCard}>
                <span className={styles.kicker}>Capability 03</span>
                <h3>Human–AI Accountability</h3>
                <div className={styles.capabilityContribution}>
                  Sustained human and organizational answerability for AI work.
                </div>
                <p>
                  Sustains answerability through explicit ownership, responsibility, and legitimate authority
                  that are exercised and evidenced throughout AI-enabled work.
                </p>
                <Link className={styles.cardFooterLink} href="/capabilities/human-ai-accountability">
                  Explore Accountability &rarr;
                </Link>
              </article>
            </div>
            <div style={{ marginTop: "12px" }}>
              <span className={styles.kicker}>Capability Outcome Test</span>
              <p>
                A capability is justified by the organizational value and risk reduction it enables, not by the
                sophistication of its records, models, workflows, relationships, or AI mechanisms. Producing
                documents, models, classifications, or AI outputs is not by itself evidence that a capability
                or transformation has been achieved.
              </p>
            </div>
          </section>

          {/* §7. ShiftBy’s Role and Boundaries */}
          <section className={styles.docSection} id="role-and-boundaries">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 07</span>
              <h2>7. ShiftBy’s Role and Boundaries</h2>
            </div>
            <p>
              ShiftBy is an executive advisory and consulting practice focused on helping organizations
              preserve, develop, and apply the understanding required to transform responsibly through change.
            </p>
            <p>
              Workshops, coaching, training, facilitation, implementation guidance, and enablement are delivery
              modes within this practice. They are not separate ShiftBy capabilities or software products.
            </p>
            <p>
              ShiftBy may enable client teams to implement and operate capability-related practices, but does
              not thereby assume responsibility for implementing or operating the client’s systems. Client
              organizations remain responsible for their decisions, systems, data, implementation choices,
              legal and regulatory obligations, and consequential actions.
            </p>
          </section>

          {/* §8. AI Participation in ShiftBy’s Practice */}
          <section className={styles.docSection} id="ai-participation">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 08</span>
              <h2>8. AI Participation in ShiftBy’s Practice</h2>
            </div>
            <p>
              AI is integral to ShiftBy’s current practice of developing and applying the three capabilities.
              This describes ShiftBy’s internal advisory practice, not a claim that organizational memory in
              every organization requires AI or autonomous agents.
            </p>
            <p>
              AI supports interpretation, analysis, retrieval, synthesis, testing, monitoring, gap detection,
              dependency identification, review, planning, communication, execution support, and governed
              adjustment within defined boundaries.
            </p>
            <p>
              AI strengthens the feasibility and usefulness of the work, but preserving and applying
              understanding remains ShiftBy’s purpose. Preserved understanding may improve conditions for
              future models, but does not guarantee that an AI system will interpret material correctly without
              rigorous human validation.
            </p>
          </section>

          {/* §9. Conditions for Trustworthy AI Enablement */}
          <section className={styles.docSection} id="trustworthy-enablement">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 09</span>
              <h2>9. Conditions for Trustworthy AI Enablement</h2>
            </div>
            <p>
              These Doctrine-level conditions govern trustworthy AI participation across our practice and
              client advisory:
            </p>
            <ul className={styles.styledList}>
              <li className={styles.styledListItem}>
                <strong>Authority Does Not Transfer:</strong> AI capability does not imply AI authorization.
                AI must not independently acquire or assume organizational authority for consequential decisions.
              </li>
              <li className={styles.styledListItem}>
                <strong>Distinguishable Outputs:</strong> AI-generated outputs must remain clearly
                distinguishable from source-grounded knowledge, approved canonical meaning, and human decisions.
              </li>
              <li className={styles.styledListItem}>
                <strong>Generation Does Not Confer Authority:</strong> AI-generated recommendations,
                classifications, or drafts do not acquire authority through generation, repetition, storage,
                or retrieval. They require appropriate human evidence and validation before reliance.
              </li>
              <li className={styles.styledListItem}>
                <strong>Fail-Closed Discipline:</strong> Where required evidence, authority, integrity,
                validation, or accountability is absent or materially uncertain, the process must fail closed
                through review, escalation, limitation, withholding, or non-action.
              </li>
            </ul>
          </section>

          {/* §10. Boundaries and Exclusions */}
          <section className={styles.docSection} id="boundaries-and-exclusions">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 10</span>
              <h2>10. Boundaries and Exclusions</h2>
            </div>
            <p>
              To maintain absolute conceptual clarity, this Doctrine explicitly defines what our capabilities
              are not:
            </p>
            <ul className={styles.styledList}>
              <li className={styles.styledListItem}>
                <strong>A database is not Organizational Memory:</strong> Stored records or semantic objects
                constitute Organizational Memory only when they provide relevant, reusable, recoverable, and
                governed context.
              </li>
              <li className={styles.styledListItem}>
                <strong>An AI workflow is not Bounded AI:</strong> Bounded AI requires defined boundaries,
                validation, and observability that support reduction of drift across reasoning and execution.
              </li>
              <li className={styles.styledListItem}>
                <strong>An AI system is not Human–AI Accountability:</strong> Human and organizational
                answerability must be sustained throughout its use.
              </li>
              <li className={styles.styledListItem}>
                <strong>A technical workflow is not Enterprise Understanding:</strong> Enterprise Understanding
                depends on the governed preservation and application of context—not on the existence of a
                particular technology or workflow.
              </li>
            </ul>
          </section>

          {/* §11. Founder Principle & Controlled Status */}
          <section className={styles.docSection} id="founder-principle">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Section 11</span>
              <h2>11. Founder Principle &amp; Controlled Status</h2>
            </div>
            <div className={styles.calloutCard}>
              <p style={{ color: "var(--doc-fg)", fontSize: "17px", lineHeight: 1.6 }}>
                Organizations do not lose confidence simply because execution changes.
              </p>
              <p style={{ color: "var(--doc-fg)", fontSize: "17px", lineHeight: 1.6 }}>
                Organizations lose confidence when the understanding required to explain and govern change is lost.
              </p>
              <div className={styles.calloutMaxim} style={{ marginTop: "8px" }}>
                Preserving understanding allows organizations to adapt without losing confidence. That is the
                purpose of ShiftBy.
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "var(--doc-muted)" }}>
              ShiftBy Governing Doctrine • Document SB-DOC-2026-V2 • Controlled Institutional Standard •
              Issued under the authority of ShiftBy Pte. Ltd., Singapore.
            </p>
          </section>
        </main>
      </div>

      {/* Bridges to Practice & Related Sections */}
      <section className={styles.bridgeSection} aria-labelledby="bridge-title">
        <div className={styles.bridgeInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Operationalizing Doctrine</span>
            <h2 id="bridge-title">How the Doctrine is Put into Practice</h2>
            <p>
              ShiftBy translates this institutional doctrine into executive advisory engagements,
              governed capabilities, and published research.
            </p>
          </div>

          <div className={styles.bridgeGrid}>
            <Link className={styles.bridgeCard} href="/capabilities">
              <span className={styles.kicker}>Capabilities</span>
              <h3>The Three Capabilities</h3>
              <p>
                Explore how Organizational Memory, Bounded AI, and Human–AI Accountability operate
                in concert.
              </p>
              <span className={styles.bridgeLink}>View Capabilities Hub &rarr;</span>
            </Link>

            <Link className={styles.bridgeCard} href="/services">
              <span className={styles.kicker}>Advisory</span>
              <h3>Defined Services Catalog</h3>
              <p>
                Structured diagnostic, assessment, red teaming, and control design advisory engagements.
              </p>
              <span className={styles.bridgeLink}>Explore Advisory Engagements &rarr;</span>
            </Link>

            <Link className={styles.bridgeCard} href="/perspective">
              <span className={styles.kicker}>Origin</span>
              <h3>The Strategic Perspective</h3>
              <p>
                Read the founder narrative on how this pattern was observed across cybersecurity,
                transformations, and AI.
              </p>
              <span className={styles.bridgeLink}>Read Strategic Perspective &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className={styles.ctaBand} aria-labelledby="cta-heading">
        <div className={styles.ctaInner}>
          <span className={styles.kicker}>Advisory Scoping</span>
          <h2 id="cta-heading">Align Your Enterprise AI Initiatives with Governing Doctrine</h2>
          <p>
            If your organization is navigating complex transformations, distributed execution, or autonomous
            AI adoption and needs to preserve understanding, schedule a direct discovery consultation.
          </p>
          <Link className={styles.ctaButton} href="/contact">
            Start an Advisory Conversation &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
