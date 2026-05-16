"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ZenithMark from "./ZenithMark";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How we work" },
  { href: "#examples", label: "Examples" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNav({ calendlyUrl }: { calendlyUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight"
        >
          <ZenithMark className="h-6 w-6" />
          Zenith
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            AI
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 md:inline-flex"
          >
            Book a call <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 flex flex-col gap-4 border-b border-white/5 bg-zinc-950/98 px-6 py-4 backdrop-blur-md md:hidden"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-sm text-zinc-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-flex w-full items-center justify-center gap-1 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
            >
              Book a call <ArrowUpRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
