import { ImageResponse } from "next/og";

// Image metadata — Next reads these to populate <meta og:image> tags.
export const alt =
  "Zenith AI — AI-powered marketing for Ottawa small businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default Node.js runtime — Edge runtime can't read process.cwd() if you
// later need fonts from disk. Node is fine for static build-time generation.
export const runtime = "nodejs";

/**
 * Renders the site-wide Open Graph image as a real PNG.
 * Replaces the previous /og-image.svg which many platforms (Facebook,
 * LinkedIn, Slack) refuse to render. Generated once at build time.
 */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #03040A 0%, #070910 50%, #0D1017 100%)",
          color: "#F0F2FF",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top row: constellation Z mark + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 160 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="20" y1="20" x2="140" y2="20" stroke="#d4a85a" strokeWidth="3" strokeLinecap="round" />
            <line x1="140" y1="20" x2="20" y2="140" stroke="#d4a85a" strokeWidth="3" strokeLinecap="round" />
            <line x1="20" y1="140" x2="140" y2="140" stroke="#d4a85a" strokeWidth="3" strokeLinecap="round" />
            <circle cx="20" cy="20" r="8" fill="#d4a85a" />
            <circle cx="140" cy="20" r="8" fill="#d4a85a" />
            <circle cx="20" cy="140" r="8" fill="#d4a85a" />
            <circle cx="140" cy="140" r="8" fill="#d4a85a" />
            <g transform="translate(80 80)">
              <path
                d="M 0,-30 L 4,-4 L 30,0 L 4,4 L 0,30 L -4,4 L -30,0 L -4,-4 Z"
                fill="#4ab8e0"
              />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />
            </g>
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#F0F2FF",
            }}
          >
            ZENITH
            <span style={{ marginLeft: "12px", fontStyle: "italic", color: "#4ab8e0" }}>
              AI
            </span>
          </div>
        </div>

        {/* Headline lockup */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Ottawa · Canada · AI-Powered
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 88,
              lineHeight: 1.05,
              color: "#F0F2FF",
              fontWeight: 500,
            }}
          >
            <span>Your Marketing</span>
            <span style={{ color: "#FFE08A" }}>Elevated.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontStyle: "italic",
              color: "#8892A4",
              marginTop: "16px",
            }}
          >
            Built by AI. Run by people.
          </div>
        </div>

        {/* Bottom row: tagline + url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontSize: 22,
            color: "#8892A4",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span style={{ display: "flex", color: "#C9A84C" }}>
            Websites · SEO · Social · AI
          </span>
          <span style={{ display: "flex" }}>zenithai.ca</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
