"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const line1Words = ["Your", "Marketing."];
const line2Words = ["Elevated."];

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
          Ottawa <span className="mx-2 text-[#8892A4]">·</span> Canada
          <span className="mx-2 text-[#8892A4]">·</span> AI-Powered
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
            {line2Words.map((w, i) => (
              <motion.span
                key={`l2-${i}`}
                custom={i + line1Words.length}
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
                  {w}
                </span>
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
          className="mt-6 font-[var(--font-playfair)] text-xl italic text-[#8892A4] sm:text-2xl"
        >
          Built by AI. Run by people.
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-[#8892A4] sm:text-lg"
        >
          Websites, SEO, and social media for Ottawa small businesses — built
          faster, priced for what local businesses can actually afford.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-medium tracking-wide text-[#070910] shadow-[0_0_30px_rgba(201,168,76,0.25)] transition-all duration-300 hover:bg-[#FFE08A] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)]"
          >
            Book Free Call
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </a>
          <a
            href="#examples"
            className="group/work inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium tracking-wide text-[#F0F2FF] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
          >
            See Our Work
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover/work:translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
