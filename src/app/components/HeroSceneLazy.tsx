"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <MobileFallback />,
});

const DESKTOP_QUERY = "(min-width: 768px)";

function MobileFallback() {
  return (
    <div
      className="h-full w-full"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 30%, rgba(201,168,76,0.22) 0%, transparent 55%),
          radial-gradient(ellipse 60% 60% at 25% 80%, rgba(123,94,167,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 75% 25%, rgba(0,212,255,0.10) 0%, transparent 55%),
          linear-gradient(180deg, #03040A 0%, #070910 55%, #03040A 100%)
        `,
      }}
    />
  );
}

function subscribeDesktop(callback: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

// Default to mobile during SSR — avoids loading the Three.js bundle prematurely
function getDesktopServerSnapshot() {
  return false;
}

export default function HeroSceneLazy() {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  );

  if (!isDesktop) {
    return <MobileFallback />;
  }

  return <HeroScene />;
}
