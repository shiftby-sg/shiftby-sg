import Link from "next/link";

import {
  getCanonicalCapabilityById,
  type CapabilityId
} from "@/content/v2-contract";
import { getCapabilityPageContent } from "@/content/capability-pages";
import { CTABlock } from "@/components/cta-block";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { SectionFrame } from "@/components/section-frame";

type CapabilityDetailPageProps = {
  capabilityId: CapabilityId;
};

export function CapabilityDetailPage({ capabilityId }: CapabilityDetailPageProps) {
  const capability = getCanonicalCapabilityById(capabilityId);
  const content = getCapabilityPageContent(capabilityId);

  if (!capability) {
    return null;
  }

  return (
    <PageShell>
      <div className="wp-f-capability-page">
        <PageIntro
          body={content.problem}
          eyebrow="Capabilities"
          lede={content.purpose}
          title={capability.label}
        />
        <div className="wp-f-capability-flow">
          <SectionFrame
            description={content.meaning}
            eyebrow="Authoritative meaning"
            title="What this capability preserves"
          />
          <SectionFrame
            description={content.relevance}
            eyebrow="Practical relevance"
            title="Why this matters as execution changes"
          />
          <SectionFrame
            description={content.boundary}
            eyebrow="Boundary"
            title="What this capability is not"
          />
          <SectionFrame
            description="These are bounded application contexts, not client proof or guarantees of outcome."
            eyebrow="Applied examples"
            title="Questions this capability helps make clearer"
          >
            <ul className="wp-f-example-list">
              {content.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </SectionFrame>
          <SectionFrame
            description="Capabilities work together and remain distinct from the Services layer. Continue to the overview or begin with a concern without selecting a service first."
            eyebrow="Continue"
            title="Connect capability understanding to the next question"
          >
            <div className="wp-f-capability-links">
              <Link href="/capabilities">Back to Capabilities →</Link>
              <Link href="/services">See Services →</Link>
              <Link href="/discuss-a-concern">Discuss a concern →</Link>
            </div>
          </SectionFrame>
          <CTABlock
            actions={[{ href: "/discuss-a-concern", label: "Discuss a concern", variant: "primary" }]}
            body="Bring the decision, knowledge, authority or human–AI concern that needs clearer understanding."
            eyebrow="A bounded next step"
            title="Start with the concern, not a service selection."
          />
        </div>
      </div>
    </PageShell>
  );
}
