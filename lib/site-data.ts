import {
  v2PrimaryNavigation,
  v2RouteContract,
  type V2RouteContract
} from "@/content/v2-contract";

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

export function getActivePrimaryRoute(pathname: string): string | undefined {
  const primaryRoute = routeDefinitions.find((route) => route.href === pathname);

  if (primaryRoute) {
    return primaryRoute.href;
  }

  const childRoute = v2RouteContract.find(
    (route) =>
      route.routeClass === "CHILD-DETAIL" &&
      "parent" in route &&
      route.parent &&
      pathname.startsWith(`${route.parent}/`)
  );

  return childRoute && "parent" in childRoute
    ? childRoute.parent
    : undefined;
}
