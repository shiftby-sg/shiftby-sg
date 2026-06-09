import { PlaceholderPage } from "@/components/placeholder-page";
import { routeNotes } from "@/content/route-notes";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("Where ShiftBy Helps");

export default function WhereShiftByHelpsPage() {
  return (
    <PlaceholderPage
      note={routeNotes.whereShiftByHelps}
      routePath="/where-shiftby-helps"
      sequenceLabel="Where ShiftBy Helps"
      title="Where ShiftBy Helps"
    />
  );
}
