import { CTABlock } from "@/components/cta-block";
import { EvidenceBlock } from "@/components/evidence-block";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { SectionFrame } from "@/components/section-frame";
import { SignalCard } from "@/components/signal-card";
import { designSystemContent } from "@/content/design-system";

type PlaceholderPageProps = {
  title: string;
  routePath: string;
  sequenceLabel: string;
  note: string;
};

export function PlaceholderPage({
  title,
  routePath,
  sequenceLabel,
  note
}: PlaceholderPageProps) {
  return (
    <PageShell>
      <PageIntro
        aside={
          <EvidenceBlock
            caption="Design system is active. Final page materialization is deferred."
            label="Status"
            value="Route prepared"
          />
        }
        body={note}
        eyebrow="Phase 2 design system placeholder"
        lede={
          <>
            This route is prepared for {sequenceLabel} at <code>{routePath}</code>.
          </>
        }
        title={title}
      />
      <SectionFrame
        description="Shared section, card, and action treatments now support later narrative composition."
        eyebrow="Reusable primitives"
        title="Design system signals"
      >
        <div className="card-grid">
          {designSystemContent.placeholderCards.map((card) => (
            <SignalCard key={card.title} label={card.label} title={card.title}>
              <p>{card.body}</p>
            </SignalCard>
          ))}
        </div>
      </SectionFrame>

      <CTABlock
        actions={designSystemContent.placeholderActions}
        body="These controls validate button treatment, spacing rhythm, and responsive wrapping without introducing final destination behavior."
        eyebrow="Foundation check"
        title="Shared action patterns are ready for Phase 3 page assembly."
      />
    </PageShell>
  );
}
