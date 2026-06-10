import Link from "next/link";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(pageMetadataEntries.capabilities);

export default function CapabilitiesPage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="section hero">
        <div>
          <h1 id="hero-title">
            <span className="hero-title-line">Four capabilities help</span>
            <span className="hero-title-line">organizations preserve</span>
            <span className="hero-title-line">understanding.</span>
          </h1>
          <p className="lead">
            Organizations now execute across people, systems, suppliers,
            automation, and AI.
          </p>
          <p className="lead">
            As execution becomes more distributed, understanding becomes harder
            to preserve and confidence becomes harder to maintain.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#capabilities">
              Explore the capabilities
            </a>
            <Link className="button" href="/where-shiftby-helps">
              See where they apply
            </Link>
          </div>
        </div>
        <aside aria-label="ShiftBy authority doctrine" className="doctrine-panel">
          <b>Capability bridge</b>
          <p className="doctrine-line">Execution changes.</p>
          <p className="doctrine-line">Understanding preserves confidence.</p>
          <p className="doctrine-note">
            This is the bridge into the capabilities that follow.
          </p>
        </aside>
      </section>

      <section aria-labelledby="why-capabilities-matter" className="quiet-band">
        <div className="section split">
          <div>
            <p className="kicker">Why capabilities matter</p>
            <h2 id="why-capabilities-matter">
              Artifacts alone do not preserve understanding.
            </h2>
            <p>
              Artifacts may remain while rationale, evidence, and
              accountability become harder to recover.
            </p>
          </div>
          <div className="statement-list">
            <article className="statement">
              <b>Preserved</b>
              <p>
                Artifacts can survive long after the work, decision, or change
                that produced them.
              </p>
            </article>
            <article className="statement">
              <b>At risk</b>
              <p>
                What fades is the why: intent, trade-offs, decision lineage,
                evidence, and how outcomes were achieved.
              </p>
            </article>
            <article className="statement">
              <b>Required</b>
              <p>
                Capabilities help keep that understanding usable as execution
                continues to change.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="multiple-capabilities" className="section">
        <div className="bridge-panel">
          <div>
            <p className="kicker">Why four capabilities</p>
            <h2 id="multiple-capabilities">
              No single capability preserves understanding.
            </h2>
            <p className="bridge-intro">
              Most organizations recognize these challenges immediately. They
              experience them every day, even when they describe them
              differently. Different failure modes require different
              capabilities.
            </p>
            <p className="bridge-intro">
              Together, these four capabilities form a complete
              understanding-preservation model.
            </p>
            <p className="bridge-intro">
              Each capability addresses a specific way understanding can be lost
              as execution becomes more distributed.
            </p>
          </div>
          <div className="bridge-points">
            <span className="signal-context">Failure modes</span>
            <article className="bridge-point">
              <i>01</i>
              <p>Decisions lose rationale, evidence, and approval context over time.</p>
            </article>
            <article className="bridge-point">
              <i>02</i>
              <p>Organizational memory fragments across people, artifacts, and change.</p>
            </article>
            <article className="bridge-point">
              <i>03</i>
              <p>Review, approval, and accountability become harder to locate.</p>
            </article>
            <article className="bridge-point">
              <i>04</i>
              <p>Transformation can outpace shared understanding.</p>
            </article>
          </div>
        </div>
      </section>

      <section aria-label="Foundational capabilities" className="quiet-band" id="capabilities">
        <div className="section">
          <div className="capability-sections">
            <article className="capability-detail">
              <div>
                <h3>Decision Traceability</h3>
                <p className="executive-takeaway">
                  Important decisions should remain explainable long after they are made.
                </p>
                <p className="failure-mode">
                  <b>Addresses failure mode</b>
                  Decisions lose rationale, evidence, and approval context over time.
                </p>
                <p className="why">
                  Important decisions rarely exist in isolation; their impact extends
                  across dependencies, processes, systems, and future change.
                </p>
                <p className="why">
                  Decision Traceability keeps reasoning, assumptions, evidence,
                  approval, and decision lineage recoverable over time.
                </p>
                <p className="why">
                  This challenge increasingly appears within enterprise AI operating
                  models and AI-assisted decision environments.
                </p>
              </div>
              <div className="detail-grid">
                <div className="detail-cell">
                  <b>Organizational challenge</b>
                  <p>
                    Decisions often outlive the people, meetings, assumptions, and
                    evidence that shaped them.
                  </p>
                </div>
                <div className="detail-cell">
                  <b>Questions leaders ask</b>
                  <ul>
                    <li>Why was this decision made?</li>
                    <li>What changed after approval?</li>
                    <li>What evidence supported it?</li>
                  </ul>
                </div>
                <div className="detail-cell span-wide">
                  <b>Why this matters now</b>
                  <p>
                    AI can accelerate recommendations, summaries, and execution steps
                    faster than organizations can preserve decision intelligence and
                    explain their rationale.
                  </p>
                </div>
              </div>
            </article>

            <article className="capability-detail">
              <div>
                <h3>Organizational Memory</h3>
                <p className="executive-takeaway">
                  Understanding should survive personnel and organizational change.
                </p>
                <p className="failure-mode">
                  <b>Addresses failure mode</b>
                  Organizational memory fragments across people, artifacts, and change.
                </p>
                <p className="why">
                  Artifacts may survive organizational change while the context that
                  made them meaningful disappears.
                </p>
                <p className="why">
                  Organizational Memory keeps critical context, knowledge
                  relationships, and evidence available as people, teams, and
                  operating models evolve.
                </p>
                <p className="why">
                  Organizations often address this through knowledge management
                  approaches, enterprise knowledge graphs, and governed knowledge
                  systems.
                </p>
              </div>
              <div className="detail-grid">
                <div className="detail-cell">
                  <b>Organizational challenge</b>
                  <p>
                    Knowledge fragments across people, artifacts, and informal context
                    that may never be captured together.
                  </p>
                </div>
                <div className="detail-cell">
                  <b>Questions leaders ask</b>
                  <ul>
                    <li>What do we know and why?</li>
                    <li>Where does critical context live?</li>
                    <li>What disappears when people move?</li>
                  </ul>
                </div>
                <div className="detail-cell span-wide">
                  <b>Why this matters now</b>
                  <p>
                    AI can generate, summarize, and transform artifacts faster than
                    organizations can preserve the context and knowledge relationships
                    behind them.
                  </p>
                </div>
              </div>
            </article>

            <article className="capability-detail">
              <div>
                <h3>Human-AI Accountability</h3>
                <p className="executive-takeaway">
                  AI participation should not obscure review, approval, or responsibility.
                </p>
                <p className="failure-mode">
                  <b>Addresses failure mode</b>
                  Review, approval, and accountability become harder to locate.
                </p>
                <p className="why">
                  As AI participates in analysis and execution, accountability can
                  become harder to trace across people, artifacts, systems, and
                  decisions.
                </p>
                <p className="why">
                  Human–AI Accountability keeps review, approval, escalation,
                  evidence, judgment, and decision lineage visible.
                </p>
                <p className="why">
                  Responsible AI programs and AI governance initiatives frequently
                  depend on maintaining visible accountability, review, and evidence.
                </p>
              </div>
              <div className="detail-grid">
                <div className="detail-cell">
                  <b>Organizational challenge</b>
                  <p>
                    Responsibility becomes harder to see when judgment, automation,
                    delegation, evidence, and review are spread across humans, AI,
                    and artifacts.
                  </p>
                </div>
                <div className="detail-cell">
                  <b>Questions leaders ask</b>
                  <ul>
                    <li>Who approved this?</li>
                    <li>Who reviewed this?</li>
                    <li>What evidence supports this outcome?</li>
                  </ul>
                </div>
                <div className="detail-cell span-wide">
                  <b>Why this matters now</b>
                  <p>
                    Enterprise AI and human-AI collaboration introduce new
                    participation without automatically clarifying authority,
                    review, reliance, evidence, or responsibility.
                  </p>
                </div>
              </div>
            </article>

            <article className="capability-detail">
              <div>
                <h3>Adaptive Execution</h3>
                <p className="executive-takeaway">
                  Organizations must adapt without losing operational intent.
                </p>
                <p className="failure-mode">
                  <b>Addresses failure mode</b>
                  Transformation can outpace shared understanding.
                </p>
                <p className="why">
                  As organizations change, dependencies, assumptions, and operating
                  models change as well.
                </p>
                <p className="why">
                  Adaptive Execution explores how organizations can evolve while
                  remaining aware of those changes and their impact.
                </p>
                <p className="why">
                  Organizations pursuing AI transformation and large-scale
                  automation often encounter this challenge as operating models
                  evolve.
                </p>
              </div>
              <div className="detail-grid">
                <div className="detail-cell">
                  <b>Organizational challenge</b>
                  <p>
                    Transformation can move faster than the organization&apos;s
                    ability to retain context, dependencies, and operating intent.
                  </p>
                </div>
                <div className="detail-cell">
                  <b>Questions leaders ask</b>
                  <ul>
                    <li>What changed and why?</li>
                    <li>What remains consistent?</li>
                    <li>How do we adapt without losing intent?</li>
                  </ul>
                </div>
                <div className="detail-cell span-wide">
                  <b>Why this matters now</b>
                  <p>
                    AI, automation, and continuous transformation can change
                    operating models faster than shared understanding can adapt.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="what-this-enables" className="section synthesis-section">
        <div className="synthesis">
          <div>
            <p className="kicker">What this enables</p>
            <h2 id="what-this-enables">What these capabilities make possible.</h2>
          </div>
          <div>
            <p>
              When decisions remain explainable, organizational memory remains
              usable, accountability remains visible, and intent survives
              change, leaders have enough context to act with confidence.
            </p>
            <p>
              These capabilities keep decisions, knowledge, accountability, and
              execution connected as work moves across people, systems,
              suppliers, automation, and AI.
            </p>
            <p>
              The context changes. The underlying challenge remains:
              understanding must stay usable as execution continues.
            </p>
            <Link className="text-link" href="/where-shiftby-helps">
              See how these capabilities apply →
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="from-capability-to-practice" className="section practice-bridge">
        <div className="section-head">
          <p className="kicker">From capability to practice</p>
          <h2 id="from-capability-to-practice">
            Capabilities are explored through ongoing investigations.
          </h2>
          <p>ShiftBy explores these capabilities through a small number of ongoing initiatives.</p>
          <p>These are not products.</p>
          <p>
            They investigate how understanding can remain connected across
            decisions, knowledge, accountability, and change.
          </p>
        </div>
        <div className="initiative-list">
          <article className="initiative-row">
            <b>UnifyPlane</b>
            <p>Explores decision traceability, accountability, and adaptive execution.</p>
          </article>
          <article className="initiative-row">
            <b>CanonLens</b>
            <p>Explores organizational memory and shared understanding across people, systems, and AI.</p>
          </article>
          <article className="initiative-row">
            <b>Inspiral</b>
            <p>Explores how organizational knowledge forms, changes, and survives over time.</p>
          </article>
        </div>
        <Link className="text-link" href="/explorations">
          Explore the explorations →
        </Link>
      </section>

      <section aria-labelledby="understanding-confidence" className="section page-closing">
        <div>
          <p className="kicker">Understanding and confidence</p>
          <h2 id="understanding-confidence">
            Organizations preserve confidence when they preserve understanding.
          </h2>
          <p>
            As execution becomes more distributed across people, systems,
            automation, suppliers, and AI, preserving understanding becomes
            more difficult.
          </p>
          <p>
            Organizations that sustain confidence over time are not necessarily
            those with the most artifacts.
          </p>
          <p>They are the ones that preserve understanding.</p>
        </div>
        <div className="cta-links">
          <Link className="button primary" href="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
