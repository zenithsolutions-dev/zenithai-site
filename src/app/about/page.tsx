import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY_URL, BUSINESS_ADDRESS } from "../lib/site";

export const metadata: Metadata = {
  title: "About — Ottawa's AI-native marketing agency",
  description:
    "Zenith AI is a small, Ottawa-based marketing studio using AI to deliver agency-quality websites, SEO, and social media at prices small businesses can afford.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Zenith AI — Ottawa's AI-native marketing agency",
    description:
      "Why we built an AI-native agency for Ottawa small businesses, what we believe, and how we work.",
    url: "/about",
    type: "website",
    // Reference the root opengraph-image.tsx explicitly — Next's shallow
    // merge means child openGraph blocks lose the auto-applied parent image.
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return (
    <article className="relative bg-[#03040A]">
      {/* Soft hero */}
      <section className="relative overflow-hidden border-b border-[rgba(201,168,76,0.08)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A84C]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            About
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Built by people who got{" "}
            <span className="italic text-[#8892A4]">
              tired of agency pricing.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#B0B8C6]">
            Zenith AI is a small, Ottawa-based marketing studio. We use AI to
            do the heavy lifting on websites, SEO, and social — so small
            businesses can get the kind of work that used to cost $5k/month,
            for a fraction of it.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="relative">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:px-8 sm:py-28 md:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              Why we exist
            </p>
            <h2 className="mt-4 font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
              Agency-quality, SMB-priced.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#B0B8C6]">
              Traditional agencies bill in hours that were priced before AI
              made most of the work 5–10× faster. We built our pricing for
              what work actually costs to produce today.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              How we work
            </p>
            <h2 className="mt-4 font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
              AI does the lift. People do the calls.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#B0B8C6]">
              Strategy, judgement, client conversations, and quality checks
              stay with humans. Drafts, copy, code, and reporting get the AI
              accelerant. The output is faster — and held to the same bar.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              Who we serve
            </p>
            <h2 className="mt-4 font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
              Ottawa small businesses.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#B0B8C6]">
              Restaurants, professional services, fitness studios, retail —
              local Ottawa shops who want a real digital presence without
              hiring a full-time marketing person.
            </p>
          </div>
        </div>
      </section>

      {/* Location strip */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Based in
          </p>
          <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#F0F2FF] sm:text-3xl">
            {BUSINESS_ADDRESS.streetAddress}
            <br />
            {BUSINESS_ADDRESS.locality}, {BUSINESS_ADDRESS.region}{" "}
            {BUSINESS_ADDRESS.postalCode}
          </p>
          <a
            href={BUSINESS_ADDRESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#C9A84C] transition-colors hover:text-[#FFE08A] hover:underline"
          >
            Open in Google Maps <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Ready to talk?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#B0B8C6]">
            Book a free 30-minute call. We&apos;ll look at where you are,
            what&apos;s working, and what an AI-powered setup would mean for
            your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 text-sm font-medium text-[#070910] shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all hover:bg-[#FFE08A] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)]"
            >
              Book a free call <ArrowUpRight size={16} />
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-medium text-[#F0F2FF] transition-all hover:border-white/30 hover:bg-white/[0.06]"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
