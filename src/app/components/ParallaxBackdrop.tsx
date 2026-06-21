"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "../lib/gsap";

/* Pre-computed deterministic particle field — 22 points spread across the viewport */
const PARTICLES = Array.from({ length: 22 }, (_, i) => {
  // Cheap deterministic spread — varies each property by a different prime mod
  const left = ((i * 53) % 100 + 0.5).toFixed(2);
  const delay = ((i * 0.83) % 14).toFixed(2);
  const duration = (10 + ((i * 1.7) % 10)).toFixed(2);
  const opacity = (0.35 + ((i * 0.041) % 0.45)).toFixed(2);
  const size = i % 3 === 0 ? 3 : 2;
  return { left, delay, duration, opacity, size };
});

export default function ParallaxBackdrop() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!imageRef.current || reduceMotion) return;

      // #hero-trigger is an ANCESTOR of this component's GSAP scope, so passing
      // it as a selector string makes useGSAP resolve it *within* the scope and
      // find nothing ("target not found"). Resolve the element directly and
      // bail out cleanly if it isn't in the DOM.
      const heroTrigger = document.getElementById("hero-trigger");
      if (!heroTrigger) return;

      // Parallax: image drifts up slower than scroll (ratio ~0.4)
      // and zooms out from 1.1 → 1.0 as user descends.
      gsap.fromTo(
        imageRef.current,
        { yPercent: 0, scale: 1.1 },
        {
          yPercent: -18, // ~150px on a 800px-tall image, hits the "feel" ratio
          scale: 1.0,
          ease: "none",
          scrollTrigger: {
            trigger: heroTrigger,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    },
    { scope: wrapperRef, dependencies: [reduceMotion] }
  );

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Parallax image layer — slightly larger than viewport so edges never expose */}
      <div ref={imageRef} className="absolute inset-0 origin-center will-change-transform">
        <Image
          src="/cityscape.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center [filter:brightness(0.7)_contrast(1.15)_saturate(0.95)]"
        />
      </div>

      {/* Bottom 60% fade to deep background — anchors the hero into the page */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-transparent via-[#03040A]/70 to-[#03040A]" />

      {/* Top fade so the nav has contrast */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#03040A]/80 to-transparent" />

      {/* Edge vignettes left + right */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#03040A]/70 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#03040A]/70 to-transparent" />

      {/* Radial center vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,4,10,0.5)_85%)]" />

      {/* Gold grid overlay — architectural blueprint feel */}
      <div
        className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(201, 168, 76, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201, 168, 76, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating particles — pure CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={
              {
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                "--p-delay": `${p.delay}s`,
                "--p-duration": `${p.duration}s`,
                "--p-opacity": p.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
