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

        .services-design-port .service-output-group {
          display: grid;
          gap: 8px;
          margin-top: clamp(10px, 1.4vw, 14px);
          padding-top: clamp(8px, 1vw, 12px);
        }

        .services-design-port .engagement-block {
          align-items: start;
          grid-template-columns: minmax(0, 0.6fr) minmax(0, 0.38fr);
          gap: clamp(10px, 1vw, 16px);
        }

        .services-design-port .engagement-copy {
          max-width: none;
        }

        .services-design-port .service-story-label {
          color: color-mix(in oklch, var(--muted), transparent 8%);
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 680;
          letter-spacing: 0.12em;
          line-height: 1.2;
          margin-top: clamp(8px, 1vw, 12px);
          text-transform: uppercase;
        }

        .services-design-port .service-story-label + p {
          margin-top: -2px;
        }

        .services-design-port .engagement-copy > p.signal-context.service-category {
          color: color-mix(in oklch, var(--accent) 84%, var(--fg)) !important;
          font-weight: 640;
        }

        .services-design-port .engagement-copy > p.signal-context.service-category strong {
          color: inherit;
          font-weight: inherit;
        }

        .services-design-port .engagement-copy > .service-lens {
          color: color-mix(in oklch, var(--muted), var(--fg) 18%) !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.13em !important;
          line-height: 1.32 !important;
          margin: 3px 0 2px !important;
          text-transform: uppercase;
        }

        .services-design-port .engagement-signals {
          width: 100%;
          max-width: none;
          align-self: start;
          justify-self: stretch;
          margin-top: clamp(54px, 4.6vw, 70px);
          padding-left: clamp(10px, 1vw, 14px);
        }

        .services-design-port .engagement-signals .signal-list {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px clamp(12px, 1.2vw, 16px);
          width: 100%;
        }

        .services-design-port .engagement-signals > .topics-label {
          color: color-mix(in oklch, var(--fg), var(--muted) 18%);
          font-weight: 700;
        }

        .services-design-port .relevant-capabilities {
          display: grid;
          gap: 12px;
          margin-top: clamp(13px, 1.6vw, 18px);
          padding-top: clamp(12px, 1.4vw, 16px);
          border-top: 1px solid color-mix(in oklch, var(--border), transparent 38%);
        }

        .services-design-port .relevant-capabilities h4 {
          color: color-mix(in oklch, var(--muted), transparent 4%);
          font-size: 9.5px;
          font-weight: 620;
          letter-spacing: 0.12em;
          line-height: 1.2;
          margin: 0;
          text-transform: uppercase;
        }

        .services-design-port .relevant-capabilities dl {
          display: grid;
          gap: 15px;
          margin: 0;
        }

        .services-design-port .relevant-capabilities div {
          display: grid;
          gap: 4px;
        }

        .services-design-port .relevant-capabilities dt {
          color: color-mix(in oklch, var(--fg), var(--muted) 16%);
          font-size: clamp(12px, 0.8rem, 14px);
          font-weight: 650;
          line-height: 1.24;
        }

        .services-design-port .relevant-capabilities dd {
          color: color-mix(in oklch, var(--muted), var(--fg) 3%);
          font-size: clamp(12px, 0.78rem, 13px);
          font-weight: 400;
          line-height: 1.42;
          margin: 0;
        }

        .services-design-port .engagement-signals::before {
          display: block;
          top: 0;
          bottom: 0;
          background: color-mix(in oklch, var(--border), transparent 36%);
        }

        .services-design-port .engagement-signals > .signal-context,
        .services-design-port .service-output-group > .signal-context {
          padding-bottom: 8px;
          border-bottom: 1px solid color-mix(in oklch, var(--border), transparent 26%);
        }

        .services-design-port .engagement-signals > .signal-context {
          color: color-mix(in oklch, var(--fg), var(--muted) 24%);
          font-weight: 680;
        }

        .services-design-port .service-output-list {
          display: grid;
          gap: 8px;
          margin: 0;
          padding-left: 1.05rem;
        }

        .services-design-port .service-output-item {
          color: var(--muted);
          font-size: clamp(13px, 0.88rem, 15px);
          font-weight: 400;
          line-height: 1.32;
        }

        .services-design-port .clarity-group {
          display: grid;
          gap: 10px;
        }

        .services-design-port .clarity-line {
          color: color-mix(in oklch, var(--muted), var(--fg) 5%);
          font-size: clamp(13px, 0.9rem, 15px);
          font-weight: 430;
          line-height: 1.42;
          margin: 0;
          max-width: 680px;
        }

        .services-design-port .clarity-line strong {
          color: color-mix(in oklch, var(--fg), var(--muted) 18%);
          font-weight: 610;
        }

        .services-design-port .signal-list li,
        .services-design-port .signal-list li.is-primary {
          border-top: 0;
          padding-top: 0;
        }

        .services-design-port .engagement-signals .signal-list li {
          position: relative;
          padding-left: 14px;
          color: color-mix(in oklch, var(--muted), var(--fg) 4%);
          line-height: 1.34;
        }

        .services-design-port .engagement-signals .signal-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.62em;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: color-mix(in oklch, var(--muted), transparent 38%);
        }

        @media (min-width: 961px) {
          .services-design-port .engagement-signals > .signal-context,
          .services-design-port .service-output-group > .signal-context {
            border-bottom-color: color-mix(in oklch, var(--border), transparent 42%);
          }

          .services-design-port .signal-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px clamp(12px, 1.2vw, 16px);
          }

          .services-design-port .relevant-capabilities dl {
            grid-template-columns: 1fr;
          }

          .services-design-port .service-output-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 7px clamp(14px, 1.6vw, 20px);
          }
        }

        @media (max-width: 960px) {
          .services-design-port .engagement-block {
            grid-template-columns: 1fr;
          }

          .services-design-port .engagement-signals {
            max-width: none;
            justify-self: stretch;
            margin-top: clamp(14px, 3vw, 24px);
            padding-left: 0;
          }

          .services-design-port .engagement-signals::before {
            display: none;
          }

          .services-design-port .relevant-capabilities {
            margin-top: clamp(12px, 3vw, 18px);
          }
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
                ShiftBy helps leaders clarify what needs to be understood, what
                needs to be decided, and what must remain explainable.
              </p>
              <p className="lead">
                The work may take different forms, but the purpose remains
                consistent: make understanding durable enough for action.
              </p>
            </div>
          </div>
          <div aria-label="How ShiftBy helps in practice" className="engagement-list">
            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">Choosing Where To Act</p>
                <p className="signal-context service-category">
                  <strong>AI Adoption &amp; Transformation</strong>
                </p>
                <h3 className="service-lens">AI direction and decision clarity</h3>
                <span className="service-story-label">Challenge</span>
                <p>The challenge is rarely finding opportunities.</p>
                <p>
                  The harder question is where AI should focus, where value may
                  emerge, and where ownership must remain visible.
                </p>
                <span className="service-story-label">How ShiftBy helps</span>
                <p>
                  ShiftBy helps clarify{" "}
                  <strong>AI adoption strategy</strong>,{" "}
                  <strong>AI transformation strategy</strong>, roadmap choices,
                  and the <strong>AI operating model</strong> needed to keep
                  decisions explainable.
                </p>
                <span className="service-story-label">Outcome</span>
                <p>
                  The outcome is greater clarity on investment priorities,
                  roadmap direction, ownership, operating model choices, and
                  transformation decisions.
                </p>
              </div>
                <div className="engagement-signals">
                <p className="signal-context topics-label">Topics this service may cover</p>
                <ul aria-label="AI direction and decision clarity topics" className="signal-list">
                  <li className="is-primary service-example-item">Business value assessment</li>
                  <li className="is-primary service-example-item">AI opportunity prioritization</li>
                  <li className="is-primary service-example-item">AI roadmap development</li>
                  <li className="is-primary service-example-item">Business process analysis</li>
                  <li className="is-primary service-example-item">Business process redesign</li>
                  <li className="is-primary service-example-item">POC-to-scale decision support</li>
                </ul>
                <section
                  aria-label="Relevant ShiftBy capabilities for AI direction and decision clarity"
                  className="relevant-capabilities"
                >
                  <h4>Relevant ShiftBy capabilities</h4>
                  <dl>
                    <div>
                      <dt>Decision Traceability</dt>
                      <dd>Connects AI priorities, rationale, and decision ownership.</dd>
                    </div>
                    <div>
                      <dt>Adaptive Execution</dt>
                      <dd>Sequences change without losing decision context.</dd>
                    </div>
                    <div>
                      <dt>Human-AI Accountability</dt>
                      <dd>Keeps ownership visible across AI adoption decisions.</dd>
                    </div>
                  </dl>
                </section>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Preparing The Organization To Act
                </p>
                <p className="signal-context service-category">
                  <strong>AI Readiness &amp; Enablement</strong>
                </p>
                <h3 className="service-lens">Readiness before adoption</h3>
                <span className="service-story-label">Challenge</span>
                <p>Readiness rarely begins with tools.</p>
                <p>
                  Leaders need clarity, teams need confidence, and
                  organizations need shared understanding before{" "}
                  <strong>AI adoption</strong> can succeed.
                </p>
                <span className="service-story-label">How ShiftBy helps</span>
                <p>
                  ShiftBy helps assess <strong>people</strong>, ways of
                  working, <strong>knowledge</strong>, <strong>data</strong>,{" "}
                  <strong>suppliers</strong>, and{" "}
                  <strong>governance</strong> so readiness is grounded in
                  organizational reality.
                </p>
                <span className="service-story-label">Outcome</span>
                <p>
                  The outcome is greater confidence in organizational
                  readiness, leadership alignment, ownership, enablement
                  priorities, and adoption sequencing.
                </p>
              </div>
                <div className="engagement-signals">
                <p className="signal-context topics-label">Topics this service may cover</p>
                <ul
                  aria-label="Readiness before adoption topics"
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
                <section
                  aria-label="Relevant ShiftBy capabilities for readiness before adoption"
                  className="relevant-capabilities"
                >
                  <h4>Relevant ShiftBy capabilities</h4>
                  <dl>
                    <div>
                      <dt>Organizational Memory</dt>
                      <dd>Preserves shared understanding and readiness baseline context.</dd>
                    </div>
                    <div>
                      <dt>Human-AI Accountability</dt>
                      <dd>Clarifies ownership for enablement, governance, and adoption decisions.</dd>
                    </div>
                    <div>
                      <dt>Adaptive Execution</dt>
                      <dd>Supports staged action without losing readiness context.</dd>
                    </div>
                  </dl>
                </section>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Improving Work Without Losing Context
                </p>
                <p className="signal-context service-category">
                  <strong>AI Agents &amp; Intelligent Operations</strong>
                </p>
                <h3 className="service-lens">Human-AI work that remains explainable</h3>
                <span className="service-story-label">Challenge</span>
                <p>Deploying AI is not the same as improving work.</p>
                <p>
                  <strong>AI agents</strong>,{" "}
                  intelligent operations,{" "}
                  <strong>knowledge-connected AI systems</strong>, and{" "}
                  <strong>enterprise AI workflows</strong> need intent,
                  rationale, traceability, ownership, and organizational memory
                  to remain explainable.
                </p>
                <span className="service-story-label">How ShiftBy helps</span>
                <p>
                  ShiftBy helps shape <strong>human-AI collaboration</strong>,{" "}
                  governed artifact generation, requirements generation,{" "}
                  <strong>traceability matrices</strong>, and quality
                  documentation.
                </p>
                <span className="service-story-label">Outcome</span>
                <p>
                  The outcome is greater confidence in accountable workflows,
                  traceability, oversight choices, and the meaning behind the
                  work.
                </p>
              </div>
                <div className="engagement-signals">
                <p className="signal-context topics-label">Topics this service may cover</p>
                <ul aria-label="Human-AI work topics" className="signal-list">
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
                <section
                  aria-label="Relevant ShiftBy capabilities for human-AI work"
                  className="relevant-capabilities"
                >
                  <h4>Relevant ShiftBy capabilities</h4>
                  <dl>
                    <div>
                      <dt>Organizational Memory</dt>
                      <dd>Preserves meaning across generated artifacts and workflows.</dd>
                    </div>
                    <div>
                      <dt>Human-AI Accountability</dt>
                      <dd>Keeps human ownership clear as AI participates in work.</dd>
                    </div>
                    <div>
                      <dt>Decision Traceability</dt>
                      <dd>Connects intent, rationale, and workflow decisions.</dd>
                    </div>
                  </dl>
                </section>
              </div>
            </article>

            <article className="engagement-block">
              <div className="engagement-copy">
                <p className="engagement-challenge">
                  Preserving Trust As Execution Changes
                </p>
                <p className="signal-context service-category">
                  <strong>AI Governance, Safety &amp; Resilience</strong>
                </p>
                <h3 className="service-lens">Trust, accountability, and assurance</h3>
                <span className="service-story-label">Challenge</span>
                <p>Governance is not the outcome. Trust is.</p>
                <p>
                  <strong>Responsible AI</strong>,{" "}
                  <strong>AI governance</strong>,{" "}
                  <strong>AI risk management</strong>,{" "}
                  AI assurance, and third-party AI risk depend on clear
                  evidence, ownership, safety, security, privacy, and
                  resilience.
                </p>
                <span className="service-story-label">How ShiftBy helps</span>
                <p>
                  ShiftBy helps map oversight, assurance evidence,{" "}
                  <strong>audit readiness</strong>, and{" "}
                  <strong>operational resilience</strong> to how execution
                  actually changes.
                </p>
                <span className="service-story-label">Outcome</span>
                <p>
                  The outcome is greater confidence in ownership, oversight,
                  assurance evidence, audit readiness, risk decisions, and
                  operational resilience.
                </p>
              </div>
                <div className="engagement-signals">
                <p className="signal-context topics-label">Topics this service may cover</p>
                <ul aria-label="Trust accountability and assurance topics" className="signal-list">
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
                <section
                  aria-label="Relevant ShiftBy capabilities for trust accountability and assurance"
                  className="relevant-capabilities"
                >
                  <h4>Relevant ShiftBy capabilities</h4>
                  <dl>
                    <div>
                      <dt>Human-AI Accountability</dt>
                      <dd>Clarifies ownership across AI risk, safety, and oversight.</dd>
                    </div>
                    <div>
                      <dt>Decision Traceability</dt>
                      <dd>Connects assurance evidence to decisions that can be reviewed.</dd>
                    </div>
                    <div>
                      <dt>Organizational Memory</dt>
                      <dd>Preserves governance context and assurance history.</dd>
                    </div>
                  </dl>
                </section>
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
            <div style={{ display: "grid", gap: "clamp(20px, 3vw, 30px)" }}>
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
              <div>
                <p className="signal-context" style={{ marginTop: 0 }}>
                  Enterprise patterns may include
                </p>
                <ul
                  aria-label="Enterprise recognition examples"
                  className="example-list"
                  style={{ marginTop: "10px" }}
                >
                  <li>
                    AI opportunities are visible, but priority, ownership,
                    readiness, and governance remain unclear.
                  </li>
                  <li>
                    A major decision still shapes execution, but the rationale,
                    assumptions, approvals, and evidence are hard to reconstruct.
                  </li>
                  <li>
                    Teams rely on AI-assisted outputs, but ownership,
                    validation, escalation, and accountability are not yet easy
                    to explain.
                  </li>
                </ul>
              </div>
            </div>
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
              <li>Industrial Operations</li>
              <li>Regulated Environments</li>
            </ul>
          </div>
          <div>
            <h3>Functions</h3>
            <ul>
              <li>Executive Leadership</li>
              <li>Business Transformation</li>
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
              Whether your organization is deciding where to act, preparing
              for AI, improving work with AI, or strengthening governance and
              accountability, the first step is understanding the challenge
              clearly.
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
          <p>A conversation can begin with:</p>
          <ul>
            <li>A decision that needs clarity</li>
            <li>A readiness question</li>
            <li>A workflow that is changing</li>
            <li>A governance or accountability concern</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
