"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Globe, Megaphone, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";

type Service = {
  icon: ComponentType<{ size?: number; className?: string }>;
  name: string;
  price: string;
  blurb: string;
  bullets: string[];
};

const services: Service[] = [
  {
    icon: Globe,
    name: "Websites",
    price: "From $49.99/month",
    blurb: "Launch-ready in days, not months. Modern, fast, mobile-first.",
    bullets: [
      "5-page custom build",
      "Mobile-first design",
      "Search-optimized from day one",
    ],
  },
  {
    icon: TrendingUp,
    name: "Local SEO",
    price: "From $49.99/month",
    blurb: "Get found on Google in Ottawa. Rank higher, get more calls.",
    bullets: [
      "Google Business Profile setup",
      "Monthly local content",
      "Reporting you can actually read",
    ],
  },
  {
    icon: Megaphone,
    name: "Social Media",
    price: "From $49.99/month",
    blurb:
      "12 posts a month, fully managed. You stay focused on running the business.",
    bullets: [
      "Instagram + Facebook",
      "Custom graphics & copy",
      "Engagement & DMs handled",
    ],
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/5 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-[#00D4FF]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Core marketing
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Three services.{" "}
            <span className="italic text-[#8892A4]">No surprises.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[#8892A4]">
            Pick what you need. Every package is priced up front — no
            agency-style billable hours, no hidden fees. Want more? Layer on
            an{" "}
            <a
              href="#ai-services"
              className="text-[#C9A84C] underline-offset-4 transition-colors hover:text-[#FFE08A] hover:underline"
            >
              AI upgrade
            </a>{" "}
            below.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.name}
              initial={reduceMotion ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#0D1017] to-[#03040A] p-9 transition-all duration-500 hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_0_60px_-10px_rgba(201,168,76,0.25)]"
            >
              {/* Gold top accent bar */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Light ray that appears on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 left-1/2 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-[#C9A84C]/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              {/* Icon with radial glow */}
              <div className="relative mb-8 inline-flex h-16 w-16 items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[#C9A84C]/15 blur-xl transition-all duration-500 group-hover:bg-[#C9A84C]/30 group-hover:blur-2xl"
                />
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(201,168,76,0.25)] bg-gradient-to-br from-[#C9A84C]/10 to-transparent transition-transform duration-500 group-hover:scale-110">
                  <s.icon size={28} className="text-[#C9A84C]" />
                </div>
              </div>

              <h3 className="font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
                {s.name}
              </h3>

              <span className="mt-3 inline-flex w-fit items-center rounded-full border border-[rgba(201,168,76,0.4)] bg-[#C9A84C]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C9A84C]">
                {s.price}
              </span>

              <p className="mt-5 text-[#8892A4]">{s.blurb}</p>

              <ul className="mt-6 space-y-2.5 text-sm text-[#F0F2FF]/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="text-[#C9A84C]">→</span>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#F0F2FF] transition-colors hover:text-[#C9A84C]"
              >
                Learn how{" "}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Two-tier pricing comparison */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2"
        >
          {/* Monthly */}
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.3)] bg-gradient-to-br from-[#C9A84C]/[0.06] to-transparent p-6 sm:p-7">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent"
            />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              Monthly · most popular
            </p>
            <p className="mt-3 font-[var(--font-playfair)] text-3xl text-[#FFE08A] [text-shadow:0_0_30px_rgba(201,168,76,0.4)]">
              From $49.99<span className="text-base text-[#B0B8C6]">/mo</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#8892A4]">
              Ongoing strategy, updates, hosting, and support — all included.
              Cancel anytime.
            </p>
          </div>

          {/* One-time */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8892A4]">
              One-time · own it forever
            </p>
            <p className="mt-3 font-[var(--font-playfair)] text-3xl text-[#F0F2FF]">
              From $499.99<span className="text-base text-[#B0B8C6]">
                {" "}
                once
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#8892A4]">
              Buy your site outright. You own the code, no vendor lock-in.{" "}
              <span className="text-[#B0B8C6]">+ $50/year hosting</span> only.
            </p>
          </div>
        </motion.div>

        {/* No-commitment trust line — reinforces the Monthly tier's
            "Cancel anytime" inside the card and assures buyers across both
            tiers that there's no long-term lock-in. */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.6,
            delay: 0.75,
            ease: "easeOut",
          }}
          className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-zinc-400"
        >
          <Check
            size={16}
            className="flex-shrink-0 text-[#C9A84C]"
            aria-hidden
          />
          <span>
            Month-to-month contracts — cancel anytime, no questions asked.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
