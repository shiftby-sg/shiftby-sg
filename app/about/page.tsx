import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About | ShiftBy"
  },
  description:
    "Why ShiftBy exists: organizations preserve artifacts, but understanding is harder to preserve.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <div className="about-design-port">
      <section className="movement" aria-labelledby="observation-title">
        <div className="movement-inner">
          <article className="essay wide">
            <span className="kicker">About ShiftBy</span>
            <h1 id="observation-title">The perspective begins with an observation.</h1>
            <div className="intro-copy">
              <p className="lead">
                Organizations constantly change. Strategies evolve. Teams reorganize.
                Systems are replaced. Processes adapt. Technologies advance. AI
                accelerates decision-making and execution.
              </p>
            </div>
            <div className="intro-copy">
              <p>Yet confidence does not come from preserving execution.</p>
              <p>Confidence comes from preserving understanding.</p>
              <p>ShiftBy exists to help organizations preserve understanding through change.</p>
            </div>
            <div className="observation-destination" aria-label="Core observation">
              <p>Organizations preserve artifacts.</p>
              <p>Understanding is harder to preserve.</p>
            </div>
            <div className="observation-bridge">
              <p>
                Understanding is not information. Organizations already possess
                information. They have documents, systems, dashboards, controls,
                reports, records, and data.
              </p>
              <p>
                Understanding is the context that connects decisions, assumptions,
                evidence, accountability, dependencies, and outcomes.
              </p>
              <p>
                Information records what happened. Understanding explains why it
                mattered.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="movement" aria-label="The evidence">
        <div className="movement-inner">
          <article className="essay wide">
            <div className="evidence-flow">
              <div className="intro-copy evidence-opening">
                <p className="lead">The problem shows up across different environments.</p>
              </div>
              <div className="intro-copy">
                <p>
                  The observation did not emerge from a single domain. It appeared
                  across enterprise work in SAP, Johnson &amp; Johnson, and Kenvue,
                  including APAC leadership contexts where technology, architecture,
                  cybersecurity, operational resilience, manufacturing, supply chain,
                  data, governance, and AI all made the same pattern visible from
                  different directions.
                </p>
                <p>Different environments. Similar questions.</p>
                <p>The same questions continued to appear.</p>
              </div>
              <div className="observer-note">
                <div className="observer-name">
                  <b>Ananda Krishna Marri</b>
                  <span>Founder, ShiftBy</span>
                  <span>IAPP Certified AI Governance Professional (AIGP)</span>
                </div>
                <div>
                  <p>
                    ShiftBy grew from a pattern observed across technology,
                    operations, data, governance, and AI environments, not from a
                    single discipline.
                  </p>
                  <p>
                    Across those environments, the technologies changed, the operating
                    models changed, and the conditions changed, yet the same
                    underlying questions continued to emerge: what had been decided,
                    what evidence supported it, what assumptions shaped it, who
                    understood the context, how accountability carried forward, and
                    what drifted.
                  </p>
                  <p className="credential-line">
                    The consistency of the pattern became difficult to ignore.
                  </p>
                </div>
              </div>
              <div className="meaning-lines" aria-label="Meaning pattern">
                <p>Data remained available.</p>
                <p>Knowledge remained visible.</p>
                <p>Meaning became harder to preserve.</p>
              </div>
              <div className="origin-thread">
                <p>
                  Over time, the observations began to reveal different dimensions
                  of the same challenge.
                </p>
                <p>
                  Some questions were about execution: how decisions, actions,
                  evidence, dependencies, and accountability remained connected
                  over time.
                </p>
                <p>
                  Some were about meaning: how information, knowledge, context,
                  and interpretation remained connected as organizations evolved.
                </p>
                <p>
                  Some were about discovery: how observations became knowledge and
                  how knowledge informed decisions.
                </p>
              </div>
              <div className="intro-copy">
                <p>
                  Across data platforms, analytics environments, knowledge systems,
                  research environments, and AI-enabled ecosystems, the relationships
                  that explain why something matters often became harder to recover
                  than the information itself.
                </p>
              </div>
              <div className="ai-lines" aria-label="AI visibility">
                <p>AI did not create the challenge.</p>
                <p>AI makes the challenge more visible.</p>
                <p>
                  Organizations pursuing enterprise AI, AI adoption strategies, and
                  responsible AI programs often discover the challenge more quickly.
                </p>
              </div>
              <div className="intro-copy">
                <p>
                  As execution expands across people, systems, automation, and AI,
                  organizations face the same underlying need with greater scale,
                  speed, participation, automation, and complexity.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="movement" aria-labelledby="response-title">
        <div className="movement-inner">
          <article className="essay">
            <h2 id="response-title">How ShiftBy Explores The Challenge</h2>
            <div className="response-text">
              <p className="lead">
                ShiftBy explores the challenge through advisory work, coaching,
                consulting, thought leadership, and ongoing investigations.
              </p>
              <ul className="inline-series" aria-label="Four complementary lenses">
                <li>Decision Traceability</li>
                <li>Organizational Memory</li>
                <li>Human-AI Accountability</li>
                <li>Adaptive Execution</li>
              </ul>
              <p>
                Over time, the recurring questions began to separate into three
                related dimensions: execution, meaning, and discovery.
              </p>
              <ul className="plain-list" aria-label="ShiftBy investigations">
                <li>
                  UnifyPlane <span>explores how execution remains understandable over time.</span>
                </li>
                <li>
                  CanonLens <span>explores how meaning remains connected to information and context.</span>
                </li>
                <li>
                  Inspiral <span>explores how discovery becomes knowledge and informs decisions.</span>
                </li>
              </ul>
              <p>
                Together, they helped shape the leadership perspective that
                became ShiftBy.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="movement doctrine" aria-labelledby="doctrine-title">
        <div className="movement-inner">
          <article className="essay wide">
            <h2 id="doctrine-title">Understanding Should Survive Change</h2>
            <div className="intro-copy">
              <p>Organizations change.</p>
              <p>People change.</p>
              <p>Technology changes.</p>
              <p>Operating models change.</p>
              <p>AI participates.</p>
              <p>The artifacts may remain.</p>
              <p>Drift may appear.</p>
              <p>Understanding should remain with them.</p>
              <p>That is the purpose of ShiftBy.</p>
              <p>To help understanding survive change.</p>
            </div>
            <div className="final-doctrine" aria-label="ShiftBy doctrine">
              <span>The observation became the source.</span>
              <span>The work is preserving understanding through change.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="movement about-contact-cta" aria-labelledby="about-contact-title">
        <div className="movement-inner">
          <article className="essay wide about-contact-cta-inner">
            <span className="kicker">Start a conversation</span>
            <h2 id="about-contact-title">Start with the question.</h2>
            <p>
              If the pattern feels familiar, the next step can begin with a
              conversation about what needs to remain understood as decisions,
              knowledge, accountability, or execution changes.
            </p>
            <div className="about-cta-actions" aria-label="About page next step">
              <Link className="button primary" href="/contact">
                Start a conversation
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
