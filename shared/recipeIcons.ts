// =====================================================
// SINGLE SOURCE OF TRUTH - Recipe Icons
// AI selects the most appropriate icon for each recipe
// Imported by: src/config/recipeIcons.ts, functions/api/chat.ts
// =====================================================

// All food/recipe icons (excluding UI and meta icons)
export const RECIPE_ICON_KEYS = [
  // === PASTA ===
  'Spaghetti', 'Penne', 'Fusilli', 'Rigatoni', 'Tagliatelle', 'Fettuccine',
  'Pappardelle', 'Lasagna', 'Gnocchi', 'Ravioli', 'Tortellini', 'Cappelletti',
  'Orecchiette', 'Scialatielli', 'Plin', 'Strangozzi', 'Umbricelli',

  // === RISO ===
  'Riso', 'Risotto', 'ChiccoRiso', 'Onigiri', 'Paella',

  // === CARNE ===
  'Pollo', 'Prosciutto', 'Ragu', 'FriedChicken', 'Tonkatsu', 'Porchetta',
  'Cotechino', 'Zampone', 'Norcineria', 'Capitone',

  // === PESCE ===
  'Salmone', 'Gambero', 'Gamberetto', 'Polpo', 'Calamaro', 'Vongola',
  'Cozza', 'Baccala', 'Sashimi', 'LobsterRoll',

  // === ZUPPE/BRODI ===
  'TortelliniInBrodo', 'Udon', 'BeefNoodle', 'HotPot', 'Couscous',

  // === STREET FOOD ===
  'PizzaMargherita', 'HotDog', 'Takoyaki', 'Gyoza', 'GuaBao', 'Tempura',
  'ScallionPancake', 'StinkyTofu', 'Zongzi', 'LuRouFan',

  // === DOLCI ===
  'Pandoro', 'Panettone', 'Struffoli', 'Pastiera', 'Sfogliatella', 'Baba',
  'Mochi', 'Crepe', 'CremeBrulee', 'Eclair', 'Macaron', 'Souffle',
  'Donut', 'ApplePie', 'Pancakes', 'Waffle', 'Sorbetto', 'Ghiacciolo',
  'ShavedIce', 'TaroBalls', 'Matcha',

  // === FORMAGGI/LATTICINI ===
  'Mozzarella', 'Tagliere',

  // === VERDURE ===
  'Carota', 'Zucchina', 'Patata', 'Cipolla',

  // === FRUTTA ===
  'Limone', 'Arancia', 'Lime', 'Pompelmo', 'Mandarino', 'Bergamotto',
  'Cedro', 'Kumquat', 'Mela', 'Banana', 'Melograno', 'Uva', 'FruttaSecca',

  // === BEVANDE ===
  'Caffe', 'BubbleTea', 'Limoncello', 'Spumante',

  // === INGREDIENTI/CONDIMENTI ===
  'Farina', 'Vaniglia', 'Cannella', 'Tartufo', 'Farro', 'Lenticchie',

  // === PIATTI COMPLETI ===
  'MacCheese', 'Quiche', 'Baguette', 'Croissant', 'TortaTesto',
  'LenticchieCotechino',

  // === CUCINA REGIONALE ===
  // Campania
  'Sfogliatella', 'Baba', 'PizzaMargherita', 'Pastiera',
  // Umbria
  'Strangozzi', 'TortaTesto', 'Porchetta', 'Tartufo', 'Umbricelli', 'Lenticchie', 'Norcineria', 'Farro',
  // Natale
  'Pandoro', 'Panettone', 'TortelliniInBrodo', 'Capitone', 'Struffoli', 'Baccala', 'Cotechino', 'Zampone',
  // Capodanno
  'Spumante', 'LenticchieCotechino', 'Uva', 'Melograno', 'FruttaSecca',
] as const;

// Remove duplicates and create final list
export const RECIPE_ICONS = [...new Set(RECIPE_ICON_KEYS)] as const;

export type RecipeIcon = typeof RECIPE_ICONS[number];

// Metadata for each icon (helps AI choose correctly)
export const RECIPE_ICON_META: Partial<Record<RecipeIcon, { keywords: string[] }>> = {
  // Pasta
  Spaghetti: { keywords: ['spaghetti', 'carbonara', 'cacio e pepe', 'aglio olio', 'pomodoro'] },
  Penne: { keywords: ['penne', 'arrabbiata', 'vodka', 'pasta corta'] },
  Fusilli: { keywords: ['fusilli', 'pasta fredda', 'insalata pasta'] },
  Rigatoni: { keywords: ['rigatoni', 'amatriciana', 'gricia', 'pajata'] },
  Tagliatelle: { keywords: ['tagliatelle', 'bolognese', 'ragu', 'funghi'] },
  Fettuccine: { keywords: ['fettuccine', 'alfredo', 'burro'] },
  Lasagna: { keywords: ['lasagna', 'lasagne', 'pasticcio', 'forno'] },
  Gnocchi: { keywords: ['gnocchi', 'patate', 'sorrentina', 'gorgonzola'] },
  Ravioli: { keywords: ['ravioli', 'ricotta', 'spinaci', 'burro salvia'] },
  Tortellini: { keywords: ['tortellini', 'bologna', 'brodo', 'panna'] },
  Cappelletti: { keywords: ['cappelletti', 'romagna', 'brodo'] },
  Orecchiette: { keywords: ['orecchiette', 'cime rapa', 'puglia', 'broccoli'] },
  Scialatielli: { keywords: ['scialatielli', 'amalfi', 'frutti mare', 'campania'] },
  Plin: { keywords: ['plin', 'agnolotti', 'piemonte', 'arrosto'] },

  // Risotti
  Risotto: { keywords: ['risotto', 'mantecato', 'milanese', 'zafferano', 'funghi'] },
  Paella: { keywords: ['paella', 'spagnola', 'valencia', 'frutti mare'] },

  // Carne
  Pollo: { keywords: ['pollo', 'chicken', 'arrosto', 'petto', 'coscia'] },
  Ragu: { keywords: ['ragu', 'bolognese', 'napoletano', 'carne'] },
  Porchetta: { keywords: ['porchetta', 'maiale', 'arrosto', 'umbria', 'lazio'] },
  Cotechino: { keywords: ['cotechino', 'modena', 'capodanno', 'lenticchie'] },

  // Pesce
  Salmone: { keywords: ['salmone', 'salmon', 'norvegese', 'affumicato'] },
  Gambero: { keywords: ['gambero', 'gamberoni', 'scampi', 'crostacei'] },
  Polpo: { keywords: ['polpo', 'octopus', 'alla luciana', 'gallega'] },
  Baccala: { keywords: ['baccala', 'stoccafisso', 'mantecato', 'vicentina'] },

  // Pizza
  PizzaMargherita: { keywords: ['pizza', 'margherita', 'napoletana', 'marinara'] },

  // Dolci
  Pandoro: { keywords: ['pandoro', 'verona', 'natale', 'zucchero velo'] },
  Panettone: { keywords: ['panettone', 'milano', 'natale', 'canditi', 'uvetta'] },
  Pastiera: { keywords: ['pastiera', 'napoli', 'pasqua', 'grano', 'ricotta'] },
  Sfogliatella: { keywords: ['sfogliatella', 'napoli', 'riccia', 'frolla'] },
  Baba: { keywords: ['baba', 'napoli', 'rum', 'lievitato'] },
  CremeBrulee: { keywords: ['creme brulee', 'crema catalana', 'caramello'] },

  // Bevande
  Caffe: { keywords: ['caffe', 'espresso', 'cappuccino', 'latte'] },
  Spumante: { keywords: ['spumante', 'prosecco', 'champagne', 'brindisi'] },
  Limoncello: { keywords: ['limoncello', 'digestivo', 'amalfi', 'sorrento'] },

  // Giapponese
  Sashimi: { keywords: ['sashimi', 'sushi', 'pesce crudo', 'giapponese'] },
  Tempura: { keywords: ['tempura', 'fritto', 'giapponese', 'verdure'] },
  Onigiri: { keywords: ['onigiri', 'riso', 'giapponese', 'triangolo'] },
  Mochi: { keywords: ['mochi', 'dolce', 'giapponese', 'riso glutinoso'] },
  Udon: { keywords: ['udon', 'noodles', 'giapponese', 'brodo'] },
  Takoyaki: { keywords: ['takoyaki', 'polpo', 'giapponese', 'osaka'] },
  Gyoza: { keywords: ['gyoza', 'ravioli', 'giapponese', 'maiale'] },

  // Taiwanese
  BubbleTea: { keywords: ['bubble tea', 'boba', 'taiwan', 'tapioca'] },
  GuaBao: { keywords: ['gua bao', 'bao', 'taiwan', 'maiale'] },
  LuRouFan: { keywords: ['lu rou fan', 'taiwan', 'maiale', 'riso'] },

  // Francese
  Croissant: { keywords: ['croissant', 'brioche', 'francese', 'colazione'] },
  Baguette: { keywords: ['baguette', 'pane', 'francese'] },
  Quiche: { keywords: ['quiche', 'lorraine', 'francese', 'torta salata'] },
  Crepe: { keywords: ['crepe', 'crespella', 'francese', 'nutella'] },
  Macaron: { keywords: ['macaron', 'francese', 'mandorle', 'colorati'] },
};

// Generate description for AI prompt
export const getIconEnumDescription = () =>
  RECIPE_ICONS.slice(0, 30).join(', ') + '... (and more food-specific icons)';
