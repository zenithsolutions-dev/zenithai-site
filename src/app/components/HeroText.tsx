"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const line1Words = ["We", "build", "the", "systems"];
// Line 2 kept as a single phrase so the gold gradient and the underline-draw
// flow continuously across all three words — the cinematic climax of the
// hero stays a single sweep rather than three independent reveals.
const line2Phrase = "behind modern businesses.";

export default function HeroText({ calendlyUrl }: { calendlyUrl: string }) {
  const reduceMotion = useReducedMotion();
  const underlineRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(underlineRef, { once: true, amount: 0.6 });
  const [underlineActive, setUnderlineActive] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = window.setTimeout(() => setUnderlineActive(true), 900);
      return () => window.clearTimeout(t);
    }
  }, [inView]);

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-12 sm:px-8 sm:pt-32">
      <div className="pointer-events-auto max-w-4xl">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]"
        >
          Ottawa <span className="mx-2 text-[#8892A4]">·</span> AI-Native Studio
        </motion.p>

        <h1 className="font-[var(--font-playfair)] text-5xl font-medium leading-[1.05] tracking-tight text-[#F0F2FF] sm:text-7xl lg:text-[5.5rem]">
          <span className="block">
            {line1Words.map((w, i) => (
              <motion.span
                key={`l1-${i}`}
                custom={i}
                variants={wordVariants}
                initial={reduceMotion ? false : "hidden"}
                animate="show"
                className="mr-3 inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block">
            <motion.span
              custom={line1Words.length}
              variants={wordVariants}
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              className="inline-block"
            >
              <span
                ref={underlineRef}
                className={`hero-underline bg-gradient-to-r from-[#FFE08A] via-[#C9A84C] to-[#8A6F2A] bg-clip-text text-transparent ${
                  underlineActive ? "in-view" : ""
                }`}
              >
                {line2Phrase}
              </span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-[#B0B8C6] sm:text-lg"
        >
          Websites, content, lead generation, and AI automations — designed to
          help Ottawa businesses grow faster with smaller teams.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-medium tracking-wide text-[#070910] shadow-[0_0_30px_rgba(201,168,76,0.25)] transition-all duration-300 hover:bg-[#FFE08A] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)]"
          >
            Talk to us
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </a>
          <a
            href="#portfolio"
            className="group/work inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium tracking-wide text-[#F0F2FF] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
          >
            See our work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/work:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* Concrete trust signals replacing the vague "Free" framing.
            text-zinc-400 stays readable on the parallax backdrop without
            competing with the headline or CTAs. */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
          className="mt-6 text-sm text-zinc-400"
        >
          Monthly plans
          <span className="mx-2 text-[#C9A84C]/60">·</span>
          Ottawa-based
          <span className="mx-2 text-[#C9A84C]/60">·</span>
          Built with AI from day one
        </motion.p>
      </div>
    </div>
  );
}
