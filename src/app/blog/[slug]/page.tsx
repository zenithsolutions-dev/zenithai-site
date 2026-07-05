import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { getPost, posts } from "../../../content/posts";
import { CALENDLY_URL, SITE_URL } from "../../lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/opengraph-image"],
    },
  };
}

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

/**
 * Renders a paragraph string, converting [label](/path) tokens into <Link>s.
 * The only inline syntax posts.ts supports — everything else is plain text.
 */
function renderParagraph(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={key++}
        href={match[2]}
        className="text-[#C9A84C] underline-offset-4 transition-colors hover:text-[#FFE08A] hover:underline"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="relative bg-[#03040A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-[rgba(201,168,76,0.08)]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A84C]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 pt-32 pb-14 sm:px-8 sm:pt-40 sm:pb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            <Link
              href="/blog"
              className="transition-colors hover:text-[#FFE08A]"
            >
              Blog
            </Link>
            <span className="mx-2 text-[#8892A4]">·</span>
            {formatDate(post.publishedAt)}
            <span className="mx-2 text-[#8892A4]">·</span>
            {post.readingTime}
          </p>
          <h1 className="font-[var(--font-playfair)] text-3xl font-medium leading-[1.15] tracking-tight text-[#F0F2FF] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#B0B8C6]">
            {post.description}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
          {post.sections.map((section, si) => (
            <div key={si} className={si > 0 ? "mt-12" : undefined}>
              {section.heading ? (
                <h2 className="font-[var(--font-playfair)] text-2xl tracking-tight text-[#F0F2FF] sm:text-3xl">
                  {section.heading}
                </h2>
              ) : null}
              <div className={section.heading ? "mt-5 space-y-5" : "space-y-5"}>
                {section.paragraphs.map((para, pi) => (
                  <p
                    key={pi}
                    className="text-base leading-relaxed text-[#B0B8C6]"
                  >
                    {renderParagraph(para)}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Related service */}
          <Link
            href={post.relatedService.href}
            className="group relative mt-16 flex flex-col overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.3)] bg-gradient-to-br from-[#C9A84C]/[0.06] to-transparent p-7 transition-all duration-500 hover:border-[rgba(201,168,76,0.5)] hover:shadow-[0_0_60px_-10px_rgba(201,168,76,0.25)] sm:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              Related service
            </p>
            <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
              {post.relatedService.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#8892A4]">
              {post.relatedService.blurb}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] transition-colors group-hover:text-[#FFE08A]">
              Learn more{" "}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-full w-[400px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.18)_0%,rgba(201,168,76,0.05)_25%,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            {post.cta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#B0B8C6]">
            {post.cta.body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 py-3.5 text-sm font-medium text-[#070910] shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-300 hover:bg-[#FFE08A] hover:shadow-[0_0_60px_rgba(201,168,76,0.5)]"
            >
              {post.cta.label}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
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
