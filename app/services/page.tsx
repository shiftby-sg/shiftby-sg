import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "AI Advisory Services | AI Adoption, Governance & Intelligent Operations | ShiftBy"
  },
  description:
    "ShiftBy helps organizations adopt AI with confidence through AI readiness, governance, intelligent operations, decision traceability, and responsible transformation.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <div className="services-design-port">
      <style>{`
        .services-design-port .service-example-item {
          font-size: clamp(14px, 0.95rem, 16px);
          font-weight: 400;
          line-height: 1.34;
        }

        .services-design-port .doctrine-takeaway-polished {
          max-width: 860px;
        }
      `}</style>
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
              <Link className="button secondary" href="/capabilities">
                Explore capabilities
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
              knowledge, ownership, and execution need durable lineage.
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
              People, knowledge, data, suppliers, ownership, and ways of
              working may not be equally prepared.
            </p>
          </article>
          <article className="question-card">
            <small>03</small>
            <h3>How should work improve?</h3>
            <p>
              Execution can improve only when rationale, traceability,
              ownership, organizational memory, and drift visibility remain
              available.
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
            <div className="stacked-lines">
              <p className="lead">
                The questions come first. The support follows the organizational
                reality.
              </p>
              <p className="lead">
                Support may take the form of advisory engagements, executive
                workshops, leadership coaching, readiness assessments, operating
                model design, governance work, or facilitated decision-making.
              </p>
            </div>
          </div>
          <div aria-label="How ShiftBy helps in practice" className="engagement-list">
            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">Choosing Where To Act</p>
                <p className="signal-context">
                  <strong>AI Adoption &amp; Transformation</strong>
                </p>
                <h3>AI direction and decision clarity</h3>
                <p>The challenge is rarely finding opportunities.</p>
                <p>
                  The harder question is where AI should focus, where value may
                  emerge, and where ownership must remain visible.
                </p>
                <p>
                  ShiftBy helps clarify{" "}
                  <strong>AI adoption strategy</strong>,{" "}
                  <strong>AI transformation strategy</strong>, roadmap choices,
                  and the <strong>AI operating model</strong> needed to keep
                  decisions explainable. The outcome is clearer rationale for
                  where to invest and what to change.
                </p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul aria-label="Choosing where to act support" className="signal-list">
                  <li className="is-primary service-example-item">Business value assessment</li>
                  <li className="is-primary service-example-item">AI opportunity prioritization</li>
                  <li className="is-primary service-example-item">AI roadmap development</li>
                  <li className="is-primary service-example-item">Business process analysis</li>
                  <li className="is-primary service-example-item">Business process redesign</li>
                  <li className="is-primary service-example-item">POC-to-scale decision support</li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Preparing The Organization To Act
                </p>
                <p className="signal-context">
                  <strong>AI Readiness &amp; Enablement</strong>
                </p>
                <h3>Readiness before adoption</h3>
                <p>Readiness rarely begins with tools.</p>
                <p>
                  Leaders need clarity, teams need confidence, and
                  organizations need shared understanding before{" "}
                  <strong>AI adoption</strong> can succeed.
                </p>
                <p>
                  ShiftBy helps assess <strong>people</strong>, ways of
                  working, <strong>knowledge</strong>, <strong>data</strong>,{" "}
                  <strong>suppliers</strong>, and{" "}
                  <strong>governance</strong> so readiness is grounded in
                  organizational reality. The outcome is a clearer baseline for
                  adoption, ownership, and enablement.
                </p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul
                  aria-label="Preparing the organization support"
                  className="signal-list"
                >
                  <li className="is-primary service-example-item">Executive workshops</li>
                  <li className="is-primary service-example-item">Leadership coaching</li>
                  <li className="is-primary service-example-item">AI literacy</li>
                  <li className="is-primary service-example-item">Workforce readiness</li>
                  <li className="is-primary service-example-item">Shared understanding baseline</li>
                  <li className="is-primary service-example-item">Decision ownership mapping</li>
                  <li className="is-primary service-example-item">Data readiness</li>
                  <li className="is-primary service-example-item">Knowledge readiness</li>
                  <li className="is-primary service-example-item">Supplier readiness</li>
                  <li className="is-primary service-example-item">Governance readiness</li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Improving Work Without Losing Context
                </p>
                <p className="signal-context">
                  <strong>AI Agents &amp; Intelligent Operations</strong>
                </p>
                <h3>Human-AI work that remains explainable</h3>
                <p>Deploying AI is not the same as improving work.</p>
                <p>
                  <strong>AI agents</strong>,{" "}
                  intelligent operations,{" "}
                  <strong>knowledge-connected AI systems</strong>, and{" "}
                  <strong>enterprise AI workflows</strong> need intent,
                  rationale, traceability, ownership, and organizational memory
                  to remain explainable.
                </p>
                <p>
                  ShiftBy helps shape <strong>human-AI collaboration</strong>,{" "}
                  governed artifact generation, requirements generation,{" "}
                  <strong>traceability matrices</strong>, and{" "}
                  quality documentation without losing the meaning behind the
                  work.
                </p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul aria-label="Improving work support" className="signal-list">
                  <li className="is-primary service-example-item">AI agent governance</li>
                  <li className="is-primary service-example-item">Knowledge-connected workflows</li>
                  <li className="is-primary service-example-item">Enterprise knowledge graph patterns</li>
                  <li className="is-primary service-example-item">Governed artifact generation</li>
                  <li className="is-primary service-example-item">Requirements generation</li>
                  <li className="is-primary service-example-item">Traceability matrices</li>
                  <li className="is-primary service-example-item">Quality documentation</li>
                  <li className="is-primary service-example-item">Human-AI collaboration</li>
                  <li className="is-primary service-example-item">
                    Organizational memory preservation
                  </li>
                </ul>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Preserving Trust As Execution Changes
                </p>
                <p className="signal-context">
                  <strong>AI Governance, Safety &amp; Resilience</strong>
                </p>
                <h3>Trust, accountability, and assurance</h3>
                <p>Governance is not the outcome. Trust is.</p>
                <p>
                  <strong>Responsible AI</strong>,{" "}
                  <strong>AI governance</strong>,{" "}
                  <strong>AI risk management</strong>,{" "}
                  AI assurance, and third-party AI risk depend on clear
                  evidence, ownership, safety, security, privacy, and
                  resilience.
                </p>
                <p>
                  ShiftBy helps map oversight, assurance evidence,{" "}
                  <strong>audit readiness</strong>, and{" "}
                  <strong>operational resilience</strong> to how execution
                  actually changes. The outcome is confidence that can be
                  explained, reviewed, and defended.
                </p>
              </div>
              <div className="engagement-signals">
                <p className="signal-context">Examples may include</p>
                <ul aria-label="Preserving trust support" className="signal-list">
                  <li className="is-primary service-example-item">Responsible AI</li>
                  <li className="is-primary service-example-item">AI governance</li>
                  <li className="is-primary service-example-item">AI risk management</li>
                  <li className="is-primary service-example-item">AI safety</li>
                  <li className="is-primary service-example-item">AI security</li>
                  <li className="is-primary service-example-item">Data privacy</li>
                  <li className="is-primary service-example-item">Data protection</li>
                  <li className="is-primary service-example-item">Third-party AI risk</li>
                  <li className="is-primary service-example-item">Operational resilience</li>
                  <li className="is-primary service-example-item">Audit readiness</li>
                  <li className="is-primary service-example-item">AI assurance</li>
                  <li className="is-primary service-example-item">Assurance evidence mapping</li>
                </ul>
              </div>
            </article>
          </div>

          <div
            aria-labelledby="help-examples-title"
            className="help-examples"
            style={{
              gap: "clamp(24px, 3.4vw, 48px)",
              marginTop: 0,
              paddingTop: "clamp(22px, 3vw, 34px)"
            }}
          >
            <div>
              <h3 id="help-examples-title">Where conversations often begin</h3>
              <p>
                These are common situations where decisions, knowledge,
                ownership, and execution need to remain explainable before
                action can move forward.
              </p>
            </div>
            <ul className="example-list" style={{ marginTop: 0 }}>
              <li>
                Choosing where AI effort and investment should focus
              </li>
              <li>
                Preparing people, knowledge, data, and suppliers for AI adoption
              </li>
              <li>
                Scaling execution across R&amp;D, manufacturing, supply chain,
                and knowledge work
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
          <span className="kicker">Where this work applies</span>
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
              <li>Transformation</li>
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
                They are navigating decisions, change, ownership,
                organizational memory, risk, and execution.
              </p>
              <p>
                Strengthening understanding helps organizations move forward
                with greater trust, clarity, assurance, and alignment.
              </p>
            </div>
            <p className="doctrine-takeaway doctrine-takeaway-polished">
              Understanding must remain connected enough for action. When
              decisions, knowledge, ownership, and execution retain enough
              lineage, organizations can move with greater confidence.
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
              changing how work is done, or strengthening ownership, the
              first step is understanding the challenge clearly.
            </p>
          </div>
          <div aria-label="Final Services page links" className="cta-actions">
            <Link className="button primary" href="/contact">
              Start a conversation
            </Link>
            <Link className="button secondary" href="/capabilities">
              Explore capabilities
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
