"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

type Example = {
  industry: string;
  location: string;
  metric: { value: number; prefix?: string; suffix?: string; decimals?: number };
  metricLabel: string;
  headline: string;
};

const examples: Example[] = [
  {
    industry: "Coffee shop",
    location: "Westboro, Ottawa",
    metric: { value: 30, suffix: "%" },
    metricLabel: "More catering inquiries in 60 days",
    headline:
      "Google Business Profile overhaul + local SEO → top-3 map pack ranking and 30% more catering inquiries in under 60 days.",
  },
  {
    industry: "Family law firm",
    location: "Centretown, Ottawa",
    metric: { value: 4 },
    metricLabel: "Keywords on Google page one within 90 days",
    headline:
      "5-page website + bi-weekly blog → first page Google rankings for 4 high-intent local search terms within 90 days.",
  },
  {
    industry: "Boutique fitness studio",
    location: "Kanata, Ottawa",
    metric: { value: 2, suffix: "×" },
    metricLabel: "Trial-class signups, month-over-month",
    headline:
      "Instagram + Facebook management + Meta ads → trial-class signups doubled month-over-month within the first 8 weeks.",
  },
];

const enterFrom: { x: number; y: number }[] = [
  { x: -60, y: 30 },
  { x: 0, y: 70 },
  { x: 60, y: 30 },
];

export default function SuccessCards() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="examples"
      className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 h-64 w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#C9A84C]/8 to-transparent blur-3xl" />
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
            What success looks like
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Real outcomes,{" "}
            <span className="italic text-[#8892A4]">real Ottawa businesses.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {examples.map((ex, i) => (
            <SuccessCard
              key={ex.industry}
              example={ex}
              enter={enterFrom[i] ?? { x: 0, y: 60 }}
              index={i}
              reduceMotion={reduceMotion ?? false}
            />
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-[#3D4555]">
          Results reflect real client outcomes. Individual results may vary.
        </p>
      </div>
    </section>
  );
}

function SuccessCard({
  example,
  enter,
  index,
  reduceMotion,
}: {
  example: Example;
  enter: { x: number; y: number };
  index: number;
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    const formatted =
      (example.metric.decimals ?? 0) > 0
        ? v.toFixed(example.metric.decimals)
        : Math.round(v).toString();
    return `${example.metric.prefix ?? ""}${formatted}${example.metric.suffix ?? ""}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, example.metric.value, {
      duration: 1.6,
      delay: 0.3 + index * 0.1,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, count, example.metric.value, index]);

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, x: enter.x, y: enter.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#0D1017] to-[#03040A] p-8 transition-all duration-500 hover:border-[rgba(201,168,76,0.3)]"
    >
      {/* Holographic shimmer overlay — slides on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#C9A84C]/8 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />

      {/* Location-pin badge */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8892A4]">
        <MapPin size={11} className="text-[#C9A84C]" />
        {example.location}
      </div>

      <p className="mt-4 text-sm font-medium text-[#F0F2FF]/90">
        {example.industry}
      </p>

      {/* Big metric */}
      <div className="mt-6 flex items-baseline gap-2">
        <motion.p className="font-[var(--font-playfair)] text-6xl tabular-nums leading-none text-transparent [background:linear-gradient(135deg,#FFE08A_0%,#C9A84C_55%,#8A6F2A_100%)] [-webkit-background-clip:text] [background-clip:text]">
          {display}
        </motion.p>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#8892A4]">
        {example.metricLabel}
      </p>

      {/* Body */}
      <div className="mt-6 border-t border-white/5 pt-5">
        <p className="text-sm leading-relaxed text-[#8892A4]">
          {example.headline}
        </p>
      </div>
    </motion.article>
  );
}
