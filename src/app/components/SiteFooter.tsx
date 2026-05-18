import { ArrowUpRight } from "lucide-react";
import ZenithMark from "./ZenithMark";

type ContactPhone = { display: string; tel: string };

type FooterProps = {
  calendlyUrl: string;
  contactEmail: string;
  contactPhones: ContactPhone[];
};

function MapleLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 2 L13.2 7 L18 5.5 L16 10 L21 11 L17 14 L21 17 L16 18 L18 22.5 L13.2 21 L12 22 L10.8 21 L6 22.5 L8 18 L3 17 L7 14 L3 11 L8 10 L6 5.5 L10.8 7 Z" />
    </svg>
  );
}

export default function SiteFooter({
  calendlyUrl,
  contactEmail,
  contactPhones,
}: FooterProps) {
  return (
    <footer className="relative border-t border-[rgba(201,168,76,0.08)] bg-[#03040A]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
          <div className="md:col-span-1">
            <a
              href="#top"
              className="inline-flex items-center"
              aria-label="Zenith AI — home"
            >
              <ZenithMark className="h-12 w-auto" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-[#B0B8C6]">
              AI-powered marketing for Ottawa small businesses. Built faster,
              priced for what local businesses can actually afford.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
              Services
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#B0B8C6]">
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-[#F0F2FF]"
                >
                  Websites
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-[#F0F2FF]"
                >
                  Local SEO
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-[#F0F2FF]"
                >
                  Social media
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
              Company
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#B0B8C6]">
              <li>
                <a
                  href="#how"
                  className="transition-colors hover:text-[#F0F2FF]"
                >
                  How we work
                </a>
              </li>
              <li>
                <a
                  href="#examples"
                  className="transition-colors hover:text-[#F0F2FF]"
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-[#F0F2FF]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#B0B8C6]">
              {contactPhones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="transition-colors hover:text-[#F0F2FF]"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="transition-colors hover:text-[#F0F2FF]"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C9A84C]"
                >
                  Book a call <ArrowUpRight size={13} />
                </a>
              </li>
              <li className="pt-1 text-[#8892A4]">Ottawa, Canada</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold gradient separator */}
      <div
        aria-hidden
        className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-[#8892A4] sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Zenith AI. All rights reserved.</p>
        <span className="flex items-center gap-1.5">
          Made with
          <MapleLeaf className="h-3 w-3 text-[#C9A84C]" />
          in Ottawa
        </span>
      </div>
    </footer>
  );
}
