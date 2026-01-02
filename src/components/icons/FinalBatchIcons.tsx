const tokens = {
  ink: '#2D2A26',
  paper: '#FAF7F2',
};

// ============================================
// BEVANDE
// ============================================

export const IconEspresso = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 20 L12 36 Q12 40 24 40 Q36 40 36 36 L36 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="12" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M36 24 Q42 24 42 30 Q42 36 36 36" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M20 14 Q18 10 20 6" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M28 14 Q26 10 28 6" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export const IconCappuccino = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 18 L10 38 Q10 42 24 42 Q38 42 38 38 L38 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="18" rx="14" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M38 24 Q44 24 44 30 Q44 36 38 36" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M24 22 Q20 20 20 24 Q20 28 24 30 Q28 28 28 24 Q28 20 24 22" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

export const IconSmoothie = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M16 8 L14 40 Q14 44 24 44 Q34 44 34 40 L32 8 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 8 L32 8" stroke={color} strokeWidth="1.5"/>
    <path d="M30 4 L26 32" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="24" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="26" cy="30" r="2" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

export const IconCocktail = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 10 L24 28 L38 10 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 28 L24 40" stroke={color} strokeWidth="1.5"/>
    <path d="M16 40 L32 40" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="18" r="3" stroke={color} strokeWidth="1.3" fill={fill}/>
    <path d="M22 8 L30 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconSpritz = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M14 8 L14 22 Q14 32 24 34 L24 40 L18 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M34 8 L34 22 Q34 32 24 34 L24 40 L30 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="24" cy="8" rx="10" ry="3" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="30" cy="14" r="4" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="20" cy="18" r="1" fill={color}/>
    <circle cx="24" cy="24" r="1" fill={color}/>
    <circle cx="22" cy="14" r="1" fill={color}/>
  </svg>
);

export const IconVinoRosso = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M16 8 L16 18 Q16 28 24 30 Q32 28 32 18 L32 8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 8 L32 8" stroke={color} strokeWidth="1.5"/>
    <path d="M24 30 L24 40" stroke={color} strokeWidth="1.5"/>
    <path d="M18 40 L30 40" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 18 Q24 22 32 18" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconBirra = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 12 L12 42 L32 42 L32 12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 12 L32 12" stroke={color} strokeWidth="1.5"/>
    <path d="M32 18 Q40 18 40 26 Q40 34 32 34" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M12 16 Q18 12 22 16 Q26 20 32 16" stroke={color} strokeWidth="1.3"/>
    <ellipse cx="16" cy="10" rx="3" ry="2" stroke={color} strokeWidth="1.2" fill={fill}/>
    <ellipse cx="26" cy="8" rx="4" ry="3" stroke={color} strokeWidth="1.2" fill={fill}/>
  </svg>
);

// ============================================
// UTENSILI CUCINA
// ============================================

export const IconFrusta = ({ size = 48, color = tokens.ink, fill: _fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 L24 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 16 Q14 28 18 40 Q24 44 30 40 Q34 28 30 16" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M20 16 Q18 28 22 38 M24 16 L24 38 M28 16 Q30 28 26 38" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconMattarello = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="12" y="20" width="24" height="10" rx="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 25 L6 25" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 25 L42 25" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="4" cy="25" r="3" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="44" cy="25" r="3" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

export const IconSpatola = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="18" y="6" width="12" height="20" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M22 26 L22 44 M26 26 L26 44" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="12" r="2" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="24" cy="20" r="2" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

export const IconColino = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 18 Q8 36 24 36 Q40 36 40 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 18 L40 18" stroke={color} strokeWidth="1.5"/>
    <path d="M40 24 L46 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="24" r="1.5" fill={color}/>
    <circle cx="24" cy="24" r="1.5" fill={color}/>
    <circle cx="32" cy="24" r="1.5" fill={color}/>
    <circle cx="20" cy="30" r="1.5" fill={color}/>
    <circle cx="28" cy="30" r="1.5" fill={color}/>
  </svg>
);

export const IconGrattugia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M16 6 L12 42 L36 42 L32 6 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 14 L22 18 M26 14 L28 18" stroke={color} strokeWidth="1.2"/>
    <path d="M19 22 L21 26 M25 22 L27 26" stroke={color} strokeWidth="1.2"/>
    <path d="M18 30 L20 34 M24 30 L26 34" stroke={color} strokeWidth="1.2"/>
    <ellipse cx="24" cy="8" rx="6" ry="3" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

export const IconMortaio = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 22 Q8 42 24 42 Q40 42 40 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M32 14 L38 6" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="30" cy="16" rx="4" ry="3" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

export const IconSpremiagrumi = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="38" rx="14" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 38 L10 32 Q10 28 24 28 Q38 28 38 32 L38 38" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 28 Q24 14 32 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 24 L24 16 L28 24" stroke={color} strokeWidth="1.2"/>
    <path d="M38 34 L44 36" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconMandolina = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="14" y="6" width="20" height="36" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="18" y="16" width="12" height="2" fill={color}/>
    <rect x="18" y="26" width="12" height="2" fill={color}/>
    <ellipse cx="24" cy="10" rx="4" ry="2" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

// ============================================
// SALSE E CONDIMENTI
// ============================================

export const IconPesto = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="14" y="16" width="20" height="24" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 16 L14 12 Q14 8 24 8 Q34 8 34 12 L34 16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 20 Q24 16 28 20" stroke={color} strokeWidth="1.3"/>
    <path d="M22 26 Q24 22 26 26" stroke={color} strokeWidth="1.3"/>
  </svg>
);

export const IconBesciamella = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 18 L10 38 Q10 42 24 42 Q38 42 38 38 L38 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="18" rx="14" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 26 Q20 24 24 26 Q28 28 32 26" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconMaionese = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M20 8 L20 14 L16 18 L16 40 Q16 44 24 44 Q32 44 32 40 L32 18 L28 14 L28 8 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 8 Q24 4 28 8" stroke={color} strokeWidth="1.5"/>
    <rect x="18" y="26" width="12" height="10" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

export const IconKetchup = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M20 6 L20 12 L16 16 L16 42 Q16 46 24 46 Q32 46 32 42 L32 16 L28 12 L28 6 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 6 L28 6" stroke={color} strokeWidth="1.5"/>
    <path d="M20 28 L20 36 M20 32 L26 28 M22 32 L26 36" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export const IconSenape = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="16" y="14" width="16" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="18" y="6" width="12" height="8" rx="1" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="18" y="24" width="12" height="12" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

export const IconAceto = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M18 8 L18 14 L14 18 L14 42 L34 42 L34 18 L30 14 L30 8 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 8 L30 8" stroke={color} strokeWidth="1.5"/>
    <path d="M16 28 L32 28" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconOlioOliva = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M20 6 L20 12 L16 16 L16 42 L32 42 L32 16 L28 12 L28 6 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 6 L30 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="24" cy="30" rx="4" ry="6" stroke={color} strokeWidth="1.3" fill="none"/>
    <path d="M24 24 L24 22" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ============================================
// FORMAGGI ITALIANI
// ============================================

export const IconParmigiano = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 40 L24 8 L40 40 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="20" cy="28" r="1.5" fill={color}/>
    <circle cx="28" cy="30" r="1.5" fill={color}/>
    <circle cx="24" cy="36" r="1.5" fill={color}/>
    <circle cx="18" cy="36" r="1" fill={color}/>
    <circle cx="30" cy="36" r="1" fill={color}/>
  </svg>
);

export const IconGorgonzola = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 38 L24 10 L40 38 Q24 42 8 38" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 24 Q24 28 22 34" stroke={color} strokeWidth="1.2"/>
    <path d="M28 22 Q26 28 30 32" stroke={color} strokeWidth="1.2"/>
    <path d="M24 18 L24 26" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconPecorino = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="30" rx="16" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="16" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="12" ry="6" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

export const IconRicotta = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 18 L14 40 L34 40 L38 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="18" rx="14" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 26 Q24 24 30 26 M16 32 Q24 30 32 32" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconBurrata = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="26" r="14" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M22 12 Q24 8 26 12" stroke={color} strokeWidth="1.5"/>
    <path d="M24 12 L24 16" stroke={color} strokeWidth="1.5"/>
    <circle cx="24" cy="28" r="6" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

export const IconTaleggio = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="10" y="16" width="28" height="20" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 20 L38 20" stroke={color} strokeWidth="1.2"/>
    <path d="M10 32 L38 32" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// ============================================
// PANE E LIEVITATI
// ============================================

export const IconFocaccia = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="18" ry="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="16" cy="26" r="2" fill={color}/>
    <circle cx="24" cy="24" r="2" fill={color}/>
    <circle cx="32" cy="26" r="2" fill={color}/>
    <circle cx="20" cy="32" r="2" fill={color}/>
    <circle cx="28" cy="32" r="2" fill={color}/>
  </svg>
);

export const IconCiabatta = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 28 Q6 20 14 18 L34 18 Q42 20 42 28 Q42 36 34 38 L14 38 Q6 36 6 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 22 L14 34 M26 22 L24 34 M36 22 L34 34" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconGrissini = ({ size = 48, color = tokens.ink, fill: _fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 44 L16 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 44 L24 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 44 L30 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 44 L36 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconPiadina = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 36 Q24 8 40 36 Q24 40 8 36" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 32 Q24 28 32 32" stroke={color} strokeWidth="1.2"/>
    <path d="M20 28 Q24 24 28 28" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconBrioche = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 42 Q8 42 8 34 Q8 22 24 22 Q40 22 40 34 Q40 42 36 42 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="16" r="8" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// ============================================
// MESSICANA
// ============================================

export const IconBurrito = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 24 Q8 16 16 16 L36 16 Q44 16 44 24 Q44 32 36 32 L16 32 Q8 32 8 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 20 L12 28 M36 20 L36 28" stroke={color} strokeWidth="1.2"/>
    <path d="M16 22 Q20 20 24 22 Q28 24 32 22" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconNachos = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 40 L18 24 L26 40 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M22 40 L30 24 L38 40 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 34 L24 18 L32 34 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 30 Q24 28 28 30" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const IconGuacamole = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 22 Q6 40 24 40 Q42 40 42 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="8" ry="6" stroke={color} strokeWidth="1.3" fill="none"/>
    <circle cx="24" cy="26" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

export const IconTaco = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 36 Q24 12 42 36" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 36 Q24 42 42 36" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 34 Q20 28 26 34" stroke={color} strokeWidth="1.2"/>
    <path d="M22 32 Q28 26 34 32" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// ============================================
// COREANA
// ============================================

export const IconKimchi = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="12" y="10" width="24" height="32" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 18 Q24 14 30 18" stroke={color} strokeWidth="1.3"/>
    <path d="M18 26 Q24 22 30 26" stroke={color} strokeWidth="1.3"/>
    <path d="M18 34 Q24 30 30 34" stroke={color} strokeWidth="1.3"/>
  </svg>
);

export const IconBibimbap = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M4 22 Q4 42 24 42 Q44 42 44 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="20" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="22" r="6" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="24" cy="22" r="2" fill={color}/>
    <path d="M12 26 L12 38 M24 28 L24 40 M36 26 L36 38" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconKoreanBBQ = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="18" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 28 L38 28 M14 24 L14 32 M24 22 L24 34 M34 24 L34 32" stroke={color} strokeWidth="1"/>
    <path d="M18 18 Q16 14 18 10" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M30 18 Q28 14 30 10" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ============================================
// INDIANA
// ============================================

export const IconNaan = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 40 Q8 28 16 16 Q24 8 32 16 Q40 28 36 40 Q24 44 12 40" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="20" cy="24" r="2" stroke={color} strokeWidth="1" fill="none"/>
    <circle cx="28" cy="28" r="2" stroke={color} strokeWidth="1" fill="none"/>
    <circle cx="24" cy="34" r="1.5" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

export const IconSamosa = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 8 L40 40 L8 40 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 8 L24 32" stroke={color} strokeWidth="1.2"/>
    <path d="M16 40 L20 28 M32 40 L28 28" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconTikka = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 L24 44" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="24" cy="14" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="7" ry="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="34" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// ============================================
// GRECA
// ============================================

export const IconGyros = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 40 Q8 24 16 12 Q24 8 32 12 Q40 24 36 40 Q24 44 12 40" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 20 Q24 16 30 20" stroke={color} strokeWidth="1.2"/>
    <path d="M16 28 Q24 24 32 28" stroke={color} strokeWidth="1.2"/>
    <circle cx="24" cy="34" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

export const IconMoussaka = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="12" width="32" height="28" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 20 L40 20 M8 28 L40 28 M8 36 L40 36" stroke={color} strokeWidth="1.2"/>
    <path d="M12 14 Q20 10 28 14 Q36 18 40 14" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconSouvlaki = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 24 L44 24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <rect x="12" y="18" width="8" height="12" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="22" y="18" width="8" height="12" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="32" y="18" width="8" height="12" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// ============================================
// SPAGNOLA
// ============================================

export const IconTapas = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="14" cy="20" rx="10" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="34" cy="20" rx="10" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="36" rx="12" ry="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="14" cy="18" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="34" cy="18" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
    <path d="M20 34 L28 34" stroke={color} strokeWidth="1.5"/>
  </svg>
);

export const IconChurros = ({ size = 48, color = tokens.ink, fill: _fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 8 Q8 16 12 24 Q8 32 12 40" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 8 Q20 16 24 24 Q20 32 24 40" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <path d="M36 8 Q32 16 36 24 Q32 32 36 40" stroke={color} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const IconTortillaEsp = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="30" rx="18" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="18" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 14 L24 34 L38 30" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// ============================================
// TIPOLOGIE CARNE
// ============================================

export const IconManzo = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 18 Q8 26 14 34 Q24 42 34 34 Q42 26 38 16 Q32 8 22 8 Q12 8 10 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 20 Q22 24 18 28" stroke={color} strokeWidth="1"/>
    <path d="M28 18 Q32 22 28 26" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconMaiale = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 14 Q8 18 10 28 Q12 38 20 40 Q30 42 36 34 Q42 26 38 18 Q34 10 24 10 Q16 10 12 14" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="16" cy="24" r="4" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

export const IconAgnello = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 12 L10 36 Q10 40 18 40 L38 40 L38 16 Q38 12 34 12 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 12 L14 8 M22 12 L22 8 M30 12 L30 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconAnatra = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 16 Q8 24 12 34 Q18 42 28 40 Q38 38 40 28 Q42 18 36 12 Q28 8 18 10 Q12 12 12 16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 20 L32 20 M14 28 L34 28" stroke={color} strokeWidth="1"/>
  </svg>
);

export const IconConiglio = ({ size = 48, color = tokens.ink, fill = tokens.paper }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M16 10 Q10 16 12 28 Q14 40 24 42 Q34 42 38 32 Q40 22 34 14 Q28 8 20 8 Q16 8 16 10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 42 L24 46" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="24" cy="46" rx="3" ry="2" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);
