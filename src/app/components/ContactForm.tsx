"use client";

import { type FormEvent } from "react";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F0F2FF] placeholder:text-[#8892A4] transition-all duration-200 focus:border-[rgba(201,168,76,0.4)] focus:outline-none focus:ring-1 focus:ring-[rgba(201,168,76,0.25)]";

/**
 * Contact form that composes a mailto: link from the field values on submit.
 * We deliberately do NOT use action="mailto:" — a form whose action is a
 * mailto endpoint is reported as an insecure form (Mixed Content) on HTTPS.
 * Building the link in JS keeps the page secure while preserving the
 * "opens your email client, pre-filled" behaviour.
 */
export default function ContactForm({ contactEmail }: { contactEmail: string }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `New enquiry from ${name || "the Zenith AI website"}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Business: ${business}\n\n` +
      `${message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
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
  );
}
