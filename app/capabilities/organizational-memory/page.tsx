import type { Metadata } from "next";

import { CapabilityDetailPage } from "@/components/capability-detail-page";

export const metadata: Metadata = {
  title: { absolute: "Organizational Memory | Capabilities | ShiftBy" },
  description: "Keep important knowledge usable as people, systems, practices and operating conditions change.",
  alternates: { canonical: "/capabilities/organizational-memory" }
};

export default function OrganizationalMemoryPage() {
  return <CapabilityDetailPage capabilityId="organizational-memory" />;
}
