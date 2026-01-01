// Extended Icon Set for Gusto App
// Categories: Cooking Methods, Diets, Seasons, Occasions, Nutrition, Storage, Spices, Feedback, Appliances

const tokens = {
  ink: '#2D2A26',
  paper: '#FAF7F2',
};

// ============================================
// METODI DI COTTURA
// ============================================

export const IconForno = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="8" width="36" height="34" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="10" y="18" width="28" height="20" stroke={color} strokeWidth="1.3" fill="none"/>
    <circle cx="14" cy="12" r="2" stroke={color} strokeWidth="1.2"/>
    <circle cx="24" cy="12" r="2" stroke={color} strokeWidth="1.2"/>
    <circle cx="34" cy="12" r="2" stroke={color} strokeWidth="1.2"/>
    <path d="M16 20 L32 20" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export const IconFritto = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 22 L8 38 Q8 42 24 42 Q40 42 40 38 L40 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="16" cy="28" r="2" stroke={color} strokeWidth="1"/>
    <circle cx="24" cy="32" r="2" stroke={color} strokeWidth="1"/>
    <circle cx="32" cy="28" r="2" stroke={color} strokeWidth="1"/>
    <circle cx="20" cy="36" r="1.5" stroke={color} strokeWidth="1"/>
    <circle cx="28" cy="36" r="1.5" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconBollito = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 20 L8 38 Q8 42 24 42 Q40 42 40 38 L40 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 14 Q14 10 16 6" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M24 14 Q22 10 24 6" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M32 14 Q30 10 32 6" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export const IconGriglia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="16" width="36" height="24" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 24 L42 24 M6 32 L42 32" stroke={color} strokeWidth="1.5"/>
    <path d="M14 16 L14 40 M24 16 L24 40 M34 16 L34 40" stroke={color} strokeWidth="1"/>
    <path d="M14 12 Q12 8 14 4" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M24 12 Q22 8 24 4" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M34 12 Q32 8 34 4" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export const IconVapore = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="38" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 38 L8 32 Q8 28 24 28 Q40 28 40 32 L40 38" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="16" cy="32" r="1.5" fill={color}/>
    <circle cx="24" cy="32" r="1.5" fill={color}/>
    <circle cx="32" cy="32" r="1.5" fill={color}/>
    <path d="M16 24 Q14 20 16 16 Q18 12 16 8" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M24 24 Q22 20 24 16 Q26 12 24 8" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M32 24 Q30 20 32 16 Q34 12 32 8" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export const IconCrudo = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 44 L24 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 24 Q10 20 10 10 Q24 14 24 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 24 Q38 20 38 10 Q24 14 24 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 6 Q20 10 24 14 Q28 10 24 6" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

export const IconSaltato = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="20" cy="32" rx="14" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M34 32 L46 28" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="20" r="3" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="24" cy="16" r="3" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="20" cy="24" r="2" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

export const IconBrasato = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 22 L8 38 Q8 42 24 42 Q40 42 40 38 L40 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="18" rx="18" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 14 L24 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="8" r="2" stroke={color} strokeWidth="1.3" fill={fill}/>
    <path d="M8 26 L4 26 M40 26 L44 26" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ============================================
// DIETE / ALLERGIE
// ============================================

export const IconSenzaLattosio = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 16 L20 20 L18 22 L18 32 L30 32 L30 22 L28 20 L28 16 Z" stroke={color} strokeWidth="1.3" fill="none"/>
    <path d="M12 36 L36 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconSenzaUova = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="26" rx="8" ry="10" stroke={color} strokeWidth="1.3" fill="none"/>
    <path d="M12 36 L36 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconKeto = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 12 Q32 16 32 24 Q32 34 24 36 Q16 34 16 24 Q16 16 24 12" stroke={color} strokeWidth="1.3" fill="none"/>
    <circle cx="24" cy="26" r="4" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

export const IconSenzaGlutine = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 14 L24 34" stroke={color} strokeWidth="1.3"/>
    <path d="M20 18 L24 22 L28 18 M20 26 L24 30 L28 26" stroke={color} strokeWidth="1.2"/>
    <path d="M12 36 L36 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconHalal = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M28 14 Q18 18 18 28 Q18 38 28 34 Q22 32 22 24 Q22 16 28 14" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="32" cy="18" r="2" fill={color}/>
  </svg>
);

export const IconVegano = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 18 L24 36 L32 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 24 Q32 20 34 24" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

export const IconBio = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 32 Q16 18 32 14 Q28 30 16 32" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M16 32 Q22 26 28 18" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconVegetariano = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 36 L24 18 L28 36 Q24 38 20 36" stroke={color} strokeWidth="1.3" fill="none"/>
    <path d="M24 18 L20 12 M24 18 L24 10 M24 18 L28 12" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// ============================================
// STAGIONI
// ============================================

export const IconPrimavera = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="20" r="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="10" rx="4" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="32" cy="16" rx="4" ry="6" stroke={color} strokeWidth="1.5" fill={fill} transform="rotate(60 32 16)"/>
    <ellipse cx="32" cy="26" rx="4" ry="6" stroke={color} strokeWidth="1.5" fill={fill} transform="rotate(120 32 26)"/>
    <ellipse cx="24" cy="30" rx="4" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="16" cy="26" rx="4" ry="6" stroke={color} strokeWidth="1.5" fill={fill} transform="rotate(-120 16 26)"/>
    <ellipse cx="16" cy="16" rx="4" ry="6" stroke={color} strokeWidth="1.5" fill={fill} transform="rotate(-60 16 16)"/>
    <path d="M24 34 L24 44" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconEstate = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 6 L24 12 M24 36 L24 42 M6 24 L12 24 M36 24 L42 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 11 L15 15 M33 33 L37 37 M37 11 L33 15 M15 33 L11 37" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconAutunno = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 L24 14 L18 10 L20 18 L12 16 L18 22 L10 26 L20 26 L16 34 L24 28 L32 34 L28 26 L38 26 L30 22 L36 16 L28 18 L30 10 L24 14 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 28 L24 44" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconInverno = ({ size = 48, color = tokens.ink, fill: _fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 L24 42 M6 24 L42 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 10 L38 38 M38 10 L10 38" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 12 L20 16 M24 12 L28 16" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M24 36 L20 32 M24 36 L28 32" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M12 24 L16 20 M12 24 L16 28" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M36 24 L32 20 M36 24 L32 28" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// ============================================
// OCCASIONI
// ============================================

export const IconCompleanno = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="10" y="24" width="28" height="16" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 30 L38 30" stroke={color} strokeWidth="1.2"/>
    <path d="M18 24 L18 18 M24 24 L24 16 M30 24 L30 18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="18" cy="14" rx="2" ry="3" stroke={color} strokeWidth="1.2" fill={fill}/>
    <ellipse cx="24" cy="12" rx="2" ry="3" stroke={color} strokeWidth="1.2" fill={fill}/>
    <ellipse cx="30" cy="14" rx="2" ry="3" stroke={color} strokeWidth="1.2" fill={fill}/>
  </svg>
);

export const IconRomantica = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 12 L12 22 Q12 28 18 30 L18 38 L14 38" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M36 12 L36 22 Q36 28 30 30 L30 38 L34 38" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M24 20 Q20 16 20 22 Q20 28 24 32 Q28 28 28 22 Q28 16 24 20" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

export const IconPicnic = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 22 L12 40 L36 40 L40 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 22 L42 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 22 Q16 8 24 8 Q32 8 32 22" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M14 28 L34 28 M14 34 L34 34" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconBarbecue = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="16" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 28 L8 34 M40 28 L40 34 M20 36 L18 44 M28 36 L30 44" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 22 Q14 18 16 14" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M24 20 Q22 16 24 12" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M32 22 Q30 18 32 14" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export const IconBrunch = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 18 L8 34 Q8 38 18 38 L28 38 Q32 38 32 34 L32 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 18 L32 18" stroke={color} strokeWidth="1.5"/>
    <path d="M32 22 Q38 22 38 28 Q38 34 32 34" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M38 38 Q42 34 44 38 Q42 42 38 38" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

export const IconFesta = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 L38 40 L10 40 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="6" r="3" stroke={color} strokeWidth="1.3" fill={fill}/>
    <path d="M18 28 L22 14 M26 14 L30 28" stroke={color} strokeWidth="1"/>
    <circle cx="8" cy="16" r="2" fill={color}/>
    <circle cx="40" cy="20" r="2" fill={color}/>
    <circle cx="12" cy="32" r="1.5" fill={color}/>
  </svg>
);

// ============================================
// NUTRIZIONE
// ============================================

export const IconCalorie = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 Q34 14 34 26 Q34 40 24 44 Q14 40 14 26 Q14 14 24 6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 20 Q30 26 28 34 Q24 38 20 34 Q18 28 24 20" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

export const IconProteine = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 20 Q8 28 14 36 Q24 44 34 36 Q42 28 38 18 Q32 10 22 10 Q12 10 10 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="18" cy="26" rx="4" ry="4" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

export const IconCarboidrati = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 32 Q8 18 24 18 Q40 18 40 32 L40 38 L8 38 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 22 L16 32 M24 20 L24 30 M32 22 L32 32" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconGrassi = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 Q14 20 14 28 Q14 40 24 42 Q34 40 34 28 Q34 20 24 6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="20" cy="28" rx="3" ry="5" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

export const IconFibre = ({ size = 48, color = tokens.ink, fill: _fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 44 L24 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 20 L18 12 M24 20 L30 12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 26 L16 20 M24 26 L32 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 32 L16 26 M24 32 L32 26" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 38 L18 32 M24 38 L30 32" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ============================================
// CONSERVAZIONE
// ============================================

export const IconFrigorifero = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="10" y="4" width="28" height="40" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 18 L38 18" stroke={color} strokeWidth="1.5"/>
    <path d="M32 10 L32 14 M32 24 L32 32" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconFreezer = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="10" y="10" width="28" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 16 L24 32 M16 24 L32 24" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M18 18 L30 30 M30 18 L18 30" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export const IconDispensaStorage = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="14" y="14" width="20" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 14 L14 10 Q14 8 18 8 L30 8 Q34 8 34 10 L34 14" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="18" y="24" width="12" height="10" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

export const IconMealPrep = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="12" width="36" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 24 L42 24" stroke={color} strokeWidth="1.3"/>
    <path d="M24 12 L24 40" stroke={color} strokeWidth="1.3"/>
    <path d="M4 10 L44 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ============================================
// SPEZIE
// ============================================

export const IconPepe = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="16" y="18" width="16" height="24" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 28 L32 28" stroke={color} strokeWidth="1.3"/>
    <path d="M18 18 L18 12 Q18 8 24 8 Q30 8 30 12 L30 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="6" r="2" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

export const IconSale = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M14 16 L14 40 Q14 44 24 44 Q34 44 34 40 L34 16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="16" rx="10" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="20" cy="10" r="1.5" fill={color}/>
    <circle cx="28" cy="10" r="1.5" fill={color}/>
    <circle cx="24" cy="8" r="1.5" fill={color}/>
  </svg>
);

export const IconRosmarino = ({ size = 48, color = tokens.ink, fill: _fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 44 L24 12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 14 L18 10 M24 14 L30 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 20 L16 16 M24 20 L32 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 26 L16 22 M24 26 L32 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 32 L18 28 M24 32 L30 28" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 38 L20 34 M24 38 L28 34" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconOrigano = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 44 L24 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="18" cy="16" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="30" cy="16" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="16" cy="26" rx="5" ry="3" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="32" cy="26" rx="5" ry="3" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="18" cy="34" rx="4" ry="3" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="30" cy="34" rx="4" ry="3" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

export const IconZafferano = ({ size = 48, color = tokens.ink, fill: _fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M20 42 L20 24 Q20 18 16 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 42 L28 24 Q28 18 32 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 42 L24 20 L24 8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ============================================
// FEEDBACK / SOCIAL
// ============================================

export const IconLike = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M14 44 L14 22 L8 22 L8 44 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 24 L20 24 L24 10 Q26 6 30 10 L28 20 L38 20 Q42 20 42 24 L40 38 Q40 42 36 42 L14 42" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

export const IconCommento = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 10 L40 10 Q42 10 42 12 L42 32 Q42 34 40 34 L16 34 L10 42 L10 34 L8 34 Q6 34 6 32 L6 12 Q6 10 8 10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 18 L34 18 M14 26 L28 26" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export const IconCompletato = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 24 L22 32 L36 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconErrore = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 16 L32 32 M32 16 L16 32" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconStella = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 L28 18 L42 18 L32 28 L36 42 L24 34 L12 42 L16 28 L6 18 L20 18 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// ============================================
// ELETTRODOMESTICI
// ============================================

export const IconFrullatore = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M14 8 L12 36 Q12 40 24 40 Q36 40 36 36 L34 8 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 8 L34 8" stroke={color} strokeWidth="1.5"/>
    <path d="M36 16 L42 16 L42 28 L36 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="16" y="40" width="16" height="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 28 L28 28 M24 24 L24 32" stroke={color} strokeWidth="1.3"/>
  </svg>
);

export const IconMicroonde = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="4" y="10" width="40" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="8" y="14" width="26" height="20" stroke={color} strokeWidth="1.3" fill="none"/>
    <circle cx="40" cy="20" r="2" stroke={color} strokeWidth="1.2"/>
    <circle cx="40" cy="28" r="2" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconAirFryer = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="10" y="8" width="28" height="32" rx="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="16" y="12" width="16" height="8" rx="1" stroke={color} strokeWidth="1.3" fill="none"/>
    <rect x="14" y="24" width="20" height="12" rx="2" stroke={color} strokeWidth="1.3" fill="none"/>
    <path d="M20 28 L28 28" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconMixer = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 8 L36 8 Q40 8 40 12 L40 20 L32 20 L32 32 L16 32 L16 20 L8 20 L8 12 Q8 8 12 8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 32 Q12 44 24 44 Q36 44 36 32" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 24 L20 36 M24 22 L24 38 M28 24 L28 36" stroke={color} strokeWidth="1.3"/>
  </svg>
);

export const IconTostapane = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="16" width="32" height="22" rx="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="14" y="10" width="8" height="10" rx="2" stroke={color} strokeWidth="1.3" fill="none"/>
    <rect x="26" y="10" width="8" height="10" rx="2" stroke={color} strokeWidth="1.3" fill="none"/>
    <path d="M38 24 L42 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
