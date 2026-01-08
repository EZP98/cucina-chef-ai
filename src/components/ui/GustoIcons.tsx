const tokens = {
  ink: '#2D2A26',
  paper: '#FAF7F2',
};

// ============================================
// 🍽️ PIATTI SPECIFICI
// ============================================

// RISOTTO
export const IconRisotto = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 22 Q6 38 24 38 Q42 38 42 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Chicchi riso */}
    <ellipse cx="18" cy="22" rx="2" ry="1" stroke={color} strokeWidth="1"/>
    <ellipse cx="24" cy="24" rx="2" ry="1" stroke={color} strokeWidth="1"/>
    <ellipse cx="30" cy="22" rx="2" ry="1" stroke={color} strokeWidth="1"/>
  </svg>
);

// LASAGNA
export const IconLasagna = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="14" width="32" height="24" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Strati */}
    <path d="M8 22 L40 22" stroke={color} strokeWidth="1.3"/>
    <path d="M8 30 L40 30" stroke={color} strokeWidth="1.3"/>
    {/* Top ondulato */}
    <path d="M10 16 Q16 14 22 16 Q28 18 34 16 Q38 14 40 16" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// GNOCCHI
export const IconGnocchi = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Gnocchi */}
    <ellipse cx="16" cy="20" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="32" cy="20" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="32" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Righe forchetta */}
    <path d="M14 18 L18 18 M14 20 L18 20 M14 22 L18 22" stroke={color} strokeWidth="1"/>
    <path d="M30 18 L34 18 M30 20 L34 20 M30 22 L34 22" stroke={color} strokeWidth="1"/>
    <path d="M22 30 L26 30 M22 32 L26 32 M22 34 L26 34" stroke={color} strokeWidth="1"/>
  </svg>
);

// RAVIOLI
export const IconRavioli = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Raviolo */}
    <rect x="10" y="14" width="28" height="20" rx="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Bordo ondulato */}
    <path d="M10 18 Q14 16 18 18 Q22 20 26 18 Q30 16 34 18 Q38 20 38 18" stroke={color} strokeWidth="1.2"/>
    <path d="M10 30 Q14 32 18 30 Q22 28 26 30 Q30 32 34 30 Q38 28 38 30" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// PANCAKES
export const IconPancakes = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Stack */}
    <ellipse cx="24" cy="38" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="30" rx="14" ry="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="12" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Burro */}
    <rect x="20" y="16" width="8" height="4" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// WAFFLE
export const IconWaffle = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="12" width="32" height="24" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Griglia */}
    <path d="M16 12 L16 36 M24 12 L24 36 M32 12 L32 36" stroke={color} strokeWidth="1"/>
    <path d="M8 20 L40 20 M8 28 L40 28" stroke={color} strokeWidth="1"/>
  </svg>
);

// PAELLA
export const IconPaella = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Padella */}
    <ellipse cx="24" cy="30" rx="18" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M42 30 L48 28" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    {/* Gambero */}
    <path d="M18 28 Q16 26 18 24" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    {/* Cozza */}
    <ellipse cx="28" cy="28" rx="3" ry="2" stroke={color} strokeWidth="1.2"/>
    {/* Limone */}
    <circle cx="34" cy="26" r="2" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// COUSCOUS
export const IconCouscous = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 24 Q6 40 24 40 Q42 40 42 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Granelli */}
    <circle cx="16" cy="24" r="1.5" fill={color}/>
    <circle cx="22" cy="22" r="1.5" fill={color}/>
    <circle cx="28" cy="24" r="1.5" fill={color}/>
    <circle cx="32" cy="22" r="1.5" fill={color}/>
    <circle cx="24" cy="26" r="1.5" fill={color}/>
  </svg>
);

// GYOZA
export const IconGyoza = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Mezzaluna */}
    <path d="M8 28 Q24 8 40 28 Q24 32 8 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Pieghe */}
    <path d="M14 26 L16 22 M20 24 L22 20 M26 24 L28 20 M32 26 L34 22" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ============================================
// 🥬 VERDURE
// ============================================

// CIPOLLA
export const IconCipolla = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="14" ry="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Radici */}
    <path d="M20 40 L20 44 M24 40 L24 44 M28 40 L28 44" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    {/* Germoglio */}
    <path d="M24 16 L24 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// CAROTA
export const IconCarota = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M18 42 L24 16 L30 42 Q24 44 18 42" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 16 L18 8 M24 16 L24 6 M24 16 L30 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Linee */}
    <path d="M21 28 L27 28 M20 34 L28 34" stroke={color} strokeWidth="1"/>
  </svg>
);

// PATATA
export const IconPatata = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="26" rx="16" ry="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Occhi patata */}
    <circle cx="18" cy="24" r="1.5" fill={color}/>
    <circle cx="28" cy="22" r="1.5" fill={color}/>
    <circle cx="24" cy="30" r="1.5" fill={color}/>
  </svg>
);

// ZUCCHINA
export const IconZucchina = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 24 Q8 18 16 16 L36 16 Q44 18 44 24 Q44 30 36 32 L16 32 Q8 30 8 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Gambo */}
    <path d="M40 22 L44 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Strisce */}
    <path d="M14 20 L14 28 M22 18 L22 30 M30 18 L30 30" stroke={color} strokeWidth="1"/>
  </svg>
);

// FARINA
export const IconFarina = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Sacco */}
    <path d="M12 16 L12 40 L36 40 L36 16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 16 Q24 10 38 16" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Etichetta */}
    <rect x="18" y="24" width="12" height="10" stroke={color} strokeWidth="1.2" fill="none"/>
    <path d="M21 28 L27 28 M21 31 L27 31" stroke={color} strokeWidth="1"/>
  </svg>
);

// ============================================
// 🐟 PROTEINE
// ============================================

// SALMONE
export const IconSalmone = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Fetta */}
    <path d="M8 36 L24 8 L40 36 Q24 40 8 36" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Linee grasso */}
    <path d="M18 24 Q24 22 30 24" stroke={color} strokeWidth="1.2"/>
    <path d="M16 30 Q24 28 32 30" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// POLPO
export const IconPolpo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Testa */}
    <ellipse cx="24" cy="16" rx="12" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Occhi */}
    <circle cx="20" cy="16" r="2" stroke={color} strokeWidth="1.2"/>
    <circle cx="28" cy="16" r="2" stroke={color} strokeWidth="1.2"/>
    {/* Tentacoli */}
    <path d="M14 24 Q10 32 14 40" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 26 Q18 34 20 42" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M28 26 Q30 34 28 42" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M34 24 Q38 32 34 40" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// POLLO
export const IconPollo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Coscia */}
    <path d="M16 12 Q8 16 10 28 Q12 38 20 40 Q28 40 30 32 Q32 24 28 16 Q24 10 16 12" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Osso */}
    <path d="M20 40 L20 46" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="46" r="2" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// PROSCIUTTO
export const IconProsciutto = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Fetta ondulata */}
    <path d="M8 20 Q16 14 24 20 Q32 26 40 20 L40 32 Q32 38 24 32 Q16 26 8 32 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Grasso */}
    <path d="M8 26 Q16 20 24 26 Q32 32 40 26" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// ============================================
// 🍎 FRUTTA
// ============================================

// ARANCIA
export const IconArancia = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="26" r="14" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Foglia */}
    <path d="M24 12 L24 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 10 Q28 8 30 12" stroke={color} strokeWidth="1.3" fill="none"/>
    {/* Spicchi */}
    <path d="M24 14 L24 38 M14 20 L34 32 M14 32 L34 20" stroke={color} strokeWidth="1"/>
  </svg>
);

// MELA
export const IconMela = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 14 Q10 14 10 28 Q10 42 24 42 Q38 42 38 28 Q38 14 24 14" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Incavo */}
    <path d="M20 14 Q24 18 28 14" stroke={color} strokeWidth="1.3"/>
    {/* Gambo */}
    <path d="M24 14 L24 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Foglia */}
    <path d="M24 10 Q30 8 32 12" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

// BANANA
export const IconBanana = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 38 Q6 28 10 18 Q14 8 24 8 Q28 8 30 12 Q26 14 22 24 Q18 34 12 38" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Punta */}
    <path d="M30 12 L34 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ============================================
// ☕ ALTRO
// ============================================

// CAFFÈ (chicco)
export const IconCaffe = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="24" rx="12" ry="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Linea centrale */}
    <path d="M24 10 Q20 24 24 38" stroke={color} strokeWidth="1.3"/>
  </svg>
);

// CANNELLA
export const IconCannella = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Stecche arrotolate */}
    <path d="M10 14 L38 14 Q42 14 42 18 L42 22 Q42 26 38 26 L14 26" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 26 L38 26 Q42 26 42 30 L42 34 Q42 38 38 38 L10 38" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// VANIGLIA
export const IconVaniglia = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Stecca */}
    <path d="M12 8 Q10 24 12 40 Q14 44 16 40 Q18 24 16 8 Q14 4 12 8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 8 Q22 24 24 40 Q26 44 28 40 Q30 24 28 8 Q26 4 24 8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M36 8 Q34 24 36 40 Q38 44 40 40 Q42 24 40 8 Q38 4 36 8" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// ============================================
// 🍳 UTENSILI
// ============================================

// PENTOLA
export const IconPentola = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 18 L8 38 Q8 42 12 42 L36 42 Q40 42 40 38 L40 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 18 L42 18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Manici */}
    <path d="M8 24 L4 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M40 24 L44 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Coperchio */}
    <path d="M6 16 L42 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 16 L24 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// PADELLA
export const IconPadella = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="20" cy="28" rx="14" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Manico */}
    <path d="M34 28 L46 24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// FORNO
export const IconForno = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="8" width="36" height="32" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Sportello */}
    <rect x="10" y="18" width="28" height="18" stroke={color} strokeWidth="1.3" fill="none"/>
    {/* Manopole */}
    <circle cx="14" cy="12" r="2" stroke={color} strokeWidth="1.2"/>
    <circle cx="24" cy="12" r="2" stroke={color} strokeWidth="1.2"/>
    <circle cx="34" cy="12" r="2" stroke={color} strokeWidth="1.2"/>
    {/* Maniglia */}
    <path d="M18 20 L30 20" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// COLTELLO
export const IconColtello = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Lama */}
    <path d="M8 8 L8 32 Q8 36 12 36 L20 36 L20 8 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Manico */}
    <rect x="8" y="36" width="12" height="8" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// TAGLIERE
export const IconTagliere = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="12" width="36" height="28" rx="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Buco */}
    <circle cx="36" cy="18" r="3" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

// MESTOLO
export const IconMestolo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Cucchiaio */}
    <ellipse cx="24" cy="36" rx="10" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Manico */}
    <path d="M24 30 L24 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// BILANCIA
export const IconBilancia = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Base */}
    <rect x="8" y="34" width="32" height="8" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Piatto */}
    <ellipse cx="24" cy="24" rx="14" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Display */}
    <rect x="16" y="38" width="16" height="2" stroke={color} strokeWidth="1"/>
  </svg>
);

// TIMER
export const IconTimer = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="28" r="14" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Top */}
    <path d="M20 14 L28 14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 14 L24 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Lancette */}
    <path d="M24 28 L24 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 28 L30 28" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Centro */}
    <circle cx="24" cy="28" r="2" fill={color}/>
  </svg>
);

// ============================================
// 🏷️ BADGE / TAG
// ============================================

// VEGANO
export const IconVegano = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* V con foglia */}
    <path d="M16 16 L24 36 L32 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 22 Q32 18 34 22" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

// GLUTEN FREE
export const IconGlutenFree = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Spiga barrata */}
    <path d="M24 12 L24 36" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 16 L24 20 L28 16 M20 22 L24 26 L28 22 M20 28 L24 32 L28 28" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    {/* Barra */}
    <path d="M12 36 L36 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// PICCANTE
export const IconPiccante = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Fiamma */}
    <path d="M24 8 Q32 16 32 26 Q32 40 24 44 Q16 40 16 26 Q16 16 24 8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 20 Q28 26 26 34 Q24 38 22 34 Q20 26 24 20" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

// TEMPO (orologio)
export const IconTempo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 24 L24 14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 24 L32 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="2" fill={color}/>
  </svg>
);

// DIFFICOLTA (cappello chef)
export const IconDifficolta = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Cappello */}
    <path d="M12 28 Q8 28 8 20 Q8 10 18 10 Q20 6 24 6 Q28 6 30 10 Q40 10 40 20 Q40 28 36 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="12" y="28" width="24" height="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Pieghe */}
    <path d="M16 16 L16 26 M24 14 L24 26 M32 16 L32 26" stroke={color} strokeWidth="1"/>
  </svg>
);

// PORZIONI (persone)
export const IconPorzioni = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Persona 1 */}
    <circle cx="16" cy="14" r="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 40 Q8 26 16 26 Q24 26 24 40" stroke={color} strokeWidth="1.5" fill={fill}/>
    {/* Persona 2 */}
    <circle cx="32" cy="14" r="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 40 Q24 26 32 26 Q40 26 40 40" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// PREFERITO (cuore)
export const IconPreferito = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 40 Q8 28 8 18 Q8 10 16 10 Q22 10 24 16 Q26 10 32 10 Q40 10 40 18 Q40 28 24 40" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// SALVATO (bookmark)
export const IconSalvato = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 6 L36 6 L36 42 L24 34 L12 42 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// ============================================
// 🍋 AGRUMI
// ============================================

// LIMONE
export const IconLimone = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="24" rx="12" ry="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 8 L24 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 8 Q30 6 32 10" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// MANDARINO
export const IconMandarino = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="12" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 18 L24 14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 14 Q28 10 32 14" stroke={color} strokeWidth="1.3" fill={fill}/>
    <path d="M24 14 Q20 10 16 14" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// KUMQUAT
export const IconKumquat = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="26" rx="8" ry="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 14 L24 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 12 Q28 10 30 14" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// LIME
export const IconLime = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="26" r="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 14 L24 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 12 Q30 10 32 14" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// POMPELMO
export const IconPompelmo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="26" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 12 L24 40" stroke={color} strokeWidth="1"/>
    <path d="M10 26 L38 26" stroke={color} strokeWidth="1"/>
    <path d="M24 8 L24 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// CEDRO
export const IconCedro = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="26" rx="14" ry="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 10 L24 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 8 Q30 6 32 10" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="18" cy="22" r="1" fill={color}/>
    <circle cx="28" cy="30" r="1" fill={color}/>
    <circle cx="22" cy="34" r="1" fill={color}/>
  </svg>
);

// BERGAMOTTO
export const IconBergamotto = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="26" rx="11" ry="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 14 L24 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 12 Q28 8 30 12" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// ============================================
// 🦐 PESCE / MARE
// ============================================

// GAMBERETTO
export const IconGameretto = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M16 30 Q12 24 16 18 Q22 14 32 16 Q38 20 36 28 Q34 34 26 34 Q18 34 16 30" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 30 L10 34 L14 28" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="32" cy="20" r="1.5" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

// COZZA
export const IconCozza = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 8 Q40 16 40 32 Q40 42 24 44 Q8 42 8 32 Q8 16 24 8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 8 L24 44" stroke={color} strokeWidth="1"/>
  </svg>
);

// VONGOLA
export const IconVongola = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="16" ry="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 24 Q24 20 38 24" stroke={color} strokeWidth="1"/>
    <path d="M12 30 Q24 26 36 30" stroke={color} strokeWidth="1"/>
    <path d="M14 36 Q24 32 34 36" stroke={color} strokeWidth="1"/>
  </svg>
);

// CALAMARO
export const IconCalamaro = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="18" rx="10" ry="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 28 L14 40 M20 30 L18 42 M24 30 L24 44 M28 30 L30 42 M32 28 L34 40" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ============================================
// 🍚 RISO E CEREALI
// ============================================

// CHICCO DI RISO
export const IconChiccoRiso = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="24" rx="6" ry="14" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 12 L24 36" stroke={color} strokeWidth="1"/>
  </svg>
);

// ============================================
// 🥟 PASTE RIPIENE E FORMATI
// ============================================

// TORTELLINI
export const IconTortellini = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M14 28 Q8 20 16 14 Q24 10 32 14 Q40 20 34 28 Q28 34 24 32 Q20 34 14 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 20 Q24 24 28 20" stroke={color} strokeWidth="1.3"/>
    <path d="M14 28 Q12 32 16 34" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M34 28 Q36 32 32 34" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// CAPPELLETTI
export const IconCappelletti = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 10 L40 34 L8 34 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 10 L24 26" stroke={color} strokeWidth="1.2"/>
    <path d="M8 34 Q6 38 10 38 Q14 38 16 34" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M40 34 Q42 38 38 38 Q34 38 32 34" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

// PLIN
export const IconPlin = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="18" width="32" height="14" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 18 L14 32" stroke={color} strokeWidth="1.3"/>
    <path d="M24 18 L24 32" stroke={color} strokeWidth="1.3"/>
    <path d="M34 18 L34 32" stroke={color} strokeWidth="1.3"/>
  </svg>
);

// SCIALATIELLI
export const IconScialatielli = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 14 Q16 12 24 14 Q32 16 40 14 L42 18 Q34 20 26 18 Q18 16 10 18 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 24 Q14 22 22 24 Q30 26 38 24 L40 28 Q32 30 24 28 Q16 26 8 28 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 34 Q16 32 24 34 Q32 36 40 34 L42 38 Q34 40 26 38 Q18 36 10 38 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// TAGLIATELLE
export const IconTagliatelle = ({ size = 48, color = tokens.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 12 Q20 16 30 12 Q40 8 42 16 Q44 24 38 28 Q28 32 18 28 Q8 24 6 32 Q4 40 14 42" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M14 10 Q24 14 34 10 Q44 6 46 14 Q48 22 42 26 Q32 30 22 26 Q12 22 10 30 Q8 38 18 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

// PAPPARDELLE
export const IconPappardelle = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 12 Q16 16 26 12 Q36 8 42 14 L44 20 Q34 24 24 20 Q14 16 8 22 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M4 28 Q14 32 24 28 Q34 24 40 30 L42 36 Q32 40 22 36 Q12 32 6 38 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// FETTUCCINE
export const IconFettuccine = ({ size = 48, color = tokens.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 10 Q18 14 28 10 Q38 6 44 12" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M6 18 Q16 22 26 18 Q36 14 42 20" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M8 26 Q18 30 28 26 Q38 22 44 28" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M6 34 Q16 38 26 34 Q36 30 42 36" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// SPAGHETTI
export const IconSpaghetti = ({ size = 48, color = tokens.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 8 Q8 24 14 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M20 8 Q16 24 22 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M28 8 Q32 24 26 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M36 8 Q40 24 34 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

// ORECCHIETTE
export const IconOrecchiette = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="14" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="26" rx="8" ry="5" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="24" cy="24" rx="3" ry="2" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

// FUSILLI
export const IconFusilli = ({ size = 48, color = tokens.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M18 8 Q28 12 28 16 Q28 20 18 24 Q8 28 18 32 Q28 36 28 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M30 8 Q40 12 40 16 Q40 20 30 24 Q20 28 30 32 Q40 36 40 40" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

// PENNE
export const IconPenne = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 38 L32 10 L38 14 L18 42 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M32 10 L38 14" stroke={color} strokeWidth="1.5"/>
    <path d="M12 38 L18 42" stroke={color} strokeWidth="1.5"/>
    <path d="M18 32 L28 18 M22 36 L32 22" stroke={color} strokeWidth="1"/>
  </svg>
);

// RIGATONI
export const IconRigatoni = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="12" rx="12" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 12 L12 36" stroke={color} strokeWidth="1.5"/>
    <path d="M36 12 L36 36" stroke={color} strokeWidth="1.5"/>
    <ellipse cx="24" cy="36" rx="12" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 14 L16 34 M24 14 L24 34 M32 14 L32 34" stroke={color} strokeWidth="1"/>
  </svg>
);

// ============================================
// 🍦 GELATI E SORBETTI
// ============================================

// SORBETTO
export const IconSorbetto = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 20 L16 42 L32 42 L36 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="12" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="14" r="8" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// GHIACCIOLO
export const IconGhiacciolo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="14" y="6" width="20" height="28" rx="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 34 L24 44" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ============================================
// 🦐 MARE (rifatti)
// ============================================

// GAMBERO
export const IconGambero = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M36 16 Q44 24 36 32 Q28 40 16 36 Q8 32 12 24 Q16 16 28 16 Q32 16 36 16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="32" cy="22" r="2" fill={color}/>
    <path d="M16 36 L10 40 M14 34 L8 36 M12 30 L6 30" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// GAMBERETTO
export const IconGamberetto = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M32 18 Q38 24 32 30 Q26 36 18 32 Q12 28 14 24 Q18 18 28 18 Q30 18 32 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="28" cy="22" r="1.5" fill={color}/>
    <path d="M18 32 L14 36 M16 30 L12 32" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// RISO (bowl vista dall'alto)
export const IconRiso = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="24" r="10" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="20" cy="20" rx="2" ry="4" stroke={color} strokeWidth="1" fill="none" transform="rotate(-30 20 20)"/>
    <ellipse cx="28" cy="22" rx="2" ry="4" stroke={color} strokeWidth="1" fill="none" transform="rotate(20 28 22)"/>
    <ellipse cx="24" cy="28" rx="2" ry="4" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

// ============================================
// 🇺🇸 AMERICANA
// ============================================

// HOT DOG
export const IconHotDog = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 28 Q6 18 14 18 L34 18 Q42 18 42 28 Q42 38 34 38 L14 38 Q6 38 6 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 28 Q10 22 16 22 L32 22 Q38 22 38 28 Q38 34 32 34 L16 34 Q10 34 10 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 28 L18 26 L22 28 L26 26 L30 28 L34 26" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// DONUT
export const IconDonut = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 20 Q14 12 24 10 Q34 12 38 20" stroke={color} strokeWidth="1.3"/>
  </svg>
);

// APPLE PIE
export const IconApplePie = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="34" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 24 L36 24 M16 20 L16 28 M24 20 L24 28 M32 20 L32 28" stroke={color} strokeWidth="1"/>
  </svg>
);

// FRIED CHICKEN
export const IconFriedChicken = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M14 12 Q8 18 10 28 Q12 38 20 40 Q30 42 34 34 Q38 26 34 18 Q30 10 20 10 Q16 10 14 12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 40 L18 46" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 20 Q22 18 26 20 M16 28 Q22 26 28 28" stroke={color} strokeWidth="1"/>
  </svg>
);

// LOBSTER ROLL
export const IconLobsterRoll = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 32 Q8 22 16 22 L32 22 Q40 22 40 32 L40 36 L8 36 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 28 Q18 24 24 28 Q30 24 36 28" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M14 26 Q20 22 26 26 Q32 22 34 26" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

// MAC AND CHEESE
export const IconMacCheese = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 22 Q6 40 24 40 Q42 40 42 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 24 Q18 20 20 24 M24 22 Q26 18 28 22 M32 24 Q34 20 36 24" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// ============================================
// 🇫🇷 FRANCESE
// ============================================

// BAGUETTE
export const IconBaguette = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M4 28 Q4 24 8 22 L40 14 Q44 14 44 18 Q44 22 40 24 L8 32 Q4 32 4 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 22 L12 28 M22 20 L20 26 M30 18 L28 24" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// CROISSANT
export const IconCroissant = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 30 Q12 18 24 16 Q36 18 42 30 Q36 34 24 32 Q12 34 6 30" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 30 Q4 26 6 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M42 30 Q44 26 42 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// MACARON
export const IconMacaron = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="16" rx="12" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="12" y="20" width="24" height="6" stroke={color} strokeWidth="1.3" fill={fill}/>
    <ellipse cx="24" cy="32" rx="12" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// CREPE
export const IconCrepe = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 40 L24 8 L40 40 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 40 L24 20 L32 40" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// ECLAIR
export const IconEclair = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="18" width="32" height="14" rx="7" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 22 L40 22" stroke={color} strokeWidth="1.5"/>
    <rect x="10" y="18" width="28" height="4" rx="2" stroke={color} strokeWidth="1.2" fill={fill}/>
  </svg>
);

// QUICHE
export const IconQuiche = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 28 L10 38 L38 38 L42 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="28" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="18" cy="28" r="3" stroke={color} strokeWidth="1"/>
    <circle cx="30" cy="28" r="3" stroke={color} strokeWidth="1"/>
  </svg>
);

// SOUFFLE
export const IconSouffle = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 24 L14 42 L34 42 L36 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 24 Q12 8 24 8 Q36 8 36 24" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// CREME BRULEE
export const IconCremeBrulee = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="34" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 34 L8 28 Q8 24 24 24 Q40 24 40 28 L40 34" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 26 L18 28 L24 26 L30 28 L34 26" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// ============================================
// 🇹🇼 TAIWANESE
// ============================================

// BUBBLE TEA
export const IconBubbleTea = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M14 10 L12 40 Q12 44 24 44 Q36 44 36 40 L34 10 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="10" rx="10" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M28 6 L26 28" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="36" r="2" fill={color}/>
    <circle cx="24" cy="38" r="2" fill={color}/>
    <circle cx="30" cy="36" r="2" fill={color}/>
    <circle cx="21" cy="32" r="2" fill={color}/>
    <circle cx="27" cy="34" r="2" fill={color}/>
  </svg>
);

// GUA BAO
export const IconGuaBao = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 28 Q8 12 24 12 Q40 12 40 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 28 Q24 36 40 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 28 Q20 24 24 28 Q28 24 32 28" stroke={color} strokeWidth="1.3"/>
  </svg>
);

// SCALLION PANCAKE
export const IconScallionPancake = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 14 Q30 16 30 22 Q30 28 24 30 Q18 28 18 24 Q18 20 24 18" stroke={color} strokeWidth="1.2" fill="none"/>
    <path d="M16 20 L20 18 M28 26 L32 24 M22 32 L26 30" stroke={color} strokeWidth="1"/>
  </svg>
);

// LU ROU FAN
export const IconLuRouFan = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 22 Q6 40 24 40 Q42 40 42 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="10" ry="4" stroke={color} strokeWidth="1.3" fill={fill}/>
    <ellipse cx="32" cy="22" rx="4" ry="3" stroke={color} strokeWidth="1.2" fill={fill}/>
  </svg>
);

// BEEF NOODLE SOUP
export const IconBeefNoodle = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M4 20 Q4 40 24 40 Q44 40 44 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="20" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 24 Q14 30 12 36 M20 24 Q22 30 20 36 M28 24 Q30 30 28 36" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    <rect x="30" y="24" width="8" height="6" rx="1" stroke={color} strokeWidth="1.2" fill={fill}/>
  </svg>
);

// STINKY TOFU
export const IconStinkyTofu = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="20" width="14" height="14" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="26" y="20" width="14" height="14" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 16 Q12 12 14 8" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M24 14 Q22 10 24 6" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M34 16 Q32 12 34 8" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ZONGZI
export const IconZongzi = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 6 L40 38 L8 38 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 6 L24 38 M16 22 L32 22" stroke={color} strokeWidth="1.3"/>
  </svg>
);

// HOT POT
export const IconHotPot = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 20 L6 38 Q6 42 24 42 Q42 42 42 38 L42 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 20 L24 40" stroke={color} strokeWidth="1.5"/>
    <path d="M14 14 Q12 10 14 6 M34 14 Q32 10 34 6" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// SHAVED ICE
export const IconShavedIce = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 24 Q6 42 24 42 Q42 42 42 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 24 L42 24" stroke={color} strokeWidth="1.5"/>
    <path d="M10 24 Q16 8 24 12 Q32 8 38 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="16" cy="18" r="3" stroke={color} strokeWidth="1.2" fill={fill}/>
    <circle cx="28" cy="16" r="3" stroke={color} strokeWidth="1.2" fill={fill}/>
  </svg>
);

// TARO BALLS
export const IconTaroBalls = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 24 Q6 42 24 42 Q42 42 42 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="16" cy="26" r="4" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="26" cy="24" r="4" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="34" cy="28" r="3" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="20" cy="32" r="3" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// ============================================
// 🇯🇵 GIAPPONESE
// ============================================

// ONIGIRI
export const IconOnigiri = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 8 L40 38 Q40 42 24 42 Q8 42 8 38 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="16" y="28" width="16" height="12" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// TEMPURA
export const IconTempura = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 36 Q8 28 12 20 Q18 12 28 14 Q38 18 40 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M40 28 L46 24 L44 30 L48 32" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 28 Q20 26 24 28 M20 22 Q24 20 28 22" stroke={color} strokeWidth="1"/>
  </svg>
);

// MOCHI
export const IconMochi = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="14" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="10" ry="6" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// TAKOYAKI
export const IconTakoyaki = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="16" cy="18" r="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="32" cy="18" r="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="16" cy="34" r="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="32" cy="34" r="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 16 L18 20 M30 16 L34 20 M14 32 L18 36 M30 32 L34 36" stroke={color} strokeWidth="1"/>
  </svg>
);

// UDON
export const IconUdon = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M4 20 Q4 40 24 40 Q44 40 44 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M4 20 L44 20" stroke={color} strokeWidth="1.5"/>
    <path d="M14 24 Q16 32 14 38" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 24 Q26 32 24 38" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M34 24 Q36 32 34 38" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// SASHIMI
export const IconSashimi = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 32 L16 16 L24 32 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 32 L28 16 L36 32 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M32 32 L40 16 L44 32 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 36 L42 36" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// TONKATSU
export const IconTonkatsu = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="16" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 26 L14 30 M18 24 L20 28 M26 24 L28 28 M32 26 L34 30" stroke={color} strokeWidth="1"/>
    <path d="M16 28 L16 32 M24 26 L24 32 M32 28 L32 32" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// MATCHA
export const IconMatcha = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 20 Q8 40 24 40 Q40 40 40 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="16" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="10" ry="4" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

// ============================================
// 🍕 CAMPANA (Napoletana)
// ============================================

// PIZZA MARGHERITA
export const IconPizzaMargherita = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="18" cy="18" r="4" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="30" cy="20" r="4" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="24" cy="30" r="4" stroke={color} strokeWidth="1.2" fill="none"/>
    <path d="M14 28 Q16 26 18 28" stroke={color} strokeWidth="1"/>
    <path d="M32 28 Q34 26 36 28" stroke={color} strokeWidth="1"/>
  </svg>
);

// SFOGLIATELLA
export const IconSfogliatella = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 38 Q24 6 40 38 Q24 42 8 38" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M12 36 Q24 12 36 36" stroke={color} strokeWidth="1"/>
    <path d="M16 34 Q24 16 32 34" stroke={color} strokeWidth="1"/>
    <path d="M20 32 Q24 20 28 32" stroke={color} strokeWidth="1"/>
  </svg>
);

// BABA
export const IconBaba = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M16 18 Q16 8 24 8 Q32 8 32 18 L34 40 Q34 44 24 44 Q14 44 14 40 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 20 Q20 24 18 28 M30 20 Q28 24 30 28" stroke={color} strokeWidth="1"/>
  </svg>
);

// MOZZARELLA
export const IconMozzarella = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="14" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 16 Q20 20 20 24 Q20 28 24 28 Q28 28 28 24 Q28 20 24 16" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

// LIMONCELLO
export const IconLimoncello = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M20 8 L20 14 L16 18 L16 42 L32 42 L32 18 L28 14 L28 8 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 8 L30 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="30" r="6" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

// FRITTURA
export const IconFrittura = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 12 L24 44 L36 12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="18" cy="14" r="4" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="28" cy="12" r="4" stroke={color} strokeWidth="1.3" fill={fill}/>
    <circle cx="24" cy="18" r="3" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// PASTIERA
export const IconPastiera = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="34" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 34 L6 28 Q6 24 24 24 Q42 24 42 28 L42 34" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 28 L38 28 M14 24 L14 32 M24 24 L24 32 M34 24 L34 32" stroke={color} strokeWidth="1"/>
  </svg>
);

// RAGU
export const IconRagu = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 18 L8 38 Q8 42 24 42 Q40 42 40 38 L40 18" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="18" rx="16" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 24 L4 24 M40 24 L44 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 12 Q16 8 18 4 M30 12 Q28 8 30 4" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ============================================
// 🏔️ CUCINA UMBRA
// ============================================

// STRANGOZZI
export const IconStrangozzi = ({ size = 48, color = tokens.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 12 Q18 16 28 12 Q38 8 44 16" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M4 22 Q14 26 24 22 Q34 18 40 26" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M8 32 Q18 36 28 32 Q38 28 44 36" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// TORTA AL TESTO
export const IconTortaTesto = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="28" rx="18" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="18" ry="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 26 Q8 24 10 22 M38 26 Q40 24 38 22" stroke={color} strokeWidth="1.3"/>
  </svg>
);

// PORCHETTA
export const IconPorchetta = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="24" rx="18" ry="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="10" ry="6" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="24" cy="24" rx="4" ry="2" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M6 24 L10 24 M38 24 L42 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// TARTUFO NERO
export const IconTartufo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 8 Q36 12 38 24 Q36 36 24 40 Q12 36 10 24 Q12 12 24 8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="18" cy="20" r="2" fill={color}/>
    <circle cx="28" cy="18" r="1.5" fill={color}/>
    <circle cx="22" cy="28" r="2" fill={color}/>
    <circle cx="30" cy="26" r="1.5" fill={color}/>
    <circle cx="16" cy="30" r="1" fill={color}/>
  </svg>
);

// UMBRICELLI
export const IconUmbricelli = ({ size = 48, color = tokens.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 10 Q6 24 12 40" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M20 8 Q16 24 22 42" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M30 10 Q34 24 28 40" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M40 8 Q44 24 38 42" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

// LENTICCHIE DI CASTELLUCCIO
export const IconLenticchie = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 22 Q6 40 24 40 Q42 40 42 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="22" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="16" cy="24" rx="3" ry="2" fill={color}/>
    <ellipse cx="24" cy="22" rx="3" ry="2" fill={color}/>
    <ellipse cx="32" cy="24" rx="3" ry="2" fill={color}/>
    <ellipse cx="20" cy="28" rx="3" ry="2" fill={color}/>
    <ellipse cx="28" cy="28" rx="3" ry="2" fill={color}/>
  </svg>
);

// NORCINERIA
export const IconNorcineria = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="20" rx="14" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="10" cy="20" rx="4" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="20" cy="36" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="32" cy="34" rx="5" ry="3" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// FARRO
export const IconFarro = ({ size = 48, color = tokens.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 42 L24 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 16 L20 10 M24 16 L28 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 22 L18 16 M24 22 L30 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 28 L18 22 M24 28 L30 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 34 L20 28 M24 34 L28 28" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ============================================
// 🎄 NATALE ITALIANO
// ============================================

// PANDORO
export const IconPandoro = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 4 L28 16 L40 12 L32 22 L44 28 L32 32 L40 42 L28 36 L24 48 L20 36 L8 42 L16 32 L4 28 L16 22 L8 12 L20 16 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="1" strokeDasharray="2 2" fill="none"/>
  </svg>
);

// PANETTONE
export const IconPanettone = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 28 Q12 8 24 8 Q36 8 36 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 28 L10 40 L38 40 L38 28" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M10 28 L38 28" stroke={color} strokeWidth="1.5"/>
    <circle cx="20" cy="18" r="2" stroke={color} strokeWidth="1" fill="none"/>
    <circle cx="28" cy="22" r="2" stroke={color} strokeWidth="1" fill="none"/>
    <circle cx="24" cy="14" r="1.5" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

// TORTELLINI IN BRODO
export const IconTortelliniInBrodo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M4 20 Q4 40 24 40 Q44 40 44 20" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="20" rx="20" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 24 Q16 20 20 24 Q18 28 14 24" stroke={color} strokeWidth="1.3" fill={fill}/>
    <path d="M24 22 Q26 18 30 22 Q28 26 24 22" stroke={color} strokeWidth="1.3" fill={fill}/>
    <path d="M32 26 Q34 22 38 26 Q36 30 32 26" stroke={color} strokeWidth="1.3" fill={fill}/>
  </svg>
);

// CAPITONE
export const IconCapitone = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 24 Q16 16 24 24 Q32 32 40 24" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="40" cy="24" r="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="42" cy="23" r="1" fill={color}/>
  </svg>
);

// STRUFFOLI
export const IconStruffoli = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="16" cy="36" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="28" cy="36" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="40" cy="36" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="22" cy="28" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="34" cy="28" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="28" cy="20" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="8" cy="36" r="4" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// BACCALA
export const IconBaccala = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 24 Q16 14 32 14 Q42 14 44 24 Q42 34 32 34 Q16 34 8 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 24 L4 18 M8 24 L4 30" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 20 L20 28 M28 18 L28 30 M36 20 L36 28" stroke={color} strokeWidth="1"/>
  </svg>
);

// COTECHINO
export const IconCotechino = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 24 Q8 16 16 16 L36 16 Q44 16 44 24 Q44 32 36 32 L16 32 Q8 32 8 24" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 16 L14 32 M22 16 L22 32 M30 16 L30 32 M38 16 L38 32" stroke={color} strokeWidth="1"/>
  </svg>
);

// ZAMPONE
export const IconZampone = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 14 Q8 14 8 20 L8 34 Q8 38 14 38 L20 38 L20 44 L28 44 L28 38 L34 38 Q40 38 40 34 L40 20 Q40 14 36 14 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M8 22 L40 22 M8 30 L40 30" stroke={color} strokeWidth="1"/>
  </svg>
);

// ============================================
// 🎆 CAPODANNO ITALIANO
// ============================================

// SPUMANTE
export const IconSpumante = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M20 6 L20 14 L16 18 L16 42 L32 42 L32 18 L28 14 L28 6 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 6 L30 6" stroke={color} strokeWidth="1.5"/>
    <ellipse cx="24" cy="2" rx="3" ry="2" stroke={color} strokeWidth="1.2" fill={fill}/>
    <circle cx="22" cy="30" r="1" fill={color}/>
    <circle cx="26" cy="34" r="1" fill={color}/>
    <circle cx="24" cy="26" r="1" fill={color}/>
  </svg>
);

// LENTICCHIE E COTECHINO
export const IconLenticchieCotechino = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="36" rx="18" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="16" cy="34" rx="2" ry="1.5" fill={color}/>
    <ellipse cx="22" cy="36" rx="2" ry="1.5" fill={color}/>
    <ellipse cx="28" cy="34" rx="2" ry="1.5" fill={color}/>
    <ellipse cx="32" cy="28" rx="6" ry="4" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// UVA
export const IconUva = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="18" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="18" cy="26" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="30" cy="26" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="14" cy="34" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="34" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="34" cy="34" r="5" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 13 L24 6 L28 4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// MELOGRANO
export const IconMelograno = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="26" r="14" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 12 L20 8 M24 12 L24 6 M28 12 L28 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="20" cy="24" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="28" cy="24" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="24" cy="32" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
  </svg>
);

// FRUTTA SECCA
export const IconFruttaSecca = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="16" cy="20" rx="8" ry="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M16 14 L16 26" stroke={color} strokeWidth="1"/>
    <ellipse cx="34" cy="20" rx="6" ry="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="36" r="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 32 Q24 28 28 32" stroke={color} strokeWidth="1.3"/>
  </svg>
);

// ============================================
// 📱 APP UI ICONS
// ============================================

// RICETTE / LIBRO
export const IconRicette = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 8 L8 40 Q8 42 10 42 L38 42 Q40 42 40 40 L40 8 Q40 6 38 6 L10 6 Q8 6 8 8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M14 6 L14 42" stroke={color} strokeWidth="1.5"/>
    <path d="M20 14 L34 14 M20 20 L34 20 M20 26 L30 26" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// CHAT / MESSAGGIO
export const IconChat = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 10 L40 10 Q42 10 42 12 L42 32 Q42 34 40 34 L16 34 L10 42 L10 34 L8 34 Q6 34 6 32 L6 12 Q6 10 8 10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="16" cy="22" r="2" fill={color}/>
    <circle cx="24" cy="22" r="2" fill={color}/>
    <circle cx="32" cy="22" r="2" fill={color}/>
  </svg>
);

// DISPENSA
export const IconDispensa = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="6" width="32" height="38" rx="2" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 6 L24 44" stroke={color} strokeWidth="1.5"/>
    <path d="M8 18 L24 18 M24 18 L40 18" stroke={color} strokeWidth="1.3"/>
    <path d="M8 30 L24 30 M24 30 L40 30" stroke={color} strokeWidth="1.3"/>
    <circle cx="20" cy="24" r="1.5" fill={color}/>
    <circle cx="28" cy="24" r="1.5" fill={color}/>
  </svg>
);

// MONDO / GLOBE
export const IconMondo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <ellipse cx="24" cy="24" rx="7" ry="16" stroke={color} strokeWidth="1.3"/>
    <path d="M8 24 L40 24" stroke={color} strokeWidth="1.3"/>
    <path d="M11 16 C16 16.5, 32 16.5, 37 16" stroke={color} strokeWidth="1.2"/>
    <path d="M11 32 C16 31.5, 32 31.5, 37 32" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// MACCHINA FOTOGRAFICA
export const IconCamera = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="14" width="36" height="26" rx="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="24" cy="27" r="9" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="24" cy="27" r="5" stroke={color} strokeWidth="1.3" fill="none"/>
    <rect x="16" y="8" width="16" height="6" rx="1" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// CERCA / LENTE
export const IconCerca = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="22" cy="22" r="12" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M32 32 L42 42" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// PREFERITI / CUORE
export const IconCuore = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 42 Q6 28 6 18 Q6 8 16 8 Q22 8 24 14 Q26 8 32 8 Q42 8 42 18 Q42 28 24 42" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// PROFILO / UTENTE
export const IconProfilo = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="16" r="10" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M6 44 Q6 30 24 30 Q42 30 42 44" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// IMPOSTAZIONI / INGRANAGGIO
export const IconImpostazioni = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="8" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 4 L24 10 M24 38 L24 44 M4 24 L10 24 M38 24 L44 24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 10 L14 14 M34 34 L38 38 M38 10 L34 14 M14 34 L10 38" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// HOME
export const IconHome = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 24 L24 8 L40 24" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22 L12 40 L36 40 L36 22" stroke={color} strokeWidth="1.5" fill={fill}/>
    <rect x="20" y="28" width="8" height="12" stroke={color} strokeWidth="1.3" fill="none"/>
  </svg>
);

// AGGIUNGI / PLUS
export const IconAggiungi = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M24 14 L24 34 M14 24 L34 24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// CARRELLO / SPESA
export const IconCarrello = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 8 L12 8 L18 32 L40 32 L44 14 L16 14" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="40" r="4" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="36" cy="40" r="4" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// TIMER / OROLOGIO
export const IconTimerApp = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="26" r="16" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 6 L28 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 6 L24 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 26 L24 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 26 L32 26" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="26" r="2" fill={color}/>
  </svg>
);

// CONDIVIDI
export const IconCondividi = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="36" cy="12" r="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="12" cy="24" r="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <circle cx="36" cy="36" r="6" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M18 21 L30 15 M18 27 L30 33" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// FILTRO
export const IconFiltro = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 10 L42 10 L28 26 L28 40 L20 44 L20 26 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);

// LISTA / MENU
export const IconLista = ({ size = 48, color = tokens.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M10 12 L38 12 M10 24 L38 24 M10 36 L38 36" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="6" cy="12" r="2" fill={color}/>
    <circle cx="6" cy="24" r="2" fill={color}/>
    <circle cx="6" cy="36" r="2" fill={color}/>
  </svg>
);

// NOTIFICHE / CAMPANA
export const IconNotifiche = ({ size = 48, color = tokens.ink, fill = tokens.paper }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M12 22 Q12 12 24 10 Q36 12 36 22 L36 32 L40 36 L8 36 L12 32 Z" stroke={color} strokeWidth="1.5" fill={fill}/>
    <path d="M20 36 Q20 42 24 42 Q28 42 28 36" stroke={color} strokeWidth="1.5"/>
    <circle cx="24" cy="10" r="3" stroke={color} strokeWidth="1.5" fill={fill}/>
  </svg>
);
