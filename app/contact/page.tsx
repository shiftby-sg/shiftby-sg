import { PlaceholderPage } from "@/components/placeholder-page";
import { routeNotes } from "@/content/route-notes";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("Contact");

export default function ContactPage() {
  return (
    <PlaceholderPage
      note={routeNotes.contact}
      routePath="/contact"
      sequenceLabel="Contact"
      title="Contact"
    />
  );
}
