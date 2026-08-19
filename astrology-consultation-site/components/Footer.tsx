import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p className="muted footer-copy">{site.description}</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/services">Services</Link>
          <Link href="/apply">Book a reading</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <p className="footer-label">Practice</p>
          <p>{site.location}</p>
          <p>Virtual consultations available</p>
          <p className="muted">Astrology is interpretive and is not a guarantee of future outcomes.</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Privacy · Terms · Cancellation policy</span>
      </div>
    </footer>
  );
}
