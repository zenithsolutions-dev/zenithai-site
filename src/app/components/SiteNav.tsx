"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ZenithMark from "./ZenithMark";

// Absolute paths so the anchor links work whether the visitor is on the
// home page or one of the dedicated /about, /pricing, /contact pages.
const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#examples", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav({ calendlyUrl }: { calendlyUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(201,168,76,0.15)] bg-[rgba(7,9,16,0.85)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/#top"
          className="group flex items-center"
          aria-label="Zenith AI — home"
        >
          <ZenithMark className="h-11 w-auto transition-opacity duration-500 group-hover:opacity-90" />
        </Link>

        <nav className="hidden items-center gap-10 text-sm tracking-wide text-[#8892A4] md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative transition-colors duration-300 hover:text-[#F0F2FF]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta hidden items-center gap-1.5 rounded-full border border-[#C9A84C] px-5 py-2 text-sm font-medium text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#070910] hover:shadow-[0_0_20px_rgba(201,168,76,0.35)] md:inline-flex"
          >
            Book a call
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </a>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="rounded-md p-2 text-[#8892A4] transition-colors hover:text-[#C9A84C] md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col gap-8 overflow-y-auto bg-[#03040A]/95 px-8 pt-12 pb-16 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-7">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="font-[var(--font-playfair)] text-3xl text-[#F0F2FF] transition-colors hover:text-[#C9A84C]"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + navLinks.length * 0.07,
                duration: 0.4,
              }}
              className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#C9A84C] bg-[#C9A84C] px-5 py-3.5 text-sm font-medium text-[#070910] transition-colors hover:bg-[#FFE08A]"
            >
              Book a call <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
