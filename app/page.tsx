import Link from "next/link";
import type { Metadata } from "next";

import { BrandDoctrineMark } from "@/components/BrandDoctrineMark";

export const metadata: Metadata = {
  title: {
    absolute: "ShiftBy | Execution Changes. Understanding Preserves Confidence."
  },
  description:
    "ShiftBy is an executive advisory practice focused on preserving understanding, accountability, and confidence as execution becomes distributed across people, systems, suppliers, automation, and AI.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <div className="home-design-port">
      <style>{`
        .home-design-port .hero-descriptor {
          color: var(--accent);
          font-size: var(--type-kicker);
          font-weight: 700;
          letter-spacing: var(--tracking-kicker);
          line-height: 1.2;
          margin: 0 0 var(--space-kicker-head);
          max-width: 620px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        @media (max-width: 720px) {
          .home-design-port .hero-descriptor {
            white-space: normal;
          }

          .homepage-doctrine-mark {
            display: none;
          }
        }
      `}</style>
      <section aria-labelledby="hero-title" className="section hero">
        <BrandDoctrineMark
          className="homepage-doctrine-mark"
          style={{
            color: "var(--accent)",
            opacity: 0.038,
            pointerEvents: "none",
            position: "absolute",
            right: "-12%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "min(52vw, 700px)",
            zIndex: 0
          }}
        />
        <div>
          <p className="hero-descriptor">
            Executive advisory practice for AI, governance, and organizational understanding.
          </p>
          <h1 id="hero-title">
            <span className="hero-title-line">Execution changes.</span>
            <span className="hero-title-line">
              <span className="keep-together">Understanding preserves</span>{" "}
              <span className="hero-break">confidence.</span>
            </span>
          </h1>
          <p className="lead">
            Organizations preserve artifacts.
            <br />
            <br />
            Preserving understanding is harder.
            <br />
            <br />
            Make understanding durable.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Start a conversation →
            </Link>
            <a className="button secondary" href="#different-perspective">
              Explore the perspective →
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="what-changed" className="quiet-band">
        <div className="section change-editorial">
          <div>
            <p className="kicker">WHAT CHANGED?</p>
            <h2 id="what-changed">Execution no longer happens through people alone.</h2>
            <p className="change-body">
              Organizations increasingly execute across people, systems,
              suppliers, automation, and AI.
            </p>
            <p className="change-takeaway">
              As execution becomes more distributed, drift becomes harder to see
              and confidence becomes harder to maintain.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="why-shiftby-exists"
        className="section challenge-section"
      >
        <span className="kicker">THE CHALLENGE</span>
        <h2 id="why-shiftby-exists">
          The challenge isn&apos;t <span className="keep-together">more information</span>
        </h2>
        <p className="challenge-intro">Organizations preserve artifacts.</p>
        <p className="challenge-definition">
          <strong>Organizations struggle to preserve understanding.</strong> At
          ShiftBy, understanding is the context that connects decisions,
          assumptions, evidence, accountability, dependencies, outcomes, and the
          drift that can occur between them.
        </p>
        <p className="challenge-definition">
          This challenge becomes increasingly visible during AI adoption,
          enterprise AI transformation, AI governance initiatives, and
          organizational change.
        </p>
        <p className="challenge-prompt">Yet leaders still ask:</p>
        <ul aria-label="Questions leaders still ask" className="challenge-questions">
          <li>Why was this decision made?</li>
          <li>What changed?</li>
          <li>What evidence exists?</li>
          <li>Who approved it?</li>
        </ul>
        <p className="challenge-takeaway">
          As organizations execute across broader networks, preserving
          understanding becomes{" "}
          <strong>a capability organizations must build.</strong>
        </p>
      </section>

      <section
        aria-labelledby="what-organizations-need"
        className="section needs-section"
      >
        <span className="kicker">What preserving understanding requires</span>
        <h2 id="what-organizations-need">Four capabilities preserve understanding.</h2>
        <p className="needs-intro">
          As operating environments become more complex, organizations need
          capabilities that sustain continuity across change.
        </p>
        <p className="needs-bridge">
          These capabilities connect decisions, knowledge, accountability, and
          execution so understanding survives as work changes.
        </p>
        <div className="needs-grid" role="list">
          <article className="need-item" role="listitem">
            <h3>Decision Traceability</h3>
            <p>Decisions remain connected to rationale, evidence, and approval over time.</p>
          </article>
          <article className="need-item" role="listitem">
            <h3>Organizational Memory</h3>
            <p>Knowledge remains connected to context, evidence, and organizational memory.</p>
          </article>
          <article className="need-item" role="listitem">
            <h3>Human–AI Accountability</h3>
            <p>Review, approval, and accountability remain visible as AI participates in execution.</p>
          </article>
          <article className="need-item" role="listitem">
            <h3>Adaptive Execution</h3>
            <p>Execution adapts while preserving context, alignment, and accountability.</p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="how-shiftby-helps"
        className="quiet-band focus-section"
      >
        <div className="section">
          <div className="section-head">
            <span className="kicker">From principle to practice</span>
            <h2 id="how-shiftby-helps">Where ShiftBy helps.</h2>
            <p>
              These capabilities become valuable when organizations need
              decisions, knowledge, accountability, and execution to remain
              connected.
            </p>
          </div>
          <div className="focus-grid" role="list">
            <article className="focus-area" role="listitem">
              <h3>Decisions</h3>
              <p>Keeping rationale, evidence, and decision lineage recoverable across complex environments.</p>
            </article>
            <article className="focus-area" role="listitem">
              <h3>Accountability</h3>
              <p>Maintaining review, approval, and human-AI accountability as execution changes.</p>
            </article>
            <article className="focus-area" role="listitem">
              <h3>Knowledge</h3>
              <p>Preserving organizational memory so knowledge remains usable through change.</p>
            </article>
            <article className="focus-area" role="listitem">
              <h3>Execution</h3>
              <p>Helping organizations evolve without losing context, alignment, or assurance.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="different-perspective-title"
        className="section perspective-pause"
        id="different-perspective"
      >
        <span className="kicker">A DIFFERENT PERSPECTIVE</span>
        <h2 id="different-perspective-title">
          Organizations preserve artifacts. Organizations struggle to preserve
          understanding.
        </h2>
        <p className="perspective-primary">
          Artifacts often remain after the decision, change, or execution path
          that produced them.
        </p>
        <p className="perspective-secondary">
          What is harder to preserve is the understanding that connects them:
        </p>
        <ul aria-label="Understanding signals" className="perspective-list">
          <li>Why decisions were made.</li>
          <li>What assumptions existed.</li>
          <li>What dependencies mattered.</li>
          <li>What context shaped outcomes.</li>
        </ul>
        <p className="perspective-secondary">
          As organizations evolve, understanding becomes harder to retain and
          more important to preserve.
        </p>
      </section>

      <section
        aria-labelledby="explorations"
        className="section exploration-editorial"
      >
        <div className="section-head">
          <b>Current explorations</b>
          <p>The questions introduced above are not theoretical.</p>
          <p>
            ShiftBy explores these questions through a small number of ongoing
            initiatives focused on how organizations understand, decide, adapt,
            and execute.
          </p>
        </div>
        <ul aria-label="ShiftBy explorations" className="exploration-list">
          <li>
            <h3>UnifyPlane</h3>
            <p>Exploring how decisions, dependencies, and execution remain connected over time.</p>
          </li>
          <li>
            <h3>CanonLens</h3>
            <p>Exploring how artifacts are interpreted differently across people, systems, and AI.</p>
          </li>
          <li>
            <h3>Inspiral</h3>
            <p>Exploring how organizational knowledge develops, adapts, and survives change.</p>
          </li>
        </ul>
        <p className="exploration-support">
          These explorations help challenge and refine the perspective
          presented throughout this site.
        </p>
        <Link className="inline-link" href="/explorations">
          Explore the explorations →
        </Link>
      </section>

      <section aria-labelledby="cta-title" className="section plain-cta">
        <span className="kicker">Start the conversation</span>
        <h2 id="cta-title">Understanding should survive change.</h2>
        <p>
          Organizations that preserve understanding are better positioned to
          adapt, align, and execute as complexity increases.
        </p>
        <p>
          Organizations pursuing AI strategy, AI readiness, or responsible AI
          initiatives often discover that preserving understanding becomes a
          critical capability.
        </p>
        <p>ShiftBy helps leaders build that capability.</p>
        <div aria-label="Final calls to action" className="cta-links">
          <Link className="text-cta primary" href="/contact">
            Start a conversation →
          </Link>
          <Link className="text-cta" href="/services">
            Explore Services →
          </Link>
          <Link className="text-cta" href="/perspective">
            Explore the perspective →
          </Link>
        </div>
      </section>
    </div>
  );
}
