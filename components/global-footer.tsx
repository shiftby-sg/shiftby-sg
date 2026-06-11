import Link from "next/link";

export function GlobalFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link className="site-mark" href="/">
            ShiftBy
          </Link>
          <p className="site-footer__body">
            Understanding should survive change. When the next step is unclear,
            begin with a conversation.
          </p>
        </div>
        <nav aria-label="Footer" className="site-footer__groups">
          <section className="site-footer__group" aria-labelledby="footer-explore">
            <h2 id="footer-explore">Explore</h2>
            <div className="site-footer__links">
              <Link href="/">Home</Link>
              <Link href="/capabilities">Capabilities</Link>
              <Link href="/where-shiftby-helps">Where ShiftBy Helps</Link>
              <Link href="/perspective">Perspective</Link>
              <Link href="/explorations">Explorations</Link>
              <Link href="/services">Services</Link>
            </div>
          </section>
          <section className="site-footer__group" aria-labelledby="footer-shiftby">
            <h2 id="footer-shiftby">ShiftBy</h2>
            <div className="site-footer__links">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/ai-policy">AI Policy</Link>
            </div>
          </section>
          <section className="site-footer__group" aria-labelledby="footer-connect">
            <h2 id="footer-connect">Connect</h2>
            <div className="site-footer__links">
              <a href="mailto:anandakrishnam@shiftby.sg">Email</a>
              <a href="https://www.linkedin.com/in/anandakrishnam">LinkedIn</a>
              <a href="https://wa.me/6597517794">WhatsApp</a>
              <a href="https://t.me/anandakrishnam">Telegram</a>
            </div>
          </section>
        </nav>
      </div>
      <div className="site-footer__legal">
        <p>© 2026 ShiftBy Pte. Ltd., Singapore. All rights reserved. UEN: 202426424E</p>
      </div>
    </footer>
  );
}
