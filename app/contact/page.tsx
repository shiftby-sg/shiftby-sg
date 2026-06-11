import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./page.module.css";

export const metadata = getPageMetadata(pageMetadataEntries.contact);

const conversationTopics = [
  "AI adoption",
  "AI readiness",
  "AI governance",
  "Organizational memory",
  "Decision traceability",
  "Adaptive execution",
  "Other organizational challenges"
] as const;

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>Contact</span>
          <h1 id="contact-title">Start a Conversation</h1>
          <div className={styles.ledeStack}>
            <p className={styles.lead}>
              Understanding often begins with a conversation, especially when
              the challenge is not yet fully defined.
            </p>
            <p>
              If decisions, knowledge, accountability, or AI-enabled execution
              are becoming harder to explain, the useful first step is to look
              at what needs to remain understood.
            </p>
          </div>
        </div>
        <aside className={styles.founderPanel} aria-label="Founder contact framing">
          <span className={styles.panelLabel}>Conversation with</span>
          <p className={styles.founderName}>Anand Krishna</p>
          <p className={styles.founderRole}>Founder, ShiftBy</p>
          <p>
            The conversation does not need to begin with a finished requirement.
            It can begin with a pattern, a concern, or a question that needs
            clearer understanding.
          </p>
          <p className={styles.contactDetail}>
            <a href="https://outlook.office.com/book/ShiftbySGBookingPage@shiftby.sg/?ismsaljsauthenabled">
              Schedule a Conversation
            </a>
          </p>
        </aside>
      </section>

      <section className={styles.band} aria-labelledby="useful-title">
        <div className={styles.sectionGrid}>
          <div>
            <span className={styles.kicker}>Useful to discuss</span>
            <h2 id="useful-title">What would be useful to discuss?</h2>
          </div>
          <div className={styles.topicArea}>
            <p className={styles.lead}>
              The conversation can start wherever the organizational challenge
              is becoming visible.
            </p>
            <ul className={styles.topicGrid} aria-label="Useful conversation topics">
              {conversationTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="connect-title">
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>How to connect</span>
          <h2 id="connect-title">Begin with the channel that fits the question.</h2>
          <p className={styles.lead}>
            The aim is a useful conversation, not a qualification step or a
            sales process.
          </p>
        </div>
        <div className={styles.contactGrid} aria-label="Contact mechanisms">
          <article className={styles.contactCard}>
            <span className={styles.contactIndex}>01</span>
            <h3>Email</h3>
            <p>
              Use email when the context is easier to describe in writing or
              when a short note is enough to begin.
            </p>
            <p className={styles.contactDetail}>
              <a href="mailto:anandakrishnam@shiftby.sg">anandakrishnam@shiftby.sg</a>
            </p>
          </article>
          <article className={styles.contactCard}>
            <span className={styles.contactIndex}>02</span>
            <h3>LinkedIn</h3>
            <p>
              Use LinkedIn when the conversation should begin through Anand
              Krishna directly.
            </p>
            <p className={styles.contactDetail}>
              <a href="https://www.linkedin.com/in/anandakrishnam">
                linkedin.com/in/anandakrishnam
              </a>
            </p>
          </article>
          <article className={styles.contactCard}>
            <span className={styles.contactIndex}>03</span>
            <h3>Phone</h3>
            <p>
              Use phone when a direct conversation is the clearest way to
              establish context.
            </p>
            <p className={styles.contactDetail}>
              <a href="tel:+6597517794">+65 97517794</a>
            </p>
          </article>
          <article className={styles.contactCard}>
            <span className={styles.contactIndex}>04</span>
            <h3>WhatsApp</h3>
            <p>
              Use WhatsApp when a short message is enough to begin the
              conversation.
            </p>
            <p className={styles.contactDetail}>
              <a href="https://wa.me/6597517794">wa.me/6597517794</a>
            </p>
          </article>
          <article className={styles.contactCard}>
            <span className={styles.contactIndex}>05</span>
            <h3>Telegram</h3>
            <p>
              Use Telegram when that is the easier channel for an initial note.
            </p>
            <p className={styles.contactDetail}>
              <a href="https://t.me/anandakrishnam">t.me/anandakrishnam</a>
            </p>
          </article>
          <article className={styles.contactCard}>
            <span className={styles.contactIndex}>06</span>
            <h3>Address</h3>
            <p>
              Use the office address when the conversation requires formal
              correspondence.
            </p>
            <p className={styles.contactDetail}>
              2 Venture Drive, #19-18, Vision Exchange, Singapore 608526
            </p>
          </article>
          <article className={styles.contactCard}>
            <span className={styles.contactIndex}>07</span>
            <h3>Scheduling</h3>
            <p>
              Scheduling can follow once the question and context are clear
              enough for a focused discussion.
            </p>
            <p className={styles.contactDetail}>
              <a href="https://outlook.office.com/book/ShiftbySGBookingPage@shiftby.sg/?ismsaljsauthenabled">
                Schedule a conversation
              </a>
            </p>
          </article>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={styles.closingInner}>
          <span className={styles.kicker}>First step</span>
          <h2 id="closing-title">The first step is understanding the challenge clearly.</h2>
          <p>
            From there, the right next conversation can be shaped around what
            needs to remain connected, explainable, and understood as execution
            changes.
          </p>
        </div>
      </section>
    </div>
  );
}
