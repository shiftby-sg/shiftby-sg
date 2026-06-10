import Link from "next/link";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(pageMetadataEntries.thinking);

export default function ThinkingPage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="section hero">
        <div>
          <p className="kicker">Perspective</p>
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

      <section aria-labelledby="same-questions-title" className="section split">
        <div>
          <p className="kicker">The same questions</p>
          <h2 id="same-questions-title">The same questions</h2>
        </div>
        <ul className="plain-list">
          <li>A cybersecurity investigation.</li>
          <li>A technology transformation.</li>
          <li>An AI initiative.</li>
        </ul>
      </section>

      <section aria-labelledby="similar-title" className="quiet-band">
        <div className="section split">
          <div>
            <p className="kicker">Different environments. Similar questions.</p>
            <h2 id="similar-title">Different environments. Similar questions.</h2>
          </div>
          <div className="section-copy">
            <p>The artifacts remained.</p>
            <p className="takeaway">Organizations preserve artifacts.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="artifact-title" className="section comparison recovery-section">
        <div>
          <p className="kicker">The artifact remained</p>
          <h2 id="artifact-title">The artifact remained.</h2>
        </div>
        <div className="recovery-flow">
          <ul className="record-proof">
            <li>Decision approved</li>
            <li>System updated</li>
            <li>Control implemented</li>
          </ul>
          <p className="record-missing">
            The understanding became
            <br />
            harder to recover.
          </p>
          <ul className="missing-questions">
            <li>Why?</li>
            <li>Based on what?</li>
            <li>What changed?</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="important-questions-title" className="section why-section">
        <div>
          <p className="kicker">Important questions</p>
          <h2 id="important-questions-title">Important questions</h2>
        </div>
        <div className="section-copy">
          <p>Organizations continue operating on decisions long after they are made.</p>
          <p>Change arrives.</p>
          <p>The questions return.</p>
          <ul className="moment-list">
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
            <p className="kicker">The problem is not new</p>
            <h2 id="ai-title">The problem is not new.</h2>
          </div>
          <div className="section-copy">
            <p>The challenge existed before AI.</p>
            <p>AI participation makes decision traceability more visible.</p>
            <p>Governance and responsible AI make the need harder to ignore.</p>
            <p>
              Organizations pursuing enterprise AI, responsible AI, and AI
              governance often encounter these questions more frequently.
            </p>
            <div className="meaning-lines">
              <p>AI amplifies visibility.</p>
              <p>AI amplifies scale.</p>
              <p>AI amplifies speed.</p>
            </div>
            <p>It did not create the challenge.</p>
            <p>The visibility of the challenge is new.</p>
            <p className="doctrine-note">
              The observation became simple only after the pattern appeared
              across enough different contexts: organizations preserve
              artifacts, and organizations struggle to preserve understanding.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="next-question-title" className="section question-bridge">
        <p className="bridge-intro">
          If the pattern continues to appear, it deserves investigation.
        </p>
        <h2 id="next-question-title">
          The next question cannot be answered through theory alone.
        </h2>
        <div className="bridge-lines">
          <p>The observation alone is not enough.</p>
          <p>It requires observation.</p>
          <p>It requires investigation.</p>
          <p>It requires experimentation.</p>
        </div>
      </section>

      <section aria-labelledby="explorations-title" className="section exploration-section">
        <div>
          <p className="kicker">This is why the explorations exist</p>
          <h2 id="explorations-title">This is why the explorations exist.</h2>
        </div>
        <div className="exploration-copy">
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
          <ul className="plain-list">
            <li>
              UnifyPlane <span>asks what needs to remain traceable when execution moves across people, artifacts, AI governance expectations, and decisions.</span>
            </li>
            <li>
              CanonLens <span>asks how meaning survives when context is carried through people, artifacts, and responsible AI participation.</span>
            </li>
            <li>
              Inspiral <span>asks how observation becomes knowledge before it hardens into assumption.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
