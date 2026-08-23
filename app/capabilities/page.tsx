import Link from "next/link";
import type { Metadata } from "next";

import { CTABlock } from "@/components/cta-block";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { SectionFrame } from "@/components/section-frame";
import { canonicalCapabilities } from "@/content/v2-contract";

export const metadata: Metadata = {
  title: { absolute: "Capabilities | ShiftBy" },
  description:
    "Three complementary capabilities help ShiftBy preserve understanding, authority and accountability as execution changes.",
  alternates: { canonical: "/capabilities" }
};

const capabilitySummaries = {
  "decision-integrity": "Keep intent, rationale, evidence, divergence and decision context reconstructable as conditions change.",
  "organizational-memory": "Keep knowledge connected to provenance, context and changing meaning rather than treating storage as understanding.",
  "human-ai-accountability": "Keep authority, ownership, oversight, intervention and escalation explicit as AI participates in execution."
} as const;

export default function CapabilitiesPage() {
  return (
    <PageShell>
      <div className="wp-f-capability-page">
        <PageIntro
          body="Enterprise Understanding is the overarching need: keeping intent, context, authority, decisions, evidence, dependencies, accountability and outcomes connected as execution changes."
          eyebrow="Capabilities"
          lede="Three complementary capabilities help preserve what makes action explainable."
          title="Understanding should remain usable when the work changes."
        />
        <div className="wp-f-capability-flow">
          <SectionFrame
            description="The capabilities address connected responsibilities. They are not service packages, implementation technologies or a fourth capability model."
            eyebrow="The capability system"
            title="Enterprise Understanding through three distinct capabilities"
          >
            <div className="wp-f-overview-grid">
              {canonicalCapabilities.map((capability) => (
                <article className="wp-f-overview-card" key={capability.id}>
                  <h3>{capability.label}</h3>
                  <p>{capabilitySummaries[capability.id]}</p>
                  <Link href={capability.route}>Explore {capability.label} →</Link>
                </article>
              ))}
            </div>
          </SectionFrame>
          <SectionFrame
            description="Capabilities become useful when leaders need to understand a consequential concern before choosing how to engage. Services translate these capabilities into bounded advisory, assessment, challenge and enablement work."
            eyebrow="From capability to practice"
            title="Start with the concern, then follow the relevant path"
          >
            <div className="wp-f-capability-links">
              <Link href="/where-shiftby-helps">Recognize where the problem appears →</Link>
              <Link href="/services">See how ShiftBy can engage →</Link>
              <Link href="/discuss-a-concern">Discuss a concern →</Link>
            </div>
          </SectionFrame>
          <CTABlock
            actions={[{ href: "/discuss-a-concern", label: "Discuss a concern", variant: "primary" }]}
            body="You do not need to select a capability or service before starting a conversation. Bring the concern, decision, system, use case, agent or workflow."
            eyebrow="A bounded next step"
            title="Preserve understanding where it matters next."
          />
        </div>
      </div>
    </PageShell>
  );
}
