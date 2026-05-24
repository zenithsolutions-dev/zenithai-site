"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

/**
 * IMPORTANT: These quotes are illustrative placeholders aligned with the
 * anonymized case studies in SuccessCards. Replace each `quote` and `author`
 * with a real, attributable client testimonial before promoting to anything
 * sales-facing. Keep identities anonymized (e.g. "Owner, coffee shop —
 * Westboro") unless you have written permission to use the business name.
 */
type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    // TODO: replace with real quote from Westboro coffee shop client
    quote:
      "We'd been on page 4 of Google for two years. Six weeks after Zenith took over our Google Business Profile we were in the top three for 'catering Ottawa' — and the phone actually started ringing.",
    author: "Owner",
    role: "Coffee shop · Westboro",
    initials: "WC",
  },
  {
    // TODO: replace with real quote from Centretown family law client
    quote:
      "The site they built reads like our voice, not agency boilerplate. And the blog they ship every other week is the reason new clients keep mentioning Google when they call.",
    author: "Managing partner",
    role: "Family law firm · Centretown",
    initials: "FL",
  },
  {
    // TODO: replace with real quote from Kanata fitness studio client
    quote:
      "Trial sign-ups doubled in the first two months. What I appreciated most was the weekly check-in — they treat us like a partner, not a ticket number.",
    author: "Founder",
    role: "Boutique fitness · Kanata",
    initials: "BF",
  },
];

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/6 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#7B5EA7]/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            In their own words
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            What clients{" "}
            <span className="italic text-[#8892A4]">actually say.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.role}
              initial={reduceMotion ? false : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#0D1017] to-[#03040A] p-8 transition-all duration-500 hover:border-[rgba(201,168,76,0.3)] sm:p-9"
            >
              <Quote
                size={28}
                className="mb-6 text-[#C9A84C]/60 transition-colors duration-500 group-hover:text-[#C9A84C]"
                aria-hidden
              />
              <blockquote className="flex-1 font-[var(--font-playfair)] text-lg leading-relaxed text-[#F0F2FF]/90 sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-6">
                <div
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,168,76,0.4)] bg-[#C9A84C]/10 text-xs font-medium tracking-wide text-[#C9A84C]"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F2FF]">
                    {t.author}
                  </p>
                  <p className="text-xs text-[#8892A4]">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* TODO(legal): once real quotes are in, restore the line below.
            Don't ship the original placeholder phrasing — it asserts client
            permission that doesn't yet exist. */}
        <p className="mt-10 text-center text-xs text-[#8892A4]">
          Names withheld for client privacy.
        </p>
      </div>
    </section>
  );
}
