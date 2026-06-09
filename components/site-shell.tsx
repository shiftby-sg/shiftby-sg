import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { designSystemContent } from "@/content/design-system";
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
              <p className="site-header__eyebrow">{designSystemContent.shellEyebrow}</p>
              <Link className="site-mark" href="/">
                {siteTitle}
              </Link>
            </div>
            <p className="site-header__status">
              Phase 2 foundations only.
              <br />
              Narrative materialization remains deferred.
            </p>
          </div>
          <SiteNav routes={routeDefinitions} />
        </div>
      </header>
      <main id="main-content">
        <div className="site-band">
          <div className="site-band__inner">
            <p className="site-band__note">{designSystemContent.shellNote}</p>
          </div>
        </div>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
