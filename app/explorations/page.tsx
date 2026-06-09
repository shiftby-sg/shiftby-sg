import { PlaceholderPage } from "@/components/placeholder-page";
import { routeNotes } from "@/content/route-notes";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("Explorations");

export default function ExplorationsPage() {
  return (
    <PlaceholderPage
      note={routeNotes.explorations}
      routePath="/explorations"
      sequenceLabel="Explorations"
      title="Explorations"
    />
  );
}
