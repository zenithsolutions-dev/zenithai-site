import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Origin isolation — satisfies Lighthouse "Best Practices" COOP audit.
  // `same-origin` is safe here: the only external link (Calendly) opens with
  // target="_blank" rel="noopener", so nothing relies on window.opener.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  // Tree-shake barrel imports so we only ship the icons/animation primitives
  // actually used, instead of the whole package. Cuts unused client JS.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    // Bypass Vercel's on-demand image optimization: the free-tier quota was
    // exhausted, so /_next/image started returning 402. With unoptimized,
    // <Image> serves files straight from /public (no /_next/image hop), at the
    // cost of no automatic AVIF/WebP transcoding or resizing.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/cityscape.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
