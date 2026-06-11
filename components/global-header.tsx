"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { routeDefinitions, siteTitle } from "@/lib/site-data";

export function GlobalHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__bar">
          <Link className="site-mark" href="/">
            {siteTitle}
          </Link>
        </div>
        <div className="site-nav-shell" data-open={isMenuOpen ? "true" : "false"}>
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            className="site-nav-toggle"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <span className="site-nav-toggle__label">Menu</span>
            <span aria-hidden="true" className="site-nav-toggle__icon">
              <span />
              <span />
              <span />
            </span>
          </button>
          <button
            aria-label="Close navigation"
            className="site-nav-backdrop"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          />
          <nav
            aria-label="Primary"
            className="site-nav"
            id="primary-navigation"
          >
            {routeDefinitions.map((route) => (
              <Link
                aria-current={pathname === route.href ? "page" : undefined}
                className="site-nav__link"
                href={route.href}
                key={route.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{route.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
