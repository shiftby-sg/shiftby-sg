import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perspective | ShiftBy",
  description:
    "The ShiftBy perspective on why preserving context matters as execution changes across people, systems, suppliers, automation, and AI.",
  alternates: {
    canonical: "/perspective"
  }
};

export default function PerspectivePage() {
  return (
    <div className="perspective-design-port">
      <section aria-labelledby="hero-title" className="section hero">
        <div>
          <span className="kicker">Perspective</span>
          <h1 id="hero-title">
            The perspective came from observing the same pattern in different
            places.
          </h1>
        </div>
        <div className="hero-copy">
          <div className="hero-lines">
            <p className="lead">Not from one technology.</p>
            <p className="lead">Not from one industry.</p>
            <p className="lead">Not from one transformation.</p>
          </div>
          <p className="hero-note">
            Again and again, the surface changed. The underlying question
            remained familiar.
          </p>
        </div>
      </section>

      <section aria-labelledby="pattern-title" className="quiet-band">
        <div className="section split">
          <div>
            <span className="kicker">Observation</span>
            <h2 id="pattern-title">
              The same questions
              <br />
              kept returning.
            </h2>
          </div>
          <ul
            aria-label="Different environments where the pattern appeared"
            className="pattern-list"
          >
            <li>
              <b>A cybersecurity investigation.</b>
              <span>What evidence shaped the response?</span>
            </li>
            <li>
              <b>A technology transformation.</b>
              <span>Which assumptions moved with the systems?</span>
            </li>
            <li>
              <b>An AI initiative.</b>
              <span>Who remained accountable for the outcome?</span>
            </li>
            <li className="pattern-synthesis">
              <span>
                The environments changed.
                <br />
                The questions remained familiar.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="similar-title" className="section">
        <div className="split">
          <div>
            <span className="kicker">Pattern</span>
            <h2 id="similar-title">Different environments. Similar questions.</h2>
          </div>
          <div className="pattern-observation">
            <p>
              The artifacts remained.
              <br />
              The explanation was harder to recover.
            </p>
            <p>
              Organizations preserve artifacts.
              <br />
              Organizations struggle to preserve understanding.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="harder-title" className="quiet-band">
        <div className="section">
          <article
            aria-labelledby="harder-title"
            className="comparison recovery-section"
          >
            <div>
              <span className="kicker">What becomes harder to preserve</span>
              <h2 id="harder-title">The artifact remained.</h2>
            </div>
            <div className="recovery-flow">
              <ul aria-label="Records that remain" className="record-proof">
                <li>Decision approved</li>
                <li>System updated</li>
                <li>Control implemented</li>
              </ul>
              <ul
                aria-label="Understanding that becomes harder to recover"
                className="missing-questions"
              >
                <li>Why?</li>
                <li>Based on what?</li>
                <li>What changed?</li>
              </ul>
              <p className="record-missing">
                The understanding became
                <br />
                harder to recover.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="why-title" className="section why-section">
        <div>
          <span className="kicker">Why this matters</span>
          <h2 id="why-title">
            Important questions
            <br />
            do not disappear.
          </h2>
          <div className="section-copy">
            <p>
              Organizations continue operating on decisions long after they are
              made.
            </p>
            <p>Change arrives.</p>
            <p>The questions return.</p>
          </div>
        </div>
        <div>
          <ul
            aria-label="Organizational moments when questions return"
            className="moment-list"
          >
            <li>A new leader arrives.</li>
            <li>An incident occurs.</li>
            <li>A system is replaced.</li>
            <li>An AI capability is introduced.</li>
            <li>A decision is challenged.</li>
          </ul>
          <p className="answers-matter">
            The answers
            <br />
            still matter.
          </p>
        </div>
      </section>

      <section aria-labelledby="ai-title" className="quiet-band">
        <div className="section ai-section">
          <div>
            <span className="kicker">AI and visibility</span>
            <h2 id="ai-title">
              The problem is not new.
              <br />
              AI amplifies it.
            </h2>
          </div>
          <div className="ai-lines">
            <div className="ai-line-group ai-context">
              <p>The challenge existed before AI.</p>
              <p>AI participation makes decision traceability more visible.</p>
              <p>
                Governance and responsible AI make the need harder to ignore.
              </p>
              <p>
                Organizations pursuing enterprise AI, responsible AI, and AI
                governance often encounter these questions more frequently.
              </p>
            </div>
            <div className="ai-line-group ai-amplification">
              <p>AI amplifies visibility.</p>
              <p>AI amplifies scale.</p>
              <p>AI amplifies speed.</p>
            </div>
            <div className="ai-line-group ai-clarification">
              <p>It did not create the challenge.</p>
            </div>
            <div className="ai-line-group ai-realization">
              <p>The visibility of the challenge is new.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="doctrine-title" className="section doctrine">
        <div className="doctrine-inner">
          <span className="kicker">Doctrine</span>
          <h2 id="doctrine-title">
            <span className="doctrine-line">Execution changes.</span>
            <span className="doctrine-line">
              Understanding preserves confidence.
            </span>
          </h2>
          <p className="doctrine-note">
            The observation became simple only after the pattern appeared across
            enough different contexts: organizations preserve artifacts, and
            organizations struggle to preserve understanding.
          </p>
        </div>
      </section>

      <section aria-labelledby="next-question" className="quiet-band">
        <div className="section question-bridge">
          <span className="kicker">Investigation</span>
          <p className="bridge-intro">
            If the pattern continues to appear, it deserves investigation.
          </p>
          <h2 id="next-question">
            The next question cannot be answered through theory alone.
          </h2>
          <div className="bridge-lines">
            <p>The observation alone is not enough.</p>
            <div className="bridge-support">
              <p>It requires observation.</p>
              <p>It requires investigation.</p>
              <p>It requires experimentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="exploration-title"
        className="section exploration-section"
      >
        <div className="exploration-copy">
          <span className="kicker">Continue to explorations</span>
          <h2 id="exploration-title">This is why the explorations exist.</h2>
          <p>
            They are investigations into how understanding can be preserved as
            execution, organizational memory, decision traceability,
            accountability, and discovery change.
          </p>
          <p>
            The questions appear across AI adoption, organizational
            transformation, and knowledge-intensive environments.
          </p>
          <p>Each explores a different aspect of that challenge.</p>
          <Link className="text-link" href="/explorations">
            Continue to explorations
          </Link>
        </div>
        <ul aria-label="ShiftBy explorations" className="exploration-list">
          <li>
            <b>UnifyPlane</b>
            <p>
              Asks what needs to remain traceable when execution moves across
              people, artifacts, AI governance expectations, and decisions.
            </p>
          </li>
          <li>
            <b>CanonLens</b>
            <p>
              Asks how meaning survives when context is carried through people,
              artifacts, and responsible AI participation.
            </p>
          </li>
          <li>
            <b>Inspiral</b>
            <p>
              Asks how observation becomes knowledge before it hardens into
              assumption.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
