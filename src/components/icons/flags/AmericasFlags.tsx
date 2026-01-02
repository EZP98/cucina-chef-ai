// Americhe - 8 bandiere
const tokens = { ink: '#2D2A26', paper: '#FAF7F2' };

interface FlagProps {
  size?: number;
  color?: string;
  fill?: string;
}

export const FlagUSA = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 12 L42 12 M6 16 L42 16 M6 20 L42 20 M6 24 L42 24 M6 28 L42 28 M6 32 L42 32 M6 36 L42 36" stroke={color} strokeWidth="1"/>
    <rect x="6" y="10" width="16" height="14" fill={color}/>
    <circle cx="10" cy="14" r="1" fill={fill}/>
    <circle cx="14" cy="14" r="1" fill={fill}/>
    <circle cx="18" cy="14" r="1" fill={fill}/>
    <circle cx="10" cy="18" r="1" fill={fill}/>
    <circle cx="14" cy="18" r="1" fill={fill}/>
    <circle cx="18" cy="18" r="1" fill={fill}/>
  </svg>
);

export const FlagCanada = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="6" y="10" width="10" height="28" fill={color}/>
    <rect x="32" y="10" width="10" height="28" fill={color}/>
    <path d="M24 14 L26 20 L30 18 L28 22 L32 24 L28 26 L30 30 L26 28 L24 34 L22 28 L18 30 L20 26 L16 24 L20 22 L18 18 L22 20 Z" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

export const FlagMessico = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="1.5"/>
    <path d="M30 10 L30 38" stroke={color} strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="4" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M22 24 L26 24 M24 22 L24 26" stroke={color} strokeWidth="0.8"/>
  </svg>
);

export const FlagBrasile = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 12 L40 24 L24 36 L8 24 Z" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

export const FlagArgentina = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 19 L42 19" stroke={color} strokeWidth="1.5"/>
    <path d="M6 29 L42 29" stroke={color} strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="3" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M24 18 L24 20 M24 28 L24 30 M18 24 L20 24 M28 24 L30 24" stroke={color} strokeWidth="1"/>
    <path d="M20 20 L21 21 M28 20 L27 21 M20 28 L21 27 M28 28 L27 27" stroke={color} strokeWidth="1"/>
  </svg>
);

export const FlagPeru = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="1.5"/>
    <path d="M30 10 L30 38" stroke={color} strokeWidth="1.5"/>
    <path d="M8 14 L16 14 M8 20 L16 20 M8 26 L16 26 M8 32 L16 32" stroke={color} strokeWidth="0.5"/>
    <path d="M32 14 L40 14 M32 20 L40 20 M32 26 L40 26 M32 32 L40 32" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagColombia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 24 L42 24" stroke={color} strokeWidth="1.5"/>
    <path d="M6 31 L42 31" stroke={color} strokeWidth="1.5"/>
    <path d="M8 14 L40 14 M8 18 L40 18" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagCuba = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 16 L42 16 M6 22 L42 22 M6 28 L42 28 M6 34 L42 34" stroke={color} strokeWidth="1"/>
    <path d="M6 10 L22 24 L6 38 Z" fill={color}/>
    <path d="M12 24 L13 26 L15 26 L14 27 L14 29 L12 28 L10 29 L10 27 L9 26 L11 26 Z" fill={fill}/>
  </svg>
);
