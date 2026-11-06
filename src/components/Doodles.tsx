export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="none">
      <path
        d="M2 18C12 4 22 4 32 18C42 32 52 4 62 18C72 32 82 4 92 18C100 29 108 12 118 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor">
      <path d="M20 0 L24 15 L40 20 L24 25 L20 40 L16 25 L0 20 L16 15 Z" />
    </svg>
  );
}

export function Blob({ className = "", fill = "#ffd873" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path
        fill={fill}
        d="M48.8,-62.3C62.9,-54.1,74.3,-40.1,78.6,-24.4C82.9,-8.7,80.1,8.8,72.9,24C65.7,39.1,54.1,52,40.1,61.2C26.1,70.4,9.7,75.9,-6.9,76.8C-23.5,77.7,-47,74,-62.9,61.3C-78.8,48.6,-87.1,26.9,-86.6,5.7C-86.1,-15.5,-76.9,-36.2,-62.1,-44.9C-47.3,-53.7,-27,-50.5,-9.5,-54.9C8,-59.3,34.8,-70.5,48.8,-62.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c0.6 4.8 1.6 7.8 4.8 9.6C13.6 11.4 12.6 14.4 12 19.2C11.4 14.4 10.4 11.4 7.2 9.6C10.4 7.8 11.4 4.8 12 0Z" />
    </svg>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21s-7.5-4.6-10-9.3C0.3 7.9 2.3 4 6.2 4c2.1 0 3.7 1.1 4.8 2.7C12.1 5.1 13.7 4 15.8 4c3.9 0 5.9 3.9 4.2 7.7C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Crayon({ className = "", color = "#ff8a65" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 140" className={className} fill="none">
      <rect x="6" y="30" width="28" height="90" rx="6" fill={color} stroke="#3a2e2a" strokeWidth="3" />
      <path d="M6 30 L20 2 L34 30Z" fill="#fde9d9" stroke="#3a2e2a" strokeWidth="3" strokeLinejoin="round" />
      <line x1="6" y1="48" x2="34" y2="48" stroke="#3a2e2a" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
