import Link from "next/link";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label={`${site.name} home`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <circle cx="24" cy="24" r="14" />
          <path d="M24 2v9M24 37v9M2 24h9M37 24h9" />
          <circle cx="24" cy="24" r="3.2" className="brand-dot" />
        </svg>
      </span>
      <span>{site.name}</span>
    </Link>
  );
}
