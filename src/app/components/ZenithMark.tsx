export default function ZenithMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 160"
      fill="none"
      className={className}
      role="img"
      aria-label="Zenith AI"
    >
      {/* ---------- Constellation Z mark (160×160 at left) ---------- */}
      {/* Connecting lines */}
      <line
        x1="20"
        y1="20"
        x2="140"
        y2="20"
        stroke="#d4a85a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="140"
        y1="20"
        x2="20"
        y2="140"
        stroke="#d4a85a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="140"
        x2="140"
        y2="140"
        stroke="#d4a85a"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Corner nodes */}
      <circle cx="20" cy="20" r="6" fill="#d4a85a" />
      <circle cx="140" cy="20" r="6" fill="#d4a85a" />
      <circle cx="20" cy="140" r="6" fill="#d4a85a" />
      <circle cx="140" cy="140" r="6" fill="#d4a85a" />

      {/* 8-point compass star — cardinal + diagonal — centered in the mark */}
      <g transform="translate(80 80)">
        {/* Cardinal points (N/E/S/W) */}
        <path
          d="M 0,-26 L 3,-3 L 26,0 L 3,3 L 0,26 L -3,3 L -26,0 L -3,-3 Z"
          fill="#4ab8e0"
        />
        {/* Diagonal points (NE/SE/SW/NW), rotated 45° */}
        <g transform="rotate(45)">
          <path
            d="M 0,-18 L 2,-2 L 18,0 L 2,2 L 0,18 L -2,2 L -18,0 L -2,-2 Z"
            fill="#4ab8e0"
            opacity="0.85"
          />
        </g>
        {/* White center pinprick */}
        <circle cx="0" cy="0" r="3" fill="#ffffff" />
      </g>

      {/* ---------- Wordmark: the Z is the mark, text continues with ENITH ---------- */}
      <text x="180" y="115" fontFamily="Georgia, serif">
        <tspan
          fontSize="100"
          fontWeight="700"
          letterSpacing="8"
          fill="#F0F2FF"
        >
          ENITH
        </tspan>
        <tspan
          fontSize="82"
          fontStyle="italic"
          fill="#4ab8e0"
          dx="22"
        >
          AI
        </tspan>
      </text>
    </svg>
  );
}
