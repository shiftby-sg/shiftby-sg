import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { routeDefinitions, siteTitle } from "@/lib/site-data";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="shell">
      <div aria-hidden="true" className="shell__backdrop shell__backdrop--north" />
      <div aria-hidden="true" className="shell__backdrop shell__backdrop--south" />
      <header className="site-header">
        <div className="site-header__inner">
          <div className="site-header__bar">
            <div className="site-header__intro">
              <p className="site-header__eyebrow">
                Execution changes. Understanding preserves confidence.
              </p>
              <Link className="site-mark" href="/">
                {siteTitle}
              </Link>
            </div>
            <div className="site-header__actions">
              <Link className="shell-button" href="/perspective">
                Explore the perspective
              </Link>
              <Link className="shell-button shell-button--primary" href="/contact">
                Start a conversation
              </Link>
            </div>
          </div>
          <SiteNav routes={routeDefinitions} />
        </div>
      </header>
      <main id="main-content">
        <div className="site-page">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
