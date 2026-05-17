"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { Rocket, Search, Wrench } from "lucide-react";
import type { ComponentType } from "react";
import { gsap } from "../lib/gsap";

type Step = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    icon: Search,
    title: "Discovery",
    body: "Free intro call. We learn your business, your customers, and what's actually working today.",
  },
  {
    icon: Wrench,
    title: "Build",
    body: "We design, write, and ship — fast. AI handles the heavy lifting; we handle the strategy and quality control.",
  },
  {
    icon: Rocket,
    title: "Launch",
    body: "Your site goes live, your campaigns go live, and we keep iterating monthly based on what the data tells us.",
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopLineRef = useRef<SVGPathElement>(null);
  const mobileLineRef = useRef<SVGPathElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reduceMotion) return;
      const draw = (el: SVGPathElement | null) => {
        if (!el) return;
        const length = el.getTotalLength();
        el.style.strokeDasharray = `${length}`;
        el.style.strokeDashoffset = `${length}`;
        gsap.to(el, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        });
      };
      draw(desktopLineRef.current);
      draw(mobileLineRef.current);
    },
    { scope: sectionRef, dependencies: [reduceMotion] }
  );

  return (
    <section
      ref={sectionRef}
      id="how"
      className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#070910]"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            How we work
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            From first call to launch —{" "}
            <span className="italic text-[#8892A4]">in days, not months.</span>
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="relative hidden md:block">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-8 h-2 w-full"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line
              x1="100"
              y1="2"
              x2="900"
              y2="2"
              stroke="rgba(201, 168, 76, 0.12)"
              strokeWidth="2"
            />
            <path
              ref={desktopLineRef}
              d="M 100 2 L 900 2"
              stroke="url(#hwwGoldLine)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="hwwGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A6F2A" />
                <stop offset="50%" stopColor="#FFE08A" />
                <stop offset="100%" stopColor="#8A6F2A" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <DesktopStep
                key={step.title}
                step={step}
                index={i}
                reduceMotion={reduceMotion ?? false}
              />
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative md:hidden">
          {/* SVG vertical line — column 0 of grid (40px wide) is positioned, line at center (20px) */}
          <svg
            className="pointer-events-none absolute left-[18px] top-10 h-[calc(100%-3rem)] w-1"
            viewBox="0 0 2 1000"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="1000"
              stroke="rgba(201, 168, 76, 0.12)"
              strokeWidth="2"
            />
            <path
              ref={mobileLineRef}
              d="M 1 0 L 1 1000"
              stroke="url(#hwwGoldLineV)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient
                id="hwwGoldLineV"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8A6F2A" />
                <stop offset="50%" stopColor="#FFE08A" />
                <stop offset="100%" stopColor="#8A6F2A" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <MobileStep
                key={step.title}
                step={step}
                index={i}
                reduceMotion={reduceMotion ?? false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberBadge({
  index,
  size = "lg",
}: {
  index: number;
  size?: "sm" | "lg";
}) {
  const sizeClass = size === "lg" ? "h-16 w-16 text-xl" : "h-10 w-10 text-base";
  return (
    <div className={`relative inline-flex ${sizeClass} items-center justify-center`}>
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#C9A84C]/20 blur-md"
      />
      <span
        className={`relative inline-flex ${sizeClass} items-center justify-center rounded-full border-2 border-[#C9A84C] bg-[#070910] font-[var(--font-playfair)] text-[#C9A84C]`}
      >
        {index + 1}
      </span>
    </div>
  );
}

function DesktopStep({
  step,
  index,
  reduceMotion,
}: {
  step: Step;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative text-center"
    >
      <div className="relative z-10 mx-auto mb-6 w-fit">
        <NumberBadge index={index} size="lg" />
      </div>
      <div className="mx-auto max-w-xs">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
          <Icon size={14} />
          <span>Step {index + 1}</span>
        </div>
        <h3 className="font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#8892A4]">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

function MobileStep({
  step,
  index,
  reduceMotion,
}: {
  step: Step;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-start gap-5"
    >
      <div className="relative z-10 flex-shrink-0">
        <NumberBadge index={index} size="sm" />
      </div>
      <div className="flex-1 pt-1">
        <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
          <Icon size={12} />
          <span>Step {index + 1}</span>
        </div>
        <h3 className="font-[var(--font-playfair)] text-xl text-[#F0F2FF]">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#8892A4]">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}
