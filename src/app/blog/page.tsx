import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { postsNewestFirst } from "../../content/posts";
import { SITE_URL } from "../lib/site";

const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "Blog — Marketing Tips for Ottawa Small Businesses",
  description:
    "Practical advice on websites, SEO, and social media for Ottawa small businesses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Blog — Marketing Tips for Ottawa Small Businesses",
    description:
      "Practical advice on websites, SEO, and social media for Ottawa small businesses.",
    url: PAGE_URL,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Marketing Tips for Ottawa Small Businesses",
    description:
      "Practical advice on websites, SEO, and social media for Ottawa small businesses.",
    images: ["/opengraph-image"],
  },
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "2026-07-05" → "July 5, 2026" — deterministic, no locale surprises. */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export default function BlogIndexPage() {
  return (
    <article className="relative bg-[#03040A]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(201,168,76,0.08)]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A84C]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-16 text-center sm:px-8 sm:pt-40 sm:pb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Blog
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl font-medium leading-[1.08] tracking-tight text-[#F0F2FF] sm:text-6xl">
            Marketing Tips for{" "}
            <span className="italic text-[#C9A84C]">
              Ottawa Small Businesses
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#B0B8C6]">
            Practical, no-fluff advice on websites, local SEO, and social media
            — written for owners, not marketers.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {postsNewestFirst.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#0D1017] to-[#03040A] p-8 transition-all duration-500 hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_0_60px_-10px_rgba(201,168,76,0.25)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
                  {formatDate(post.publishedAt)}
                  <span className="mx-2 text-[#8892A4]">·</span>
                  {post.readingTime}
                </p>
                <h2 className="mt-4 font-[var(--font-playfair)] text-2xl leading-snug text-[#F0F2FF]">
                  {post.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#8892A4]">
                  {post.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#F0F2FF] transition-colors group-hover:text-[#C9A84C]">
                  Read article{" "}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
