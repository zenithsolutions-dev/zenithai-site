"use client";

import { Fragment } from "react";
import Image from "next/image";

type LogoItem = {
  kind: "logo";
  name: string;
  src: string;
  /** SVG files need unoptimized so next/image doesn't try to rasterize. */
  unoptimized?: boolean;
};
type SvgItem = { kind: "svg"; name: "Chromora" };
type TextItem = { kind: "text"; name: string };
type Partner = LogoItem | SvgItem | TextItem;

const partners: Partner[] = [
  { kind: "logo", name: "The UPS Store", src: "/logos/ups-store.svg", unoptimized: true },
  { kind: "logo", name: "Tim Hortons", src: "/logos/tim-hortons.jpg" },
  { kind: "logo", name: "Mathnasium", src: "/logos/mathnasium.png" },
  { kind: "logo", name: "Second Cup", src: "/logos/second-cup.png" },
  { kind: "logo", name: "Milano Pizza", src: "/logos/milano-pizza.png" },
  { kind: "logo", name: "Capri Pizza", src: "/logos/capri.webp" },
  { kind: "logo", name: "The Nay Lounge", src: "/logos/nay-lounge.png" },
  { kind: "svg", name: "Chromora" },
  { kind: "logo", name: "Magic Carpet Movers", src: "/logos/magic-movers.webp" },
  { kind: "text", name: "Al's Drive-In" },
  { kind: "text", name: "Sugar Fix" },
  { kind: "text", name: "Routine Poutine" },
  { kind: "logo", name: "Papa Joe's Pizza", src: "/logos/papa-joes.png" },
];

function Separator() {
  return (
    <li aria-hidden className="text-base text-[#C9A84C]/70 select-none">
      ·
    </li>
  );
}

function ChromoraSvg() {
  // Brand-faithful Chromora wordmark with a gold dot below.
  // viewBox extended vertically to 50 to make room for the · at y=44.
  return (
    <svg
      width="120"
      height="50"
      viewBox="0 0 120 50"
      role="img"
      aria-label="Chromora"
    >
      <text
        x="60"
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Garamond, Georgia, serif"
        fontSize="26"
        fontWeight="300"
        letterSpacing="0.015em"
        fill="#8B7355"
      >
        Chromora
      </text>
      <text
        x="60"
        y="46"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="16"
        fill="#C9A84C"
      >
        ·
      </text>
    </svg>
  );
}

function PartnerItem({ item }: { item: Partner }) {
  if (item.kind === "text") {
    return (
      <li className="flex shrink-0 items-center">
        <span className="text-sm font-medium tracking-wide text-zinc-300 transition-colors duration-300 hover:text-white">
          {item.name}
        </span>
      </li>
    );
  }

  // Logo or SVG — both wrap in the same subtle pill.
  return (
    <li
      title={item.name}
      className="group/logo flex min-w-[140px] shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 shadow-sm opacity-[0.85] transition-opacity duration-300 hover:opacity-100"
    >
      {item.kind === "svg" ? (
        <ChromoraSvg />
      ) : (
        <div className="relative h-12 w-36">
          <Image
            src={item.src}
            alt={item.name}
            fill
            sizes="144px"
            unoptimized={item.unoptimized}
            className="object-contain"
          />
        </div>
      )}
    </li>
  );
}

function PartnerList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-x-8 pr-8"
    >
      {partners.map((p, i) => (
        <Fragment key={`${p.name}-${i}`}>
          <PartnerItem item={p} />
          {/* Trailing separator after every item — the last one bridges
              cleanly into the next list copy for the infinite loop. */}
          <Separator />
        </Fragment>
      ))}
    </ul>
  );
}

export default function TrustedBy() {
  return (
    <section className="relative border-y border-[rgba(201,168,76,0.06)] bg-[#070910]">
      {/* Edge fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#070910] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#070910] to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
          Trusted by Ottawa businesses
        </p>
        <div className="group mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <PartnerList />
            <PartnerList ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
