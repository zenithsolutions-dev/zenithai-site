"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type PortfolioItem = {
  tag: string;
  title: string;
  description: string;
  techTags: string[];
  href: string;
  linkLabel: string;
  imageSrc: string;
  imageAlt: string;
};

const portfolio: PortfolioItem[] = [
  {
    tag: "E-Commerce · Art Prints",
    title: "Chromora",
    description:
      "A premium canvas art print store for the Canadian market. Stripe payments, artist pages, collections, and a full admin dashboard.",
    techTags: ["Next.js", "Stripe", "TypeScript"],
    href: "https://chromora.ca",
    linkLabel: "Visit site",
    imageSrc: "https://chromora.ca/paintings/starry-night.jpg",
    imageAlt: "Chromora canvas art print store preview",
  },
  {
    tag: "Local Business · Ottawa",
    title: "Magic Carpet Movers",
    description:
      "A conversion-focused website for an Ottawa moving company. Fast, mobile-first, built to rank locally.",
    techTags: ["Next.js", "SEO-optimized", "Mobile-first"],
    href: "https://magicmoversottawa.com",
    linkLabel: "Visit site",
    imageSrc: "/portfolio-magicmovers.webp",
    imageAlt: "Magic Carpet Movers Ottawa moving company website preview",
  },
];

function PortfolioCard({
  item,
  delay,
  reduceMotion,
}: {
  item: PortfolioItem;
  delay: number;
  reduceMotion: boolean | null;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0D1017] transition-all duration-500 hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_0_60px_-10px_rgba(201,168,76,0.25)]"
    >
      {/* Gold top border */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* 16:9 preview image (or fallback) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070910]">
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0D1017] via-[#070910] to-[#03040A]">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12),transparent_60%)]"
            />
            <p className="relative font-[var(--font-playfair)] text-2xl tracking-tight text-[#F0F2FF]/70 sm:text-3xl">
              {item.title}
            </p>
          </div>
        ) : (
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}
        {/* Subtle gradient overlay for legibility */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1017]/40 via-transparent to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-9">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
          {item.tag}
        </p>

        <h3 className="mt-4 font-[var(--font-playfair)] text-3xl text-[#F0F2FF] sm:text-4xl">
          {item.title}
        </h3>

        <p className="mt-5 text-[#8892A4]">{item.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.techTags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-[rgba(201,168,76,0.4)] bg-[#C9A84C]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C9A84C]"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] transition-colors hover:text-[#FFE08A] hover:underline"
        >
          {item.linkLabel}{" "}
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}

export default function OurWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="examples"
      className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A84C]/4 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Our work
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Websites we&apos;ve{" "}
            <span className="italic text-[#8892A4]">built.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[#8892A4]">
            Real businesses, real results — built and launched by Zenith AI.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.map((p, i) => (
            <PortfolioCard
              key={p.title}
              item={p}
              delay={i * 0.15}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
