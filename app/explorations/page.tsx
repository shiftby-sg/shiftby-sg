import Link from "next/link";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(pageMetadataEntries.explorations);

export default function ExplorationsPage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="section hero">
        <div>
          <p className="kicker">Explorations</p>
          <h1 id="hero-title">Some questions require investigation.</h1>
        </div>
        <div className="hero-copy">
          <div className="hero-lines">
            <p className="hero-tension">
              Some organizational challenges cannot be fully understood through
              theory alone.
            </p>
            <p className="lead">
              The explorations exist to investigate how understanding behaves
              as organizations change.
            </p>
            <p className="lead">
              They follow what survives, what fragments, and what becomes
              visible through change.
            </p>
          </div>
          <p className="hero-note">
            These are not products. They are investigations in progress.
            <span>The work remains open because the questions are still evolving.</span>
          </p>
        </div>
      </section>

      <section aria-labelledby="understanding-title" className="section split">
        <div>
          <p className="kicker">Understanding through change</p>
          <h2 id="understanding-title">
            Understanding becomes harder to preserve as organizations change.
          </h2>
        </div>
        <div className="existence-lines">
          <p className="plain-emphasis">Artifacts may remain while context fragments.</p>
          <p className="plain-emphasis">
            The investigations ask what helps understanding stay connected.
          </p>
          <p>Decisions evolve.</p>
          <p>Teams change.</p>
          <p>Systems change.</p>
          <p>AI participates.</p>
          <p>Context moves.</p>
          <p>Accountability shifts.</p>
          <p className="existence-conclusion">
            The investigations explore what helps understanding survive those changes.
          </p>
        </div>
      </section>

      <section aria-labelledby="relevance-title" className="quiet-band">
        <div className="section relevance-bridge">
          <div className="bridge-copy">
            <p className="kicker">Why the investigations matter</p>
            <h2 id="relevance-title">The investigations make the challenge visible.</h2>
            <p className="lead">
              When execution changes, the question is not only what happened.
            </p>
            <p>
              Leaders, architects, auditors, and operators need to understand
              what remained connected, what fragmented, and what became harder
              to explain.
            </p>
            <p>
              The investigations help examine how organizations can preserve
              confidence when decisions, meaning, and discovery move across
              people, systems, automation, AI, and time.
            </p>
          </div>
          <ul className="bridge-signals">
            <li>
              <span>Execution</span>
              <strong>Can decisions remain connected across change?</strong>
            </li>
            <li>
              <span>Meaning</span>
              <strong>Can relationships remain understandable?</strong>
            </li>
            <li>
              <span>Assurance</span>
              <strong>Can evidence and accountability still be explained?</strong>
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="three-title" className="section investigation-overview">
        <div className="overview-head">
          <div>
            <p className="kicker">Three investigations</p>
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
                  Can decisions, evidence, dependencies, and accountability
                  remain connected as execution becomes distributed?
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
                  Can meaning remain shared as knowledge and context move away
                  from their origin?
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
                  Can discovery remain reproducible as knowledge is reused and
                  extended?
                </em>
              </span>
              <span className="distinction-explore">Continue the investigation →</span>
            </span>
          </Link>
        </div>
        <div aria-labelledby="learning-title" className="investigation-synthesis">
          <div>
            <p className="kicker">What we are learning</p>
            <h3 id="learning-title">
              Across all three investigations, the same pattern continues to emerge.
            </h3>
          </div>
          <div className="synthesis-copy">
            <p className="lead">
              Artifacts may remain. Context may fragment. Confidence weakens
              when understanding is no longer connected.
            </p>
            <div className="synthesis-lines">
              <p>Execution, meaning, and discovery change in different ways.</p>
              <p>
                Each reveals the same underlying challenge: understanding must
                survive movement across people, systems, automation, AI, and
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="conversation-title" className="quiet-band">
        <div className="section conversation">
          <div>
            <p className="kicker">Continue the conversation</p>
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
            <div className="conversation-actions">
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
    </>
  );
}
