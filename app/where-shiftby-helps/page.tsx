import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where ShiftBy Helps | ShiftBy",
  description:
    "Where preserving understanding becomes difficult inside real organizations, across decisions, knowledge, accountability, execution, AI, and organizational change.",
  alternates: {
    canonical: "/where-shiftby-helps"
  }
};

export default function WhereShiftByHelpsPage() {
  return (
    <div className="where-shiftby-helps-design-port">
      <section aria-labelledby="hero-title" className="section hero">
        <div>
          <span className="kicker">Where ShiftBy helps</span>
          <h1 id="hero-title">
            Most organizations encounter the same challenge in different forms.
          </h1>
        </div>
        <div className="hero-copy">
          <div className="hero-lines">
            <p className="lead">The same pattern appears in different forms.</p>
            <p className="lead">The context changes.</p>
            <p className="lead">The underlying challenge remains.</p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="same-challenge"
        className="quiet-band"
        id="challenge"
      >
        <div className="section manifest">
          <div>
            <span className="kicker">Shared pattern</span>
            <h2 id="same-challenge">Same challenge. Different manifestations.</h2>
          </div>
          <div>
            <p className="examples-label">Examples include:</p>
            <ul
              aria-label="Organizational situations where the same challenge appears"
              className="stagger-list"
            >
              <li>Explaining why an important decision was made</li>
              <li>Recovering context after a major change</li>
              <li>Understanding how responsibility, rationale, and approval were assigned</li>
              <li>Preserving knowledge through turnover</li>
              <li>Explaining AI-assisted outcomes</li>
              <li>Adapting without losing intent</li>
            </ul>
            <div className="manifest-copy">
              <p>These may appear unrelated.</p>
              <p>Often they are not.</p>
              <p>Often, the manifestation is drift.</p>
              <p className="emphasis">
                Despite their differences, each depends on preserving
                understanding across change.
              </p>
              <p>Each ultimately raises the same question:</p>
              <p className="manifest-question">How is understanding preserved?</p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Where preserving understanding becomes difficult"
        className="section challenge-stack"
      >
        <article aria-labelledby="decisions-understood" className="challenge-block">
          <div className="challenge-intro">
            <span className="kicker">Decisions</span>
            <h2 id="decisions-understood">When decisions must be understood.</h2>
            <p>
              Important choices can outlive the meetings, evidence, assumptions,
              approvals, and people that shaped them.
            </p>
          </div>
          <div aria-label="Decision challenge" className="challenge-brief">
            <p className="challenge-statement">
              Decisions often outlive the context that created them.
            </p>
            <ul className="brief-observations">
              <li>Evidence becomes harder to locate.</li>
              <li>Assumptions evolve over time.</li>
              <li>The people involved may no longer be present.</li>
            </ul>
            <p className="brief-takeaway">
              <span>The decision remains.</span>
              <span>Decision lineage becomes harder to preserve.</span>
            </p>
            <p>
              Decision drift begins when the decision remains but rationale,
              evidence, assumptions, and approval context move away from it.
            </p>
          </div>
        </article>

        <article aria-labelledby="knowledge-survive" className="challenge-block">
          <div className="challenge-intro">
            <span className="kicker">Knowledge</span>
            <h2 id="knowledge-survive">When knowledge must survive change.</h2>
            <p>
              Organizational memory is often distributed across people, artifacts,
              practices, and informal context.
            </p>
            <p>
              Many organizations encounter this challenge while modernizing
              knowledge management and enterprise information systems.
            </p>
          </div>
          <div aria-label="Knowledge challenge" className="challenge-brief">
            <p className="challenge-statement">Knowledge rarely exists in one place.</p>
            <ul className="brief-observations">
              <li>People leave.</li>
              <li>Systems change.</li>
              <li>Documentation drifts away from its original context.</li>
            </ul>
            <p className="brief-takeaway">
              <span>Artifacts may survive.</span>
              <span>Understanding often does not.</span>
            </p>
            <p>
              Knowledge drift appears when artifacts remain available but
              meaning, context, and interpretation move away from their origin.
            </p>
          </div>
        </article>

        <article aria-labelledby="accountability-clear" className="challenge-block">
          <div className="challenge-intro">
            <span className="kicker">Accountability</span>
            <h2 id="accountability-clear">When accountability must remain clear.</h2>
            <p>
              Responsibility becomes harder to locate when decisions and execution
              span people, artifacts, automation, and AI.
            </p>
          </div>
          <div aria-label="Accountability challenge" className="challenge-brief">
            <p className="challenge-statement">
              Accountability becomes harder to trace.
            </p>
            <ul className="brief-observations">
              <li>Work spans multiple teams.</li>
              <li>Evidence, rationale, and approval paths become fragmented.</li>
              <li>Automation and enterprise AI increasingly participate in outcomes.</li>
            </ul>
            <p className="brief-takeaway">
              <span>Responsibility may spread.</span>
              <span>Understanding preserves accountability.</span>
            </p>
            <p>
              Accountability drift appears when responsibility, evidence,
              rationale, and approval paths become harder to trace.
            </p>
          </div>
        </article>

        <article aria-labelledby="execution-evolve" className="challenge-block">
          <div className="challenge-intro">
            <span className="kicker">Execution</span>
            <h2 id="execution-evolve">When execution becomes distributed.</h2>
            <p>
              Execution increasingly occurs across people, artifacts, suppliers,
              automation, and AI.
            </p>
          </div>
          <div aria-label="Execution challenge" className="challenge-brief">
            <p className="challenge-statement">
              Execution no longer happens through people alone.
            </p>
            <ul className="brief-observations">
              <li>Work crosses organizational boundaries.</li>
              <li>Dependencies become harder to see.</li>
              <li>Coordination relies on shared understanding.</li>
            </ul>
            <p className="brief-takeaway">
              <span>Execution can scale.</span>
              <span>Understanding must scale with it.</span>
            </p>
            <p>
              Execution drift appears when work changes faster than shared
              understanding can adapt.
            </p>
          </div>
        </article>
      </section>

      <section aria-labelledby="execution-doctrine" className="quiet-band">
        <div className="section doctrine-callout">
          <div aria-label="ShiftBy situational bridge" className="doctrine-lines">
            <span>The context changes.</span>
            <span>The challenge remains.</span>
          </div>
          <div className="doctrine-copy">
            <p>Organizations change.</p>
            <p>Technology changes.</p>
            <p>Teams change.</p>
            <p>Automation expands.</p>
            <p>AI participates.</p>
            <p className="doctrine-emphasis">
              Understanding must remain connected through those changes.
            </p>
            <p className="doctrine-emphasis">
              That is where the same challenge appears in different forms.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="single-capability" className="section sequence">
        <span className="kicker">Interconnected challenge</span>
        <h2 id="single-capability">These challenges rarely exist alone.</h2>
        <div className="sequence-copy">
          <p>A decision loses context.</p>
          <p>Knowledge becomes fragmented.</p>
          <p>Responsibility becomes harder to trace.</p>
          <p>Execution continues to evolve.</p>
        </div>
        <div className="sequence-note">
          <p>Organizations rarely experience these challenges separately.</p>
          <p className="sequence-emphasis">They often reinforce one another.</p>
          <p className="sequence-emphasis">
            Preserving understanding requires addressing them together.
          </p>
        </div>
      </section>

      <section aria-labelledby="ai-amplifies" className="quiet-band">
        <div className="section ai-section">
          <div>
            <span className="kicker">AI and scale</span>
            <h2 id="ai-amplifies">
              The problem is not new.
              <br />
              AI amplifies it.
            </h2>
          </div>
          <div className="ai-copy">
            <p>Organizations have always needed to preserve understanding.</p>
            <p>AI adoption and enterprise AI make that need more visible.</p>
            <p>
              As organizations scale AI initiatives, AI agents, and AI-enabled
              workflows, preserving understanding becomes increasingly important.
            </p>
            <p>Execution expands.</p>
            <p>Automation expands.</p>
            <p>AI participates.</p>
            <p>Scale increases.</p>
            <p>Speed increases.</p>
            <p>The useful question is what needs to remain understood.</p>
            <div aria-label="AI and scale synthesis" className="ai-emphasis">
              <p>Understanding must remain connected through those changes.</p>
            </div>
            <div className="ai-closing">
              <p>The challenge is not new.</p>
              <p>The visibility of the challenge is.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="closing-title" className="section closing">
        <div>
          <span className="kicker">Closing question</span>
          <h2 id="closing-title">
            The useful question is what needs to remain understood.
          </h2>
          <div className="closing-copy">
            <p>
              Across decisions, knowledge, accountability, execution, and
              organizational complexity, the challenge often returns to the
              same question:
            </p>
            <p>
              As execution continues to change,
              <br />
              how does understanding survive?
            </p>
            <p>The context changes. The challenge remains.</p>
          </div>
          <div aria-label="Final calls to action" className="closing-actions">
            <Link className="button primary" href="/services">
              Explore services
            </Link>
            <Link className="button secondary" href="/contact">
              Start a conversation
            </Link>
          </div>
        </div>
        <div aria-label="Closing sequence" className="closing-flow">
          <span>Recognize the challenge</span>
          <i>↓</i>
          <span>Explore services</span>
          <i>↓</i>
          <span>Start the conversation</span>
        </div>
      </section>
    </div>
  );
}
