"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "../lib/gsap";

/* Seeded PRNG (mulberry32) — deterministic so React's purity check is happy */
function seededRandom(seed: number) {
  let state = seed | 0;
  return function () {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- Camera Rig: GSAP-driven scroll animation ---------- */
function CameraRig() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 4, 80);
    camera.rotation.set(-0.1, 0, 0);
    camera.lookAt(0, 4, 0);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      camera.position.set(0, 4, 18);
      camera.rotation.set(0, 0, 0);
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(camera.position, {
        z: 8,
        y: 4.5,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero-trigger",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(camera.rotation, {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero-trigger",
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [camera]);

  return null;
}

/* ---------- Glass tower ---------- */
function GlassTower() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += dt * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, 6, 0]}>
      {/* Glass body */}
      <mesh castShadow={false}>
        <boxGeometry args={[3, 12, 3]} />
        <meshPhysicalMaterial
          color="#0D1A2A"
          metalness={0.9}
          roughness={0.08}
          transmission={0.55}
          transparent
          opacity={0.75}
          ior={1.45}
        />
      </mesh>
      {/* Wireframe overlay — gold */}
      <mesh>
        <boxGeometry args={[3.02, 12.02, 3.02]} />
        <meshBasicMaterial
          color="#C9A84C"
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>
      {/* Spire on top */}
      <mesh position={[0, 7.2, 0]}>
        <coneGeometry args={[0.3, 2.4, 4]} />
        <meshBasicMaterial color="#C9A84C" transparent opacity={0.7} />
      </mesh>
      {/* Top glow point light */}
      <pointLight
        position={[0, 8, 0]}
        intensity={4}
        color="#FFE08A"
        distance={20}
      />
    </group>
  );
}

/* ---------- Surrounding low-rise buildings for depth ---------- */
function Cityscape() {
  const buildings = useMemo(() => {
    const rand = seededRandom(7);
    const items: {
      pos: [number, number, number];
      size: [number, number, number];
    }[] = [];
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2;
      const r = 10 + rand() * 8;
      const h = 2 + rand() * 5;
      items.push({
        pos: [Math.cos(angle) * r, h / 2, Math.sin(angle) * r],
        size: [1.2 + rand() * 0.6, h, 1.2 + rand() * 0.6],
      });
    }
    return items;
  }, []);

  return (
    <group>
      {buildings.map((b, i) => (
        <mesh key={i} position={b.pos}>
          <boxGeometry args={b.size} />
          <meshStandardMaterial
            color="#0A1320"
            metalness={0.6}
            roughness={0.4}
            emissive="#0A1828"
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- Ground grid ---------- */
function Ground() {
  return (
    <>
      {/* Solid ground plane for depth */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow={false}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#03060C" roughness={1} metalness={0} />
      </mesh>
      {/* Gold grid overlay */}
      <gridHelper
        args={[80, 40, "#C9A84C", "#1A2030"]}
        position={[0, 0.01, 0]}
      />
    </>
  );
}

/* ---------- Particle field — 800 floating points ---------- */
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const COUNT = 800;

  const recycleRand = useRef(seededRandom(99));

  const positions = useMemo(() => {
    const rand = seededRandom(13);
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (rand() - 0.5) * 60;
      arr[i * 3 + 1] = rand() * 40 - 5;
      arr[i * 3 + 2] = (rand() - 0.5) * 60;
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (!ref.current) return;
    const geo = ref.current.geometry as THREE.BufferGeometry;
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const rand = recycleRand.current;
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += dt * 0.4;
      if (arr[i * 3 + 1] > 35) {
        arr[i * 3 + 1] = -5;
        arr[i * 3] = (rand() - 0.5) * 60;
        arr[i * 3 + 2] = (rand() - 0.5) * 60;
      }
    }
    pos.needsUpdate = true;
    ref.current.rotation.y += dt * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#FFE08A"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ---------- Scene composition ---------- */
function Scene() {
  return (
    <>
      <CameraRig />
      {/* Ambient deep-blue fill */}
      <ambientLight intensity={0.35} color="#1A2540" />
      {/* Main gold key light from top-right */}
      <directionalLight
        position={[12, 18, 8]}
        intensity={1.4}
        color="#FFE08A"
      />
      {/* Cyan rim light */}
      <directionalLight
        position={[-8, 4, -10]}
        intensity={0.6}
        color="#00D4FF"
      />
      {/* Violet fill from below */}
      <pointLight
        position={[0, -2, 6]}
        intensity={2}
        color="#7B5EA7"
        distance={30}
      />
      <fog attach="fog" args={["#03040A", 25, 95]} />

      <Ground />
      <Cityscape />
      <GlassTower />
      <ParticleField />
    </>
  );
}

/* ---------- Public component ---------- */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 4, 80], fov: 45, near: 0.1, far: 200 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: false,
      }}
      style={{ background: "#03040A" }}
    >
      <Scene />
    </Canvas>
  );
}
