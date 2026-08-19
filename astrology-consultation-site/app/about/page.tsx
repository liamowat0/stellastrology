import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero shell"><p className="eyebrow">About the practice</p><h1>A serious approach to<br/><em>symbolic interpretation.</em></h1><p>This page is intentionally ready for the astrologer’s final biography, methodology, credentials, and philosophy rather than filling the site with invented background.</p></section>
      <section className="section shell about-grid"><div className="portrait-placeholder"><span>Astrologer portrait</span></div><div className="about-copy"><p className="eyebrow">Methodology</p><h2>Depth before certainty.</h2><p>Use this section to explain how the astrologer approaches natal work, predictive techniques, horary, religion, occultism, and divination. It should tell prospective clients what makes the practice distinct without claiming that astrology guarantees an outcome.</p><p>The finished biography can also explain the traditions, teachers, texts, or schools that inform the practice and what clients should expect from the consultation style.</p><Link className="button" href="/apply">Book a reading <span>→</span></Link></div></section>
      <section className="manifesto"><div className="shell statement-grid"><p className="eyebrow">Practice principles</p><div><h2>Context, consent, and clarity.</h2><p>The intake asks what the client wants to explore and what they prefer not to discuss. Sensitive information is optional, and future account features are designed around user-controlled saved profiles rather than requiring an account for a simple booking.</p></div></div></section>
    </>
  );
}
