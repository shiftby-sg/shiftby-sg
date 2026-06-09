import { PlaceholderPage } from "@/components/placeholder-page";
import { routeNotes } from "@/content/route-notes";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("Capabilities");

export default function CapabilitiesPage() {
  return (
    <PlaceholderPage
      note={routeNotes.capabilities}
      routePath="/capabilities"
      sequenceLabel="Capabilities"
      title="Capabilities"
    />
  );
}
