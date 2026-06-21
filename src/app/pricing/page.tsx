import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CALENDLY_URL, SITE_URL } from "../lib/site";

// Service + pricing structured data. Prices are "starting from", modelled as
// an AggregateOffer (lowPrice) so the markup stays truthful. Ties back to the
// site-wide Organization node defined in layout.tsx via @id.
const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Websites, SEO & Social Media for Ottawa Small Businesses",
  serviceType: "Web design, local SEO, and social media management",
  provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "City", name: "Ottawa" },
  url: `${SITE_URL}/pricing`,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "CAD",
    lowPrice: "49.99",
    offerCount: 2,
    offers: [
      {
        "@type": "Offer",
        name: "Monthly plan — website, SEO, and social",
        price: "49.99",
        priceCurrency: "CAD",
        url: `${SITE_URL}/pricing`,
      },
      {
        "@type": "Offer",
        name: "One-time website build",
        price: "499.99",
        priceCurrency: "CAD",
        url: `${SITE_URL}/pricing`,
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Pricing — Ottawa Web Design, SEO & Social",
  description:
    "Transparent monthly and one-time pricing for Ottawa small businesses. Websites, SEO, and social media starting at $49.99/month or $499.99 one-time.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Zenith AI Pricing — From $49.99/month",
    description:
      "Monthly or one-time. Pick what works for your business. No agency-style billable hours, no surprise fees.",
    url: "/pricing",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

// FAQ content — answers are grounded only in facts already published on the
// site (pricing tiers, Ottawa base, response time, AI-native model). Visible
// copy and the FAQPage schema below are kept identical, per Google policy.
const faqs: { q: string; a: string }[] = [
  {
    q: "How much does a website cost in Ottawa?",
    a: "Our websites start at $499.99 as a one-time build you own outright, or $49.99/month all-in with hosting, updates, local SEO, and social media included — no billable hours or surprise fees.",
  },
  {
    q: "What's included in the monthly plan?",
    a: "A 5-page custom website, local SEO with Google Business Profile setup, 12 social posts a month across Instagram and Facebook, plus hosting, updates, and edits. You can cancel anytime.",
  },
  {
    q: "Do I own my website?",
    a: "With the one-time build, yes — you get the source files and own the code with no lock-in. On the monthly plan we host and maintain the site for you while you're subscribed.",
  },
  {
    q: "Are you actually based in Ottawa?",
    a: "Yes. Zenith AI is an Ottawa-based studio (our office is in Osgoode) working with small businesses across the Ottawa area.",
  },
  {
    q: "What does an AI-native marketing agency do differently?",
    a: "We use AI to do the heavy lifting on websites, content, and SEO, with human strategy and quality control on top — that's how we deliver agency-quality work at small-business prices.",
  },
  {
    q: "How quickly will you get back to me?",
    a: "We typically respond within one business day. The fastest way to start is booking a free 30-minute intro call.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

type Tier = {
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  best: boolean;
  bullets: string[];
  footer: string;
};

const tiers: Tier[] = [
  {
    name: "Monthly",
    tagline: "Most popular for active businesses",
    price: "From $49.99",
    priceSuffix: "/month",
    best: true,
    bullets: [
      "5-page custom website",
      "Local SEO + Google Business Profile",
      "12 social posts/month (IG + FB)",
      "Hosting, updates, and edits included",
      "Cancel anytime",
    ],
    footer:
      "All-in. We handle the work, you stay focused on running the business.",
  },
  {
    name: "One-time",
    tagline: "Own it outright, no recurring fees",
    price: "From $499.99",
    priceSuffix: " once",
    best: false,
    bullets: [
      "5-page custom website (you own the code)",
      "Mobile-first, search-optimized build",
      "Source files & deployment instructions",
      "$50/year hosting (optional add-on)",
      "No lock-in, no recurring agency fees",
    ],
    footer:
      "Best if you have technical help in-house or just want a one-shot launch.",
  },
];

const aiAddons: { name: string; price: string; blurb: string }[] = [
  {
    name: "AI Chatbot",
    price: "From $49.99/mo",
    blurb:
      "On-site AI assistant trained on your business. Answers FAQs 24/7.",
  },
  {
    name: "Business Automation",
    price: "From $49.99/mo",
    blurb:
      "Custom workflows for emails, reports, scheduling, and follow-ups.",
  },
  {
    name: "Custom AI Tools",
    price: "From $499.99 once",
    blurb:
      "Bespoke AI tool built for your specific problem, deployed in days.",
  },
];

export default function PricingPage() {
  return (
    <article className="relative bg-[#03040A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(201,168,76,0.08)]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A84C]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-12 text-center sm:px-8 sm:pt-40 sm:pb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Pricing
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Two ways to work with us —{" "}
            <span className="italic text-[#8892A4]">no surprises either way.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[#B0B8C6]">
            Pick the model that fits your business. Same quality of work,
            same Ottawa team — different commercial relationship.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="relative">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-16 sm:px-8 sm:py-24 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border p-8 sm:p-10 ${
                t.best
                  ? "border-[rgba(201,168,76,0.4)] bg-gradient-to-br from-[#C9A84C]/[0.06] to-transparent shadow-[0_0_50px_-15px_rgba(201,168,76,0.35)]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {t.best && (
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
                />
              )}
              <p
                className={`text-xs font-medium uppercase tracking-[0.3em] ${
                  t.best ? "text-[#C9A84C]" : "text-[#8892A4]"
                }`}
              >
                {t.name} · {t.tagline}
              </p>
              <p
                className={`mt-5 font-[var(--font-playfair)] text-4xl ${
                  t.best
                    ? "text-[#FFE08A] [text-shadow:0_0_30px_rgba(201,168,76,0.4)]"
                    : "text-[#F0F2FF]"
                }`}
              >
                {t.price}
                <span className="text-base text-[#B0B8C6]">{t.priceSuffix}</span>
              </p>

              <ul className="mt-8 flex-1 space-y-3 text-sm text-[#F0F2FF]/90">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm leading-relaxed text-[#8892A4]">
                {t.footer}
              </p>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-medium transition-all ${
                  t.best
                    ? "bg-[#C9A84C] text-[#070910] shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:bg-[#FFE08A] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)]"
                    : "border border-white/15 bg-white/[0.03] text-[#F0F2FF] hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                Book a call <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* AI add-ons */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              AI add-ons
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-4xl">
              Layer on AI when you&apos;re ready.
            </h2>
            <p className="mt-4 text-[#B0B8C6]">
              Available as add-ons to any monthly plan, or stand-alone.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {aiAddons.map((a) => (
              <div
                key={a.name}
                className="rounded-xl border border-white/5 bg-gradient-to-b from-[#0D1017] to-[#03040A] p-6"
              >
                <p className="font-[var(--font-playfair)] text-xl text-[#F0F2FF]">
                  {a.name}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A84C]">
                  {a.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#8892A4]">
                  {a.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — real Q&A targeting long-tail / local "how much / what's included" search */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            FAQ
          </p>
          <h2 className="text-center font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Common questions
          </h2>
          <div className="mt-12 border-y border-white/10">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b border-white/10 py-5 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-[#F0F2FF]">
                  {f.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-xl leading-none text-[#C9A84C] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#8892A4]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Custom-quote CTA */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Need a custom quote?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#B0B8C6]">
            E-commerce, multi-location, or something more involved? Tell us
            what you&apos;re working on and we&apos;ll put numbers on it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 text-sm font-medium text-[#070910] shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all hover:bg-[#FFE08A]"
            >
              Book a free call <ArrowUpRight size={16} />
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-medium text-[#F0F2FF] transition-all hover:border-white/30"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
