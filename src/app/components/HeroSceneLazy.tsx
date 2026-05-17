"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#03040A]" />,
});

export default function HeroSceneLazy() {
  return <HeroScene />;
}
