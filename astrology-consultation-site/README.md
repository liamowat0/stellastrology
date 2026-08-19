# Astrology Consultation Website

A GitHub-ready Next.js 16 / React 19 website foundation for an astrology consultation and report business.

## What is implemented

- Responsive homepage and visual design system
- Full service catalog across automated, astrologer-reviewed, and premium consultations
- Consultation intake form reflecting the Phase 0 requirements
- Consent acknowledgements and cancellation/rescheduling language
- Service preselection via query parameter (`/apply?service=natal-advanced`)
- About/practice page with intentionally marked content placeholders
- Backend-ready environment variable template
- Mobile responsive layout

## Intentionally not live yet

The intake form currently performs **no network submission** and stores **no personal data**. This is deliberate until production choices and credentials are provided for:

- Stripe Checkout / Payment Intents
- Scheduling/calendar provider
- Database and account system
- Transactional email provider
- Astrology chart calculation engine
- PDF generation
- AI report generation/review workflow

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy

The repository is suitable for a standard Next.js deployment on Vercel or another Node-compatible host. Add production environment values using `.env.example` as the starting point.

## Brand configuration

The current name **Astral Practice** is a placeholder. Change site-level business information in:

`lib/site.ts`

Primary design tokens are at the top of:

`app/globals.css`

## Phase 1 information still needed

- Final business/practice name
- Astrologer name, bio, methodology, and credentials/background wording
- Final logo direction
- Color and typography preferences (current system is an editorial / traditional placeholder direction)
- Final service descriptions and automated/report pricing
- Follow-up consultation price/duration
- Whether phone is required or optional
- Whether recordings/notes are included by default or optional per service

## Phase 2/3 integration decisions

Before connecting real customer data, define:

1. Stripe product/price strategy
2. Scheduling provider and availability rules
3. Database/provider and retention rules
4. Email provider/templates
5. Authentication provider if optional accounts launch
6. Ephemeris/chart calculation library/service
7. PDF report pipeline
8. AI model, prompt/RAG architecture, and astrologer review workflow
