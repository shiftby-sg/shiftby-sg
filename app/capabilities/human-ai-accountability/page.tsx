import type { Metadata } from "next";

import { CapabilityDetailPage } from "@/components/capability-detail-page";

export const metadata: Metadata = {
  title: { absolute: "Human–AI Accountability | Capabilities | ShiftBy" },
  description: "Keep authority, ownership and intervention visible when humans and AI participate in execution together.",
  alternates: { canonical: "/capabilities/human-ai-accountability" }
};

export default function HumanAIAccountabilityPage() {
  return <CapabilityDetailPage capabilityId="human-ai-accountability" />;
}
