import {
  // Europa
  FlagItalia,
  FlagFrancia,
  FlagGermania,
  FlagSpagna,
  FlagRegnoUnito,
  FlagIrlanda,
  FlagPaesiBassi,
  FlagBelgio,
  FlagAustria,
  FlagSvizzera,
  FlagPolonia,
  FlagGrecia,
  FlagSvezia,
  FlagNorvegia,
  FlagPortogallo,
  // Americhe
  FlagUSA,
  FlagCanada,
  FlagMessico,
  FlagBrasile,
  FlagArgentina,
  FlagPeru,
  FlagColombia,
  FlagCuba,
  // Asia
  FlagCina,
  FlagGiappone,
  FlagCorea,
  FlagIndia,
  FlagThailandia,
  FlagVietnam,
  FlagIndonesia,
  FlagFilippine,
  FlagTurchia,
  // Africa
  FlagEgitto,
  FlagMarocco,
  FlagEtiopia,
  // Oceania
  FlagAustralia,
  // Medio Oriente
  FlagLibano,
} from '../components/icons/flags';

// ============================================
// TEMI CUCINE DEL MONDO - Static themes, AI generates recipes
// ============================================

export interface CuisineTheme {
  id: string;
  name: string;
  country: string;
  Flag: React.ComponentType<{ size?: number }>;
  prompt: string;
}

export const CUISINE_THEMES: CuisineTheme[] = [
  // Europa
  { id: 'italia', name: 'Cucina Italiana', country: 'Italia', Flag: FlagItalia, prompt: 'Suggeriscimi un piatto tipico della cucina italiana tradizionale con la ricetta completa' },
  { id: 'francia', name: 'Cucina Francese', country: 'Francia', Flag: FlagFrancia, prompt: 'Suggeriscimi un piatto tipico della cucina francese con la ricetta completa' },
  { id: 'germania', name: 'Cucina Tedesca', country: 'Germania', Flag: FlagGermania, prompt: 'Suggeriscimi un piatto tipico della cucina tedesca con la ricetta completa' },
  { id: 'spagna', name: 'Cucina Spagnola', country: 'Spagna', Flag: FlagSpagna, prompt: 'Suggeriscimi un piatto tipico della cucina spagnola con la ricetta completa' },
  { id: 'uk', name: 'Cucina Britannica', country: 'UK', Flag: FlagRegnoUnito, prompt: 'Suggeriscimi un piatto tipico della cucina britannica con la ricetta completa' },
  { id: 'irlanda', name: 'Cucina Irlandese', country: 'Irlanda', Flag: FlagIrlanda, prompt: 'Suggeriscimi un piatto tipico della cucina irlandese con la ricetta completa' },
  { id: 'olanda', name: 'Cucina Olandese', country: 'Olanda', Flag: FlagPaesiBassi, prompt: 'Suggeriscimi un piatto tipico della cucina olandese con la ricetta completa' },
  { id: 'belgio', name: 'Cucina Belga', country: 'Belgio', Flag: FlagBelgio, prompt: 'Suggeriscimi un piatto tipico della cucina belga con la ricetta completa' },
  { id: 'austria', name: 'Cucina Austriaca', country: 'Austria', Flag: FlagAustria, prompt: 'Suggeriscimi un piatto tipico della cucina austriaca con la ricetta completa' },
  { id: 'svizzera', name: 'Cucina Svizzera', country: 'Svizzera', Flag: FlagSvizzera, prompt: 'Suggeriscimi un piatto tipico della cucina svizzera con la ricetta completa' },
  { id: 'polonia', name: 'Cucina Polacca', country: 'Polonia', Flag: FlagPolonia, prompt: 'Suggeriscimi un piatto tipico della cucina polacca con la ricetta completa' },
  { id: 'grecia', name: 'Cucina Greca', country: 'Grecia', Flag: FlagGrecia, prompt: 'Suggeriscimi un piatto tipico della cucina greca con la ricetta completa' },
  { id: 'svezia', name: 'Cucina Svedese', country: 'Svezia', Flag: FlagSvezia, prompt: 'Suggeriscimi un piatto tipico della cucina svedese con la ricetta completa' },
  { id: 'norvegia', name: 'Cucina Norvegese', country: 'Norvegia', Flag: FlagNorvegia, prompt: 'Suggeriscimi un piatto tipico della cucina norvegese con la ricetta completa' },
  { id: 'portogallo', name: 'Cucina Portoghese', country: 'Portogallo', Flag: FlagPortogallo, prompt: 'Suggeriscimi un piatto tipico della cucina portoghese con la ricetta completa' },
  // Americhe
  { id: 'usa', name: 'Cucina Americana', country: 'USA', Flag: FlagUSA, prompt: 'Suggeriscimi un piatto tipico della cucina americana con la ricetta completa' },
  { id: 'canada', name: 'Cucina Canadese', country: 'Canada', Flag: FlagCanada, prompt: 'Suggeriscimi un piatto tipico della cucina canadese con la ricetta completa' },
  { id: 'messico', name: 'Cucina Messicana', country: 'Messico', Flag: FlagMessico, prompt: 'Suggeriscimi un piatto tipico della cucina messicana con la ricetta completa' },
  { id: 'brasile', name: 'Cucina Brasiliana', country: 'Brasile', Flag: FlagBrasile, prompt: 'Suggeriscimi un piatto tipico della cucina brasiliana con la ricetta completa' },
  { id: 'argentina', name: 'Cucina Argentina', country: 'Argentina', Flag: FlagArgentina, prompt: 'Suggeriscimi un piatto tipico della cucina argentina con la ricetta completa' },
  { id: 'peru', name: 'Cucina Peruviana', country: 'Peru', Flag: FlagPeru, prompt: 'Suggeriscimi un piatto tipico della cucina peruviana con la ricetta completa' },
  { id: 'colombia', name: 'Cucina Colombiana', country: 'Colombia', Flag: FlagColombia, prompt: 'Suggeriscimi un piatto tipico della cucina colombiana con la ricetta completa' },
  { id: 'cuba', name: 'Cucina Cubana', country: 'Cuba', Flag: FlagCuba, prompt: 'Suggeriscimi un piatto tipico della cucina cubana con la ricetta completa' },
  // Asia
  { id: 'cina', name: 'Cucina Cinese', country: 'Cina', Flag: FlagCina, prompt: 'Suggeriscimi un piatto tipico della cucina cinese con la ricetta completa' },
  { id: 'giappone', name: 'Cucina Giapponese', country: 'Giappone', Flag: FlagGiappone, prompt: 'Suggeriscimi un piatto tipico della cucina giapponese con la ricetta completa' },
  { id: 'corea', name: 'Cucina Coreana', country: 'Corea', Flag: FlagCorea, prompt: 'Suggeriscimi un piatto tipico della cucina coreana con la ricetta completa' },
  { id: 'india', name: 'Cucina Indiana', country: 'India', Flag: FlagIndia, prompt: 'Suggeriscimi un piatto tipico della cucina indiana con la ricetta completa' },
  { id: 'thailandia', name: 'Cucina Thai', country: 'Thailandia', Flag: FlagThailandia, prompt: 'Suggeriscimi un piatto tipico della cucina thailandese con la ricetta completa' },
  { id: 'vietnam', name: 'Cucina Vietnamita', country: 'Vietnam', Flag: FlagVietnam, prompt: 'Suggeriscimi un piatto tipico della cucina vietnamita con la ricetta completa' },
  { id: 'indonesia', name: 'Cucina Indonesiana', country: 'Indonesia', Flag: FlagIndonesia, prompt: 'Suggeriscimi un piatto tipico della cucina indonesiana con la ricetta completa' },
  { id: 'filippine', name: 'Cucina Filippina', country: 'Filippine', Flag: FlagFilippine, prompt: 'Suggeriscimi un piatto tipico della cucina filippina con la ricetta completa' },
  { id: 'turchia', name: 'Cucina Turca', country: 'Turchia', Flag: FlagTurchia, prompt: 'Suggeriscimi un piatto tipico della cucina turca con la ricetta completa' },
  // Africa
  { id: 'egitto', name: 'Cucina Egiziana', country: 'Egitto', Flag: FlagEgitto, prompt: 'Suggeriscimi un piatto tipico della cucina egiziana con la ricetta completa' },
  { id: 'marocco', name: 'Cucina Marocchina', country: 'Marocco', Flag: FlagMarocco, prompt: 'Suggeriscimi un piatto tipico della cucina marocchina con la ricetta completa' },
  { id: 'etiopia', name: 'Cucina Etiope', country: 'Etiopia', Flag: FlagEtiopia, prompt: 'Suggeriscimi un piatto tipico della cucina etiope con la ricetta completa' },
  // Oceania
  { id: 'australia', name: 'Cucina Australiana', country: 'Australia', Flag: FlagAustralia, prompt: 'Suggeriscimi un piatto tipico della cucina australiana con la ricetta completa' },
  // Medio Oriente
  { id: 'libano', name: 'Cucina Libanese', country: 'Libano', Flag: FlagLibano, prompt: 'Suggeriscimi un piatto tipico della cucina libanese con la ricetta completa' },
];

// Get 3 themes that change every week (no AI cost - static selection)
export const getWeeklyThemes = (): CuisineTheme[] => {
  const today = new Date();
  // Change every 7 days (weekly)
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const week = Math.floor(dayOfYear / 7);
  const seed = today.getFullYear() * 100 + week;

  // Simple seeded shuffle
  const shuffled = [...CUISINE_THEMES].sort((a, b) => {
    const hashA = (seed * 31 + a.id.charCodeAt(0)) % 1000;
    const hashB = (seed * 31 + b.id.charCodeAt(0)) % 1000;
    return hashA - hashB;
  });

  // Return first 3
  return shuffled.slice(0, 3);
};
