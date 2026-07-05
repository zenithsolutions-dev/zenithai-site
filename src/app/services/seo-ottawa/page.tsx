import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Check,
  FileText,
  Gauge,
  MapPin,
  PenLine,
  Search,
} from "lucide-react";
import type { ComponentType } from "react";
import { CALENDLY_URL, SITE_URL } from "../../lib/site";

const PAGE_PATH = "/services/seo-ottawa";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "SEO Ottawa — Local Search Optimization for Business",
  description:
    "Rank higher on Google in Ottawa. Local SEO, Google Business Profile optimization, and content that brings customers. Free SEO audit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "SEO Ottawa — Local Search Optimization for Business",
    description:
      "Rank higher on Google in Ottawa. Local SEO, Google Business Profile optimization, and content that brings customers. Free SEO audit.",
    url: PAGE_URL,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Ottawa — Local Search Optimization for Business",
    description:
      "Local SEO, Google Business Profile optimization, and content that ranks Ottawa businesses higher on Google.",
    images: ["/opengraph-image"],
  },
};

// Prose lives in constants so the JSX stays free of unescaped entities.
const whyParagraphs: string[] = [
  "When someone in Ottawa searches “plumber near me” or “best coffee in Westboro,” Google shows a map with three local businesses — the local pack — above almost everything else. Those three spots capture the majority of the clicks and calls. If your business is not there, you are effectively invisible to customers who are ready to buy right now.",
  "Most local searches happen on a phone, and most of those are high-intent: someone looking for a service today, not next month. A searcher in Barrhaven, Kanata, or Orleans often calls a business within hours of searching. Local SEO makes sure that business is yours — not the competitor two neighbourhoods over.",
  "Ranking locally is about far more than stuffing keywords onto a page. Google weighs your Google Business Profile, your reviews, your citations across the web, and how relevant and consistent your business information is. Get these right and you build the kind of local authority that keeps you ranking month after month.",
  "Unlike ads, which stop the moment you stop paying, local SEO compounds. The rankings, reviews, and content you build become a durable asset that keeps bringing in customers long after the work is done — usually at a fraction of the ongoing cost of paid advertising.",
];

const resultsParagraphs: string[] = [
  "SEO is a long game, and anyone who promises overnight results is selling you something. Here is the honest version: most of our clients see measurable improvement — higher rankings for target keywords, more Google Business Profile views, and more calls — within 60 to 90 days. Low-competition local terms can move faster; highly competitive terms take longer and need sustained work.",
  "We focus on the metrics that actually matter to your business: local pack visibility, keyword rankings, organic traffic, and — most importantly — calls and enquiries. Every month you get a plain-English report that shows exactly what changed and why, with no vanity metrics or jargon.",
  "What we will not do is promise a specific position or a fixed number of leads. No one can honestly guarantee that, because Google's algorithm and your local competition are outside anyone's control. What we can promise is consistent, white-hat work that steadily stacks the odds in your favour.",
];

type Feature = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: Search,
    title: "Keyword research",
    body: "We find the exact terms your Ottawa customers are searching — the ones with real buying intent — and map them to the pages that should rank for them.",
  },
  {
    icon: FileText,
    title: "On-page SEO",
    body: "Titles, headings, metadata, internal links, and content structured so Google understands each page and matches it to the right local searches.",
  },
  {
    icon: MapPin,
    title: "Local citations",
    body: "Consistent name, address, and phone details across the directories and local sites Google checks — a core trust signal for local rankings.",
  },
  {
    icon: Building2,
    title: "Google Business Profile",
    body: "Full optimization of your Business Profile — categories, services, photos, posts, and review strategy — so you show up in the map pack.",
  },
  {
    icon: Gauge,
    title: "Technical SEO",
    body: "Fast load times, clean site structure, mobile-first pages, schema markup, and crawlability fixes that remove the barriers holding your rankings back.",
  },
  {
    icon: PenLine,
    title: "Content strategy",
    body: "Locally relevant pages and articles that answer what Ottawa customers are actually asking — building topical authority and long-tail traffic over time.",
  },
];

type ProcessStep = { title: string; body: string };

const processSteps: ProcessStep[] = [
  {
    title: "Audit",
    body: "We start with a full audit of your rankings, Google Business Profile, on-page SEO, technical health, citations, and top Ottawa competitors — so we know exactly what is holding you back.",
  },
  {
    title: "Strategy",
    body: "We build a prioritized plan around the keywords and local searches that will move the needle for your business, focused on the fastest, highest-impact wins first.",
  },
  {
    title: "Implementation",
    body: "We do the work — optimizing pages, fixing technical issues, building citations, tuning your Business Profile, and publishing content — with human oversight on quality.",
  },
  {
    title: "Reporting",
    body: "Every month you get a clear report on rankings, traffic, and calls, plus what we did and what is next. No jargon, no vanity metrics — just what actually changed.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "How long does SEO take to work?",
    a: "SEO is a long-term investment, not an overnight fix. Most Ottawa clients see measurable improvement — better rankings, more Google Business Profile views, and more calls — within 60 to 90 days. Low-competition local terms can move faster; highly competitive terms take longer and require sustained work.",
  },
  {
    q: "What is local SEO and why does it matter?",
    a: "Local SEO is the practice of optimizing your online presence to rank for location-based searches like “SEO Ottawa” or “plumber near me.” It matters because Google shows a local map pack above the regular results for these searches, and those top local spots capture most of the clicks and calls from ready-to-buy customers.",
  },
  {
    q: "How do I rank higher on Google in Ottawa?",
    a: "Ranking higher locally comes down to a few things done consistently: a fully optimized Google Business Profile, accurate citations across the web, genuine customer reviews, fast and well-structured web pages, and locally relevant content. We handle all of these as part of our local SEO service.",
  },
  {
    q: "Do you guarantee first page rankings?",
    a: "No — and you should be cautious of any agency that does. Google's algorithm and your local competition are outside anyone's control, so guaranteed rankings are not something an honest provider can promise. What we guarantee is consistent, white-hat work and transparent monthly reporting on real metrics like rankings, traffic, and calls.",
  },
  {
    q: "What's included in an SEO audit?",
    a: "Our free SEO audit reviews your current rankings, Google Business Profile, on-page SEO, site speed and technical health, local citations, and your top competitors in Ottawa. You get a clear, prioritized list of what is holding you back and what to fix first — with no obligation.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Search Engine Optimization",
  name: "Local SEO in Ottawa",
  description:
    "Local SEO, Google Business Profile optimization, and content that ranks Ottawa businesses higher on Google. From $49.99/month.",
  url: PAGE_URL,
  areaServed: { "@type": "City", name: "Ottawa, Ontario" },
  provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "CAD",
    lowPrice: "49.99",
    offerCount: 2,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/#services`,
    },
    { "@type": "ListItem", position: 3, name: "SEO Ottawa", item: PAGE_URL },
  ],
};

export default function SeoOttawaPage() {
  return (
    <article className="relative bg-[#03040A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(201,168,76,0.08)]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A84C]/8 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-[420px] w-[420px] rounded-full bg-[#00D4FF]/6 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-16 text-center sm:px-8 sm:pt-40 sm:pb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Ottawa <span className="mx-2 text-[#8892A4]">·</span> Local SEO
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl font-medium leading-[1.08] tracking-tight text-[#F0F2FF] sm:text-6xl">
            Local SEO in Ottawa That{" "}
            <span className="italic text-[#C9A84C]">Gets You Found</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#B0B8C6]">
            We help Ottawa businesses climb Google&apos;s local results — the
            map pack, &ldquo;near me&rdquo; searches, and the organic listings
            your customers actually click. More visibility, more calls, more
            booked work.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 py-3.5 text-sm font-medium text-[#070910] shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-300 hover:bg-[#FFE08A] hover:shadow-[0_0_60px_rgba(201,168,76,0.5)]"
            >
              Get a Free SEO Audit
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-[#F0F2FF] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Why local SEO matters */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Why it matters
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Why Local SEO Matters for{" "}
            <span className="italic text-[#8892A4]">Ottawa Businesses</span>
          </h2>
          <div className="mt-8 space-y-6">
            {whyParagraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-[#B0B8C6]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our SEO services — feature grid */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              Our SEO services
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
              Everything it takes to{" "}
              <span className="italic text-[#8892A4]">rank locally.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#0D1017] to-[#03040A] p-8 transition-all duration-500 hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_0_60px_-10px_rgba(201,168,76,0.25)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-[#C9A84C]/15 blur-xl transition-all duration-500 group-hover:bg-[#C9A84C]/30 group-hover:blur-2xl"
                  />
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,168,76,0.25)] bg-gradient-to-br from-[#C9A84C]/10 to-transparent transition-transform duration-500 group-hover:scale-110">
                    <f.icon size={24} className="text-[#C9A84C]" />
                  </div>
                </div>
                <h3 className="font-[var(--font-playfair)] text-xl text-[#F0F2FF]">
                  {f.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#8892A4]">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How we improve your rankings */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              How we improve your rankings
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
              A clear process —{" "}
              <span className="italic text-[#8892A4]">no black-box tricks.</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto mb-6 w-fit">
                  <div className="relative inline-flex h-14 w-14 items-center justify-center">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-[#C9A84C]/20 blur-md"
                    />
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C9A84C] bg-[#070910] font-[var(--font-playfair)] text-lg text-[#C9A84C]">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8892A4]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What results to expect */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            What results to expect
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Honest expectations,{" "}
            <span className="italic text-[#8892A4]">no fake guarantees.</span>
          </h2>

          <div className="mt-8 rounded-2xl border border-[rgba(201,168,76,0.3)] bg-gradient-to-br from-[#C9A84C]/[0.06] to-transparent p-6 text-center sm:p-8">
            <p className="font-[var(--font-playfair)] text-2xl text-[#FFE08A] [text-shadow:0_0_30px_rgba(201,168,76,0.4)] sm:text-3xl">
              Most clients see measurable improvement in 60–90 days.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {resultsParagraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-[#B0B8C6]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            FAQ
          </p>
          <h2 className="text-center font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Ottawa SEO questions, answered
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

      {/* 7. Final CTA */}
      <section className="relative overflow-hidden border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-full w-[400px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.18)_0%,rgba(201,168,76,0.05)_25%,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:px-8 sm:py-32">
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Ready to get found in{" "}
            <span className="italic text-[#8892A4]">Ottawa?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[#B0B8C6]">
            Book a free SEO audit. We will show you where you rank now, what your
            Ottawa competitors are doing, and the fastest path to more calls from
            local search.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 text-base font-medium text-[#070910] shadow-[0_0_40px_rgba(201,168,76,0.35)] transition-all duration-300 hover:bg-[#FFE08A] hover:shadow-[0_0_60px_rgba(201,168,76,0.55)]"
            >
              Get a Free SEO Audit
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
              />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#C9A84C] transition-colors hover:text-[#FFE08A]"
            >
              <Check size={16} aria-hidden />
              Or send us a message
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
