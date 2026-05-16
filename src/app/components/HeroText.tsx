"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const DURATION = 0.6;
const EASE = "easeOut" as const;

export default function HeroText({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-20 text-center sm:pt-44">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: EASE, delay: 0.1 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
      >
        <Sparkles size={12} className="text-blue-400" />
        AI + human oversight — built for small business budgets
      </motion.p>

      <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        <motion.span
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION, ease: EASE, delay: 0.2 }}
          className="inline-block"
        >
          Your marketing.
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: DURATION, ease: EASE, delay: 0.4 }}
          className="inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent"
        >
          Elevated.
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION, ease: EASE, delay: 0.5 }}
          className="inline-block text-zinc-300"
        >
          Built by AI. Run by people.
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: EASE, delay: 0.6 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400"
      >
        Websites, SEO, and social media for Ottawa small businesses — built
        faster, priced for what local businesses can actually afford.
      </motion.p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION, ease: EASE, delay: 0.7 }}
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-1 rounded-full bg-white px-7 text-sm font-medium text-zinc-900 shadow-lg shadow-blue-500/10 hover:bg-zinc-200"
        >
          Get my free consultation <ArrowUpRight size={16} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION, ease: EASE, delay: 0.8 }}
          href="#services"
          className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white hover:bg-white/10"
        >
          See what we do
        </motion.a>
      </div>
    </div>
  );
}
