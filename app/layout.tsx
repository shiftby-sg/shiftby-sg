import type { Metadata } from "next";
import type { ReactNode } from "react";

import { GlobalFooter } from "@/components/global-footer";
import { GlobalHeader } from "@/components/global-header";
import { rootMetadata } from "@/lib/metadata";
import { getStructuredData } from "@/lib/structured-data";

import "./globals.css";
import "../styles/page-materialization.css";

export const metadata: Metadata = rootMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = getStructuredData();

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
          type="application/ld+json"
        />
      </head>
      <body className="site-body">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="shell">
          <div aria-hidden="true" className="shell__backdrop shell__backdrop--north" />
          <div aria-hidden="true" className="shell__backdrop shell__backdrop--south" />
          <GlobalHeader />
          <main id="main-content">
            <div className="site-page">{children}</div>
          </main>
          <GlobalFooter />
        </div>
      </body>
    </html>
  );
}
