"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { RouteDefinition } from "@/lib/site-data";

type SiteNavProps = {
  routes: RouteDefinition[];
};

export function SiteNav({ routes }: SiteNavProps) {
  const pathname = usePathname();

  return (
    <>
      <nav aria-label="Primary" className="site-nav site-nav--desktop">
        {routes.map((route, index) => (
          <Link
            aria-current={pathname === route.href ? "page" : undefined}
            className="site-nav__link"
            href={route.href}
            key={route.href}
            onClick={(event) => {
              event.currentTarget.closest("details")?.removeAttribute("open");
            }}
          >
            <span className="site-nav__index">0{index + 1}</span>
            <span>{route.label}</span>
          </Link>
        ))}
      </nav>
      <details className="site-nav-shell">
        <summary
          aria-controls="primary-navigation-mobile"
          className="site-nav-toggle"
        >
          <span className="site-nav-toggle__label">Menu</span>
          <span aria-hidden="true" className="site-nav-toggle__icon">
            <span />
            <span />
            <span />
          </span>
        </summary>
        <span
          aria-hidden="true"
          className="site-nav-backdrop"
        />
        <nav
          aria-label="Primary mobile"
          className="site-nav site-nav--mobile"
          id="primary-navigation-mobile"
        >
          {routes.map((route) => (
            <Link
              aria-current={pathname === route.href ? "page" : undefined}
              className="site-nav__link"
              href={route.href}
              key={route.href}
              onClick={(event) => {
                event.currentTarget.closest("details")?.removeAttribute("open");
              }}
            >
              <span>{route.label}</span>
            </Link>
          ))}
        </nav>
      </details>
    </>
  );
}
