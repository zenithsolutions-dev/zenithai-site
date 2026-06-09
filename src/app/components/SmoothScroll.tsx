"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

/**
 * Lenis smooth scroll is treated as a progressive enhancement, not a baseline.
 * We render plain native scroll first (so mobile gets a fast first paint with a
 * free main thread), then mount Lenis only when ALL of these hold:
 *   - the viewport is desktop-width (>= 1024px),
 *   - the user has not requested reduced motion,
 *   - the connection is not in Save-Data mode.
 * Mounting is also deferred to an idle callback so the smooth-scroll RAF loop
 * never competes with the LCP paint. Desktop behaviour is unchanged (it just
 * starts a beat after first paint); mobile keeps native scroll.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null);
  const [smoothEnabled, setSmoothEnabled] = useState(false);

  // Decide (after hydration) whether to enable Lenis, then defer the mount.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const saveData = connection?.saveData === true;

    if (prefersReducedMotion || !isDesktop || saveData) return; // native scroll

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const enable = () => setSmoothEnabled(true);
    const id = w.requestIdleCallback
      ? w.requestIdleCallback(enable)
      : window.setTimeout(enable, 1);

    return () => {
      if (w.cancelIdleCallback) w.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, []);

  // Wire Lenis -> GSAP ScrollTrigger only once Lenis is actually mounted.
  // (When smooth scroll is disabled, ScrollTrigger falls back to native scroll
  // listeners on its own, so scroll-driven animations still run on mobile.)
  useEffect(() => {
    if (!smoothEnabled) return;
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, [smoothEnabled]);

  if (!smoothEnabled) return <>{children}</>;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
