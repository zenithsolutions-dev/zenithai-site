import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  Camera,
  Check,
  Music2,
  Palette,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";
import { CALENDLY_URL, SITE_URL } from "../../lib/site";

const PAGE_PATH = "/services/social-media-ottawa";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Social Media Marketing Ottawa — Grow Your Audience",
  description:
    "Social media management for Ottawa small businesses. Content, posting, and growth on Instagram, Facebook & TikTok. From $49.99/month.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Social Media Marketing Ottawa — Grow Your Audience",
    description:
      "Social media management for Ottawa small businesses. Content, posting, and growth on Instagram, Facebook & TikTok. From $49.99/month.",
    url: PAGE_URL,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Ottawa — Grow Your Audience",
    description:
      "Content, posting, and growth on Instagram, Facebook & TikTok for Ottawa small businesses. From $49.99/month.",
    images: ["/opengraph-image"],
  },
};

// Prose lives in constants so the JSX stays free of unescaped entities.
const whyParagraphs: string[] = [
  "For a growing number of Ottawa customers, social media is the new storefront window. Before they call you or visit your website, they check your Instagram and Facebook to see whether you look active, trustworthy, and worth their money. An empty or abandoned profile quietly costs you business the same way a dark, locked shop would.",
  "Ottawa is a city of neighbourhoods, and word travels fast within them. A well-run social presence puts your business in front of people in Westboro, Barrhaven, Kanata, and Orleans right where they already spend their time — scrolling. Local tags, community engagement, and consistent posting turn casual scrollers into followers, and followers into paying customers.",
  "Social media is also where trust is built long before a single dollar changes hands. Real photos of your work, happy customers, behind-the-scenes moments, and quick replies to questions all signal that there are real people behind the business. By the time someone reaches your website or picks up the phone, they already feel like they know you.",
  "The catch is that social media only works when it is consistent — and consistency is exactly what busy small-business owners run out of time for. That is where we come in: we handle the strategy, content, and posting so your profiles stay active and on-brand while you focus on running the business.",
];

type Feature = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: Camera,
    title: "Instagram management",
    body: "Feed posts, stories, reels, and engagement — a consistent, on-brand presence on the platform where most local discovery happens.",
  },
  {
    icon: Users,
    title: "Facebook management",
    body: "Posts, community engagement, and page upkeep that keep you visible to Ottawa customers who still start their search on Facebook.",
  },
  {
    icon: Music2,
    title: "TikTok content",
    body: "Short-form video built for reach, when your product or service is a fit — the fastest-growing way for local brands to get discovered.",
  },
  {
    icon: Palette,
    title: "Content creation",
    body: "Custom graphics, captions, and short videos designed around your brand — you do not have to hand us finished posts.",
  },
  {
    icon: CalendarClock,
    title: "Posting schedule",
    body: "A steady, planned calendar so your profiles never go quiet — consistency is what keeps you top of mind with local buyers.",
  },
  {
    icon: BarChart3,
    title: "Performance reporting",
    body: "Monthly, plain-English reporting on reach, engagement, and the clicks and messages that actually turn into business.",
  },
];

type ProcessStep = { title: string; body: string };

const processSteps: ProcessStep[] = [
  {
    title: "Strategy",
    body: "We start by learning your business, your customers, and your goals, then pick the one or two platforms that actually fit your audience — no spreading you thin across every network.",
  },
  {
    title: "Content creation",
    body: "We design custom graphics, write captions, and produce short videos on a monthly plan, always on-brand and reviewed with you before anything goes live.",
  },
  {
    title: "Posting & engagement",
    body: "We publish on a consistent schedule and handle day-to-day engagement — replying to comments and messages so your audience feels heard.",
  },
  {
    title: "Reporting",
    body: "Every month you get a clear report on growth, reach, and enquiries, plus what we are doing next. No vanity metrics — just what is moving your business.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Which social media platforms should my business use?",
    a: "It depends on your customers, not on trends. For most Ottawa small businesses, Instagram and Facebook are the core — that is where local buyers discover and vet businesses. TikTok is worth adding when your product or service lends itself to short video. We help you pick the one or two platforms that actually fit your audience, rather than spreading you thin across all of them.",
  },
  {
    q: "How often should I post?",
    a: "Consistency matters more than volume. For most local businesses, three to five quality posts a week keeps you visible without burning out your audience. Our standard plans include 12 posts a month across Instagram and Facebook, plus stories and engagement — enough to stay top of mind for Ottawa customers.",
  },
  {
    q: "Do you create the content too, or just post it?",
    a: "We create it. Our management includes custom graphics, captions, and scheduling — you do not have to hand us finished posts. We can also work from photos and videos you send us, and everything is kept on-brand and reviewed before it goes live.",
  },
  {
    q: "Can you run ads as well as organic posts?",
    a: "Yes. Organic content builds trust and community over time, while paid ads let you reach new local customers faster. We can manage both — and we are honest about when paid ads are worth it for your budget versus when organic alone will do the job.",
  },
  {
    q: "How do I measure if social media is working?",
    a: "We track the metrics that map to real business results: follower growth, reach, engagement, profile visits, and — most importantly — clicks, messages, and enquiries. Every month you get a plain-English report showing what is working and what we are adjusting, so you are never guessing whether it is paying off.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Social Media Marketing",
  name: "Social Media Marketing in Ottawa",
  description:
    "Social media management for Ottawa small businesses — content, posting, and growth on Instagram, Facebook, and TikTok. From $49.99/month.",
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
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Social Media Ottawa",
      item: PAGE_URL,
    },
  ],
};

export default function SocialMediaOttawaPage() {
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
            Ottawa <span className="mx-2 text-[#8892A4]">·</span> Social Media
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl font-medium leading-[1.08] tracking-tight text-[#F0F2FF] sm:text-6xl">
            Social Media Marketing for{" "}
            <span className="italic text-[#C9A84C]">Ottawa Businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#B0B8C6]">
            We help Ottawa businesses show up, stay consistent, and grow on
            Instagram, Facebook, and TikTok — with content and community
            management that turns followers into customers.
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

      {/* 2. Why social media matters */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Why it matters
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Why Social Media Matters for{" "}
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

      {/* 3. What we manage — feature grid */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              What we manage
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
              Fully managed,{" "}
              <span className="italic text-[#8892A4]">end to end.</span>
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

      {/* 4. Our content process */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              Our content process
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
              A repeatable system —{" "}
              <span className="italic text-[#8892A4]">so nothing goes quiet.</span>
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

      {/* 5. Packages */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Packages
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Starting at{" "}
            <span className="text-[#FFE08A] [text-shadow:0_0_30px_rgba(201,168,76,0.4)]">
              $49.99/month
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#B0B8C6]">
            Straightforward pricing, no billable-hour surprises. Fully managed
            social media starts at $49.99/month — content, posting, and
            engagement included. Every plan is quoted up front, so you know the
            full cost before we begin.
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
            Social media questions, answered
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
            Ready to grow your{" "}
            <span className="italic text-[#8892A4]">audience?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[#B0B8C6]">
            Book a free call. We will look at where your Ottawa business is now
            on social, what your competitors are doing, and a simple plan to
            grow your audience and your bookings.
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
