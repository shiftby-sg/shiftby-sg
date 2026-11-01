import Link from "next/link";
import type { Metadata } from "next";

import { ServiceCard } from "@/components/services/ServiceCard";
import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./services.module.css";

export const metadata: Metadata = getPageMetadata(pageMetadataEntries.services);

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* ===================================================================
          1. HERO & JUMP ANCHORS
          =================================================================== */}
      <section aria-labelledby="services-catalog-title" className={`${styles.section} ${styles.hero}`}>
        <span className={styles.kicker}>Defined Engagements</span>
        <h1 className={styles.heroTitle} id="services-catalog-title">
          ShiftBy Service Catalog
        </h1>
        <p className={styles.heroSubtitle}>
          ShiftBy helps organizations prepare knowledge for AI, keep
          AI-supported work aligned with its intended purpose, and sustain human
          responsibility throughout its use. Each engagement starts with a
          defined enterprise problem and concludes with evidence, findings,
          practical deliverables, and agreed next steps.
        </p>

        <nav aria-label="Jump to service cluster" className={styles.jumpPills}>
          <a className={styles.pill} href="#organizational-memory">
            Organizational Memory (2)
          </a>
          <a className={styles.pill} href="#bounded-ai">
            Bounded AI (1)
          </a>
          <a className={styles.pill} href="#human-ai-accountability">
            Human–AI Accountability (2)
          </a>
          <a className={styles.pill} href="#cross-cutting">
            Security & Evaluation (2)
          </a>
          <a className={styles.pill} href="#engagement-model">
            How Engagements Work
          </a>
        </nav>
      </section>

      {/* ===================================================================
          2. ORGANIZATIONAL MEMORY SERVICES
          =================================================================== */}
      <section
        aria-labelledby="org-memory-services-heading"
        className={styles.quietBand}
        id="organizational-memory"
      >
        <div className={styles.section}>
          <div className={styles.clusterHeader}>
            <span className={styles.kicker}>Capability: Organizational Memory</span>
            <h2 className={styles.clusterTitle} id="org-memory-services-heading">
              Preserve the context that makes knowledge useful through change.
            </h2>
            <p className={styles.clusterDescription}>
              Organizational Memory helps organizations preserve, connect,
              recover, and responsibly reuse knowledge, relationships, provenance,
              prior state, uncertainty, and learning.
            </p>
            <Link
              className={styles.clusterCapabilityLink}
              href="/capabilities/organizational-memory"
            >
              Learn more about the Organizational Memory capability →
            </Link>
          </div>

          <div className={styles.servicesGrid}>
            <ServiceCard
              capabilityBadge="Knowledge Architecture"
              note="Knowledge-continuity work can examine context at risk during personnel, supplier, or system changes without requiring an active AI system or commissioning full architecture design."
              scopeOptions={[
                "Semantic modeling and relationship design across key domains",
                "Knowledge-graph architecture and enterprise context integration",
                "Lifecycle definition for retained AI context and long-term memory",
                "Clarifying ownership, review rights, and change acceptance"
              ]}
              slug="ai-knowledge-context-architecture"
              targetNeed="For organizations whose knowledge is fragmented, difficult to interpret, or unsuitable for reuse by people and AI systems."
              title="AI Knowledge & Context Architecture"
              typicalOutputs={[
                "Knowledge and context architecture specification",
                "Semantic relationship model and domain taxonomy",
                "Retained context lifecycle and ownership requirements",
                "Prioritized remediation backlog for knowledge fragmentation"
              ]}
            />

            <ServiceCard
              capabilityBadge="Retrieval & RAG"
              note="Retrieval quality and answer quality remain distinct. A relevant source or citation does not by itself establish a correct, grounded, or suitable answer."
              scopeOptions={[
                "Readiness & Architecture: source suitability, permissions, metadata, data quality, content structure, freshness, and retrieval design",
                "Quality Evaluation: retrieval coverage, answer grounding, attribution, conflicting source resolution, and unsupported-answer handling"
              ]}
              slug="rag-retrieval-assessment"
              targetNeed="For organizations preparing a retrieval use case or investigating unsuitable, conflicting, or hallucinated search and RAG results."
              title="RAG & Enterprise Retrieval Assessment"
              typicalOutputs={[
                "Readiness findings and source suitability scorecard",
                "Retrieval relevance and grounding evaluation report",
                "Failure analysis across complex and conflicting queries",
                "Prioritized improvements and verification criteria"
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. BOUNDED AI SERVICES
          =================================================================== */}
      <section
        aria-labelledby="bounded-ai-services-heading"
        className={styles.section}
        id="bounded-ai"
      >
        <div className={styles.clusterHeader}>
          <span className={styles.kicker}>Capability: Bounded AI</span>
          <h2 className={styles.clusterTitle} id="bounded-ai-services-heading">
            Keep AI reasoning and execution aligned with the work intended.
          </h2>
          <p className={styles.clusterDescription}>
            Bounded AI aims to reduce drift from agreed purpose, context,
            responsibilities, result requirements, and permitted progression
            across individual tasks, autonomous agents, and multi-agent workflows.
          </p>
          <Link
            className={styles.clusterCapabilityLink}
            href="/capabilities/bounded-ai"
          >
            Learn more about the Bounded AI capability →
          </Link>
        </div>

        <div className={styles.servicesGrid}>
          <ServiceCard
            capabilityBadge="Tasks, Agents & Workflows"
            note="A design review assesses intended arrangements, not proof of operating effectiveness. Measured performance requires appropriate empirical testing."
            scopeOptions={[
              "Readiness & Boundary Assessment: verify whether purpose, context, delegated discretion, permitted actions, and acceptance conditions are sufficiently defined",
              "Task & Control Design: specify input/output semantic contracts, reusable reasoning guidance (skills), tool permissions, validation gates, and stopping conditions",
              "Workflow Review: examine handoffs, branches, correction paths, and the distinction between deterministic rules and autonomous agent discretion",
              "Observability & Resource Planning: review execution traceability, validation tracking, and cumulative token, cost, time, and retry allowances"
            ]}
            slug="ai-task-agent-workflow-advisory"
            targetNeed="For organizations that need an AI contribution to remain aligned with a defined business requirement across single tasks or multi-stage workflows."
            title="AI Task, Agent & Workflow Advisory"
            typicalOutputs={[
              "Readiness findings and boundary gap assessment",
              "Task/workflow boundary model and input-output contracts",
              "Reusable reasoning guidance and skill specifications",
              "Observability, resource allowance, and validation plan"
            ]}
          />
        </div>
      </section>

      {/* ===================================================================
          4. HUMAN–AI ACCOUNTABILITY SERVICES
          =================================================================== */}
      <section
        aria-labelledby="accountability-services-heading"
        className={styles.quietBand}
        id="human-ai-accountability"
      >
        <div className={styles.section}>
          <div className={styles.clusterHeader}>
            <span className={styles.kicker}>Capability: Human–AI Accountability</span>
            <h2 className={styles.clusterTitle} id="accountability-services-heading">
              Keep human ownership, authority, and answerability explicit.
            </h2>
            <p className={styles.clusterDescription}>
              Human–AI Accountability applies across knowledge and AI systems.
              It covers who owns knowledge, who authorizes AI participation, who
              reviews results, and who can intervene or accept residual risk.
            </p>
            <Link
              className={styles.clusterCapabilityLink}
              href="/capabilities/human-ai-accountability"
            >
              Learn more about Human–AI Accountability →
            </Link>
          </div>

          <div className={styles.servicesGrid}>
            <ServiceCard
              capabilityBadge="Governance & Oversight"
              note="Oversight is proportionate to consequence and risk; not every output requires individual human approval. Relevant policies can inform the work without constituting legal advice."
              scopeOptions={[
                "Ownership & Decision Rights: map legitimate authority, permitted use, supplier boundaries, and risk acceptance for a bounded use case",
                "Human Oversight Design: establish review conditions, escalation paths, and verify whether reviewers have the competence, information, time, and authority to challenge or override AI work"
              ]}
              slug="ai-governance-human-oversight"
              targetNeed="For organizations with unclear responsibility for AI-enabled work, or oversight that exists on paper but is difficult to exercise in practice."
              title="AI Governance & Human Oversight"
              typicalOutputs={[
                "Accountability and decision-rights matrix",
                "Meaningful human oversight operating procedure",
                "Intervention, challenge, and override requirements",
                "Evidence expectations for risk acceptance"
              ]}
            />

            <ServiceCard
              capabilityBadge="Assurance & Evidence"
              note="Distinguishes documented policy design from evidence of actual operating effectiveness. Testing does not assume controls work merely because they are written."
              scopeOptions={[
                "Evidence Sufficiency Review: connect requirements, controls, test evidence, findings, decisions, owners, and verification",
                "Decision Traceability: reconstruct purpose, evidence, rationale, authority, resulting action, observed state, and subsequent review",
                "Incident & Learning Review: examine selected incidents, exceptions, and remediation records to identify recurring systemic weaknesses"
              ]}
              slug="ai-assurance-evidence-review"
              targetNeed="For organizations deciding whether available evidence supports reliance on an AI-enabled activity, or preparing for internal or independent examination."
              title="AI Assurance & Evidence Review"
              typicalOutputs={[
                "Evidence and traceability assessment report",
                "Control effectiveness gap analysis",
                "Unresolved limitations register",
                "Defensible reliance decision recommendations"
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. CROSS-CUTTING SERVICES: SECURITY & RELIABILITY
          =================================================================== */}
      <section
        aria-labelledby="cross-cutting-services-heading"
        className={styles.section}
        id="cross-cutting"
      >
        <div className={styles.clusterHeader}>
          <span className={styles.kicker}>Cross-Cutting Services</span>
          <h2 className={styles.clusterTitle} id="cross-cutting-services-heading">
            Security, red teaming, and measured reliability testing.
          </h2>
          <p className={styles.clusterDescription}>
            Security and evaluation services apply across knowledge systems, AI
            tasks, autonomous agents, and workflows. They can be commissioned
            independently or combined with advisory engagements.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <ServiceCard
            capabilityBadge="Security & Red Teaming"
            note="Testing remains strictly within agreed client authorization, targets, data handling, and operating constraints. A review does not imply attacks were executed unless red teaming is scoped."
            scopeOptions={[
              "Security Assessment: review attack surface, trust boundaries, and controls across AI applications, RAG pipelines, agents, and workflows",
              "Adversarial Red Teaming: execute authorized adversarial scenarios examining prompt injection, retrieval/memory manipulation, sensitive data exposure, unsafe tool use, and approval bypass"
            ]}
            slug="ai-security-red-teaming"
            targetNeed="For organizations that need to identify security vulnerabilities or examine system behavior under adversarial attack conditions."
            title="AI Security Assessment & Red Teaming"
            typicalOutputs={[
              "Adversarial test findings and attack path evidence",
              "Trust boundary and control gap analysis",
              "Remediation priorities and retest verification criteria"
            ]}
          />

          <ServiceCard
            capabilityBadge="Evaluation & Reliability"
            note="Claims of reduced drift require a documented baseline comparator and comparable empirical evidence. Valid output formatting alone does not demonstrate reliability."
            scopeOptions={[
              "Empirical Quality Evaluation: evaluate defined tasks or workflows against agreed criteria under normal, exceptional, and changing conditions",
              "Behavioral Drift Testing: measure task performance, semantic fidelity, grounding, boundary adherence, and regression after changes",
              "Remediation Verification & Retesting: independently verify whether previously identified quality, security, or control findings have been resolved"
            ]}
            slug="ai-evaluation-reliability"
            targetNeed="For organizations seeking measured, empirical evidence that an AI task, agent, or workflow reliably performs its intended responsibility."
            title="AI Evaluation & Reliability Testing"
            typicalOutputs={[
              "Comprehensive evaluation plan and acceptance criteria",
              "Observed benchmark results and failure analysis",
              "Baseline comparator report for drift verification",
              "Retest findings and residual risk limitations"
            ]}
          />
        </div>
      </section>

      {/* ===================================================================
          6. HOW ENGAGEMENTS WORK
          =================================================================== */}
      <section
        aria-labelledby="engagement-model-heading"
        className={`${styles.quietBand} ${styles.howSection}`}
        id="engagement-model"
      >
        <div className={styles.section}>
          <div className={styles.clusterHeader}>
            <span className={styles.kicker}>Engagement Lifecycle</span>
            <h2 className={styles.clusterTitle} id="engagement-model-heading">
              How ShiftBy engagements work in practice.
            </h2>
            <p className={styles.clusterDescription}>
              An engagement can focus on one specialized service or combine
              disciplines around a single enterprise problem. We work through
              bounded advisory sprints, control design, and empirical testing:
            </p>
          </div>

          <div className={styles.processGrid}>
            <article className={styles.processCard}>
              <span className={styles.processStepNum}>1</span>
              <h3 className={styles.processTitle}>Scope & Authorize</h3>
              <p className={styles.processBody}>
                Before work begins, we agree on the business problem, accountable
                executive owner, decisions the work must support, systems included,
                required data access and authorizations, and acceptance criteria.
              </p>
            </article>

            <article className={styles.processCard}>
              <span className={styles.processStepNum}>2</span>
              <h3 className={styles.processTitle}>Analyze, Design or Test</h3>
              <p className={styles.processBody}>
                We execute the agreed assessment, boundary modeling, adversarial
                testing, or governance review in collaboration with your teams,
                avoiding disruption to production environments.
              </p>
            </article>

            <article className={styles.processCard}>
              <span className={styles.processStepNum}>3</span>
              <h3 className={styles.processTitle}>Deliver & Enable</h3>
              <p className={styles.processBody}>
                Every engagement concludes with tangible artifacts, findings,
                defensible recommendations, retest criteria, and enablement
                guidance so your teams retain full operational capability.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. DELIVERY BOUNDARIES & GOVERNANCE
          =================================================================== */}
      <section
        aria-labelledby="boundaries-heading"
        className={styles.section}
      >
        <div className={styles.clusterHeader}>
          <span className={styles.kicker}>Governance & Independence</span>
          <h2 className={styles.clusterTitle} id="boundaries-heading">
            Delivery boundaries and client responsibilities.
          </h2>
          <p className={styles.clusterDescription}>
            Clear boundaries protect independence and ensure client leadership
            retains full institutional control throughout our work:
          </p>
        </div>

        <div className={styles.boundariesGrid}>
          <article className={`${styles.boundaryCard} ${styles.boundaryCardShiftby}`}>
            <div className={styles.boundaryHeader}>
              <h3 className={styles.boundaryTitle}>ShiftBy Responsibilities</h3>
            </div>
            <ul className={styles.boundaryList}>
              <li>Independent advisory, assessment, control design, testing, and enablement within the agreed scope.</li>
              <li>Producing actionable evidence, gap analyses, boundary specifications, and remediation criteria.</li>
              <li>Maintaining strict confidentiality and operating solely within agreed testing authorizations.</li>
              <li>Delivering clear findings that inform leadership decisions without bias or software vendor lock-in.</li>
            </ul>
          </article>

          <article className={`${styles.boundaryCard} ${styles.boundaryCardClient}`}>
            <div className={styles.boundaryHeader}>
              <h3 className={styles.boundaryTitle}>Client Responsibilities</h3>
            </div>
            <ul className={styles.boundaryList}>
              <li>Retaining full operational authority, system deployment, production integration, and daily operation.</li>
              <li>Making all consequential business decisions, policy approvals, and formal risk acceptances.</li>
              <li>Meeting legal, statutory, and regulatory obligations applicable to their industry and jurisdiction.</li>
              <li>Providing necessary access, operational context, and testing permissions required for the engagement.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ===================================================================
          8. CONVERSION CTA
          =================================================================== */}
      <section aria-labelledby="services-cta-heading" className={styles.quietBand}>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle} id="services-cta-heading">
            Ready to scope a bounded engagement?
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether investigating an underperforming RAG pipeline, establishing
            agent boundaries, or preparing for an assurance review, start with a
            30-minute discovery call.
          </p>
          <Link className={styles.buttonPrimary} href="/contact">
            Start a conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}
