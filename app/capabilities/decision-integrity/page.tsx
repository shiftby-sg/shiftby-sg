import type { Metadata } from "next";

import { CapabilityDetailPage } from "@/components/capability-detail-page";

export const metadata: Metadata = {
  title: { absolute: "Decision Integrity | Capabilities | ShiftBy" },
  description: "Keep consequential decisions explainable as conditions, evidence and authority change.",
  alternates: { canonical: "/capabilities/decision-integrity" }
};

export default function DecisionIntegrityPage() {
  return <CapabilityDetailPage capabilityId="decision-integrity" />;
}
