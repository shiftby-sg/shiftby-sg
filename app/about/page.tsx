import { PlaceholderPage } from "@/components/placeholder-page";
import { routeNotes } from "@/content/route-notes";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("About");

export default function AboutPage() {
  return (
    <PlaceholderPage
      note={routeNotes.about}
      routePath="/about"
      sequenceLabel="About"
      title="About"
    />
  );
}
