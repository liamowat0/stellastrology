import type { Metadata } from "next";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = { title: "Book a Reading" };

export default async function ApplyPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const params = await searchParams;
  return (
    <>
      <section className="page-hero compact shell"><p className="eyebrow">Consultation intake</p><h1>Tell us what you<br/><em>want to understand.</em></h1><p>Complete the intake below. Live consultations will continue to secure checkout and scheduling once the production integrations are connected.</p></section>
      <section className="shell form-wrap"><IntakeForm initialService={params.service} /></section>
    </>
  );
}
