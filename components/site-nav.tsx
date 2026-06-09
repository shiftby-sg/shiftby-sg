import Link from "next/link";

import type { RouteDefinition } from "@/lib/site-data";

type SiteNavProps = {
  routes: RouteDefinition[];
};

export function SiteNav({ routes }: SiteNavProps) {
  return (
    <nav aria-label="Primary" className="site-nav">
      {routes.map((route, index) => (
        <Link className="site-nav__link" href={route.href} key={route.href}>
          <span className="site-nav__index">0{index + 1}</span>
          <span>{route.label}</span>
        </Link>
      ))}
    </nav>
  );
}
