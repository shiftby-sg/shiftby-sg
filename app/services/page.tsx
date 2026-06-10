import Link from "next/link";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(pageMetadataEntries.services);

export default function ServicesPage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="section hero">
        <div>
          <p className="kicker">Services</p>
          <h1 id="hero-title">From understanding to action.</h1>
        </div>
        <div className="hero-copy">
          <div className="hero-lines">
            <p className="lead">
              The practical challenge is knowing how to move forward when
              decisions, knowledge, accountability, and execution must remain
              connected through change.
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
            <div className="hero-actions">
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
            <p className="kicker">From understanding to action</p>
            <h2 id="intro-title">Uncertainty remains when context is unclear.</h2>
          </div>
          <div className="stacked-lines">
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
            <ul className="progression-list">
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
            <p className="kicker">Common questions</p>
            <h2 id="questions-title">The questions are often familiar.</h2>
          </div>
          <p className="lead">
            Different organizations arrive from different starting points. The
            questions often sound similar.
          </p>
        </div>
        <div className="question-grid">
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
              accountability, and organizational memory remain connected.
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
              <p className="kicker">How ShiftBy helps</p>
              <h2 id="themes-title">How ShiftBy helps in practice</h2>
            </div>
            <p className="lead">
              The questions come first. The support follows the organizational
              reality.
            </p>
          </div>

          <div className="engagement-list">
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
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul className="signal-list">
                  <li>Opportunity understanding</li>
                  <li>AI use-case prioritization</li>
                  <li>Investment rationale mapping</li>
                  <li>Decision traceability</li>
                  <li>Cross-functional alignment</li>
                  <li>Responsible AI application</li>
                  <li>POC-to-scale decision support</li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">Preparing the organization to act</p>
                <h3>Readiness before adoption</h3>
                <p>Readiness rarely begins with tools.</p>
                <p>
                  Leaders need clarity. Teams need shared context.
                  Organizational memory, privacy, suppliers, decision
                  ownership, and ways of working need to support change before
                  adoption can move forward with confidence.
                </p>
                <p>
                  AI readiness assessment, AI capability readiness, and AI
                  workforce readiness matter most when they clarify what needs
                  to remain understood.
                </p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul className="signal-list">
                  <li>Shared understanding baseline</li>
                  <li>AI readiness</li>
                  <li>Supplier readiness</li>
                  <li>Leadership alignment</li>
                  <li>Decision ownership mapping</li>
                  <li>Organizational clarity</li>
                  <li>Capability development</li>
                  <li>Knowledge readiness</li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">Improving work without losing context</p>
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
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul className="signal-list">
                  <li>Knowledge-connected workflows</li>
                  <li>Enterprise knowledge graph patterns</li>
                  <li>Governed artifact generation</li>
                  <li>Requirements generation</li>
                  <li>Traceability matrices</li>
                  <li>Quality documentation</li>
                  <li>Organizational memory preservation</li>
                  <li>Human-AI collaboration</li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">Preserving trust as execution changes</p>
                <h3>Trust, accountability, and assurance</h3>
                <p>Trust becomes more important as execution becomes more distributed.</p>
                <p>
                  Governance can provide structure, but trust is the outcome.
                  Trust also depends on accountability, oversight, evidence,
                  assurance, safety, security, resilience, and understanding as
                  execution changes.
                </p>
                <p>
                  Responsible AI, AI risk management, AI assurance, and
                  third-party AI risk depend on the same connected evidence.
                </p>
                <p>Trust is the outcome; governance is one mechanism that supports it.</p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul className="signal-list">
                  <li>Responsible AI</li>
                  <li>AI governance</li>
                  <li>AI risk management</li>
                  <li>AI safety</li>
                  <li>AI security</li>
                  <li>Data privacy</li>
                  <li>Data protection</li>
                  <li>Operational resilience</li>
                  <li>Audit readiness</li>
                  <li>Assurance support</li>
                </ul>
              </div>
            </article>
          </div>

          <div aria-labelledby="help-examples-title" className="engagement-block">
            <div>
              <h3 id="help-examples-title">Where uncertainty often appears</h3>
              <p>
                These are common situations where organizations need decisions,
                knowledge, accountability, and execution to remain connected.
              </p>
            </div>
            <ul className="example-list">
              <li>Choosing where effort should focus when value, risk, and accountability are uncertain</li>
              <li>Preparing an organization when readiness, ownership, and capability are uneven</li>
              <li>Scaling execution across R&amp;D, manufacturing, supply chain, and knowledge work without losing context</li>
              <li>Introducing AI participation without losing accountability or decision lineage</li>
              <li>Maintaining trust, traceability, assurance, and audit readiness in regulated environments</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="support-title" className="section support-columns">
        <div className="support-copy">
          <p className="kicker">Where these challenges appear</p>
          <h2 id="support-title">Where these challenges often appear</h2>
          <p>
            These challenges become most visible where decisions, knowledge,
            accountability, risk, and execution must remain connected despite
            organizational complexity and change.
          </p>
        </div>
        <div className="recognition">
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
        <div className="section doctrine-callout">
          <div className="doctrine-inner">
            <p className="kicker">Why it matters</p>
            <div className="doctrine-lines" id="why-title">
              <span>Technology changes.</span>
              <span>Execution changes.</span>
              <span>Understanding remains essential.</span>
            </div>
          </div>
          <div className="doctrine-copy">
            <p>Organizations are rarely solving technology challenges alone.</p>
            <p>
              They are navigating decisions, change, accountability,
              organizational memory, risk, and execution.
            </p>
            <p>
              Strengthening understanding helps organizations move forward with
              greater trust, clarity, assurance, and alignment.
            </p>
            <p className="doctrine-takeaway">
              Understanding must remain connected enough for action. When
              decisions, knowledge, accountability, and execution remain
              connected, organizations can move with greater confidence.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="conversation-title" className="section conversation">
        <div>
          <p className="kicker">Start a conversation</p>
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
          <div className="conversation-actions">
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
          <div className="action-sequence">
            <span>Understanding</span>
            <span className="arrow">→</span>
            <span>Confidence</span>
            <span className="arrow">→</span>
            <span>Action</span>
          </div>
        </div>
      </section>
    </>
  );
}
