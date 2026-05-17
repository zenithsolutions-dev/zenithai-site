import HeroSceneLazy from "./components/HeroSceneLazy";
import HeroText from "./components/HeroText";
import DashboardMockup from "./components/DashboardMockup";
import PoweredByMarquee from "./components/PoweredByMarquee";
import SiteNav from "./components/SiteNav";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import SuccessCards from "./components/SuccessCards";
import CTA from "./components/CTA";
import SiteFooter from "./components/SiteFooter";

const CALENDLY_URL = "https://calendly.com/znthsolutions/30min";
const CONTACT_EMAIL = "znthsolutions@gmail.com";
const CONTACT_PHONE_DISPLAY = "(613) 416-5158";
const CONTACT_PHONE_TEL = "+16134165158";
const CONTACT_FORM_ACTION = "mailto:hello@zenithai.ca";

export default function Home() {
  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#03040A] text-[#F0F2FF]"
    >
      <SiteNav calendlyUrl={CALENDLY_URL} />
      <main className="flex-1">
        <Hero />
        <DashboardSection />
        <PoweredByMarquee />
        <Services />
        <StatBand />
        <HowWeWork />
        <SuccessCards />
        <CTA
          calendlyUrl={CALENDLY_URL}
          contactEmail={CONTACT_EMAIL}
          contactPhoneDisplay={CONTACT_PHONE_DISPLAY}
          contactPhoneTel={CONTACT_PHONE_TEL}
          formAction={CONTACT_FORM_ACTION}
        />
      </main>
      <SiteFooter
        calendlyUrl={CALENDLY_URL}
        contactEmail={CONTACT_EMAIL}
        contactPhoneDisplay={CONTACT_PHONE_DISPLAY}
        contactPhoneTel={CONTACT_PHONE_TEL}
      />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero-trigger"
      className="relative h-[220vh] bg-[#03040A]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroSceneLazy />
        </div>
        {/* Subtle vignette overlay to deepen edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,4,10,0.75)_100%)]"
        />
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
      <div className="mx-auto max-w-6xl px-6 py-32 sm:px-8">
        <div className="mb-16 text-center">
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
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#0D1017] via-[#070910] to-[#0D1017] p-10 text-center sm:p-16">
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
          <div className="relative mt-14 grid grid-cols-1 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-5 ${
                  i > 0
                    ? "border-t border-white/10 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <p className="font-[var(--font-playfair)] text-5xl tabular-nums leading-none text-transparent [background:linear-gradient(135deg,#FFE08A_0%,#C9A84C_55%,#8A6F2A_100%)] [-webkit-background-clip:text] [background-clip:text]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-[#8892A4]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
