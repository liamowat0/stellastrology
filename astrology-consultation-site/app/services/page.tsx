import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

const groups = [
  { id: "automated", title: "Automated reports", kicker: "Accessible written insight", description: "Structured PDF reports designed for clear, focused chart interpretation without a live appointment.", category: "Automated" as const },
  { id: "reviewed", title: "Astrologer-reviewed reports", kicker: "Efficient depth", description: "Calculation and initial synthesis are technology-assisted, then reviewed and refined by the astrologer before delivery.", category: "Astrologer-Reviewed" as const },
  { id: "premium", title: "Premium human consultations", kicker: "Live, personalized work", description: "Real-time consultation over Zoom or in person in Las Vegas, with chart materials, optional recording, and follow-up.", category: "Premium" as const },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero shell"><p className="eyebrow">Services</p><h1>Different questions call for<br/><em>different depths of attention.</em></h1><p>From concise written reports to advanced live consultations, choose the format that matches the complexity of what you want to explore.</p></section>
      {groups.map((group) => (
        <section className="section shell service-section" id={group.id} key={group.id}>
          <div className="service-section-intro"><p className="eyebrow">{group.kicker}</p><h2>{group.title}</h2><p className="muted">{group.description}</p></div>
          <div className="service-grid">{services.filter((s) => s.category === group.category).map((service) => <ServiceCard service={service} key={service.slug} />)}</div>
        </section>
      ))}
      <section className="policy-note shell"><strong>Booking policy</strong><p>Live consultations may be cancelled for a refund or rescheduled at no cost up to 24 hours before the appointment. No-shows are non-refundable.</p></section>
    </>
  );
}
