import Link from "next/link";
import type { Metadata } from "next";

import { CTABlock } from "@/components/cta-block";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { SectionFrame } from "@/components/section-frame";
import { SignalCard } from "@/components/signal-card";

export const metadata: Metadata = {
  title: { absolute: "Where ShiftBy Helps | ShiftBy" },
  description:
    "Recognize where decisions, knowledge, accountability and execution become harder to preserve as work changes.",
  alternates: { canonical: "/where-shiftby-helps" }
};

export default function WhereShiftByHelpsPage() {
  return (
    <PageShell>
      <div className="wp-e-page wp-e-helps">
        <PageIntro
          body="Different enterprise situations can express the same underlying challenge: preserving understanding through change."
          eyebrow="Where ShiftBy Helps"
          lede="The problem is often recognizable before the solution is named."
          title="When decisions, knowledge, accountability and execution drift apart."
        />
        <div className="wp-e-flow">
          <SectionFrame
            description="A decision may outlive its rationale. Knowledge may outlive its context. Responsibility may be distributed without becoming ownerless. Execution may continue while the conditions around it change."
            eyebrow="Recognition opening"
            title="The same underlying challenge appears in different forms."
          />
          <SectionFrame
            description="These are recognition lenses, not four capabilities. They help identify where the concern is becoming consequential."
            eyebrow="Where it shows up"
            title="Four manifestations of understanding becoming harder to preserve."
          >
            <div className="wp-e-card-grid wp-e-card-grid--four">
              <SignalCard label="Decisions" title="Rationale moves away">Assumptions, evidence, approvals or dependencies become harder to reconstruct when conditions change.</SignalCard>
              <SignalCard label="Knowledge" title="Meaning moves away">Artifacts remain, but provenance, interpretation and current context become uncertain through turnover or system change.</SignalCard>
              <SignalCard label="Accountability" title="Authority becomes unclear">Responsibility, ownership, oversight, intervention and escalation are difficult to locate or explain.</SignalCard>
              <SignalCard label="Execution" title="Work outpaces understanding">Distributed work, automation and handoffs change faster than shared context can adapt.</SignalCard>
            </div>
          </SectionFrame>
          <SectionFrame
            description="Preservation does not mean that context remains fit forever. Material changes can require reassessment, intervention, escalation, restriction or another proportionate response."
            eyebrow="Drift and reassessment"
            title="Something that was once valid may not remain reliable to use."
          />
          <SectionFrame
            description="AI did not create the underlying organizational problem. AI-enabled workflows and long-running agents can increase its speed, scale, persistence, distribution and consequence. Technical permission is not the same as legitimate organizational authority."
            eyebrow="AI and agent amplification"
            title="More execution makes unclear context and authority more consequential."
          />
          <SectionFrame
            description="Enterprise Understanding is the overarching need. The three capabilities address connected responsibilities without collapsing into one another."
            eyebrow="The connected response"
            title="Organizational Memory, Decision Integrity and Human–AI Accountability keep the relationships visible."
          >
            <div className="wp-e-inline-links">
              <Link href="/capabilities">See the capabilities overview →</Link>
              <Link href="/capabilities/decision-integrity">Explore Decision Integrity →</Link>
              <Link href="/capabilities/organizational-memory">Explore Organizational Memory →</Link>
              <Link href="/capabilities/human-ai-accountability">Explore Human–AI Accountability →</Link>
            </div>
          </SectionFrame>
          <SectionFrame
            description="A conversation can begin with a production concern, a control or evidence question, an agent or security concern, or a knowledge and context problem."
            eyebrow="When to engage"
            title="The concern becomes actionable when a defensible decision is needed."
          />
          <SectionFrame
            description="ShiftBy works through evidence-led assessment, challenge, advisory and enablement. The aim is to clarify findings, uncertainty and decisions enabled while preserving client authority."
            eyebrow="What ShiftBy does"
            title="From problem recognition to a clearer decision path."
          />
          <CTABlock
            actions={[{ href: "/discuss-a-concern", label: "Discuss a concern", variant: "primary" }]}
            body="You do not need to diagnose the service family first. Start with the system, use case, agent, workflow or concern that needs clearer understanding."
            eyebrow="Problem-aware next step"
            title="Bring the concern that is becoming harder to explain."
          />
        </div>
      </div>
    </PageShell>
  );
}
