import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services, site } from "@/lib/site";

const featured = [services[9], services[10], services[12]];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">{site.eyebrow}</p>
          <h1>Read the pattern.<br/><em>Understand the moment.</em></h1>
          <p className="hero-lede">Personal consultations and carefully prepared astrology reports for people who want depth, context, and a clearer way to think about timing.</p>
          <div className="button-row">
            <Link className="button" href="/apply">Book a reading <span>→</span></Link>
            <Link className="button button-secondary" href="/services">Explore services</Link>
          </div>
          <div className="hero-trust">
            <span>Virtual worldwide</span><i /> <span>In-person in Las Vegas</span><i /> <span>Written reports available</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one"><span>☉</span></div>
          <div className="orbit orbit-two"><span>☽</span></div>
          <div className="orbit orbit-three"><span>♄</span></div>
          <div className="zodiac-disc"><div className="disc-inner"><span>ASC</span><strong>24°</strong><small>Symbolic chart study</small></div></div>
          <span className="star star-a">✦</span><span className="star star-b">✧</span><span className="star star-c">·</span>
        </div>
      </section>

      <section className="manifesto">
        <div className="shell statement-grid">
          <p className="eyebrow">A considered practice</p>
          <div><h2>Astrology as interpretation,<br/>not spectacle.</h2><p>Every service begins with the chart and the question in front of us. Choose a live consultation for dialogue and depth, or a written report when you want something you can return to.</p></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Premium consultations</p><h2>Choose the depth you need.</h2></div><Link className="text-link" href="/services">View all services <span>↗</span></Link></div>
        <div className="service-grid">{featured.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
      </section>

      <section className="section shell product-bands">
        <article className="product-band"><span className="band-index">01</span><div><p className="eyebrow">Automated reports</p><h2>Fast, structured chart insight.</h2><p>Entry-level written reports for natal charts, compatibility, current transits, and personalized monthly forecasts.</p></div><div className="band-action"><strong>$5–$30</strong><Link href="/services#automated">Explore reports →</Link></div></article>
        <article className="product-band"><span className="band-index">02</span><div><p className="eyebrow">Astrologer-reviewed</p><h2>Technology assisted. Human reviewed.</h2><p>Calculations and draft synthesis accelerate the process; the astrologer reviews and refines the report before it reaches you.</p></div><div className="band-action"><strong>$50–$150</strong><Link href="/services#reviewed">Explore reports →</Link></div></article>
      </section>

      <section className="section process-section" id="process">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">How it works</p><h2>From question to consultation.</h2></div></div>
          <div className="steps">
            <article><span>01</span><h3>Select a service</h3><p>Choose between a live consultation, an astrologer-reviewed report, or an automated written report.</p></article>
            <article><span>02</span><h3>Share your chart details</h3><p>Provide your birth information, time-source confidence, and the themes you would like to explore.</p></article>
            <article><span>03</span><h3>Confirm & prepare</h3><p>After checkout, you receive confirmation, preparation instructions, and scheduling details when relevant.</p></article>
            <article><span>04</span><h3>Receive your reading</h3><p>Meet by Zoom or in Las Vegas, or receive your completed PDF report directly by email.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell split-cta">
        <div><p className="eyebrow">Not sure where to begin?</p><h2>Start with the question you actually want answered.</h2></div>
        <div><p>Explore the full service catalog, then tell us what you want to understand. The intake process is designed to route you toward the appropriate format.</p><Link className="button" href="/apply">Begin intake <span>→</span></Link></div>
      </section>
    </>
  );
}
