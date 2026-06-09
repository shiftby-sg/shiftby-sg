import { PlaceholderPage } from "@/components/placeholder-page";
import { routeNotes } from "@/content/route-notes";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("Perspective");

export default function ThinkingPage() {
  return (
    <PlaceholderPage
      note={routeNotes.thinking}
      routePath="/thinking"
      sequenceLabel="Perspective"
      title="Perspective"
    />
  );
}
