"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Bot, Cpu, Zap } from "lucide-react";
import type { ComponentType } from "react";

type AIService = {
  icon: ComponentType<{ size?: number; className?: string }>;
  name: string;
  price: string;
  blurb: string;
  bullets: string[];
};

const aiServices: AIService[] = [
  {
    icon: Bot,
    name: "AI Chatbot",
    price: "From $49.99/month",
    blurb:
      "A smart AI assistant on your website that answers customer questions 24/7 — no staff required.",
    bullets: [
      "Trained on your business info",
      "Handles FAQs instantly",
      "Escalates to you when needed",
    ],
  },
  {
    icon: Zap,
    name: "Business Automation",
    price: "From $49.99/month",
    blurb:
      "Automate your repetitive daily tasks — emails, reports, scheduling, follow-ups.",
    bullets: [
      "Save 10+ hours per week",
      "Zero technical knowledge needed",
      "Custom-built for your workflow",
    ],
  },
  {
    icon: Cpu,
    name: "Custom AI Tools",
    price: "From $499.99 one-time",
    blurb:
      "A purpose-built AI tool for your specific business problem — built and deployed in days.",
    bullets: [
      "Tailored to your industry",
      "Integrates with your existing tools",
      "Owned by you, forever",
    ],
  },
];

export default function AIServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ai-services"
      className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-[#7B5EA7]/8 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/5 blur-3xl" />
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
            What&apos;s next
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Your Gateway to{" "}
            <span className="italic text-[#8892A4]">AI Services.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[#8892A4]">
            We help Ottawa businesses leverage AI to automate, grow, and stay
            ahead in this new era of technology.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {aiServices.map((s, i) => (
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

              {/* Light ray on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 left-1/2 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-[#C9A84C]/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              {/* Icon */}
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
      </div>
    </section>
  );
}
