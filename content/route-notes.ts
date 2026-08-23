import {
  v1RouteDispositions,
  v2CarriedRemediations,
  v2PageAuthorityContract,
  v2RepositorySurfaceContract,
  v2RouteContract,
  v2SemanticGuardrails,
  wpAReadiness
} from "@/content/v2-contract";

export const routeNotes = {
  authority: "WS4 — V2 Website Content & Proof Readiness",
  scope: "8 primary IA roles / 11 implementation pages",
  routeContract: v2RouteContract,
  pageAuthorityContract: v2PageAuthorityContract,
  semanticGuardrails: v2SemanticGuardrails,
  v1RouteDispositions,
  repositorySurfaceContract: v2RepositorySurfaceContract,
  carriedRemediations: v2CarriedRemediations,
  readiness: wpAReadiness
} as const;
