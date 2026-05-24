import ParallaxBackdrop from "./components/ParallaxBackdrop";
import HeroText from "./components/HeroText";
import DashboardMockup from "./components/DashboardMockup";
import PoweredByMarquee from "./components/PoweredByMarquee";
import Services from "./components/Services";
import AIServices from "./components/AIServices";
import OurWork from "./components/OurWork";
import TrustedBy from "./components/TrustedBy";
import HowWeWork from "./components/HowWeWork";
import SuccessCards from "./components/SuccessCards";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  CONTACT_FORM_ACTION,
  CONTACT_PHONES,
} from "./lib/site";

/**
 * Section order (post-audit):
 *   Hero → TrustedBy (immediate proof) → StatBand (why us) →
 *   Services (consolidated, with AI upgrade hand-off) → AIServices
 *   (positioned as upgrade tier) → HowWeWork → OurWork (case studies) →
 *   SuccessCards (metric proof) → Testimonials (voice proof) →
 *   DashboardSection (feature beat) → PoweredByMarquee (tech stack) →
 *   CTA. SiteNav + SiteFooter live in layout.tsx now.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <StatBand />
      <Services />
      <AIServices />
      <HowWeWork />
      <OurWork />
      <SuccessCards />
      <Testimonials />
      <DashboardSection />
      <PoweredByMarquee />
      <CTA
        calendlyUrl={CALENDLY_URL}
        contactEmail={CONTACT_EMAIL}
        contactPhones={[...CONTACT_PHONES]}
        formAction={CONTACT_FORM_ACTION}
      />
    </>
  );
}

function Hero() {
  return (
    <section
      id="hero-trigger"
      className="relative h-[220vh] bg-[#03040A]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ParallaxBackdrop />
        <HeroText calendlyUrl={CALENDLY_URL} />
        {/* Fade to next section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-b from-transparent to-[#03040A]"
        />
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="relative border-t border-[rgba(201,168,76,0.06)] bg-[#03040A]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-32">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Inside the lobby
          </p>
          <h2 className="mx-auto max-w-3xl font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            Marketing you can{" "}
            <span className="italic text-[#8892A4]">actually see working.</span>
          </h2>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

const stats: { value: string; label: string }[] = [
  { value: "3×", label: "Faster delivery vs traditional agencies" },
  { value: "60%", label: "Average cost saving vs agency rates" },
  { value: "100%", label: "Satisfaction guarantee" },
];

function StatBand() {
  return (
    <section className="border-t border-[rgba(201,168,76,0.08)] bg-[#070910]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#0D1017] via-[#070910] to-[#0D1017] p-8 text-center sm:p-16">
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C9A84C]/15 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-[#00D4FF]/8 blur-3xl"
          />
          <p className="relative text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Why clients pick us
          </p>
          <h2 className="relative mx-auto mt-4 max-w-3xl font-[var(--font-playfair)] text-3xl tracking-tight text-[#F0F2FF] sm:text-5xl">
            AI + human oversight,{" "}
            <span className="italic text-[#8892A4]">
              built for small business budgets.
            </span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-[#8892A4]">
            Traditional agencies built their pricing in the era before AI. We
            didn&apos;t. That means small businesses get agency-quality work
            without agency-priced bills.
          </p>
          <div className="relative mt-12 grid grid-cols-1 sm:mt-14 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-5 ${
                  i > 0
                    ? "border-t border-white/10 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <p className="font-[var(--font-playfair)] text-5xl font-semibold tabular-nums leading-none text-[#FFE08A] [text-shadow:0_0_30px_rgba(201,168,76,0.45)]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-[#8892A4]">{s.label}</p>
              </div>
            ))}
          </div>
          {/* TODO(legal): confirm exact terms of the satisfaction guarantee
              with the business owner and surface them here (e.g. refund
              window, what triggers it). Leaving generic placeholder so the
              "100%" claim has some falsifiable substance attached. */}
          <p className="relative mt-6 text-[11px] tracking-wide text-[#8892A4]/70">
            Not happy with our work? Tell us — we&apos;ll make it right.
          </p>
        </div>
      </div>
    </section>
  );
}
