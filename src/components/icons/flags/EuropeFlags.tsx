// Europa - 15 bandiere
const tokens = { ink: '#2D2A26', paper: '#FAF7F2' };

interface FlagProps {
  size?: number;
  color?: string;
  fill?: string;
}

export const FlagItalia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="1.5"/>
    <path d="M30 10 L30 38" stroke={color} strokeWidth="1.5"/>
    <path d="M8 14 L16 14 M8 18 L16 18 M8 22 L16 22 M8 26 L16 26 M8 30 L16 30 M8 34 L16 34" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagFrancia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="1.5"/>
    <path d="M30 10 L30 38" stroke={color} strokeWidth="1.5"/>
    <path d="M10 10 L10 38 M14 10 L14 38" stroke={color} strokeWidth="0.5"/>
    <circle cx="33" cy="16" r="1" fill={color}/>
    <circle cx="39" cy="16" r="1" fill={color}/>
    <circle cx="36" cy="24" r="1" fill={color}/>
    <circle cx="33" cy="32" r="1" fill={color}/>
    <circle cx="39" cy="32" r="1" fill={color}/>
  </svg>
);

export const FlagGermania = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 19 L42 19" stroke={color} strokeWidth="1.5"/>
    <path d="M6 29 L42 29" stroke={color} strokeWidth="1.5"/>
    <rect x="6" y="10" width="36" height="9" fill={color}/>
  </svg>
);

export const FlagSpagna = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 17 L42 17" stroke={color} strokeWidth="1.5"/>
    <path d="M6 31 L42 31" stroke={color} strokeWidth="1.5"/>
    <rect x="14" y="20" width="8" height="8" stroke={color} strokeWidth="1" fill={fill}/>
  </svg>
);

export const FlagRegnoUnito = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 10 L42 38 M42 10 L6 38" stroke={color} strokeWidth="2"/>
    <path d="M24 10 L24 38 M6 24 L42 24" stroke={color} strokeWidth="4"/>
    <path d="M24 10 L24 38 M6 24 L42 24" stroke={fill} strokeWidth="2"/>
  </svg>
);

export const FlagIrlanda = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="1.5"/>
    <path d="M30 10 L30 38" stroke={color} strokeWidth="1.5"/>
    <path d="M6 14 L16 24 M6 24 L16 34 M6 34 L10 38" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagPaesiBassi = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 19 L42 19" stroke={color} strokeWidth="1.5"/>
    <path d="M6 29 L42 29" stroke={color} strokeWidth="1.5"/>
    <path d="M8 12 L40 12 M8 16 L40 16" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagBelgio = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="1.5"/>
    <path d="M30 10 L30 38" stroke={color} strokeWidth="1.5"/>
    <rect x="6" y="10" width="12" height="28" fill={color}/>
  </svg>
);

export const FlagAustria = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 19 L42 19" stroke={color} strokeWidth="1.5"/>
    <path d="M6 29 L42 29" stroke={color} strokeWidth="1.5"/>
    <path d="M8 12 L40 12 M8 16 L40 16" stroke={color} strokeWidth="0.5"/>
    <path d="M8 32 L40 32 M8 36 L40 36" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagSvizzera = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="21" y="14" width="6" height="20" fill={color}/>
    <rect x="14" y="21" width="20" height="6" fill={color}/>
  </svg>
);

export const FlagPolonia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 24 L42 24" stroke={color} strokeWidth="1.5"/>
    <path d="M8 28 L40 28 M8 32 L40 32 M8 36 L40 36" stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const FlagGrecia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 13 L42 13 M6 17 L42 17 M6 21 L42 21 M6 25 L42 25 M6 29 L42 29 M6 33 L42 33" stroke={color} strokeWidth="1"/>
    <rect x="6" y="10" width="14" height="14" fill={fill} stroke={color} strokeWidth="1"/>
    <path d="M13 10 L13 24 M6 17 L20 17" stroke={color} strokeWidth="2"/>
  </svg>
);

export const FlagSvezia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="4"/>
    <path d="M6 24 L42 24" stroke={color} strokeWidth="4"/>
  </svg>
);

export const FlagNorvegia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="6"/>
    <path d="M6 24 L42 24" stroke={color} strokeWidth="6"/>
    <path d="M18 10 L18 38" stroke={fill} strokeWidth="2"/>
    <path d="M6 24 L42 24" stroke={fill} strokeWidth="2"/>
  </svg>
);

export const FlagPortogallo = ({ size = 48, color = tokens.ink, fill = tokens.paper }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 10 L18 38" stroke={color} strokeWidth="1.5"/>
    <path d="M8 14 L16 14 M8 18 L16 18 M8 22 L16 22 M8 26 L16 26 M8 30 L16 30 M8 34 L16 34" stroke={color} strokeWidth="0.5"/>
    <circle cx="18" cy="24" r="5" stroke={color} strokeWidth="1" fill={fill}/>
  </svg>
);
