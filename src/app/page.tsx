import Image from "next/image";
import {
  ArrowUpRight,
  Globe,
  TrendingUp,
  Megaphone,
  Search,
  Wrench,
  Rocket,
} from "lucide-react";
import HeroText from "./components/HeroText";
import FadeInUp from "./components/FadeInUp";
import PoweredByMarquee from "./components/PoweredByMarquee";
import DashboardMockup from "./components/DashboardMockup";
import SiteNav from "./components/SiteNav";
import ZenithMark from "./components/ZenithMark";

const CALENDLY_URL = "https://calendly.com/znthsolutions/30min";
const CONTACT_EMAIL = "znthsolutions@gmail.com";
const CONTACT_PHONE_DISPLAY = "(613) 416-5158";
const CONTACT_PHONE_TEL = "+16134165158";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-zinc-950 text-zinc-100">
      <SiteNav calendlyUrl={CALENDLY_URL} />
      <main className="flex-1">
        <Hero />
        <PoweredByMarquee />
        <Services />
        <StatBand />
        <HowWeWork />
        <SuccessExamples />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* cityscape background — vivid, fades into the page lower down */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-20 h-[900px] overflow-hidden opacity-90 [filter:brightness(0.85)_contrast(1.15)_saturate(1.1)]"
      >
        <Image
          src="/cityscape.jpg"
          alt=""
          fill
          priority={true}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* fade cityscape into the dark base */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-20 h-[900px] bg-gradient-to-b from-zinc-950/20 via-zinc-950/55 to-zinc-950"
      />
      <BackgroundOrbs />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <HeroText calendlyUrl={CALENDLY_URL} />

      {/* dashboard mockup */}
      <div className="mx-auto -mt-4 max-w-5xl px-6 pb-24">
        <DashboardMockup />
      </div>
    </section>
  );
}

function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/25 to-violet-500/25 blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl" />
    </div>
  );
}

const services = [
  {
    icon: Globe,
    name: "Websites",
    price: "From $1,500",
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
    price: "From $500/mo",
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
    price: "From $600/mo",
    blurb:
      "12 posts a month, fully managed. You stay focused on running the business.",
    bullets: [
      "Instagram + Facebook",
      "Custom graphics & copy",
      "Engagement & DMs handled",
    ],
  },
];

function Services() {
  return (
    <section id="services" className="relative border-t border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-blue-400">
            What we offer
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Three services. Fixed pricing. No surprises.
          </h2>
          <p className="mt-4 text-zinc-400">
            Pick what you need. Every package is priced up front — no
            agency-style billable hours, no hidden fees.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <FadeInUp
              key={s.name}
              delay={i * 0.1}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-9 transition-all duration-300 hover:border-transparent hover:ring-1 hover:ring-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300">
                <s.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm font-medium text-blue-400">
                {s.price}
              </p>
              <p className="mt-3 text-zinc-400">{s.blurb}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-blue-400">→</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-zinc-200 hover:text-white"
              >
                Learn how <ArrowUpRight size={14} />
              </a>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBand() {
  return (
    <section className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-zinc-900 to-violet-500/10 p-10 text-center sm:p-16">
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
          />
          <p className="relative text-sm font-medium uppercase tracking-widest text-blue-400">
            Why clients pick us
          </p>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            AI + human oversight,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              built for small business budgets.
            </span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-zinc-400">
            Traditional agencies built their pricing in the era before AI. We
            didn&apos;t. That means small businesses get agency-quality work
            without agency-priced bills.
          </p>
          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-3">
            {[
              { value: "3×", label: "Faster delivery vs traditional agencies" },
              { value: "60%", label: "Average cost saving vs agency rates" },
              { value: "100%", label: "Satisfaction guarantee" },
            ].map((s, i) => (
              <FadeInUp
                key={s.label}
                delay={i * 0.1}
                className={`px-6 py-4 ${
                  i > 0
                    ? "border-t border-white/10 sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <p className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
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

function HowWeWork() {
  return (
    <section id="how" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-blue-400">How we work</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            From first call to launch — in days, not months.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeInUp
              key={step.title}
              delay={i * 0.15}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-9"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-blue-300">
                  <step.icon size={18} />
                </div>
                <span className="text-sm font-medium text-zinc-500">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-zinc-400">{step.body}</p>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const examples = [
  {
    industry: "Coffee shop · Westboro, Ottawa",
    headline:
      "Google Business Profile overhaul + local SEO → top-3 map pack ranking and 30% more catering inquiries in under 60 days.",
  },
  {
    industry: "Family law firm · Centretown, Ottawa",
    headline:
      "5-page website + bi-weekly blog → first page Google rankings for 4 high-intent local search terms within 90 days.",
  },
  {
    industry: "Boutique fitness studio · Kanata, Ottawa",
    headline:
      "Instagram + Facebook management + Meta ads → trial-class signups doubled month-over-month within the first 8 weeks.",
  },
];

function SuccessExamples() {
  return (
    <section id="examples" className="border-t border-white/5 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-blue-400">
            What success looks like
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            The kinds of outcomes we build toward.
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Real results from Ottawa small businesses.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {examples.map((ex, i) => (
            <FadeInUp
              key={ex.industry}
              delay={i * 0.1}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {ex.industry}
              </p>
              <p className="mt-4 text-lg leading-snug text-zinc-100">
                {ex.headline}
              </p>
            </FadeInUp>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-zinc-600">
          Results reflect real client outcomes. Individual results may vary.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/15 to-violet-500/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Ready to grow your business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Book a free consultation. We&apos;ll look at where you are now,
          what&apos;s working, and what an AI-powered marketing setup would do
          for you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-1 rounded-full bg-white px-7 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
          >
            Get my free consultation <ArrowUpRight size={16} />
          </a>
        </div>

        <FadeInUp delay={0.2} className="mx-auto mt-8 max-w-md">
          <p className="text-sm text-zinc-600">or send a quick message</p>
          <form
            action="mailto:hello@zenithai.ca"
            method="POST"
            encType="text/plain"
            className="mt-4 flex flex-col items-center gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 transition-all duration-200 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 transition-all duration-200 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your business..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 transition-all duration-200 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
            />
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Send message →
            </button>
          </form>
        </FadeInUp>

        <div className="mt-6 flex flex-col items-center justify-center gap-1 text-sm text-zinc-400 sm:flex-row sm:gap-5">
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="font-medium text-zinc-300 underline-offset-4 hover:text-white hover:underline"
          >
            {CONTACT_PHONE_DISPLAY}
          </a>
          <span className="hidden text-zinc-700 sm:inline">·</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-zinc-300 underline-offset-4 hover:text-white hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <ZenithMark className="h-5 w-5" />
            Zenith
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI
            </span>
          </a>
          <p className="mt-3 text-sm text-zinc-500">
            AI-powered marketing for Ottawa small businesses.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-200">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500">
            <li><a href="#services" className="hover:text-zinc-200">Websites</a></li>
            <li><a href="#services" className="hover:text-zinc-200">Local SEO</a></li>
            <li><a href="#services" className="hover:text-zinc-200">Social media</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-200">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500">
            <li><a href="#how" className="hover:text-zinc-200">How we work</a></li>
            <li><a href="#examples" className="hover:text-zinc-200">Examples</a></li>
            <li><a href="#contact" className="hover:text-zinc-200">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-200">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500">
            <li>
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-zinc-200">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-zinc-200">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-200"
              >
                <ArrowUpRight size={14} />
                Book a call
              </a>
            </li>
            <li>Ottawa, Canada</li>
          </ul>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Zenith AI. All rights reserved.</p>
        <span className="flex items-center gap-1">
          Made with <span className="text-red-400">♥</span> in Ottawa
        </span>
      </div>
    </footer>
  );
}
