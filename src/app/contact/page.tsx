import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  BUSINESS_ADDRESS,
  CALENDLY_URL,
  CONTACT_EMAIL,
  CONTACT_FORM_ACTION,
  CONTACT_PHONES,
} from "../lib/site";

export const metadata: Metadata = {
  title: "Contact Zenith AI — Ottawa Marketing Agency",
  description:
    "Get in touch with Zenith AI. Book a free 30-minute call, send us an email, or call our Ottawa office. We respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Zenith AI",
    description:
      "Book a free 30-minute call, email us, or stop by our Osgoode office.",
    url: "/contact",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F0F2FF] placeholder:text-[#8892A4] transition-all duration-200 focus:border-[rgba(201,168,76,0.4)] focus:outline-none focus:ring-1 focus:ring-[rgba(201,168,76,0.25)]";

export default function ContactPage() {
  return (
    <article className="relative bg-[#03040A]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(201,168,76,0.08)]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A84C]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-12 text-center sm:px-8 sm:pt-40 sm:pb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Contact
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl tracking-tight text-[#F0F2FF] sm:text-6xl">
            Let&apos;s build something{" "}
            <span className="italic text-[#8892A4]">together.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[#B0B8C6]">
            Pick whichever channel works for you. We typically respond within
            one business day.
          </p>
        </div>
      </section>

      {/* Content grid: details on left, form on right */}
      <section className="relative">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:px-8 sm:py-24 md:grid-cols-2">
          {/* Contact methods */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
                Book a call
              </p>
              <h2 className="mt-3 font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
                30 minutes, free.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#B0B8C6]">
                The fastest way to figure out if we&apos;re a fit.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 text-sm font-medium text-[#070910] shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all hover:bg-[#FFE08A]"
              >
                Book on Calendly <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="border-t border-white/5 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
                Direct
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[#F0F2FF]">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#C9A84C]" aria-hidden />
                  {CONTACT_PHONES.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="transition-colors hover:text-[#C9A84C] hover:underline"
                    >
                      {p.display}
                    </a>
                  ))}
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#C9A84C]" aria-hidden />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-[#C9A84C] hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[#C9A84C]"
                    aria-hidden
                  />
                  <address className="not-italic leading-relaxed text-[#B0B8C6]">
                    <a
                      href={BUSINESS_ADDRESS.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#F0F2FF]"
                    >
                      {BUSINESS_ADDRESS.streetAddress}
                      <br />
                      {BUSINESS_ADDRESS.locality},{" "}
                      {BUSINESS_ADDRESS.region}{" "}
                      {BUSINESS_ADDRESS.postalCode}
                    </a>
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick form */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A84C]">
              Send a message
            </p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-2xl text-[#F0F2FF]">
              Tell us about your business.
            </h2>
            <form
              action={CONTACT_FORM_ACTION}
              method="POST"
              encType="text/plain"
              className="mt-5 flex flex-col gap-3"
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
              <input
                type="text"
                name="business"
                placeholder="Business name (optional)"
                className={inputClass}
              />
              <textarea
                name="message"
                rows={5}
                placeholder="What are you trying to do? (e.g. new website, more leads, social posts)"
                className={inputClass}
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[rgba(201,168,76,0.4)] bg-[#C9A84C]/5 px-7 text-sm font-medium text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#070910]"
              >
                Send message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </article>
  );
}
