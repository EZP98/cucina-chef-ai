// Asia - 9 bandiere
const tokens = { ink: '#2D2A26', paper: '#FAF7F2' };

interface FlagProps {
  size?: number;
  color?: string;
  fill?: string;
}

export const FlagCina = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 12 L40 12 M8 16 L40 16 M8 20 L40 20 M8 24 L40 24 M8 28 L40 28 M8 32 L40 32 M8 36 L40 36" stroke={color} strokeWidth="0.3"/>
    <path d="M14 18 L15 21 L18 21 L16 23 L17 26 L14 24 L11 26 L12 23 L10 21 L13 21 Z" fill={fill} stroke={color} strokeWidth="0.5"/>
    <circle cx="22" cy="14" r="1.5" fill={fill} stroke={color} strokeWidth="0.5"/>
    <circle cx="24" cy="18" r="1.5" fill={fill} stroke={color} strokeWidth="0.5"/>
    <circle cx="24" cy="24" r="1.5" fill={fill} stroke={color} strokeWidth="0.5"/>
    <circle cx="22" cy="28" r="1.5" fill={fill} stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagGiappone = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="24" r="8" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

export const FlagCorea = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="24" r="7" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M24 17 Q31 24 24 31" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M10 14 L16 18 M10 16 L16 20 M10 18 L16 22" stroke={color} strokeWidth="1"/>
    <path d="M32 14 L38 18 M32 16 L38 20 M32 18 L38 22" stroke={color} strokeWidth="1"/>
    <path d="M10 26 L16 30 M10 28 L16 32" stroke={color} strokeWidth="1"/>
    <path d="M32 26 L38 30 M32 28 L38 32" stroke={color} strokeWidth="1"/>
  </svg>
);

export const FlagIndia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 19 L42 19" stroke={color} strokeWidth="1.5"/>
    <path d="M6 29 L42 29" stroke={color} strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="4" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M24 20 L24 22 M24 26 L24 28 M20 24 L22 24 M26 24 L28 24" stroke={color} strokeWidth="0.5"/>
    <path d="M21 21 L22 22 M27 21 L26 22 M21 27 L22 26 M27 27 L26 26" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagThailandia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 15 L42 15" stroke={color} strokeWidth="1"/>
    <path d="M6 19 L42 19" stroke={color} strokeWidth="1"/>
    <path d="M6 29 L42 29" stroke={color} strokeWidth="1"/>
    <path d="M6 33 L42 33" stroke={color} strokeWidth="1"/>
    <rect x="6" y="19" width="36" height="10" fill={color}/>
  </svg>
);

export const FlagVietnam = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 14 L40 14 M8 18 L40 18 M8 22 L40 22 M8 26 L40 26 M8 30 L40 30 M8 34 L40 34" stroke={color} strokeWidth="0.3"/>
    <path d="M24 14 L26 20 L32 20 L27 24 L29 30 L24 26 L19 30 L21 24 L16 20 L22 20 Z" fill={fill} stroke={color} strokeWidth="1"/>
  </svg>
);

export const FlagIndonesia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 24 L42 24" stroke={color} strokeWidth="1.5"/>
    <path d="M8 14 L40 14 M8 18 L40 18" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagFilippine = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 24 L42 24" stroke={color} strokeWidth="1.5"/>
    <path d="M8 14 L40 14 M8 18 L40 18" stroke={color} strokeWidth="0.3"/>
    <path d="M6 10 L22 24 L6 38 Z" stroke={color} strokeWidth="1" fill={fill}/>
    <circle cx="12" cy="24" r="3" stroke={color} strokeWidth="1" fill="none"/>
    <circle cx="9" cy="14" r="1.5" stroke={color} strokeWidth="0.5" fill="none"/>
    <circle cx="9" cy="34" r="1.5" stroke={color} strokeWidth="0.5" fill="none"/>
    <circle cx="18" cy="24" r="1.5" stroke={color} strokeWidth="0.5" fill="none"/>
  </svg>
);

export const FlagTurchia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 14 L40 14 M8 18 L40 18 M8 22 L40 22 M8 26 L40 26 M8 30 L40 30 M8 34 L40 34" stroke={color} strokeWidth="0.3"/>
    <circle cx="20" cy="24" r="6" fill={fill} stroke={color} strokeWidth="1"/>
    <circle cx="22" cy="24" r="5" fill={color}/>
    <path d="M30 24 L31 26 L33 26 L32 28 L32 30 L30 28 L28 30 L28 28 L27 26 L29 26 Z" fill={fill} stroke={color} strokeWidth="0.5"/>
  </svg>
);
