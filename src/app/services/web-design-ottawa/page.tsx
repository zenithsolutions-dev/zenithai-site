import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Mail,
  PenTool,
  Search,
  Smartphone,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import { CALENDLY_URL, SITE_URL } from "../../lib/site";

const PAGE_PATH = "/services/web-design-ottawa";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Web Design Ottawa — Custom Websites for Local Business",
  description:
    "Professional web design in Ottawa. Fast, mobile-first, SEO-ready websites for small businesses. From $49.99/month. Free consultation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Web Design Ottawa — Custom Websites for Local Business",
    description:
      "Fast, mobile-first, SEO-ready websites for Ottawa small businesses. From $49.99/month. Book a free consultation.",
    url: PAGE_URL,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Ottawa — Custom Websites for Local Business",
    description:
      "Fast, mobile-first, SEO-ready websites for Ottawa small businesses. From $49.99/month.",
    images: ["/opengraph-image"],
  },
};

// Prose lives in constants so the JSX stays free of unescaped entities.
const whyParagraphs: string[] = [
  "For most Ottawa businesses, your website is the first impression you make — long before a customer ever calls or walks through the door. People searching for a plumber in Barrhaven, a dentist in Kanata, or a restaurant near the ByWard Market almost always check you out online first. If your site is slow, dated, or hard to use on a phone, that customer quietly clicks back and calls your competitor instead. A professional website is not a vanity project; it is the difference between being found and being skipped.",
  "Ottawa is a competitive local market. Whether you serve downtown, Orleans, Nepean, or the surrounding rural communities, your future customers are typing “near me” into Google every single day. A well-built website — fast, mobile-first, and structured for local search — is what puts you in front of those people at the exact moment they are ready to buy. Without one, you are invisible to most of your market, no matter how good your actual service is.",
  "A great website also works around the clock. It answers common questions, showcases your work, collects leads through contact forms, and books calls while you sleep — acting as your most reliable salesperson, seven days a week. For a small team, that kind of leverage is enormous: it lets you compete with much larger companies without hiring a larger staff.",
  "We build every site on a modern, performance-first foundation. That means pages that load in under a second, clean code that Google can crawl and rank, and a design that looks premium on every screen size. The result is a website that does not just sit there looking nice — it actively brings in business, month after month.",
];

type Feature = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: PenTool,
    title: "Custom design",
    body: "No templates. Every page is designed around your brand, your customers, and the actions you want visitors to take — so your business looks like itself, not a cookie-cutter theme.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    body: "More than half of local searches happen on a phone. We design for mobile first, so your site looks sharp and loads fast on every device, from phones to desktops.",
  },
  {
    icon: Search,
    title: "SEO foundation",
    body: "Clean structure, fast load times, proper metadata, and local schema baked in from day one — so Google understands your site and Ottawa customers can actually find you.",
  },
  {
    icon: Zap,
    title: "Fast loading",
    body: "Speed is trust. We build on modern frameworks that render in under a second, keeping visitors engaged and protecting your search rankings.",
  },
  {
    icon: Mail,
    title: "Contact forms",
    body: "Make it effortless to reach you. Smart contact forms, click-to-call, and booking links turn casual visitors into real conversations and booked appointments.",
  },
  {
    icon: BarChart3,
    title: "Analytics setup",
    body: "Know what is working. We wire up analytics so you can see where your traffic comes from and which pages turn browsers into customers.",
  },
];

type ProcessStep = { title: string; body: string };

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    body: "We start with a free call to understand your business, your customers, and your goals. No jargon — just a clear picture of what your site needs to do and who it needs to reach.",
  },
  {
    title: "Design",
    body: "We design a modern, on-brand layout built around real customer actions. You review it early and often, so the final look is exactly right before a single line of code is written.",
  },
  {
    title: "Build",
    body: "We build fast, using AI to handle the heavy lifting and human oversight to guarantee quality. Your site is developed on a modern, secure, search-ready foundation.",
  },
  {
    title: "Launch",
    body: "We handle hosting, testing, and go-live, then keep iterating. Your site launches polished — and we stay on to update, improve, and grow it with your business.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "How much does a website cost in Ottawa?",
    a: "Our websites start at $49.99/month all-in (design, hosting, updates, and support) or from $499.99 as a one-time build you own outright. The exact price depends on the number of pages and features — we quote it up front, with no hidden fees.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most small-business sites go from first call to launch in a matter of days, not months. Because AI handles the heavy lifting and we design in tight review loops, timelines are far shorter than a traditional agency — typically one to two weeks for a standard 5-page site.",
  },
  {
    q: "Do you offer ongoing website maintenance?",
    a: "Yes. Our monthly plans include hosting, updates, edits, and support, so your site stays fast, secure, and current without you lifting a finger. Prefer a one-time build? We offer optional hosting and maintenance add-ons.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Absolutely. Every site we build is mobile-first, meaning it is designed for phones from the start and scales up beautifully to tablets and desktops. Most of your Ottawa customers will visit on their phone, so this is non-negotiable for us.",
  },
  {
    q: "Do you help with SEO too?",
    a: "Yes. Every website ships with an SEO foundation — fast load times, clean structure, metadata, and local schema. We also offer dedicated local SEO and Google Business Profile management to help you rank higher in Ottawa search results over time.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design",
  name: "Web Design in Ottawa",
  description:
    "Custom, mobile-first, SEO-ready website design for Ottawa small businesses. From $49.99/month.",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Web Design Ottawa",
      item: PAGE_URL,
    },
  ],
};

export default function WebDesignOttawaPage() {
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
            Ottawa <span className="mx-2 text-[#8892A4]">·</span> Web Design
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl font-medium leading-[1.08] tracking-tight text-[#F0F2FF] sm:text-6xl">
            Web Design in Ottawa That{" "}
            <span className="italic text-[#C9A84C]">Wins Customers</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#B0B8C6]">
            We build fast, mobile-first websites for Ottawa small businesses —
            designed not just to look good, but to turn visitors into booked
            calls, phone calls, and paying customers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 py-3.5 text-sm font-medium text-[#070910] shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-300 hover:bg-[#FFE08A] hover:shadow-[0_0_60px_rgba(201,168,76,0.5)]"
            >
              Book a Free Call
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

      {/* 2. Why an Ottawa business needs a professional website */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Why it matters
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Why Your Ottawa Business Needs a{" "}
            <span className="italic text-[#8892A4]">Professional Website</span>
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

      {/* 3. What's included — feature grid */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              What&apos;s included
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
              Everything a small business{" "}
              <span className="italic text-[#8892A4]">actually needs.</span>
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

      {/* 4. Our web design process */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              Our web design process
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
              From first call to launch —{" "}
              <span className="italic text-[#8892A4]">in days, not months.</span>
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

      {/* 5. Web design pricing */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Web design pricing
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Starting at{" "}
            <span className="text-[#FFE08A] [text-shadow:0_0_30px_rgba(201,168,76,0.4)]">
              $49.99/month
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#B0B8C6]">
            Straightforward pricing, no billable-hour surprises. Custom websites
            start at $49.99/month all-in — design, hosting, updates, and support
            included — or from $499.99 as a one-time build you own outright.
            Every plan is quoted up front, so you know exactly what you are
            paying before we begin.
          </p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] transition-colors hover:text-[#FFE08A] hover:underline"
            >
              See full pricing
              <ArrowUpRight size={14} />
            </Link>
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
            Web design questions, answered
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
            Ready for a website that{" "}
            <span className="italic text-[#8892A4]">works?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[#B0B8C6]">
            Book a free consultation. We will look at where you are now, what
            your Ottawa customers are searching for, and exactly what a new
            website would do for your business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 text-base font-medium text-[#070910] shadow-[0_0_40px_rgba(201,168,76,0.35)] transition-all duration-300 hover:bg-[#FFE08A] hover:shadow-[0_0_60px_rgba(201,168,76,0.55)]"
            >
              Book a Free Call
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
