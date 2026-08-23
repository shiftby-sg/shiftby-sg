import Link from "next/link";
import type { Metadata } from "next";

import { CTABlock } from "@/components/cta-block";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { SectionFrame } from "@/components/section-frame";
import { SignalCard } from "@/components/signal-card";

export const metadata: Metadata = {
  title: { absolute: "Services | ShiftBy" },
  description:
    "Bounded advisory, assessment, challenge and enablement services for AI governance, security, knowledge, context and accountable execution.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="wp-e-page wp-e-services">
        <PageIntro
          body="ShiftBy is advisory, assessment, challenge and enablement work—not outsourced implementation ownership."
          eyebrow="Services"
          lede="A bounded concern becomes a clearer evidence and decision path."
          title="Engage where a consequential system, use case, agent, workflow or concern needs to be understood."
        />
        <div className="wp-e-flow">
          <SectionFrame
            description="The common path is problem → evidence → analysis, challenge or testing → findings and uncertainty → accountable decision. The engagement remains bounded around the concern and the decision it needs to support."
            eyebrow="How ShiftBy engages"
            title="Evidence-led work that clarifies what can be decided next."
          />
          <SectionFrame
            description="Three service families organize the commercial conversation. They are applications of the three canonical capabilities, not additional capabilities or products."
            eyebrow="Service architecture"
            title="Three families, with distinct commercial meaning."
          >
            <div className="wp-e-card-grid">
              <SignalCard label="Family one" title="AI Governance, Agent Control & Assurance">Decision rights, delegated authority, ownership, oversight, intervention, escalation, control evidence and assurance.</SignalCard>
              <SignalCard label="Family two" title="AI Security & Red Teaming">Attackability, abuse, manipulation, bypass, identity, tool, data, retrieval and memory boundaries, and containment.</SignalCard>
              <SignalCard label="Family three" title="AI Knowledge, Context & Semantic Architecture">Whether knowledge and context are current, authoritative, attributable, permissioned, coherent and connected for reuse.</SignalCard>
            </div>
          </SectionFrame>
          <SectionFrame
            description="The family descriptions below identify the bounded services currently suitable for launch emphasis. They do not expose the full catalogue as equally proven."
            eyebrow="Family detail"
            title="Start with the question the organization needs to answer."
          >
            <div className="wp-e-stack">
              <div className="wp-e-detail"><h3>AI Governance, Agent Control & Assurance</h3><p>Clarify legitimate decision rights, delegated control, ownership, oversight, intervention and evidence effectiveness.</p><p className="wp-e-label">Launch-relevant services</p><ul><li>AI Governance & Decision-Rights Assessment</li><li>Agent Governance & Delegated-Control Assessment</li><li>AI Control & Evidence Effectiveness Review</li></ul></div>
              <div className="wp-e-detail"><h3>AI Security & Red Teaming</h3><p>Examine how agents, tools, identities, retrieval and memory boundaries may be manipulated, bypassed or abused.</p><p className="wp-e-label">Launch-relevant service</p><ul><li>Agentic AI Red Teaming & Adversarial Assessment</li></ul></div>
              <div className="wp-e-detail"><h3>AI Knowledge, Context & Semantic Architecture</h3><p>Assess whether enterprise knowledge and context remain current, attributable, permissioned and fit for reliable AI reuse. Mechanisms such as RAG, vector stores and graphs are subordinate to the organizational capability.</p><p className="wp-e-label">Launch-relevant service</p><ul><li>AI Knowledge & Context Readiness Assessment</li></ul></div>
            </div>
          </SectionFrame>
          <SectionFrame
            description="These are the smallest ways to begin. Visitors can start with the concern rather than selecting a service family."
            eyebrow="Four launch routes"
            title="A bounded entry point for the decision in front of you."
          >
            <div className="wp-e-card-grid wp-e-card-grid--four">
              <SignalCard label="Route one" title="Production / scaling authority">Governance and delegated-control assessments for decision rights, ownership and intervention.</SignalCard>
              <SignalCard label="Route two" title="Control evidence / confidence">Review whether evidence and controls support operational confidence.</SignalCard>
              <SignalCard label="Route three" title="Agent attackability">Adversarial assessment for manipulation, bypass and resilience concerns.</SignalCard>
              <SignalCard label="Route four" title="Knowledge / context readiness">Assess whether the context needed for reliable reuse remains fit for purpose.</SignalCard>
            </div>
          </SectionFrame>
          <SectionFrame
            description="Engagements distinguish evidence, findings and uncertainty, recommendations and decisions enabled from broader organizational outcomes. Follow-on guidance, reassessment, revalidation, retesting or enablement may be appropriate without implying managed implementation."
            eyebrow="What follows"
            title="The work supports a defensible client decision."
          >
            <div className="wp-e-inline-links"><Link href="/capabilities">Understand the capabilities →</Link><Link href="/where-shiftby-helps">Recognize the concern →</Link></div>
          </SectionFrame>
          <CTABlock
            actions={[{ href: "/discuss-a-concern", label: "Discuss a concern", variant: "primary" }]}
            body="Begin with the system, use case, agent, workflow, governance question, security concern or knowledge/context problem that needs a clearer decision path."
            eyebrow="Start with the concern"
            title="You do not need to choose a service before the conversation begins."
          />
        </div>
      </div>
    </PageShell>
  );
}
