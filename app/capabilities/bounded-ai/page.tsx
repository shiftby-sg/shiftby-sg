import type { Metadata } from "next";

import { CapabilityDetailLayout } from "@/components/capabilities/CapabilityDetailLayout";
import styles from "@/components/capabilities/capability.module.css";
import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata(pageMetadataEntries.boundedAi);

const relatedServices = [
  {
    title: "AI Task, Agent and Workflow Advisory",
    description:
      "Design explicit input/output boundaries, reasoning guidance, tool permissions, validation gates, and stopping conditions for tasks and agents.",
    href: "/services?service=ai-task-agent-workflow-advisory"
  },
  {
    title: "AI Evaluation and Reliability",
    description:
      "Measure task performance, semantic fidelity, boundary adherence, and regression under exceptional or changing operational conditions.",
    href: "/services?service=ai-evaluation-reliability"
  }
];

export default function BoundedAiPage() {
  return (
    <CapabilityDetailLayout
      ctaSubtitle="Move beyond open-ended demos into bounded, observable, enterprise-ready AI workflows."
      ctaTitle="Keep AI reasoning and execution aligned with intended purpose"
      currentSlug="bounded-ai"
      formalQuote="Bounded AI is the organizational capability to reduce drift in AI tasks, AI agents, and coordinated workflows by establishing and maintaining explicit boundaries for their inputs, reasoning responsibilities, execution flow, outputs, and resource use."
      formalQuoteTag="ShiftBy Capability Definition: Bounded AI"
      kicker="Capability / Alignment & Drift Reduction"
      relatedServices={relatedServices}
      subtitle="Enterprises introduce AI tasks and agents into processes that carry business requirements and legal obligations. General domain knowledge does not establish an enterprise’s own rules, definitions, and operating state. ShiftBy helps organizations retain control as execution passes across people, systems, and AI boundaries."
      title="Bounded AI"
    >
      {/* 1. The Challenge of Execution Drift */}
      <section aria-labelledby="drift-heading" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Execution Alignment</span>
            <h2 className={styles.sectionTitle} id="drift-heading">
              Why alignment weakens without execution failure.
            </h2>
            <p className={styles.sectionLead}>
              An AI system can generate syntactically valid outputs while silently
              drifting from its intended business contribution. Bounded AI prevents
              these silent failures:
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Plausibility vs. Enterprise Suitability</h3>
              <p className={styles.cardBody}>
                LLMs naturally substitute general assumptions for missing enterprise
                context. Without explicit boundary constraints, a response may sound
                convincing while violating operational rules.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Downstream Propagation of Altered Meaning</h3>
              <p className={styles.cardBody}>
                If an upstream task omits a qualification or alters a requirement,
                downstream agents proceed on corrupted assumptions, compounding errors
                across records and actions.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Uncontrolled Tool Discretion</h3>
              <p className={styles.cardBody}>
                When an agent receives tool access, its permitted actions, targets,
                and effects must remain bounded so adaptive execution does not
                become uncontrolled scope expansion.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Runaway Resource Consumption</h3>
              <p className={styles.cardBody}>
                Unchecked retry loops, recursive tool calls, and expanding context
                windows consume time, tokens, and budget without producing an acceptable result.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 2. What Bounded AI Establishes */}
      <section aria-labelledby="mechanisms-heading" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>The Four Disciplines</span>
          <h2 className={styles.sectionTitle} id="mechanisms-heading">
            What the capability establishes in practice.
          </h2>
          <p className={styles.sectionLead}>
            Bounded AI governs AI participation through four explicit disciplines
            across individual tasks, autonomous agents, and multi-agent systems:
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Discipline 1</span>
            <h3 className={styles.mechanismTitle}>Prepared Inputs & Output Contracts</h3>
            <p className={styles.cardBody}>
              Making input requirements and expected output semantics explicit.
              When required context is missing, the system clarifies or halts
              rather than generating unsupported inferences.
            </p>
          </article>

          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Discipline 2</span>
            <h3 className={styles.mechanismTitle}>Bounded Reasoning & Reusable Guidance</h3>
            <p className={styles.cardBody}>
              Separating reusable reasoning skills and business rules from the
              ephemeral prompt, ensuring instructions can be refined without
              silently redefining interfaces.
            </p>
          </article>

          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Discipline 3</span>
            <h3 className={styles.mechanismTitle}>Controlled Flow, Handoffs & Validation</h3>
            <p className={styles.cardBody}>
              Enforcing validation gates at handoffs. Distinguishing deterministic
              rule-governed progression from autonomous agent discretion to
              preserve intent across multi-stage workflows.
            </p>
          </article>

          <article className={styles.mechanismCard}>
            <span className={styles.scenarioTag}>Discipline 4</span>
            <h3 className={styles.mechanismTitle}>Observable Execution & Cumulative Limits</h3>
            <p className={styles.cardBody}>
              Providing complete execution traceability, validation outcomes, and
              enforcing strict cumulative time, token, and cost allowances across
              delegated work.
            </p>
          </article>
        </div>
      </section>

      {/* 3. When the Capability Matters */}
      <section aria-labelledby="triggers-heading" className={styles.quietBand}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Applicability</span>
            <h2 className={styles.sectionTitle} id="triggers-heading">
              Situations where Bounded AI is essential.
            </h2>
            <p className={styles.sectionLead}>
              This discipline becomes indispensable under specific operating conditions:
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <article className={styles.card}>
              <span className={styles.scenarioTag}>Scenario A</span>
              <h3 className={styles.cardTitle}>Experimental AI Becoming Operational</h3>
              <p className={styles.cardBody}>
                Moving a prototype into routine business operations where downstream
                systems, clients, or audits rely directly on recurring results.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.scenarioTag}>Scenario B</span>
              <h3 className={styles.cardTitle}>Multi-Agent & Workflow Handoffs</h3>
              <p className={styles.cardBody}>
                When several specialized agents collaborate on a complex outcome,
                preventing qualifications and caveats from being dropped at handoff seams.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.scenarioTag}>Scenario C</span>
              <h3 className={styles.cardTitle}>Agents Granted Enterprise Tool Access</h3>
              <p className={styles.cardBody}>
                When an agent can execute database updates, API calls, or email
                triggers, ensuring actions remain strictly bounded to the assigned task.
              </p>
            </article>
          </div>
        </div>
      </section>
    </CapabilityDetailLayout>
  );
}
