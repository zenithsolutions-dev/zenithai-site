import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Ottawa — Lead Capture, Booking & Review Flows | Zenith AI",
  description:
    "AI automation for Ottawa small businesses. Automated lead capture, review requests, booking, and content repurposing — from $49.99/mo. Built and managed locally.",
  alternates: { canonical: "https://zenithai.ca/services/ai-automation-ottawa" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "AI Automation Ottawa — Lead Capture, Booking & Review Flows | Zenith AI",
    description:
      "AI automation for Ottawa small businesses. Automated lead capture, review requests, booking, and content repurposing — from $49.99/mo.",
    url: "https://zenithai.ca/services/ai-automation-ottawa",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What can you automate for an Ottawa small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common workflows include automated lead capture from your website into a CRM with instant follow-up, review-request sequences after a job is done, appointment and booking reminders with reschedule links, and content repurposing that turns one post into social and email drafts.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI automation cost in Ottawa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business Automation starts at $49.99/month as an add-on to any monthly plan, or stand-alone. A bespoke one-time AI tool starts at $499.99 and is deployed in days. No billable hours or surprise fees — the same pricing model as our websites and SEO.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical skills to use the automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We design the workflow, connect your existing tools (website, email, calendar, CRM, Google Business Profile), and monitor it. You approve the logic and review anything customer-facing before it goes live; we handle the setup and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most workflows are mapped in a 30-minute intro call and built within days. Stand-alone automations and custom AI tools are typically live within a week, depending on how many tools need to be connected.",
      },
    },
    {
      "@type": "Question",
      name: "Are you actually based in Ottawa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Zenith AI is an Ottawa-based studio (our office is in Osgoode) working with small businesses across the Ottawa area.",
      },
    },
  ],
};

export default function AIAutomationOttawaPage() {
  return (
    <main>
      <h1>AI Automation for Ottawa Small Businesses</h1>
      <p>
        Stop doing the repetitive work by hand. Zenith AI builds and runs custom
        automation workflows for Ottawa small businesses — so leads get captured,
        customers get followed up with, and your team stops copy-pasting. It&apos;s the
        same AI-native approach behind our websites, SEO, and social — now pointed at
        the busywork that eats your day. Priced like everything else we do:
        small-business friendly, no billable-hour surprises.
      </p>

      <h2>What is AI automation (and what do we actually build)?</h2>
      <p>
        AI automation connects the tools you already use (your website, email,
        calendar, CRM, Google Business Profile) and lets them act on their own using
        rules and AI. We design the workflow, wire up the integrations, and monitor it
        — you approve the logic, we handle the plumbing. Common building blocks: form →
        CRM → email sequence, trigger → AI draft → human approve, schedule → reminder →
        confirmation.
      </p>

      <h2>Ottawa use cases we ship (4 concrete examples)</h2>
      <h3>1. Automated lead capture</h3>
      <p>
        A visitor fills out your site form → the lead lands in your CRM, gets tagged by
        service, receives an instant personalized email, and a card is dropped into your
        pipeline — no manual data entry. Average Ottawa service business loses leads to
        slow follow-up; instant capture closes that gap.
      </p>
      <h3>2. Review-request flows</h3>
      <p>
        After a job is marked complete (or X days post-appointment), an automated
        sequence asks happy customers for a Google review and routes detractors to a
        private feedback form instead. More 5-star reviews on your Ottawa listing →
        stronger local SEO (see our <a href="https://zenithai.ca/services/seo-ottawa">Local SEO</a> work).
      </p>
      <h3>3. Appointment &amp; booking automation</h3>
      <p>
        Two-way calendar sync, automatic reminders by email/SMS, automatic reschedule
        links, and no-show follow-ups. Built for clinics, salons, trades, and consultants
        across the Ottawa area.
      </p>
      <h3>4. Content repurposing</h3>
      <p>
        One blog post or video becomes a social carousel, an email newsletter draft, and
        three short posts — auto-distributed to the channels we already manage in your{" "}
        <a href="https://zenithai.ca/services/social-media-ottawa">Social media</a> plan.
        Human approves before anything goes live.
      </p>

      <h2>How it works (3 steps)</h2>
      <ol>
        <li>
          <strong>Map</strong> — 30-min call to map your repetitive work and pick the
          highest-ROI workflow.
        </li>
        <li>
          <strong>Build</strong> — we connect your tools and train the AI on your business
          (same method as our <a href="https://zenithai.ca/pricing">AI chatbot</a>).
        </li>
        <li>
          <strong>Run &amp; report</strong> — the workflow runs, and you get a simple
          monthly summary of what it did.
        </li>
      </ol>

      <h2>Pricing (consistent with /pricing)</h2>
      <ul>
        <li>
          <strong>Business Automation add-on — From $49.99/mo.</strong> Available as an
          add-on to any monthly plan, or stand-alone. Covers custom workflows for emails,
          reports, scheduling, and follow-ups.
        </li>
        <li>
          <strong>One-time custom AI tool — From $499.99 once.</strong> Bespoke automation
          built for a specific problem, deployed in days.
        </li>
        <li>
          Bundles cleanly with a{" "}
          <a href="https://zenithai.ca/services/web-design-ottawa">5-page website</a> ($49.99/mo
          or $499.99 one-time) so the automation has a form and a home to live in.
        </li>
      </ul>

      <h2>FAQ</h2>
      <p>
        Common questions about what gets automated, setup time, and whether you need
        technical skills.
      </p>

      <h2>Ready to stop doing it by hand?</h2>
      <p>
        <a href="https://calendly.com/znthsolutions/30min">Book a free 30-minute intro call</a>{" "}
        or <a href="https://zenithai.ca/contact">send a message</a>. Ottawa-based, working
        with small businesses across the area.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
