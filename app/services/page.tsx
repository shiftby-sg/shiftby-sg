import { PlaceholderPage } from "@/components/placeholder-page";
import { routeNotes } from "@/content/route-notes";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("Services");

export default function ServicesPage() {
  return (
    <PlaceholderPage
      note={routeNotes.services}
      routePath="/services"
      sequenceLabel="Services"
      title="Services"
    />
  );
}
