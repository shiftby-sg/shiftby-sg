import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | ShiftBy",
  description:
    "How ShiftBy helps organizations apply an understanding-preservation perspective to decisions, readiness, work changes, trust, and AI-enabled execution.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <div className="services-design-port">
      <section aria-labelledby="hero-title" className="section hero">
        <div>
          <span className="kicker">Services</span>
          <h1 id="hero-title">From understanding to action.</h1>
        </div>
        <div className="hero-copy">
          <div className="hero-lines">
            <p className="lead">
              The practical challenge is knowing how to move forward when
              decisions, knowledge, accountability, and execution must remain
              connected as change and drift appear.
            </p>
            <p className="lead">
              AI is one current setting where that challenge becomes visible,
              but the work is broader than AI.
            </p>
          </div>
          <div>
            <p className="hero-note">
              ShiftBy helps organizations move from uncertainty to
              understanding, assurance, and action.
            </p>
            <div aria-label="Services page links" className="hero-actions">
              <Link className="button primary" href="/contact">
                Start a conversation
              </Link>
              <Link className="button secondary" href="/perspective">
                Explore the perspective
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="intro-title" className="quiet-band">
        <div className="section split compact-bridge">
          <div>
            <span className="kicker">From understanding to action</span>
            <h2 id="intro-title">Uncertainty remains when context is unclear.</h2>
          </div>
          <div aria-label="Practical introduction" className="stacked-lines">
            <p className="lead">
              Opportunities may exist. Technology may be available. The harder
              question is whether the organization understands where to act,
              what assumptions are being made, who remains accountable, and
              what must remain connected as execution changes.
            </p>
            <p className="lead">
              The explorations investigate how understanding survives change.
              Services help organizations apply those lessons where decisions,
              knowledge, accountability, and execution need to remain
              connected.
            </p>
            <ul aria-label="What must be worked through" className="progression-list">
              <li>
                <span className="progression-term">Priorities</span>
                <span className="progression-line">need to be understood.</span>
              </li>
              <li>
                <span className="progression-term">People</span>
                <span className="progression-line">need shared context.</span>
              </li>
              <li>
                <span className="progression-term">Accountability</span>
                <span className="progression-line">must remain clear.</span>
              </li>
              <li>
                <span className="progression-term">Trust</span>
                <span className="progression-line">has to be earned.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="questions-title" className="section">
        <div className="question-head">
          <div>
            <span className="kicker">Common questions</span>
            <h2 id="questions-title">The questions are often familiar.</h2>
          </div>
          <p className="lead">
            Different organizations arrive from different starting points. The
            questions often sound similar.
          </p>
        </div>
        <div aria-label="Common organizational questions" className="question-grid">
          <article className="question-card">
            <small>01</small>
            <h3>Where should we start?</h3>
            <p>
              Opportunities may be visible. Knowing where value,
              responsibility, and risk can be understood is harder.
            </p>
          </article>
          <article className="question-card">
            <small>02</small>
            <h3>Are we ready?</h3>
            <p>
              People, organizational memory, privacy, suppliers, ownership, and
              ways of working may not be equally prepared.
            </p>
          </article>
          <article className="question-card">
            <small>03</small>
            <h3>How should work improve?</h3>
            <p>
              Execution can improve only when context, traceability,
              accountability, organizational memory, and drift visibility remain
              connected.
            </p>
          </article>
          <article className="question-card">
            <small>04</small>
            <h3>Can we trust it?</h3>
            <p>
              Trust depends on accountability, oversight, evidence, safety,
              security, resilience, and understanding as execution changes.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="themes-title" className="quiet-band">
        <div className="section">
          <div className="engagement-intro">
            <div>
              <span className="kicker">How ShiftBy helps</span>
              <h2 id="themes-title">How ShiftBy helps in practice</h2>
            </div>
            <p className="lead">
              The questions come first. The support follows the organizational
              reality.
            </p>
            <p className="lead">
              Support may take the form of advisory engagements, executive
              workshops, leadership coaching, readiness assessments, operating
              model design, governance initiatives, or facilitated
              decision-making engagements.
            </p>
          </div>
          <div aria-label="How ShiftBy helps in practice" className="engagement-list">
            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">Choosing where to act</p>
                <h3>AI direction and decision clarity</h3>
                <p>The challenge is rarely finding opportunities.</p>
                <p>
                  More often, organizations need to understand which
                  opportunities deserve action, what assumptions are being made,
                  what trade-offs affect decision quality, where value may
                  emerge, and where accountability must remain visible.
                </p>
                <p>
                  This can include AI adoption strategy, AI transformation
                  strategy, enterprise AI roadmap questions, and the AI
                  operating model needed to keep decisions explainable.
                </p>
                <p>
                  Action becomes easier when investment, effort, and
                  organizational change are guided by clear rationale.
                </p>
                <p>
                  Decision clarity also helps identify where assumptions, value
                  expectations, or accountability may drift over time.
                </p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul aria-label="Choosing where to act support" className="signal-list">
                  <li className="is-primary">Opportunity understanding</li>
                  <li className="is-primary">AI use-case prioritization</li>
                  <li className="is-primary">Investment rationale mapping</li>
                  <li className="is-primary">Decision traceability</li>
                  <li className="is-primary">Cross-functional alignment</li>
                  <li className="is-primary">Responsible AI application</li>
                  <li className="is-primary">POC-to-scale decision support</li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Preparing the organization to act
                </p>
                <h3>Readiness before adoption</h3>
                <p>Readiness rarely begins with tools.</p>
                <p>
                  Leaders need clarity before decisions move. Teams need shared
                  context and AI literacy before work changes. Data readiness,
                  knowledge readiness, organizational readiness, and change
                  readiness need to support adoption without losing context,
                  accountability, or confidence.
                </p>
                <p>
                  AI readiness assessment, AI capability readiness, and AI
                  workforce readiness matter most when they clarify what needs
                  to remain understood.
                </p>
                <p>
                  Readiness helps people, data, and knowledge remain aligned as
                  change begins and drift appears.
                </p>
                <p>
                  Executive workshops, leadership coaching, and executive AI
                  briefings can help clarify whether an AI readiness assessment,
                  AI capability readiness, or AI workforce readiness effort is
                  ready to move forward.
                </p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul
                  aria-label="Preparing the organization support"
                  className="signal-list"
                >
                  <li className="is-primary">Executive workshops</li>
                  <li className="is-primary">Leadership coaching</li>
                  <li className="is-primary">Shared understanding baseline</li>
                  <li className="is-primary">AI literacy</li>
                  <li className="is-primary">Workforce readiness</li>
                  <li className="is-primary">Change readiness</li>
                  <li className="is-primary">Data readiness</li>
                  <li className="is-primary">Knowledge readiness</li>
                  <li className="is-primary">Supplier readiness</li>
                  <li className="is-primary">Leadership alignment</li>
                  <li className="is-primary">Decision ownership mapping</li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Improving work without losing context
                </p>
                <h3>Human-AI work that remains explainable</h3>
                <p>Deploying AI is not the same as improving work.</p>
                <p>
                  AI and automation are useful when they improve execution while
                  preserving context, rationale, traceability, accountability,
                  and the organizational memory that understanding depends on.
                </p>
                <p>
                  AI agents, agentic AI, knowledge-connected AI systems, and
                  enterprise AI workflows need that context to remain
                  explainable.
                </p>
                <p>
                  Knowledge-connected AI systems also help make context drift
                  easier to see.
                </p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul aria-label="Improving work support" className="signal-list">
                  <li className="is-primary">Knowledge-connected workflows</li>
                  <li className="is-primary">Enterprise knowledge graph patterns</li>
                  <li className="is-primary">Governed artifact generation</li>
                  <li className="is-primary">Requirements generation</li>
                  <li className="is-primary">Traceability matrices</li>
                  <li className="is-primary">Quality documentation</li>
                  <li className="is-primary">
                    Organizational memory preservation
                  </li>
                  <li className="is-primary">Human-AI collaboration</li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Preserving trust as execution changes
                </p>
                <h3>Trust, accountability, and assurance</h3>
                <p>
                  Trust becomes more important as execution becomes more
                  distributed.
                </p>
                <p>
                  Governance can provide structure, but trust is the outcome.
                  Trust also depends on accountability, oversight, evidence,
                  assurance, safety, security, resilience, and understanding as
                  execution changes.
                </p>
                <p>
                  Responsible AI, AI governance, AI risk management, AI
                  assurance, and third-party AI risk depend on the same
                  connected evidence.
                </p>
                <p>
                  Trust weakens when risk, accountability, evidence, or
                  assurance drift away from how work is actually performed.
                </p>
                <p>Trust is the outcome; governance is one mechanism that supports it.</p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul aria-label="Preserving trust support" className="signal-list">
                  <li className="is-primary">Responsible AI</li>
                  <li className="is-primary">AI governance</li>
                  <li className="is-primary">AI risk management</li>
                  <li className="is-primary">AI safety</li>
                  <li className="is-primary">AI security</li>
                  <li className="is-primary">Data privacy</li>
                  <li className="is-primary">Data protection</li>
                  <li className="is-primary">Operational resilience</li>
                  <li className="is-primary">Audit readiness</li>
                  <li className="is-primary">AI assurance</li>
                </ul>
              </div>
            </article>
          </div>

          <div aria-labelledby="help-examples-title" className="help-examples">
            <div>
              <h3 id="help-examples-title">Where uncertainty often appears</h3>
              <p>
                These are common situations where organizations need decisions,
                knowledge, accountability, and execution to remain connected.
              </p>
            </div>
            <ul className="example-list">
              <li>
                Choosing where effort should focus when value, risk, and
                accountability are uncertain
              </li>
              <li>
                Preparing an organization when readiness, ownership, and
                capability are uneven
              </li>
              <li>
                Scaling execution across R&amp;D, manufacturing, supply chain,
                and knowledge work without losing context
              </li>
              <li>
                Introducing AI participation without losing accountability or
                decision lineage
              </li>
              <li>
                Maintaining trust, traceability, assurance, and audit readiness
                in regulated environments
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="support-title" className="section support-columns">
        <div className="support-copy">
          <span className="kicker">Where these challenges appear</span>
          <h2 id="support-title">Where these challenges often appear</h2>
          <p>
            These challenges become most visible where decisions, knowledge,
            accountability, risk, and execution must remain connected despite
            organizational complexity and change.
          </p>
        </div>
        <div aria-label="Organizations and functions" className="recognition">
          <div>
            <h3>Industries</h3>
            <ul>
              <li>Pharmaceuticals</li>
              <li>MedTech</li>
              <li>Consumer Health</li>
              <li>Manufacturing</li>
              <li>Supply Chain</li>
              <li>Regulated Environments</li>
            </ul>
          </div>
          <div>
            <h3>Functions</h3>
            <ul>
              <li>Executive Leadership</li>
              <li>Enterprise Functions</li>
              <li>Research &amp; Development</li>
              <li>Manufacturing Operations</li>
              <li>Supply Chain</li>
              <li>Quality &amp; Compliance</li>
              <li>Technology</li>
              <li>Cybersecurity &amp; Risk</li>
              <li>Audit &amp; Assurance</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-title" className="quiet-band">
        <div className="section doctrine-section">
          <div className="doctrine-inner">
            <span className="kicker">Why it matters</span>
            <h2 id="why-title">
              <span className="doctrine-line">Technology changes.</span>
              <span className="doctrine-line">Execution changes.</span>
              <span className="doctrine-line doctrine-final">
                Understanding preserves confidence.
              </span>
            </h2>
            <div className="doctrine-copy">
              <p>Organizations are rarely solving technology challenges alone.</p>
              <p>
                They are navigating decisions, change, accountability,
                organizational memory, risk, and execution.
              </p>
              <p>
                Strengthening understanding helps organizations move forward
                with greater trust, clarity, assurance, and alignment.
              </p>
            </div>
            <p className="doctrine-takeaway">
              Understanding must remain connected enough for action. When
              decisions, knowledge, accountability, and execution remain
              connected, organizations can move with greater confidence.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="conversation-title"
        className="section conversation"
      >
        <div>
          <span className="kicker">Start a conversation</span>
          <h2 id="conversation-title">
            Start with the challenge. Continue with the conversation.
          </h2>
          <div className="conversation-copy">
            <p>
              Whether your organization is making decisions, preparing for AI,
              changing how work is done, or strengthening accountability, the
              first step is understanding the challenge clearly.
            </p>
          </div>
          <div aria-label="Final Services page links" className="cta-actions">
            <Link className="button primary" href="/contact">
              Start a conversation
            </Link>
            <Link className="button secondary" href="/explorations">
              Return to explorations
            </Link>
          </div>
        </div>
        <div className="cta-note">
          <p>Understand the challenge.</p>
          <p>Build confidence.</p>
          <p>Move forward.</p>
          <div aria-label="Understanding confidence action" className="action-sequence">
            <span>Understanding</span>
            <span aria-hidden="true" className="arrow">
              →
            </span>
            <span>Confidence</span>
            <span aria-hidden="true" className="arrow">
              →
            </span>
            <span>Action</span>
          </div>
        </div>
      </section>
    </div>
  );
}
