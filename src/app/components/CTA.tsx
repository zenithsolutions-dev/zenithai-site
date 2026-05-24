"use client";

import { Fragment, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { gsap } from "../lib/gsap";

const HEADLINE = "Ready to grow your business?";
const HEADLINE_WORDS = HEADLINE.split(" ");
// Precompute the global char-index offset for each word so per-char delay
// timing stays continuous across word boundaries.
const HEADLINE_WORD_OFFSETS: number[] = (() => {
  const offsets: number[] = [];
  let idx = 0;
  for (const w of HEADLINE_WORDS) {
    offsets.push(idx);
    idx += w.length + 1; // +1 accounts for the space between words
  }
  return offsets;
})();

type ContactPhone = { display: string; tel: string };

type CTAProps = {
  calendlyUrl: string;
  contactEmail: string;
  contactPhones: ContactPhone[];
  formAction: string;
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F0F2FF] placeholder:text-[#8892A4] transition-all duration-200 focus:border-[rgba(201,168,76,0.4)] focus:outline-none focus:ring-1 focus:ring-[rgba(201,168,76,0.25)]";

export default function CTA({
  calendlyUrl,
  contactEmail,
  contactPhones,
  formAction,
}: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhoneIdx, setCopiedPhoneIdx] = useState<number | null>(null);

  useGSAP(
    () => {
      if (!beamRef.current || reduceMotion) return;
      gsap.fromTo(
        beamRef.current,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [reduceMotion] }
  );

  const copy = async (
    value: string,
    setFlag: (v: boolean) => void
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setFlag(true);
      window.setTimeout(() => setFlag(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  const copyPhone = async (idx: number, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedPhoneIdx(idx);
      window.setTimeout(() => setCopiedPhoneIdx(null), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]"
    >
      {/* Light beam from top */}
      <div
        ref={beamRef}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[400px] -translate-x-1/2 origin-top bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.22)_0%,rgba(201,168,76,0.06)_25%,transparent_70%)]"
      />
      {/* Hard vertical line beam */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-[#FFE08A] to-transparent opacity-60"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:px-8 sm:py-36">
        <h2
          aria-label={HEADLINE}
          className="text-balance font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl"
        >
          {HEADLINE_WORDS.map((word, wi) => (
            <Fragment key={wi}>
              <span
                aria-hidden
                className="inline-block whitespace-nowrap"
              >
                {word.split("").map((ch, ci) => (
                  <motion.span
                    key={ci}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.5,
                      delay: (HEADLINE_WORD_OFFSETS[wi] + ci) * 0.025,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
              {wi < HEADLINE_WORDS.length - 1 ? " " : null}
            </Fragment>
          ))}
        </h2>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: HEADLINE.length * 0.025 + 0.2,
            ease: "easeOut",
          }}
          className="mx-auto mt-6 max-w-xl text-[#C8CFDB]"
        >
          Book a free consultation. We&apos;ll look at where you are now,
          what&apos;s working, and what an AI-powered marketing setup would do
          for you.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: HEADLINE.length * 0.025 + 0.4,
            ease: "easeOut",
          }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 text-base font-medium text-[#070910] shadow-[0_0_40px_rgba(201,168,76,0.35)] transition-all duration-300 hover:bg-[#FFE08A] hover:shadow-[0_0_60px_rgba(201,168,76,0.55)]"
          >
            Get my free consultation
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
            />
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: HEADLINE.length * 0.025 + 0.55,
            ease: "easeOut",
          }}
          className="mx-auto mt-10 max-w-md"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#8892A4]">
            or send a quick message
          </p>
          <form
            action={formAction}
            method="POST"
            encType="text/plain"
            className="mt-4 flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your business..."
              className={inputClass}
            />
            <button
              type="submit"
              className="mx-auto inline-flex h-12 items-center justify-center rounded-full border border-[rgba(201,168,76,0.4)] bg-[#C9A84C]/5 px-7 text-sm font-medium text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#070910] sm:w-auto"
            >
              Send message →
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            delay: HEADLINE.length * 0.025 + 0.7,
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#B0B8C6]"
        >
          {contactPhones.map((phone, i) => (
            <Fragment key={phone.tel}>
              <button
                type="button"
                onClick={() => copyPhone(i, phone.tel)}
                className="group/contact inline-flex items-center gap-2 transition-colors hover:text-[#F0F2FF]"
                aria-label={`Copy phone number ${phone.display}`}
              >
                <a
                  href={`tel:${phone.tel}`}
                  className="underline-offset-4 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {phone.display}
                </a>
                {copiedPhoneIdx === i ? (
                  <Check size={13} className="text-emerald-400" />
                ) : (
                  <Copy
                    size={13}
                    className="opacity-50 transition-opacity group-hover/contact:opacity-100"
                  />
                )}
              </button>
              <span className="hidden text-[#8892A4] sm:inline">·</span>
            </Fragment>
          ))}
          <button
            type="button"
            onClick={() => copy(contactEmail, setCopiedEmail)}
            className="group/contact inline-flex items-center gap-2 transition-colors hover:text-[#F0F2FF]"
            aria-label={`Copy email ${contactEmail}`}
          >
            <a
              href={`mailto:${contactEmail}`}
              className="underline-offset-4 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {contactEmail}
            </a>
            {copiedEmail ? (
              <Check size={13} className="text-emerald-400" />
            ) : (
              <Copy
                size={13}
                className="opacity-50 transition-opacity group-hover/contact:opacity-100"
              />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
