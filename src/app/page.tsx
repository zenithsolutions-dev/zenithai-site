import {
  ArrowUpRight,
  Globe,
  TrendingUp,
  Megaphone,
  Search,
  Wrench,
  Rocket,
  Sparkles,
  Activity,
  CheckCircle2,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/znthsolutions/30min";
const CONTACT_EMAIL = "znthsolutions@gmail.com";
const CONTACT_PHONE_DISPLAY = "(613) 416-5158";
const CONTACT_PHONE_TEL = "+16134165158";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-zinc-950 text-zinc-100">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <PoweredBy />
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

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
          <ZenithMark className="h-6 w-6" />
          Zenith
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            AI
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#how" className="hover:text-white">How we work</a>
          <a href="#examples" className="hover:text-white">Examples</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
        >
          Book a call <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}

function ZenithMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <defs>
        <linearGradient id="zMark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" stroke="url(#zMark)" strokeWidth="2" />
      <path
        d="M9 10 H 23 L 9 22 H 23"
        stroke="url(#zMark)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* cityscape background — vivid, fades into the page lower down */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-20 h-[900px] bg-cover bg-center bg-no-repeat opacity-90 [filter:brightness(0.85)_contrast(1.15)_saturate(1.1)]"
        style={{ backgroundImage: "url('/cityscape.jpg')" }}
      />
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

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-center sm:pt-36">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
          <Sparkles size={12} className="text-blue-400" />
          AI + human oversight — built for small business budgets
        </p>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Your marketing.{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Elevated.
          </span>
          <br />
          <span className="text-zinc-300">Built by AI. Run by people.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Websites, SEO, and social media for Ottawa small businesses — built
          faster, priced for what local businesses can actually afford.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-1 rounded-full bg-white px-7 text-sm font-medium text-zinc-900 shadow-lg shadow-blue-500/10 hover:bg-zinc-200"
          >
            Get my free consultation <ArrowUpRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white hover:bg-white/10"
          >
            See what we do
          </a>
        </div>
      </div>

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

function DashboardMockup() {
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
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
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
            <KpiCard label="Conversions" value="247" delta="+24%" up />
            <KpiCard label="Bookings" value="47" delta="+12" up />
            <KpiCard label="Revenue" value="$12.4K" delta="+18%" up />
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
  label,
  value,
  delta,
  up,
}: {
  label: string;
  value: string;
  delta: string;
  up: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-zinc-900/40 p-4">
      <p className="text-xs text-zinc-500">{label}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-zinc-100">{value}</p>
        <span
          className={`text-xs font-medium ${
            up ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}

function Chart() {
  // simple SVG line chart — sessions (blue) and inquiries (violet)
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
      {/* grid lines */}
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
      {/* sessions area */}
      <path
        d="M0 80 L40 70 L80 75 L120 60 L160 55 L200 45 L240 50 L280 35 L320 30 L360 22 L400 15 L400 120 L0 120 Z"
        fill="url(#sessGrad)"
      />
      <path
        d="M0 80 L40 70 L80 75 L120 60 L160 55 L200 45 L240 50 L280 35 L320 30 L360 22 L400 15"
        stroke="#60a5fa"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* inquiries area */}
      <path
        d="M0 100 L40 95 L80 92 L120 88 L160 82 L200 78 L240 70 L280 68 L320 60 L360 55 L400 48 L400 120 L0 120 Z"
        fill="url(#inqGrad)"
      />
      <path
        d="M0 100 L40 95 L80 92 L120 88 L160 82 L200 78 L240 70 L280 68 L320 60 L360 55 L400 48"
        stroke="#a78bfa"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const partners = [
  {
    name: "Anthropic",
    path: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z",
  },
  {
    name: "Google",
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
  },
  {
    name: "Meta",
    path: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z",
  },
  {
    name: "Vercel",
    path: "m12 1.608 12 20.784H0Z",
  },
  {
    name: "Cloudflare",
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
  },
];

function PoweredBy() {
  return (
    <section className="border-t border-white/5 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-500">
          Powered by the same tools the world&apos;s biggest companies use
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 text-zinc-500 transition hover:text-zinc-200"
              title={p.name}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden
              >
                <path d={p.path} />
              </svg>
              <span className="text-sm font-medium">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      <div className="relative mx-auto max-w-6xl px-6 py-24">
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
          {services.map((s) => (
            <div
              key={s.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 transition hover:border-white/20"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBand() {
  return (
    <section className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20">
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
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-blue-400">How we work</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            From first call to launch — in days, not months.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const examples = [
  {
    industry: "Coffee shop · Westboro",
    headline:
      "Local SEO + Google Business Profile cleanup → 30% lift in catering inquiries within 60 days.",
  },
  {
    industry: "Family law firm · Centretown",
    headline:
      "New website + monthly blog content → first-page Google ranking for 4 local search terms.",
  },
  {
    industry: "Boutique fitness studio · Kanata",
    headline:
      "Instagram management + targeted Meta ads → 2x increase in trial-class signups month over month.",
  },
];

function SuccessExamples() {
  return (
    <section id="examples" className="border-t border-white/5 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-blue-400">
            What success looks like
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            The kinds of outcomes we build toward.
          </h2>
          <p className="mt-4 text-sm text-zinc-500">
            Illustrative scenarios based on common small-business marketing
            goals — not claims about specific past clients.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {examples.map((ex) => (
            <div
              key={ex.industry}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {ex.industry}
              </p>
              <p className="mt-4 text-lg leading-snug text-zinc-100">
                {ex.headline}
              </p>
            </div>
          ))}
        </div>
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
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
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
            <li>Ottawa, Canada</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Zenith AI. All rights reserved.</p>
          <p>Made in Ottawa</p>
        </div>
      </div>
    </footer>
  );
}
