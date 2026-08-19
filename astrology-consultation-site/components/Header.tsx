import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/#process">How it works</Link>
        </nav>
        <Link className="button button-small" href="/apply">Book a reading</Link>
      </div>
    </header>
  );
}
