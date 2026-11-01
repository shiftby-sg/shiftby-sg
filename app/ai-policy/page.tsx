import Link from "next/link";
import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

import styles from "./ai-policy.module.css";

export const metadata = getPageMetadata(pageMetadataEntries.aiPolicy);

const policySections = [
  {
    title: "1. Purpose & Governance Doctrine",
    paragraphs: [
      "ShiftBy investigates and advises on how organizations preserve understanding, reduce drift, and maintain legitimate accountability across distributed human and AI execution.",
      "Artificial intelligence systems and autonomous workflows are utilized to support research, drafting, synthesis, and exploratory analysis. AI is deployed strictly to assist human reasoning—never to substitute for professional judgment or organizational decision-making."
    ]
  },
  {
    title: "2. Non-Delegable Human Accountability",
    paragraphs: [
      "Legitimate authority and ultimate answerability remain non-transferably human. An algorithm, model, or autonomous agent cannot be held legally or operationally accountable for organizational outcomes.",
      "All findings, strategic recommendations, client deliverables, and published research are rigorously reviewed, validated, and signed off by qualified human principals."
    ]
  },
  {
    title: "3. Bounded Discretion & Operational Constraints",
    paragraphs: [
      "ShiftBy adheres strictly to the principle of Bounded AI: autonomous agents and model pipelines must operate within defined, enforceable constraints.",
      "We enforce explicit input boundaries, constrained tool invocation permissions, verified context retrieval, and strict token/compute quotas to prevent reasoning drift and unpredictable agentic behaviors."
    ]
  },
  {
    title: "4. Grounding, Verification & Hallucination Defense",
    paragraphs: [
      "We reject the assumption that retrieval-augmented generation (RAG) citation presence guarantees factual truth. Synthetic outputs can exhibit citation hallucination and semantic drift.",
      "All AI-assisted outputs undergo systematic verification against underlying source evidence, operational constraints, and domain logic prior to reliance."
    ]
  },
  {
    title: "5. Data Confidentiality & Client Privacy",
    paragraphs: [
      "ShiftBy strictly prohibits the submission of client confidential data, proprietary source code, or non-public operational records into public, multi-tenant AI training pipelines.",
      "Any AI tooling utilized in client advisory engagements operates under zero-data-retention agreements, enterprise-isolated tenant boundaries, or local compute environments."
    ]
  },
  {
    title: "6. Auditability, Traceability & Continuous Evaluation",
    paragraphs: [
      "Where automated steps or multi-agent workflows assist analytical work, the execution pathway, prompt templates, model versions, and intermediate outputs are logged and inspectable.",
      "As AI capabilities and regulatory frameworks (such as ISO/IEC 42001, NIST AI RMF, and the EU AI Act) evolve, ShiftBy continuously stress-tests and refines our internal governance and red-teaming methodologies."
    ]
  }
];

export default function AiPolicyPage() {
  return (
    <div className={styles.page}>
      {/* 1. Policy Hero */}
      <section className={styles.section} aria-labelledby="ai-policy-title">
        <div className={styles.proseStack}>
          <span className={styles.kicker}>Governance &amp; Accountability</span>
          <h1 id="ai-policy-title">AI is deployed to support understanding, not replace judgment.</h1>
          <p className={styles.lead}>
            ShiftBy applies the same rigorous governance standards to our internal operations
            that we design for our enterprise clients: explicit boundaries, verified retrieval,
            and non-delegable human answerability.
          </p>
        </div>
      </section>

      {/* 2. Structured Policy Sections */}
      <section className={styles.quietBand} aria-label="ShiftBy AI Policy Principles">
        <div className={styles.section}>
          <div className={styles.policyGrid}>
            {policySections.map((section) => (
              <article className={styles.policyCard} key={section.title}>
                <h2>{section.title}</h2>
                <div className={styles.policyParagraphs}>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Cross-link to related services and capabilities */}
          <div className={styles.crossLinkBox}>
            <span className={styles.kicker}>Enterprise Application</span>
            <h3>Explore Our AI Governance &amp; Assurance Services</h3>
            <p>
              Looking to establish verifiable human oversight, design bounded multi-agent
              workflows, or conduct rigorous red-teaming across your enterprise AI initiatives?
            </p>
            <div className={styles.crossLinkActions}>
              <Link
                className={styles.textLink}
                href="/services#ai-governance-human-oversight"
              >
                AI Governance &amp; Human Oversight Architecture &rarr;
              </Link>
              <Link
                className={styles.textLink}
                href="/services#ai-assurance-red-teaming"
              >
                AI Assurance &amp; Red Teaming Services &rarr;
              </Link>
              <Link
                className={styles.textLink}
                href="/capabilities/human-ai-accountability"
              >
                Human–AI Accountability Capability &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Conversion CTA */}
      <section className={styles.ctaBand} aria-labelledby="policy-cta-title">
        <div className={styles.ctaInner}>
          <span className={styles.kicker}>Advisory Dialogue</span>
          <h2 id="policy-cta-title">Discuss Your Organization's AI Governance Boundaries</h2>
          <p style={{ maxWidth: "700px" }}>
            Whether establishing initial responsible AI policies or engineering runtime
            safeguards for autonomous agents, connect directly with our principal advisory team.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.primaryButton} href="/contact">
              Schedule an Advisory Scoping Call &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
