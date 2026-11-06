type PandaProps = {
  className?: string;
  variant?: "wave" | "crayon" | "book" | "peek";
};

export function Panda({ className = "", variant = "wave" }: PandaProps) {
  if (variant === "crayon") {
    return (
      <svg viewBox="0 0 200 200" className={className} fill="none">
        <ellipse cx="100" cy="150" rx="55" ry="38" fill="#fff" stroke="#3a2e2a" strokeWidth="4" />
        <circle cx="100" cy="95" r="52" fill="#fff" stroke="#3a2e2a" strokeWidth="4" />
        <circle cx="58" cy="52" r="20" fill="#3a2e2a" />
        <circle cx="142" cy="52" r="20" fill="#3a2e2a" />
        <ellipse cx="78" cy="92" rx="16" ry="19" fill="#3a2e2a" />
        <ellipse cx="122" cy="92" rx="16" ry="19" fill="#3a2e2a" />
        <circle cx="80" cy="90" r="5" fill="#fff" />
        <circle cx="124" cy="90" r="5" fill="#fff" />
        <ellipse cx="100" cy="112" rx="13" ry="10" fill="#3a2e2a" />
        <path d="M90 120 Q100 128 110 120" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="60" cy="108" r="9" fill="#ffb6c8" opacity="0.7" />
        <circle cx="140" cy="108" r="9" fill="#ffb6c8" opacity="0.7" />
        <rect x="118" y="130" width="14" height="48" rx="4" fill="#ff8a65" stroke="#3a2e2a" strokeWidth="3" transform="rotate(18 118 130)" />
        <path d="M128 118 l10 10 -16 6z" fill="#3a2e2a" transform="rotate(18 118 130)" />
      </svg>
    );
  }

  if (variant === "book") {
    return (
      <svg viewBox="0 0 220 200" className={className} fill="none">
        <ellipse cx="110" cy="155" rx="60" ry="35" fill="#fff" stroke="#3a2e2a" strokeWidth="4" />
        <circle cx="110" cy="95" r="52" fill="#fff" stroke="#3a2e2a" strokeWidth="4" />
        <circle cx="68" cy="52" r="19" fill="#3a2e2a" />
        <circle cx="152" cy="52" r="19" fill="#3a2e2a" />
        <ellipse cx="88" cy="92" rx="15" ry="18" fill="#3a2e2a" />
        <ellipse cx="132" cy="92" rx="15" ry="18" fill="#3a2e2a" />
        <circle cx="90" cy="90" r="4.5" fill="#fff" />
        <circle cx="134" cy="90" r="4.5" fill="#fff" />
        <ellipse cx="110" cy="112" rx="12" ry="9" fill="#3a2e2a" />
        <path d="M101 119 Q110 126 119 119" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="70" cy="107" r="8" fill="#ffb6c8" opacity="0.7" />
        <circle cx="150" cy="107" r="8" fill="#ffb6c8" opacity="0.7" />
        <g transform="translate(60 150) rotate(-6)">
          <rect x="0" y="0" width="60" height="42" rx="4" fill="#a9ddf3" stroke="#3a2e2a" strokeWidth="3" />
          <line x1="30" y1="2" x2="30" y2="40" stroke="#3a2e2a" strokeWidth="2.5" />
          <path d="M6 10 Q16 6 24 10" stroke="#3a2e2a" strokeWidth="2" fill="none" />
          <path d="M36 10 Q46 6 54 10" stroke="#3a2e2a" strokeWidth="2" fill="none" />
        </g>
      </svg>
    );
  }

  if (variant === "peek") {
    return (
      <svg viewBox="0 0 200 140" className={className} fill="none">
        <circle cx="100" cy="90" r="58" fill="#fff" stroke="#3a2e2a" strokeWidth="4" />
        <circle cx="50" cy="42" r="21" fill="#3a2e2a" />
        <circle cx="150" cy="42" r="21" fill="#3a2e2a" />
        <ellipse cx="72" cy="86" rx="16" ry="19" fill="#3a2e2a" />
        <ellipse cx="128" cy="86" rx="16" ry="19" fill="#3a2e2a" />
        <circle cx="74" cy="84" r="5" fill="#fff" />
        <circle cx="130" cy="84" r="5" fill="#fff" />
        <ellipse cx="100" cy="107" rx="13" ry="10" fill="#3a2e2a" />
        <path d="M90 115 Q100 123 110 115" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="52" cy="102" r="9" fill="#ffb6c8" opacity="0.7" />
        <circle cx="148" cy="102" r="9" fill="#ffb6c8" opacity="0.7" />
      </svg>
    );
  }

  // wave
  return (
    <svg viewBox="0 0 220 220" className={className} fill="none">
      <ellipse cx="110" cy="165" rx="62" ry="40" fill="#fff" stroke="#3a2e2a" strokeWidth="4" />
      <circle cx="110" cy="100" r="55" fill="#fff" stroke="#3a2e2a" strokeWidth="4" />
      <circle cx="65" cy="55" r="21" fill="#3a2e2a" />
      <circle cx="155" cy="55" r="21" fill="#3a2e2a" />
      <ellipse cx="86" cy="97" rx="16" ry="19" fill="#3a2e2a" />
      <ellipse cx="134" cy="97" rx="16" ry="19" fill="#3a2e2a" />
      <circle cx="88" cy="95" r="5" fill="#fff" />
      <circle cx="136" cy="95" r="5" fill="#fff" />
      <ellipse cx="110" cy="118" rx="13" ry="10" fill="#3a2e2a" />
      <path d="M100 126 Q110 134 120 126" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="67" cy="112" r="9" fill="#ffb6c8" opacity="0.7" />
      <circle cx="153" cy="112" r="9" fill="#ffb6c8" opacity="0.7" />
      <g transform="translate(160 110) rotate(10)">
        <ellipse cx="0" cy="18" rx="13" ry="20" fill="#fff" stroke="#3a2e2a" strokeWidth="3.5" />
        <path d="M-3 -10 Q0 -22 6 -8" stroke="#3a2e2a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
