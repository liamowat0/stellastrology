import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`service-card${service.featured ? " featured" : ""}`}>
      <div className="service-card-topline">
        <span className="pill">{service.category}</span>
        {service.featured && <span className="tiny-label">Most comprehensive</span>}
      </div>
      <h3>{service.title}</h3>
      <p className="muted">{service.description}</p>
      <div className="service-meta">
        <strong>{service.price}</strong>
        {service.duration && <span>{service.duration}</span>}
      </div>
      <p className="tiny-label">{service.format}</p>
      <Link className="text-link" href={`/apply?service=${service.slug}`}>Choose this service <span>↗</span></Link>
    </article>
  );
}
