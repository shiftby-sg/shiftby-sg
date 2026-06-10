import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link className="site-mark" href="/">
            ShiftBy
          </Link>
          <p className="site-footer__body">Understanding should survive change.</p>
        </div>
        <nav aria-label="Footer" className="site-footer__nav">
          <Link href="/">Home</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/where-shiftby-helps">Where ShiftBy Helps</Link>
          <Link href="/thinking">Perspective</Link>
          <Link href="/explorations">Explorations</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
