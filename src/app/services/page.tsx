import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Globe,
  Megaphone,
  TrendingUp,
} from "lucide-react";
import type { ComponentType } from "react";
import { CALENDLY_URL, SITE_URL } from "../lib/site";

const PAGE_PATH = "/services";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Our Services — Web Design, SEO & Social Media Ottawa",
  description:
    "Websites, local SEO, and social media management for Ottawa small businesses. Explore our services and pricing.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Our Services — Web Design, SEO & Social Media Ottawa",
    description:
      "Websites, local SEO, and social media management for Ottawa small businesses. Explore our services and pricing.",
    url: PAGE_URL,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services — Web Design, SEO & Social Media Ottawa",
    description:
      "Websites, local SEO, and social media management for Ottawa small businesses.",
    images: ["/opengraph-image"],
  },
};

type ServiceCard = {
  icon: ComponentType<{ size?: number; className?: string }>;
  name: string;
  body: string;
  href: string;
};

const services: ServiceCard[] = [
  {
    icon: Globe,
    name: "Web Design",
    body: "Fast, mobile-first websites built to turn visitors into customers. Custom design, SEO foundation, and hosting handled — launch-ready in days, not months.",
    href: "/services/web-design-ottawa",
  },
  {
    icon: TrendingUp,
    name: "Local SEO",
    body: "Rank higher on Google in Ottawa. Google Business Profile optimization, local citations, and content that puts you in the map pack where customers are searching.",
    href: "/services/seo-ottawa",
  },
  {
    icon: Megaphone,
    name: "Social Media Marketing",
    body: "Fully managed Instagram, Facebook, and TikTok. We create the content, keep your posting consistent, and handle engagement — so you stay top of mind locally.",
    href: "/services/social-media-ottawa",
  },
];

const whyPoints: { title: string; body: string }[] = [
  {
    title: "AI-native, human-checked",
    body: "AI does the heavy lifting; experienced humans handle strategy and quality control. That is how we deliver agency-quality work at small-business prices.",
  },
  {
    title: "Priced for small businesses",
    body: "Plans from $49.99/month, quoted up front. No billable hours, no surprise fees, and month-to-month contracts you can cancel anytime.",
  },
  {
    title: "Ottawa-based and local-first",
    body: "We are an Ottawa studio. We know the neighbourhoods, the market, and what local customers actually search for.",
  },
  {
    title: "Fast delivery",
    body: "Days, not months. Tight review loops and an AI-powered build process mean you see real results quickly.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
  ],
};

export default function ServicesPage() {
  return (
    <article className="relative bg-[#03040A]">
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
            Ottawa <span className="mx-2 text-[#8892A4]">·</span> Services
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl font-medium leading-[1.08] tracking-tight text-[#F0F2FF] sm:text-6xl">
            Marketing Services for{" "}
            <span className="italic text-[#C9A84C]">
              Ottawa Small Businesses
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#B0B8C6]">
            Websites, local SEO, and social media — three services, one team,
            all priced for what Ottawa small businesses can actually afford.
          </p>
        </div>
      </section>

      {/* 2. Services grid */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.name}
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
                    <s.icon size={24} className="text-[#C9A84C]" />
                  </div>
                </div>
                <h2 className="font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
                  {s.name}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#8892A4]">
                  {s.body}
                </p>
                <Link
                  href={s.href}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#F0F2FF] transition-colors hover:text-[#C9A84C]"
                >
                  Learn more{" "}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why choose us */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              Why choose us
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
              AI + human oversight,{" "}
              <span className="italic text-[#8892A4]">
                built for small business budgets.
              </span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {whyPoints.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.4)] bg-[#C9A84C]/5">
                  <Check size={14} className="text-[#C9A84C]" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-medium text-[#F0F2FF]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8892A4]">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="relative overflow-hidden border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-full w-[400px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.18)_0%,rgba(201,168,76,0.05)_25%,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:px-8 sm:py-32">
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Not sure where to{" "}
            <span className="italic text-[#8892A4]">start?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[#B0B8C6]">
            Book a free call. We will look at your business, tell you honestly
            which service will move the needle first, and quote it up front.
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
