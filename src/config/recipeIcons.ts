// ============================================
// RECIPE ICONS CONFIG (with component mapping)
// ============================================
// Imports icon keys from shared/ (single source of truth)
// Maps to React icon components for frontend use

import { RECIPE_ICONS, type RecipeIcon } from '../../shared/recipeIcons';
import * as Icons from '../components/ui/GustoIcons';

// Re-export from shared
export { RECIPE_ICONS, type RecipeIcon };

// Map icon name to component
const ICON_MAP: Record<string, React.FC<{ size?: number; color?: string; fill?: string }>> = {
  // Pasta
  Spaghetti: Icons.IconSpaghetti,
  Penne: Icons.IconPenne,
  Fusilli: Icons.IconFusilli,
  Rigatoni: Icons.IconRigatoni,
  Tagliatelle: Icons.IconTagliatelle,
  Fettuccine: Icons.IconFettuccine,
  Pappardelle: Icons.IconPappardelle,
  Lasagna: Icons.IconLasagna,
  Gnocchi: Icons.IconGnocchi,
  Ravioli: Icons.IconRavioli,
  Tortellini: Icons.IconTortellini,
  Cappelletti: Icons.IconCappelletti,
  Orecchiette: Icons.IconOrecchiette,
  Scialatielli: Icons.IconScialatielli,
  Plin: Icons.IconPlin,
  Strangozzi: Icons.IconStrangozzi,
  Umbricelli: Icons.IconUmbricelli,

  // Riso
  Riso: Icons.IconRiso,
  Risotto: Icons.IconRisotto,
  ChiccoRiso: Icons.IconChiccoRiso,
  Onigiri: Icons.IconOnigiri,
  Paella: Icons.IconPaella,

  // Carne
  Pollo: Icons.IconPollo,
  Prosciutto: Icons.IconProsciutto,
  Ragu: Icons.IconRagu,
  FriedChicken: Icons.IconFriedChicken,
  Tonkatsu: Icons.IconTonkatsu,
  Porchetta: Icons.IconPorchetta,
  Cotechino: Icons.IconCotechino,
  Zampone: Icons.IconZampone,
  Norcineria: Icons.IconNorcineria,
  Capitone: Icons.IconCapitone,

  // Pesce
  Salmone: Icons.IconSalmone,
  Gambero: Icons.IconGambero,
  Gamberetto: Icons.IconGamberetto,
  Polpo: Icons.IconPolpo,
  Calamaro: Icons.IconCalamaro,
  Vongola: Icons.IconVongola,
  Cozza: Icons.IconCozza,
  Baccala: Icons.IconBaccala,
  Sashimi: Icons.IconSashimi,
  LobsterRoll: Icons.IconLobsterRoll,

  // Zuppe
  TortelliniInBrodo: Icons.IconTortelliniInBrodo,
  Udon: Icons.IconUdon,
  BeefNoodle: Icons.IconBeefNoodle,
  HotPot: Icons.IconHotPot,
  Couscous: Icons.IconCouscous,

  // Street Food
  PizzaMargherita: Icons.IconPizzaMargherita,
  HotDog: Icons.IconHotDog,
  Takoyaki: Icons.IconTakoyaki,
  Gyoza: Icons.IconGyoza,
  GuaBao: Icons.IconGuaBao,
  Tempura: Icons.IconTempura,
  ScallionPancake: Icons.IconScallionPancake,
  StinkyTofu: Icons.IconStinkyTofu,
  Zongzi: Icons.IconZongzi,
  LuRouFan: Icons.IconLuRouFan,

  // Dolci
  Pandoro: Icons.IconPandoro,
  Panettone: Icons.IconPanettone,
  Struffoli: Icons.IconStruffoli,
  Pastiera: Icons.IconPastiera,
  Sfogliatella: Icons.IconSfogliatella,
  Baba: Icons.IconBaba,
  Mochi: Icons.IconMochi,
  Crepe: Icons.IconCrepe,
  CremeBrulee: Icons.IconCremeBrulee,
  Eclair: Icons.IconEclair,
  Macaron: Icons.IconMacaron,
  Souffle: Icons.IconSouffle,
  Donut: Icons.IconDonut,
  ApplePie: Icons.IconApplePie,
  Pancakes: Icons.IconPancakes,
  Waffle: Icons.IconWaffle,
  Sorbetto: Icons.IconSorbetto,
  Ghiacciolo: Icons.IconGhiacciolo,
  ShavedIce: Icons.IconShavedIce,
  TaroBalls: Icons.IconTaroBalls,
  Matcha: Icons.IconMatcha,

  // Formaggi
  Mozzarella: Icons.IconMozzarella,
  Tagliere: Icons.IconTagliere,

  // Verdure
  Carota: Icons.IconCarota,
  Zucchina: Icons.IconZucchina,
  Patata: Icons.IconPatata,
  Cipolla: Icons.IconCipolla,

  // Frutta
  Limone: Icons.IconLimone,
  Arancia: Icons.IconArancia,
  Lime: Icons.IconLime,
  Pompelmo: Icons.IconPompelmo,
  Mandarino: Icons.IconMandarino,
  Bergamotto: Icons.IconBergamotto,
  Cedro: Icons.IconCedro,
  Kumquat: Icons.IconKumquat,
  Mela: Icons.IconMela,
  Banana: Icons.IconBanana,
  Melograno: Icons.IconMelograno,
  Uva: Icons.IconUva,
  FruttaSecca: Icons.IconFruttaSecca,

  // Bevande
  Caffe: Icons.IconCaffe,
  BubbleTea: Icons.IconBubbleTea,
  Limoncello: Icons.IconLimoncello,
  Spumante: Icons.IconSpumante,

  // Ingredienti
  Farina: Icons.IconFarina,
  Vaniglia: Icons.IconVaniglia,
  Cannella: Icons.IconCannella,
  Tartufo: Icons.IconTartufo,
  Farro: Icons.IconFarro,
  Lenticchie: Icons.IconLenticchie,

  // Piatti
  MacCheese: Icons.IconMacCheese,
  Quiche: Icons.IconQuiche,
  Baguette: Icons.IconBaguette,
  Croissant: Icons.IconCroissant,
  TortaTesto: Icons.IconTortaTesto,
  LenticchieCotechino: Icons.IconLenticchieCotechino,
};

// Get icon component by name (with fallback)
export const getRecipeIcon = (iconName: string): React.FC<{ size?: number; color?: string; fill?: string }> => {
  return ICON_MAP[iconName] || Icons.IconRisotto; // Risotto as default fallback
};

// Check if icon exists
export const hasRecipeIcon = (iconName: string): boolean => {
  return iconName in ICON_MAP;
};
