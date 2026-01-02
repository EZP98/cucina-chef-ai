// Africa, Oceania, Medio Oriente - 5 bandiere
const tokens = { ink: '#2D2A26', paper: '#FAF7F2' };

interface FlagProps {
  size?: number;
  color?: string;
  fill?: string;
}

// Africa

export const FlagEgitto = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 19 L42 19" stroke={color} strokeWidth="1.5"/>
    <path d="M6 29 L42 29" stroke={color} strokeWidth="1.5"/>
    <path d="M8 13 L40 13 M8 16 L40 16" stroke={color} strokeWidth="0.5"/>
    <path d="M8 32 L40 32 M8 35 L40 35" stroke={color} strokeWidth="0.5"/>
    <ellipse cx="24" cy="24" rx="4" ry="3" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

export const FlagMarocco = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 14 L40 14 M8 18 L40 18 M8 22 L40 22 M8 26 L40 26 M8 30 L40 30 M8 34 L40 34" stroke={color} strokeWidth="0.3"/>
    <path d="M24 14 L26 20 L32 20 L27 24 L29 30 L24 26 L19 30 L21 24 L16 20 L22 20 Z" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

export const FlagEtiopia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 19 L42 19" stroke={color} strokeWidth="1.5"/>
    <path d="M6 29 L42 29" stroke={color} strokeWidth="1.5"/>
    <path d="M8 13 L40 13 M8 16 L40 16" stroke={color} strokeWidth="0.5"/>
    <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M24 18 L25 22 L29 22 L26 25 L27 29 L24 27 L21 29 L22 25 L19 22 L23 22 Z" stroke={color} strokeWidth="0.5" fill="none"/>
  </svg>
);

// Oceania

export const FlagAustralia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="6" y="10" width="16" height="12" stroke={color} strokeWidth="0.5" fill={color}/>
    <path d="M6 10 L22 22 M22 10 L6 22" stroke={fill} strokeWidth="1"/>
    <path d="M14 10 L14 22 M6 16 L22 16" stroke={fill} strokeWidth="2"/>
    <circle cx="14" cy="32" r="3" stroke={color} strokeWidth="1" fill="none"/>
    <circle cx="36" cy="14" r="1.5" stroke={color} strokeWidth="0.5" fill="none"/>
    <circle cx="40" cy="22" r="1.5" stroke={color} strokeWidth="0.5" fill="none"/>
    <circle cx="34" cy="28" r="1.5" stroke={color} strokeWidth="0.5" fill="none"/>
    <circle cx="30" cy="20" r="1.5" stroke={color} strokeWidth="0.5" fill="none"/>
  </svg>
);

// Medio Oriente

export const FlagLibano = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 17 L42 17" stroke={color} strokeWidth="1"/>
    <path d="M6 31 L42 31" stroke={color} strokeWidth="1"/>
    <path d="M8 12 L40 12 M8 14 L40 14" stroke={color} strokeWidth="0.5"/>
    <path d="M8 34 L40 34 M8 36 L40 36" stroke={color} strokeWidth="0.5"/>
    <path d="M24 18 L28 28 L24 26 L20 28 Z" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M24 28 L24 30" stroke={color} strokeWidth="1"/>
  </svg>
);
