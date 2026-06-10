import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explorations | ShiftBy",
  description:
    "ShiftBy explorations into how organizations preserve understanding of execution, meaning, and discovery as they change.",
  alternates: {
    canonical: "/explorations"
  }
};

export default function ExplorationsPage() {
  return (
    <div className="explorations-design-port">
      <section className="section hero" aria-labelledby="hero-title">
        <div>
          <span className="kicker">Explorations</span>
          <h1 id="hero-title">Some questions require investigation.</h1>
        </div>
        <div className="hero-copy">
          <div className="hero-lines">
            <p className="hero-tension">
              Some organizational challenges cannot be fully understood through
              theory alone.
            </p>
            <p className="lead">
              The explorations exist to investigate how understanding behaves as
              organizations change.
            </p>
            <p className="lead">
              They follow what survives, what fragments, what drifts, and what
              becomes visible through change.
            </p>
          </div>
          <p className="hero-note">
            These are not products. They are investigations in progress.
            <span>
              Each exploration studies a different aspect of the same underlying challenge.
            </span>
          </p>
        </div>
      </section>

      <section className="quiet-band" aria-labelledby="exist-title">
        <div className="section split">
          <div>
            <span className="kicker">Why explorations exist</span>
            <h2 id="exist-title">
              Understanding becomes harder to preserve as organizations change.
            </h2>
          </div>
          <div>
            <div className="existence-lines">
              <p className="plain-emphasis">
                Artifacts may remain while context fragments.
              </p>
              <p className="plain-emphasis">
                The investigations ask what helps understanding stay connected.
              </p>
              <p>Decisions evolve.</p>
              <p>Teams change.</p>
              <p>Systems change.</p>
              <p>AI participates.</p>
              <p>Context moves.</p>
              <p>Accountability shifts.</p>
              <p>Meaning drifts.</p>
              <p>Execution drifts.</p>
              <p className="existence-conclusion">
                The investigations explore what helps understanding survive those changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section relevance-bridge split" aria-labelledby="matters-title">
        <div>
          <span className="kicker">Why this matters</span>
          <h2 id="matters-title">The investigations make the challenge visible.</h2>
        </div>
        <div className="bridge-copy">
          <p className="lead">
            When execution changes, the question is not only what happened.
          </p>
          <p>
            Leaders, architects, auditors, and operators need to understand what
            remained connected, what fragmented, and what became harder to explain.
          </p>
          <p>
            The investigations help examine how organizations can preserve
            confidence when decisions, meaning, and discovery move across people,
            systems, automation, AI, and time.
          </p>
          <ul className="bridge-signals" aria-label="Investigation relevance signals">
            <li>
              <span>Leaders</span>
              <strong>Can confidence survive change?</strong>
            </li>
            <li>
              <span>Architects</span>
              <strong>Can relationships remain understandable?</strong>
            </li>
            <li>
              <span>Assurance</span>
              <strong>Can evidence and accountability still be explained?</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="section investigation-overview" aria-labelledby="three-title">
        <div className="overview-head">
          <div>
            <span className="kicker">Three investigations</span>
            <h2 id="three-title">
              Three investigations.
              <br />
              Three dimensions of understanding.
            </h2>
          </div>
          <p className="lead">
            Each studies a different way understanding survives change:
            execution, meaning, and discovery.
          </p>
        </div>
        <div className="distinction" aria-label="Exploration distinctions">
          <Link href="/explorations">
            <span>
              <small>UnifyPlane</small>
              <span className="concept">Execution</span>
              <span className="dimension-line">
                Understanding execution, decision traceability, enterprise AI
                accountability, and AI governance visibility
              </span>
            </span>
            <span className="distinction-detail">
              <span className="distinction-copy">
                Organizations often know what happened. Understanding why it
                happened becomes harder as execution evolves.
              </span>
              <span className="distinction-question">
                <span>Open question</span>
                <em>
                  Can decisions, evidence, dependencies, accountability, and
                  drift remain visible as execution becomes distributed?
                </em>
              </span>
              <span className="distinction-explore">Continue the investigation →</span>
            </span>
          </Link>
          <Link href="/explorations">
            <span>
              <small>CanonLens</small>
              <span className="concept">Meaning</span>
              <span className="dimension-line">
                Understanding meaning, organizational memory, knowledge
                management, and enterprise knowledge graph concepts
              </span>
            </span>
            <span className="distinction-detail">
              <span className="distinction-copy">
                Artifacts often remain available. The meaning they carried can
                fragment.
              </span>
              <span className="distinction-question">
                <span>Open question</span>
                <em>
                  Can meaning drift be detected before shared understanding
                  fragments?
                </em>
              </span>
              <span className="distinction-explore">Continue the investigation →</span>
            </span>
          </Link>
          <Link href="/explorations">
            <span>
              <small>Inspiral</small>
              <span className="concept">Discovery</span>
              <span className="dimension-line">
                Understanding discovery, organizational learning, research
                workflows, and AI-assisted knowledge formation
              </span>
            </span>
            <span className="distinction-detail">
              <span className="distinction-copy">
                Knowledge often remains visible. The pathway that produced it
                can disappear.
              </span>
              <span className="distinction-question">
                <span>Open question</span>
                <em>
                  Can discovery drift be understood as observations become
                  knowledge and knowledge is reused?
                </em>
              </span>
              <span className="distinction-explore">Continue the investigation →</span>
            </span>
          </Link>
        </div>
        <div className="investigation-synthesis" aria-labelledby="learning-title">
          <div>
            <span className="kicker">What we are learning</span>
            <h3 id="learning-title">
              Across all three investigations, the same pattern continues to emerge.
            </h3>
          </div>
          <div className="synthesis-copy">
            <p className="lead">
              Artifacts may remain. Context may fragment. Confidence weakens
              when understanding is no longer connected.
            </p>
            <div className="synthesis-lines" aria-label="Learning synthesis">
              <p>Execution, meaning, and discovery change in different ways.</p>
              <p>
                Each reveals the same underlying challenge: understanding must
                survive movement across people, systems, automation, AI, and time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quiet-band" aria-labelledby="conversation-title">
        <div className="section conversation">
          <div>
            <span className="kicker">Continue the conversation</span>
            <h2 id="conversation-title">
              Share observations. Discuss the challenge. Explore the questions.
            </h2>
            <div className="conversation-copy">
              <p>
                The explorations are open-ended because the questions are still
                evolving.
              </p>
              <p>
                If these patterns appear inside your organization, the useful
                next step may be a conversation rather than a conclusion.
              </p>
            </div>
            <div className="conversation-actions" aria-label="Conversation links">
              <Link className="button primary" href="/contact">
                Continue the conversation
              </Link>
              <Link className="button secondary" href="/perspective">
                Return to perspective
              </Link>
            </div>
          </div>
          <div className="conversation-note">
            <p>The useful question is what needs to remain understood.</p>
            <span>The investigations continue from there.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
