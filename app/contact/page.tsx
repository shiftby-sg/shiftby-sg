import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./page.module.css";

export const metadata = getPageMetadata(pageMetadataEntries.contact);

const SERVICE_TITLES: Record<string, string> = {
  "organizational-knowledge-context-architecture": "Knowledge & Context Architecture Assessment",
  "context-drift-investigation": "Context Drift & Diagnostic Investigation",
  "bounded-ai-workflow-design": "Bounded AI & Multi-Agent Workflow Design",
  "rag-retrieval-assessment": "RAG & Enterprise Retrieval Assessment",
  "ai-governance-human-oversight": "AI Governance & Human Oversight Architecture",
  "ai-assurance-red-teaming": "AI Assurance & Red Teaming",
  "enterprise-understanding-advisory": "Enterprise Understanding Executive Advisory"
};

const CAPABILITY_TITLES: Record<string, string> = {
  "organizational-memory": "Organizational Memory",
  "bounded-ai": "Bounded AI",
  "human-ai-accountability": "Human–AI Accountability"
};

const conversationTopics = [
  { name: "Knowledge & Context Architecture", serviceSlug: "organizational-knowledge-context-architecture" },
  { name: "RAG & Enterprise Retrieval Assessment", serviceSlug: "rag-retrieval-assessment" },
  { name: "Bounded AI & Multi-Agent Workflows", serviceSlug: "bounded-ai-workflow-design" },
  { name: "AI Governance & Human Oversight", serviceSlug: "ai-governance-human-oversight" },
  { name: "AI Assurance & Red Teaming", serviceSlug: "ai-assurance-red-teaming" },
  { name: "Context Drift & Diagnostic Investigation", serviceSlug: "context-drift-investigation" },
  { name: "Enterprise Understanding Advisory", serviceSlug: "enterprise-understanding-advisory" },
  { name: "Other Strategic & Operational Challenges", serviceSlug: null }
];

interface ContactPageProps {
  searchParams?: Promise<{
    service?: string;
    capability?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const serviceSlug = resolvedParams.service;
  const capabilitySlug = resolvedParams.capability;

  const matchedServiceTitle = serviceSlug ? SERVICE_TITLES[serviceSlug] : undefined;
  const matchedCapabilityTitle = capabilitySlug ? CAPABILITY_TITLES[capabilitySlug] : undefined;

  const activeIntent = matchedServiceTitle
    ? { title: matchedServiceTitle, type: "service" }
    : matchedCapabilityTitle
      ? { title: matchedCapabilityTitle, type: "capability" }
      : null;

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="contact-title">
        {activeIntent && (
          <div className={styles.intentBanner} role="status" aria-live="polite">
            <span className={styles.intentBadge}>Selected Focus Area</span>
            <div className={styles.intentContent}>
              <p className={styles.intentTitle}>{activeIntent.title}</p>
              <p className={styles.intentSubtitle}>
                {activeIntent.type === "service"
                  ? "We have noted your interest in this service offering. Our introductory scoping conversation will be directly tailored to your operational boundaries and deliverable requirements."
                  : "We have noted your interest in this strategic capability. Our discussion will focus on practical paths toward establishing this assurance discipline in your organization."}
              </p>
            </div>
          </div>
        )}

        <div className={styles.heroCopy}>
          <span className={styles.kicker}>Contact &amp; Scoping</span>
          <h1 id="contact-title">Start a Conversation</h1>
          <div className={styles.ledeStack}>
            <p className={styles.lead}>
              Preserving confidence begins with understanding where execution,
              accountability, or context is drifting.
            </p>
            <p>
              If your organization is deploying AI workflows, navigating complex
              cross-system handoffs, or struggling to maintain legitimate authority
              over autonomous tasks, the most effective first step is a direct,
              unhurried evaluation of what needs to remain understood.
            </p>
          </div>
        </div>

        <aside className={styles.founderPanel} aria-label="Founder contact framing">
          <span className={styles.panelLabel}>Direct Conversation With</span>
          <p className={styles.founderName}>Ananda Krishna Marri</p>
          <p className={styles.founderRole}>Founder &amp; Principal Advisor, ShiftBy</p>
          <span className={styles.founderBadge}>
            IAPP Certified AI Governance Professional (AIGP)
          </span>
          <p>
            The conversation does not require a finished specification or formal RFP.
            It can begin with an emerging operational friction, a regulatory expectation,
            or an architectural question.
          </p>
          <p className={styles.contactDetail}>
            <a
              href="https://outlook.office.com/book/ShiftbySGBookingPage@shiftby.sg/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a 30-Min Call &rarr;
            </a>
          </p>
        </aside>
      </section>

      {/* Audit Finding R1: 3-step conversation timeline */}
      <section className={styles.nextSteps} aria-labelledby="next-steps-title">
        <div className={styles.nextStepsInner}>
          <div>
            <span className={styles.kicker}>Engagement Protocol</span>
            <h2 id="next-steps-title">What happens when you reach out.</h2>
            <p className={styles.lead}>
              A predictable, zero-pressure evaluation process designed to respect
              your time and establish immediate clarity.
            </p>
          </div>
          <div
            className={styles.nextStepList}
            aria-label="3-step conversation expectation timeline"
          >
            <article>
              <span className={styles.contactIndex}>Step 01</span>
              <h3>30-Minute Context &amp; Scope Call</h3>
              <p>
                We review your current state, operational boundaries, and specific
                questions directly with principal advisory. No generic slide decks,
                no junior triage, and no sales pitches.
              </p>
            </article>
            <article>
              <span className={styles.contactIndex}>Step 02</span>
              <h3>Scoping &amp; Boundary Summary</h3>
              <p>
                Within 48 hours, you receive a scoped summary of potential engagement
                boundaries, required authorizations, and expected concrete outputs
                (architecture models, red-team matrices, or control blueprints).
              </p>
            </article>
            <article>
              <span className={styles.contactIndex}>Step 03</span>
              <h3>Agreed Plan or Direct Referral</h3>
              <p>
                If there is mutual alignment, work commences under a defined,
                fixed-boundary agreement. If another specialized route or partner is
                better suited to your immediate needs, we point you there directly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.band} aria-labelledby="useful-title">
        <div className={styles.sectionGrid}>
          <div>
            <span className={styles.kicker}>Conversation Topics</span>
            <h2 id="useful-title">What would be useful to discuss?</h2>
          </div>
          <div className={styles.topicArea}>
            <p className={styles.lead}>
              Conversations typically anchor around areas where execution speed
              has outpaced understanding or governance:
            </p>
            <ul className={styles.topicGrid} aria-label="Useful conversation topics">
              {conversationTopics.map((topic) => {
                const isSelected =
                  (serviceSlug && topic.serviceSlug === serviceSlug) ||
                  (!serviceSlug &&
                    capabilitySlug &&
                    ((capabilitySlug === "organizational-memory" &&
                      topic.serviceSlug === "organizational-knowledge-context-architecture") ||
                      (capabilitySlug === "bounded-ai" &&
                        topic.serviceSlug === "bounded-ai-workflow-design") ||
                      (capabilitySlug === "human-ai-accountability" &&
                        topic.serviceSlug === "ai-governance-human-oversight")));

                return (
                  <li
                    key={topic.name}
                    className={isSelected ? styles.topicSelected : undefined}
                  >
                    {topic.name} {isSelected && " ✓"}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="connect-title">
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>Direct Channels</span>
          <h2 id="connect-title">Select the channel that fits your context.</h2>
          <p className={styles.lead}>
            Reach out via calendar scheduling, formal email correspondence, or secure messaging.
          </p>
        </div>
        <div className={styles.contactChannels} aria-label="Contact channels">
          <div className={styles.primaryContactGrid} aria-label="Primary contact channels">
            <article
              className={`${styles.contactCard} ${styles.primaryContactCard}`}
              style={{ gridTemplateRows: "auto auto 1fr auto" }}
            >
              <span className={styles.contactIndex}>01</span>
              <h3>Schedule a Call</h3>
              <p>
                Reserve a dedicated 30-minute introductory scoping call directly on
                our calendar.
              </p>
              <p className={styles.contactDetail} style={{ marginTop: "auto" }}>
                <a
                  href="https://outlook.office.com/book/ShiftbySGBookingPage@shiftby.sg/?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule in Outlook &rarr;
                </a>
              </p>
            </article>
            <article
              className={`${styles.contactCard} ${styles.primaryContactCard}`}
              style={{ gridTemplateRows: "auto auto 1fr auto" }}
            >
              <span className={styles.contactIndex}>02</span>
              <h3>Email</h3>
              <p>
                Send a brief overview of your organization&apos;s context, ongoing AI initiatives,
                or specific scoping questions.
              </p>
              <p className={styles.contactDetail} style={{ marginTop: "auto" }}>
                <a href="mailto:anandakrishnam@shiftby.sg">anandakrishnam@shiftby.sg</a>
              </p>
            </article>
            <article
              className={`${styles.contactCard} ${styles.primaryContactCard}`}
              style={{ gridTemplateRows: "auto auto 1fr auto" }}
            >
              <span className={styles.contactIndex}>03</span>
              <h3>LinkedIn</h3>
              <p>
                Connect directly with founder Ananda Krishna to discuss research,
                governance inquiries, or advisory fit.
              </p>
              <p className={styles.contactDetail} style={{ marginTop: "auto" }}>
                <a
                  href="https://www.linkedin.com/in/anandakrishnam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/anandakrishnam &rarr;
                </a>
              </p>
            </article>
          </div>
          <div className={styles.secondaryContactGrid} aria-label="Secondary contact channels">
            <article
              className={`${styles.contactCard} ${styles.secondaryContactCard}`}
              style={{ gridTemplateRows: "auto auto 1fr auto" }}
            >
              <span className={styles.contactIndex}>04</span>
              <h3>Direct Telephone</h3>
              <p>For urgent inquiries or preliminary executive briefings.</p>
              <p className={styles.contactDetail} style={{ marginTop: "auto" }}>
                <a href="tel:+6597517794">+65 9751 7794</a>
              </p>
            </article>
            <article
              className={`${styles.contactCard} ${styles.secondaryContactCard}`}
              style={{ gridTemplateRows: "auto auto 1fr auto" }}
            >
              <span className={styles.contactIndex}>05</span>
              <h3>WhatsApp</h3>
              <p>Direct mobile messaging for brief context notes.</p>
              <p className={styles.contactDetail} style={{ marginTop: "auto" }}>
                <a
                  href="https://wa.me/6597517794"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  wa.me/6597517794 &rarr;
                </a>
              </p>
            </article>
            <article
              className={`${styles.contactCard} ${styles.secondaryContactCard}`}
              style={{ gridTemplateRows: "auto auto 1fr auto" }}
            >
              <span className={styles.contactIndex}>06</span>
              <h3>Telegram</h3>
              <p>Secure messaging channel for direct notes.</p>
              <p className={styles.contactDetail} style={{ marginTop: "auto" }}>
                <a
                  href="https://t.me/anandakrishnam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  t.me/anandakrishnam &rarr;
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={styles.closingInner}>
          <span className={styles.kicker}>Underlying Principle</span>
          <h2 id="closing-title">The first step is understanding the challenge clearly.</h2>
          <p>
            Execution changes. Understanding preserves confidence. When decisions,
            agents, and systems multiply, clarity regarding boundaries and accountability
            is the only foundation that sustains leadership trust.
          </p>
        </div>
      </section>

      <section
        aria-label="Formal Correspondence"
        className={styles.section}
        style={{ paddingBlock: "clamp(32px, 5vw, 56px)" }}
      >
        <div
          style={{
            borderTop: "1px solid var(--contact-border)",
            display: "grid",
            gap: "12px",
            maxWidth: "760px",
            paddingTop: "clamp(22px, 3vw, 30px)"
          }}
        >
          <span className={styles.kicker}>Registered Entity &amp; Office</span>
          <address style={{ display: "grid", fontStyle: "normal", gap: "6px" }}>
            <p className={styles.contactDetail}>ShiftBy Pte. Ltd.</p>
            <p>
              2 Venture Drive, #19-18
              <br />
              Vision Exchange
              <br />
              Singapore 608526
            </p>
            <p className={styles.contactDetail}>UEN: 202426424E</p>
          </address>
        </div>
      </section>
    </div>
  );
}
