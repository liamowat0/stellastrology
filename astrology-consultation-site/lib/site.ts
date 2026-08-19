export const site = {
  name: "Astral Practice",
  eyebrow: "Traditional insight · modern delivery",
  description:
    "Personal astrology consultations and written reports designed to turn chart symbolism into useful context.",
  location: "Las Vegas, Nevada",
  email: "hello@example.com",
};

export type Service = {
  slug: string;
  title: string;
  category: "Automated" | "Astrologer-Reviewed" | "Premium";
  description: string;
  price: string;
  duration?: string;
  format: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "natal-chart-report",
    title: "Natal Chart Report",
    category: "Automated",
    description: "A concise written overview of the major placements, houses, and aspects in your natal chart.",
    price: "$5–$30",
    format: "PDF · 2–3 business days",
  },
  {
    slug: "synastry-report",
    title: "Compatibility / Synastry Report",
    category: "Automated",
    description: "A structured comparison of two charts, highlighting connection patterns, friction, and recurring themes.",
    price: "$5–$30",
    format: "PDF · 2–3 business days",
  },
  {
    slug: "current-transit-report",
    title: "Current Transit Report",
    category: "Automated",
    description: "A focused report on the transits currently activating your natal chart and the periods worth watching.",
    price: "$5–$30",
    format: "PDF · 2–3 business days",
  },
  {
    slug: "monthly-forecast",
    title: "Monthly Personalized Forecast",
    category: "Automated",
    description: "A personalized monthly map of major transits, themes, and timing windows based on your chart.",
    price: "$5–$30",
    format: "PDF · 2–3 business days",
  },
  {
    slug: "reviewed-natal-analysis",
    title: "Personalized Natal Chart Analysis",
    category: "Astrologer-Reviewed",
    description: "Technology-assisted chart synthesis, then reviewed and refined by the astrologer before delivery.",
    price: "$50–$150",
    format: "Reviewed PDF · 2–3 business days",
  },
  {
    slug: "reviewed-synastry-analysis",
    title: "Relationship / Synastry Analysis",
    category: "Astrologer-Reviewed",
    description: "A deeper written relationship analysis with automated calculation and direct astrologer review.",
    price: "$50–$150",
    format: "Reviewed PDF · 2–3 business days",
  },
  {
    slug: "transit-timing-analysis",
    title: "Transit & Timing Analysis",
    category: "Astrologer-Reviewed",
    description: "A detailed timing-oriented report focused on current and upcoming planetary activations.",
    price: "$50–$150",
    format: "Reviewed PDF · 2–3 business days",
  },
  {
    slug: "year-ahead-written",
    title: "Year-Ahead Written Forecast",
    category: "Astrologer-Reviewed",
    description: "A written year-ahead synthesis combining major transits, timing windows, and solar-return themes.",
    price: "$50–$150",
    format: "Reviewed PDF · 2–3 business days",
  },
  {
    slug: "natal-simple",
    title: "General Natal Consultation — Simple",
    category: "Premium",
    description: "A focused live reading for one or two priority areas in the natal chart.",
    price: "$60",
    duration: "30 min",
    format: "Zoom or Las Vegas in-person",
  },
  {
    slug: "natal-advanced",
    title: "General Natal Consultation — Advanced",
    category: "Premium",
    description: "A comprehensive live natal consultation with additional time for synthesis and questions.",
    price: "$200",
    duration: "75 min",
    format: "Zoom or Las Vegas in-person",
    featured: true,
  },
  {
    slug: "religion-occultism",
    title: "Religion, Occultism, Magic & Divination",
    category: "Premium",
    description: "A specialized natal consultation exploring spiritual, religious, esoteric, and divinatory symbolism.",
    price: "$185",
    duration: "60–80 min",
    format: "Zoom or Las Vegas in-person",
  },
  {
    slug: "solar-return-simple",
    title: "Year-Ahead / Solar Return — Simple",
    category: "Premium",
    description: "A focused look at the major themes and timing of the coming year.",
    price: "$60",
    duration: "30 min",
    format: "Zoom or Las Vegas in-person",
  },
  {
    slug: "solar-return-advanced",
    title: "Year-Ahead / Solar Return — Advanced",
    category: "Premium",
    description: "A deeper year-ahead consultation combining solar-return symbolism with natal timing techniques.",
    price: "$150",
    duration: "60 min",
    format: "Zoom or Las Vegas in-person",
  },
  {
    slug: "horary",
    title: "Horary Consultation",
    category: "Premium",
    description: "A focused consultation built around a specific, clearly framed question and the chart cast for it.",
    price: "$55",
    duration: "30 min",
    format: "Zoom or Las Vegas in-person",
  },
  {
    slug: "follow-up",
    title: "Follow-Up Consultation",
    category: "Premium",
    description: "A shorter return session for previous clients who want to revisit or extend an earlier reading.",
    price: "Pricing TBD",
    duration: "TBD",
    format: "Zoom or Las Vegas in-person",
  },
];
