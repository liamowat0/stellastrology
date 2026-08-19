"use client";

import { FormEvent, useMemo, useState } from "react";
import { services } from "@/lib/site";

const interests = [
  "Relationships",
  "Career",
  "Spirituality",
  "Personal Development",
  "Family",
  "Current Life Transition",
  "Timing / Future Periods",
  "General Overview",
  "Other",
];

export function IntakeForm({ initialService }: { initialService?: string }) {
  const initial = useMemo(() => services.find((s) => s.slug === initialService)?.slug ?? "", [initialService]);
  const [service, setService] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="success-panel">
        <span className="success-icon">✓</span>
        <p className="eyebrow">Form demo complete</p>
        <h2>Your intake is ready for backend connection.</h2>
        <p className="muted">This V1 intentionally does not transmit or store personal data yet. The next backend pass can connect this exact form to Stripe, scheduling, email, and a database.</p>
        <button className="button button-secondary" onClick={() => setSubmitted(false)}>Return to form</button>
      </div>
    );
  }

  return (
    <form className="intake-form" onSubmit={handleSubmit}>
      <section className="form-section">
        <div className="form-section-heading"><span>01</span><div><h2>Choose your reading</h2><p>Start with the format that best matches what you need.</p></div></div>
        <label className="field field-full">
          <span>Consultation or report</span>
          <select required value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select a service</option>
            {services.map((item) => <option key={item.slug} value={item.slug}>{item.title} · {item.price}</option>)}
          </select>
        </label>
      </section>

      <section className="form-section">
        <div className="form-section-heading"><span>02</span><div><h2>Your details</h2><p>We use these details to communicate with you and prepare your chart.</p></div></div>
        <div className="form-grid">
          <label className="field"><span>Full name</span><input name="fullName" autoComplete="name" required /></label>
          <label className="field"><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
          <label className="field"><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" /></label>
          <label className="field"><span>Birth date</span><input name="birthDate" type="date" required /></label>
          <label className="field"><span>Exact birth time</span><input name="birthTime" type="time" required /></label>
          <label className="field"><span>Birth location</span><input name="birthLocation" placeholder="City, State / Country" required /></label>
          <label className="field field-full"><span>Birth-time source</span><select required defaultValue=""><option value="" disabled>Select source</option><option>Birth certificate / official record</option><option>Parent or family member</option><option>Personal recollection</option><option>Estimated</option><option>Unknown</option></select></label>
        </div>
      </section>

      <section className="form-section">
        <div className="form-section-heading"><span>03</span><div><h2>What should we focus on?</h2><p>A little context helps make the consultation more relevant.</p></div></div>
        <fieldset className="choice-fieldset">
          <legend>What would you primarily like to explore?</legend>
          <div className="choice-grid">
            {interests.map((item) => <label className="choice" key={item}><input type="radio" name="focus" value={item} required /><span>{item}</span></label>)}
          </div>
        </fieldset>
        <label className="field field-full"><span>Tell us what you would like from this reading</span><textarea name="goals" rows={5} placeholder="Questions, themes, or context you would like the astrologer to keep in mind." /></label>
        <label className="field field-full"><span>Topics you would prefer not to discuss <em>Optional</em></span><textarea name="avoid" rows={3} /></label>
        <div className="form-grid">
          <label className="field"><span>Have you had an astrological reading before?</span><select defaultValue=""><option value="" disabled>Select</option><option>Yes</option><option>No</option></select></label>
          <label className="field"><span>Relationship with astrology <em>Optional</em></span><input name="astrologyRelationship" placeholder="New, curious, experienced…" /></label>
          <label className="field field-full"><span>Religious or spiritual beliefs <em>Optional</em></span><textarea name="beliefs" rows={3} placeholder="Share only if relevant to the reading you selected." /></label>
        </div>
      </section>

      <section className="form-section consent-section">
        <div className="form-section-heading"><span>04</span><div><h2>Consent & policies</h2><p>Please confirm before continuing to payment and scheduling.</p></div></div>
        <div className="consent-list">
          <label><input type="checkbox" required /><span>I understand astrology services are interpretive and accuracy or specific outcomes are not guaranteed.</span></label>
          <label><input type="checkbox" required /><span>I understand the service I selected and what is included.</span></label>
          <label><input type="checkbox" required /><span>I acknowledge the privacy policy and consent to processing the information submitted for this service.</span></label>
          <label><input type="checkbox" required /><span>I agree to the terms of service and cancellation/rescheduling policy.</span></label>
        </div>
      </section>

      <div className="form-submit-row">
        <div><p className="tiny-label">V1 checkout behavior</p><p className="muted">Stripe checkout and calendar scheduling will attach here once credentials and booking rules are provided.</p></div>
        <button className="button" type="submit">Continue to checkout <span>→</span></button>
      </div>
    </form>
  );
}
