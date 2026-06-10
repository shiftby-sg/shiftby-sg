import Link from "next/link";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(pageMetadataEntries.contact);

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-title" className="section hero">
        <div>
          <p className="kicker">Contact</p>
          <h1 id="contact-title">Start a conversation.</h1>
          <p className="lead">
            If these patterns appear inside your organization, the useful next
            step may be a conversation rather than a conclusion.
          </p>
          <p>
            Whether your organization is making decisions, preparing for AI,
            changing how work is done, or strengthening accountability, the
            first step is understanding the challenge clearly.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/services">
              Return to services
            </Link>
            <Link className="button secondary" href="/explorations">
              Explore the investigations
            </Link>
          </div>
        </div>
        <div className="hero-image-panel">
          <div className="understanding-model">
            <div className="intro-copy">
              <p className="kicker">Conversation path</p>
              <p className="change-takeaway">Understand the challenge.</p>
              <p className="change-takeaway">Build confidence.</p>
              <p className="change-takeaway">Move forward.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
