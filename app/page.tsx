import Link from "next/link";
import type { Metadata } from "next";

import { CTABlock } from "@/components/cta-block";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { SectionFrame } from "@/components/section-frame";
import { SignalCard } from "@/components/signal-card";

export const metadata: Metadata = {
  title: { absolute: "ShiftBy | Preserve Understanding as Execution Changes" },
  description:
    "ShiftBy helps leaders preserve understanding, authority and accountability as execution becomes distributed across people, systems, suppliers, automation and AI.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <PageShell>
      <div className="wp-e-page wp-e-home">
        <PageIntro
          body="ShiftBy is an executive advisory and consulting practice for consequential change. We help leaders see what must remain understood before action moves forward."
          eyebrow="Execution changes"
          lede="Understanding preserves confidence."
          title="When execution becomes distributed, understanding becomes a leadership responsibility."
        />
        <div className="wp-e-flow">
          <SectionFrame
            description="Work now moves across people, systems, suppliers, automation and AI. Context, assumptions, evidence and authority can change while execution continues."
            eyebrow="Why this becomes consequential"
            title="A decision can remain visible while the conditions that made it valid move away."
          />
          <SectionFrame
            description="Artifacts are necessary, but they do not automatically preserve the relationships that make action explainable. Enterprise Understanding connects intent, context, authority, decisions, evidence, dependencies, accountability and outcomes."
            eyebrow="Enterprise Understanding"
            title="Preserving understanding means preserving what connects the work."
          >
            <div className="wp-e-proof-note" role="note">
              <strong>Proof control</strong>
              <span>Home statistics and dated external claims remain provisional until their original sources are revalidated for publication.</span>
            </div>
          </SectionFrame>
          <SectionFrame
            description="Three complementary capabilities help keep understanding usable as work changes."
            eyebrow="Three capabilities"
            title="Decision Integrity, Organizational Memory and Human–AI Accountability work together."
          >
            <div className="wp-e-card-grid">
              <SignalCard label="Capability" title="Decision Integrity">Keeps intent, rationale, assumptions, evidence, divergence and decision context reconstructable as conditions change.</SignalCard>
              <SignalCard label="Capability" title="Organizational Memory">Keeps knowledge connected to provenance, context and changing meaning rather than treating storage as understanding.</SignalCard>
              <SignalCard label="Capability" title="Human–AI Accountability">Keeps authority, ownership, oversight, intervention and escalation explicit as AI participates in execution.</SignalCard>
            </div>
          </SectionFrame>
          <SectionFrame
            description="The right starting point is often a concern or decision question, not a service selection."
            eyebrow="Recognizable concerns"
            title="The signal may appear in production, control, security or knowledge."
          >
            <div className="wp-e-card-grid wp-e-card-grid--four">
              <SignalCard label="Production / scaling" title="Authority">Who can decide, delegate, intervene or escalate as execution scales?</SignalCard>
              <SignalCard label="Control / evidence" title="Confidence">What evidence supports a consequential decision or control?</SignalCard>
              <SignalCard label="Security" title="Attackability">Where could an agent, tool, identity or retrieval boundary be manipulated or bypassed?</SignalCard>
              <SignalCard label="Knowledge / context" title="Reliability">Is the context current, attributable, permissioned and fit for reuse?</SignalCard>
            </div>
          </SectionFrame>
          <SectionFrame
            description="ShiftBy enters through a bounded concern, system, use case, agent or workflow and helps make the evidence, uncertainty and decision path clearer."
            eyebrow="From understanding to action"
            title="Start with the concern. Continue with an evidence-led conversation."
          >
            <div className="wp-e-inline-links">
              <Link href="/where-shiftby-helps">Recognize the situation →</Link>
              <Link href="/services">See how ShiftBy can engage →</Link>
              <Link href="/explorations">Explore applied investigations →</Link>
            </div>
          </SectionFrame>
          <CTABlock
            actions={[
              { href: "/discuss-a-concern", label: "Discuss a concern", variant: "primary" },
              { href: "/capabilities", label: "Understand the capabilities", variant: "secondary" }
            ]}
            body="Bring a consequential concern, decision, system, use case, agent or workflow. The first conversation does not require you to select a service."
            eyebrow="A bounded next step"
            title="Discuss a concern before the context becomes harder to recover."
          />
        </div>
      </div>
    </PageShell>
  );
}
