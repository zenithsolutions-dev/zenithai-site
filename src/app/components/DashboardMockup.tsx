"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Activity, CheckCircle2 } from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="relative">
      {/* glow under */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-8 h-32 rounded-full bg-blue-500/30 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-2xl shadow-black/50">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="ml-3 text-xs text-zinc-500">
            zenithai.ca / dashboard
          </span>
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </motion.span>
        </div>

        {/* dashboard body */}
        <div className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Marketing performance
              </p>
              <h3 className="text-lg font-semibold text-zinc-100">
                Last 30 days
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Activity size={14} className="text-blue-400" />
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
          <div className="mt-4 rounded-xl border border-white/5 bg-zinc-900/40 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-200">
                Site traffic & inquiries
              </p>
              <div className="flex items-center gap-3 text-[11px] text-zinc-500">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Sessions
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                  Inquiries
                </span>
              </div>
            </div>
            <Chart />
          </div>

          {/* activity */}
          <div className="mt-4 rounded-xl border border-white/5 bg-zinc-900/40 p-4">
            <p className="mb-3 text-sm font-medium text-zinc-200">
              Recent activity
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                "New booking from Google Search → Catering inquiry",
                "Blog post published → Top 3 best HVAC services in Ottawa",
                "Local SEO → Ranking improved for 4 keywords",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-zinc-400">
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
    const formatted = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
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
      className="rounded-xl border border-white/5 bg-zinc-900/40 p-4"
    >
      <p className="text-xs text-zinc-500">{label}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <motion.p className="text-2xl font-semibold text-zinc-100 tabular-nums">
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
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="inqGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
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
        stroke="#60a5fa"
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
        stroke="#a78bfa"
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
