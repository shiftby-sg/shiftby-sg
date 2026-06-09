import { PlaceholderPage } from "@/components/placeholder-page";
import { routeNotes } from "@/content/route-notes";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("Home");

export default function HomePage() {
  return (
    <PlaceholderPage
      note={routeNotes.home}
      routePath="/"
      sequenceLabel="Home"
      title="Home"
    />
  );
}
