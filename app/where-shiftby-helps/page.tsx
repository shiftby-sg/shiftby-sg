import Link from "next/link";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(pageMetadataEntries.whereShiftByHelps);

export default function WhereShiftByHelpsPage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="section hero">
        <div>
          <p className="kicker">Where ShiftBy helps</p>
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
          <div>
            <p className="hero-note">Explore where the challenge appears.</p>
            <div className="hero-actions">
              <a className="button primary" href="#challenge-forms">
                Explore the challenges
              </a>
              <Link className="button secondary" href="/contact">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="challenge-forms-title" className="quiet-band" id="challenge-forms">
        <div className="section manifest">
          <div>
            <p className="kicker">Same challenge. Different manifestations.</p>
            <h2 id="challenge-forms-title">Same challenge. Different manifestations.</h2>
            <p className="examples-label">Examples include:</p>
            <ul className="stagger-list">
              <li>Explaining why an important decision was made</li>
              <li>Recovering context after a major change</li>
              <li>Understanding how responsibility, rationale, and approval were assigned</li>
              <li>Preserving knowledge through turnover</li>
              <li>Explaining AI-assisted outcomes</li>
              <li>Adapting without losing intent</li>
            </ul>
          </div>
          <div className="manifest-copy">
            <p>These may appear unrelated.</p>
            <p>Often they are not.</p>
            <p className="emphasis">
              Despite their differences, each depends on preserving
              understanding across change.
            </p>
            <p>Each ultimately raises the same question:</p>
            <p className="manifest-question">How is understanding preserved?</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="decisions-title" className="section">
        <div className="challenge-stack">
          <article className="challenge-block">
            <div className="challenge-intro">
              <h2 id="decisions-title">When decisions must be understood.</h2>
            </div>
            <div className="challenge-brief">
              <p>
                Important choices can outlive the meetings, evidence,
                assumptions, approvals, and people that shaped them.
              </p>
              <p className="challenge-statement">
                Decisions often outlive the context that created them.
              </p>
              <ul className="brief-observations">
                <li>Evidence becomes harder to locate.</li>
                <li>Assumptions evolve over time.</li>
                <li>The people involved may no longer be present.</li>
              </ul>
            </div>
          </article>

          <article className="challenge-block">
            <div className="challenge-intro">
              <h2>When knowledge must survive change.</h2>
            </div>
            <div className="challenge-brief">
              <p>
                Organizational memory is often distributed across people,
                artifacts, practices, and informal context.
              </p>
              <p>
                Many organizations encounter this challenge while modernizing
                knowledge management and enterprise information systems.
              </p>
              <p className="challenge-statement">Knowledge rarely exists in one place.</p>
              <ul className="brief-observations">
                <li>People leave.</li>
                <li>Systems change.</li>
                <li>Documentation drifts away from its original context.</li>
              </ul>
            </div>
          </article>

          <article className="challenge-block">
            <div className="challenge-intro">
              <h2>When accountability must remain clear.</h2>
            </div>
            <div className="challenge-brief">
              <p>
                Responsibility becomes harder to locate when decisions and
                execution span people, artifacts, automation, and AI.
              </p>
              <p className="challenge-statement">
                Accountability becomes harder to trace.
              </p>
              <ul className="brief-observations">
                <li>Work spans multiple teams.</li>
                <li>Evidence, rationale, and approval paths become fragmented.</li>
                <li>Automation and enterprise AI increasingly participate in outcomes.</li>
              </ul>
            </div>
          </article>

          <article className="challenge-block">
            <div className="challenge-intro">
              <h2>When execution becomes distributed.</h2>
            </div>
            <div className="challenge-brief">
              <p>
                Execution increasingly occurs across people, artifacts,
                suppliers, automation, and AI.
              </p>
              <p className="challenge-statement">
                Execution no longer happens through people alone.
              </p>
              <ul className="brief-observations">
                <li>Work crosses organizational boundaries.</li>
                <li>Dependencies become harder to see.</li>
                <li>Coordination relies on shared understanding.</li>
              </ul>
              <p className="brief-takeaway">
                Understanding must remain connected through those changes.
              </p>
              <p className="brief-takeaway">
                That is where the same challenge appears in different forms.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="sequence-title" className="quiet-band">
        <div className="section sequence">
          <h2 id="sequence-title">These challenges rarely exist alone.</h2>
          <div className="sequence-copy">
            <p>A decision loses context.</p>
            <p>Knowledge becomes fragmented.</p>
            <p>Responsibility becomes harder to trace.</p>
            <p>Execution continues to evolve.</p>
            <p>Organizations rarely experience these challenges separately.</p>
          </div>
          <div className="sequence-note">
            <p>They often reinforce one another.</p>
            <p className="sequence-emphasis">
              Preserving understanding requires addressing them together.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="ai-title" className="section ai-section">
        <div>
          <p className="kicker">The problem is not new</p>
          <h2 id="ai-title">The problem is not new.</h2>
        </div>
        <div className="ai-copy">
          <p>Organizations have always needed to preserve understanding.</p>
          <p>AI adoption and enterprise AI make that need more visible.</p>
          <p>
            As organizations scale AI initiatives, AI agents, and AI-enabled
            workflows, preserving understanding becomes increasingly important.
          </p>
          <div className="ai-emphasis">
            <p>Execution expands.</p>
            <p>Automation expands.</p>
            <p>AI participates.</p>
            <p>Scale increases.</p>
            <p>Speed increases.</p>
          </div>
          <div className="ai-closing">
            <p>The useful question is what needs to remain understood.</p>
            <p>Understanding must remain connected through those changes.</p>
            <p>The challenge is not new.</p>
            <p>The visibility of the challenge is.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="exploration-bridge-title" className="section exploration-bridge">
        <p className="kicker">Investigation</p>
        <h2 id="exploration-bridge-title">
          Some questions cannot be answered through theory alone.
        </h2>
        <div className="bridge-lines">
          <p>Questions about preserving understanding require more than assertion.</p>
          <p>They require observation.</p>
          <p>They require investigation.</p>
          <p>They require experimentation.</p>
          <p>This is why ShiftBy maintains a small number of ongoing explorations.</p>
        </div>
      </section>

      <section aria-labelledby="explorations-title" className="section exploration-section">
        <div>
          <p className="kicker">Where ShiftBy explores these questions</p>
          <h2 id="explorations-title">Where ShiftBy explores these questions.</h2>
        </div>
        <div className="exploration-copy">
          <p>
            ShiftBy uses demonstrable investigations to examine how
            understanding can be preserved.
          </p>
          <p>Each exploration examines a different aspect of preserving understanding.</p>
          <Link className="text-link" href="/explorations">
            Continue to explorations
          </Link>
          <ul className="exploration-list">
            <li>
              <b>UnifyPlane</b>
              <p>Understanding execution, traceability, accountability, and decision lineage.</p>
            </li>
            <li>
              <b>CanonLens</b>
              <p>Understanding meaning, context, organizational memory, and knowledge management.</p>
            </li>
            <li>
              <b>Inspiral</b>
              <p>Understanding observation, discovery, knowledge formation, and learning.</p>
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="closing-title" className="section closing">
        <div>
          <p className="kicker">The useful question</p>
          <h2 id="closing-title">The useful question is what needs to remain understood.</h2>
          <div className="closing-copy">
            <p>
              Across knowledge, accountability, change, and organizational
              complexity, the challenge often returns to the same question:
            </p>
            <p>As execution continues to change,</p>
            <p>The context changes. The challenge remains.</p>
          </div>
          <div className="closing-actions">
            <Link className="button primary" href="/explorations">
              Explore the investigations
            </Link>
            <Link className="button secondary" href="/contact">
              Start a conversation
            </Link>
          </div>
        </div>
        <div className="closing-flow">
          <span>Decisions</span>
          <i>→</i>
          <span>Knowledge</span>
          <i>→</i>
          <span>Accountability</span>
          <i>→</i>
          <span>Execution</span>
        </div>
      </section>
    </>
  );
}
