import { v2PrimaryNavigation, type V2RouteContract } from "@/content/v2-contract";

export type RouteDefinition = V2RouteContract & {
  href: string;
  status: "contracted";
};

export const siteTitle = "ShiftBy";

export const siteDescription =
  "Execution changes. Understanding preserves confidence as organizations work across people, systems, suppliers, automation, and AI.";

export const routeDefinitions: RouteDefinition[] = v2PrimaryNavigation.map(
  (route) => ({ ...route, href: route.canonicalPath, status: "contracted" })
);
