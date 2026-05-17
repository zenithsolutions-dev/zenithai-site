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
import { useGSAP } from "@gsap/react";
import { Activity, CheckCircle2 } from "lucide-react";
import { gsap } from "../lib/gsap";

export default function DashboardMockup() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!cardRef.current || reduceMotion) return;
      gsap.fromTo(
        cardRef.current,
        { rotateX: 8, rotateY: -4 },
        {
          rotateX: -4,
          rotateY: 2,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    },
    { scope: wrapperRef, dependencies: [reduceMotion] }
  );

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ perspective: "1400px" }}
    >
      {/* Ambient gold + cyan glow underneath */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 -bottom-12 h-40 rounded-full bg-[#C9A84C]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-4 -top-8 h-32 rounded-full bg-[#00D4FF]/12 blur-3xl"
      />

      <div
        ref={cardRef}
        className={`relative overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.25)] bg-gradient-to-b from-[#0D1017]/95 to-[#03040A]/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),0_0_60px_rgba(201,168,76,0.08)] backdrop-blur-xl ${
          reduceMotion ? "" : "float-bob"
        } scanline`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Holographic gradient border accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A84C]/30 via-transparent to-[#00D4FF]/20"
          style={{
            mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            WebkitMask:
              "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        {/* window chrome */}
        <div className="relative flex items-center gap-2 border-b border-white/5 bg-[#03040A]/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3D4555]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3D4555]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3D4555]" />
          <span className="ml-3 text-xs tracking-wide text-[#8892A4]">
            zenithai.ca / dashboard
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        </div>

        {/* dashboard body */}
        <div className="relative p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C]">
                Marketing performance
              </p>
              <h3 className="mt-1 font-[var(--font-playfair)] text-lg text-[#F0F2FF]">
                Last 30 days
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#8892A4]">
              <Activity size={14} className="text-[#00D4FF]" />
              <span>Auto-updating</span>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            <KpiCard
              index={0}
              label="Conversions"
              to={247}
              duration={1.5}
              delay={0.3}
              delta="+24%"
              up
            />
            <KpiCard
              index={1}
              label="Bookings"
              to={47}
              duration={1.2}
              delay={0.5}
              delta="+12"
              up
            />
            <KpiCard
              index={2}
              label="Revenue"
              to={12.4}
              duration={1.4}
              delay={0.4}
              prefix="$"
              suffix="K"
              decimals={1}
              delta="+18%"
              up
            />
          </div>

          {/* chart */}
          <div className="mt-4 rounded-xl border border-white/5 bg-[#03040A]/40 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-[#F0F2FF]">
                Site traffic &amp; inquiries
              </p>
              <div className="flex items-center gap-3 text-[11px] text-[#8892A4]">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#C9A84C]" />
                  Sessions
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#00D4FF]" />
                  Inquiries
                </span>
              </div>
            </div>
            <Chart />
          </div>

          {/* activity */}
          <div className="mt-4 rounded-xl border border-white/5 bg-[#03040A]/40 p-4">
            <p className="mb-3 text-sm font-medium text-[#F0F2FF]">
              Recent activity
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                "New booking from Google Search → Catering inquiry",
                "Blog post published → Top 3 best HVAC services in Ottawa",
                "Local SEO → Ranking improved for 4 keywords",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[#8892A4]"
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({
  index,
  label,
  to,
  duration,
  delay,
  prefix = "",
  suffix = "",
  decimals = 0,
  delta,
  up,
}: {
  index: number;
  label: string;
  to: number;
  duration: number;
  delay: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta: string;
  up: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    const formatted =
      decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      delay,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, count, to, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
      className="rounded-xl border border-white/5 bg-gradient-to-br from-[#0D1017]/80 to-[#03040A]/60 p-4"
    >
      <p className="text-xs uppercase tracking-wider text-[#8892A4]">{label}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <motion.p className="font-[var(--font-playfair)] text-2xl text-[#F0F2FF] tabular-nums">
          {display}
        </motion.p>
        <span
          className={`text-xs font-medium ${
            up ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {delta}
        </span>
      </div>
    </motion.div>
  );
}

function Chart() {
  return (
    <svg viewBox="0 0 400 120" className="h-32 w-full" aria-hidden>
      <defs>
        <linearGradient id="sessGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="inqGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 50, 80].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      ))}
      <motion.path
        d="M0 80 L40 70 L80 75 L120 60 L160 55 L200 45 L240 50 L280 35 L320 30 L360 22 L400 15 L400 120 L0 120 Z"
        fill="url(#sessGrad)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.path
        d="M0 80 L40 70 L80 75 L120 60 L160 55 L200 45 L240 50 L280 35 L320 30 L360 22 L400 15"
        stroke="#C9A84C"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.path
        d="M0 100 L40 95 L80 92 L120 88 L160 82 L200 78 L240 70 L280 68 L320 60 L360 55 L400 48 L400 120 L0 120 Z"
        fill="url(#inqGrad)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.path
        d="M0 100 L40 95 L80 92 L120 88 L160 82 L200 78 L240 70 L280 68 L320 60 L360 55 L400 48"
        stroke="#00D4FF"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.9 }}
      />
    </svg>
  );
}
