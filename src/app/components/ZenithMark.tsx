export default function ZenithMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="zenith-mark-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE08A" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#8A6F2A" />
        </linearGradient>
      </defs>

      {/* Soft glow halo */}
      <g opacity="0.18">
        <line
          x1="4"
          y1="8"
          x2="36"
          y2="8"
          stroke="#C9A84C"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="36"
          y1="8"
          x2="4"
          y2="32"
          stroke="#C9A84C"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="32"
          x2="36"
          y2="32"
          stroke="#C9A84C"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      {/* Sharp blueprint "Z" */}
      <line
        x1="4"
        y1="8"
        x2="36"
        y2="8"
        stroke="url(#zenith-mark-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="8"
        x2="4"
        y2="32"
        stroke="url(#zenith-mark-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="32"
        x2="36"
        y2="32"
        stroke="url(#zenith-mark-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Corner dots — architectural blueprint nodes */}
      <circle cx="4" cy="8" r="1.5" fill="#FFE08A" />
      <circle cx="36" cy="8" r="1.5" fill="#FFE08A" />
      <circle cx="4" cy="32" r="1.5" fill="#FFE08A" />
      <circle cx="36" cy="32" r="1.5" fill="#FFE08A" />
    </svg>
  );
}
