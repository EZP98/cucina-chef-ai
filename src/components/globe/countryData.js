// Dati culinari dettagliati per paese
// Struttura: materie prime, prodotti tipici, piatti iconici, tecniche, curiosità

export const countryInfo = {
  "Italy": {
    flag: "IT",
    capital: "Roma",
    materiePrime: ["Pomodoro San Marzano", "Basilico", "Olio EVO", "Parmigiano Reggiano", "Tartufo", "Zafferano"],
    prodottiTipici: ["Prosciutto di Parma", "Mozzarella di Bufala", "Aceto Balsamico", "Pecorino Romano"],
    piattiIconici: ["Pizza Margherita", "Carbonara", "Risotto alla Milanese", "Ossobuco", "Tiramisù", "Gelato"],
    tecniche: ["Cottura al dente", "Mantecatura", "Sfoglia fatta a mano"],
    curiosita: "L'Italia ha oltre 300 tipi di pasta e ogni regione ha le sue ricette tradizionali."
  },
  "France": {
    flag: "FR",
    capital: "Parigi",
    materiePrime: ["Burro", "Foie Gras", "Tartufo nero", "Erbe di Provenza", "Vino"],
    prodottiTipici: ["Champagne", "Brie", "Camembert", "Roquefort", "Dijon Mustard"],
    piattiIconici: ["Coq au Vin", "Bouillabaisse", "Ratatouille", "Croissant", "Crème Brûlée", "Soufflé"],
    tecniche: ["Sauté", "Flambé", "Beurre blanc", "Julienne"],
    curiosita: "La cucina francese è patrimonio UNESCO dal 2010. Ha codificato le 5 salse madri."
  },
  "Spain": {
    flag: "ES",
    capital: "Madrid",
    materiePrime: ["Olio d'oliva", "Zafferano", "Paprika affumicata", "Chorizo", "Peperoni piquillo"],
    prodottiTipici: ["Jamón Ibérico", "Manchego", "Sidra", "Sherry"],
    piattiIconici: ["Paella Valenciana", "Gazpacho", "Tortilla Española", "Tapas", "Churros con Chocolate"],
    tecniche: ["A la plancha", "Sofrito", "Cocina al pil-pil"],
    curiosita: "La Spagna ha oltre 40.000 bar - il più alto rapporto bar/abitante al mondo."
  },
  "Japan": {
    flag: "JP",
    capital: "Tokyo",
    materiePrime: ["Riso Koshihikari", "Dashi", "Miso", "Wasabi fresco", "Alga Nori", "Sake"],
    prodottiTipici: ["Salsa di soia", "Mirin", "Tofu", "Umeboshi"],
    piattiIconici: ["Sushi", "Ramen", "Tempura", "Tonkatsu", "Mochi", "Matcha"],
    tecniche: ["Taglio sashimi", "Fermentazione koji", "Cottura a vapore"],
    curiosita: "Il Giappone ha più stelle Michelin di qualsiasi altro paese. L'umami fu scoperto qui nel 1908."
  },
  "China": {
    flag: "CN",
    capital: "Pechino",
    materiePrime: ["Salsa di soia", "Olio di sesamo", "Zenzero", "Anice stellato", "Pepe di Sichuan"],
    prodottiTipici: ["Tè", "Tofu", "Vino di riso", "Funghi shiitake"],
    piattiIconici: ["Dim Sum", "Anatra alla Pechinese", "Kung Pao Chicken", "Mapo Tofu", "Hot Pot"],
    tecniche: ["Wok hei", "Stir-fry", "Cottura a vapore", "Red cooking"],
    curiosita: "La Cina ha 8 cucine regionali distinte. I noodles furono inventati qui 4000 anni fa."
  },
  "India": {
    flag: "IN",
    capital: "Nuova Delhi",
    materiePrime: ["Curcuma", "Cardamomo", "Cumino", "Coriandolo", "Garam Masala", "Ghee"],
    prodottiTipici: ["Paneer", "Chutney", "Yogurt", "Tè chai"],
    piattiIconici: ["Butter Chicken", "Biryani", "Naan", "Samosa", "Dal", "Gulab Jamun"],
    tecniche: ["Tandoor", "Dum cooking", "Tempering (tadka)", "Bhuna"],
    curiosita: "L'India usa oltre 30 spezie diverse. Il curry è in realtà una miscela, non una spezia singola."
  },
  "Thailand": {
    flag: "TH",
    capital: "Bangkok",
    materiePrime: ["Lemongrass", "Galangal", "Lime kaffir", "Peperoncino Thai", "Latte di cocco"],
    prodottiTipici: ["Salsa di pesce", "Pasta di gamberi", "Riso jasmine", "Basilico thai"],
    piattiIconici: ["Pad Thai", "Curry Verde", "Tom Yum", "Som Tam", "Mango Sticky Rice"],
    tecniche: ["Bilanciamento 5 sapori", "Wok ad alta temperatura", "Pestatura al mortaio"],
    curiosita: "La cucina thai bilancia sempre 5 sapori: dolce, salato, acido, amaro, piccante."
  },
  "Vietnam": {
    flag: "VN",
    capital: "Hanoi",
    materiePrime: ["Erbe fresche", "Salsa di pesce", "Lime", "Menta", "Citronella"],
    prodottiTipici: ["Noodles di riso", "Carta di riso", "Caffè vietnamita"],
    piattiIconici: ["Pho", "Banh Mi", "Spring Rolls", "Bun Cha", "Banh Xeo"],
    tecniche: ["Brodo lento", "Involtini freschi", "Grill su carbone"],
    curiosita: "Il Vietnam è il secondo esportatore di caffè al mondo. Il pho richiede 12+ ore di brodo."
  },
  "Mexico": {
    flag: "MX",
    capital: "Città del Messico",
    materiePrime: ["Mais", "Peperoncino", "Cacao", "Avocado", "Pomodoro", "Fagioli neri"],
    prodottiTipici: ["Tortillas", "Salsa", "Queso Oaxaca", "Mezcal", "Tequila"],
    piattiIconici: ["Tacos al Pastor", "Guacamole", "Mole Poblano", "Pozole", "Churros", "Tamales"],
    tecniche: ["Nixtamalizzazione", "Tostatura del peperoncino", "Cottura nel comal"],
    curiosita: "Il Messico ha dato al mondo cioccolato, pomodoro, mais e vaniglia. Il mole ha 20+ ingredienti."
  },
  "Peru": {
    flag: "PE",
    capital: "Lima",
    materiePrime: ["Patata (3000+ varietà)", "Quinoa", "Aji amarillo", "Lime", "Mais viola"],
    prodottiTipici: ["Pisco", "Lucuma", "Chicha morada"],
    piattiIconici: ["Ceviche", "Lomo Saltado", "Aji de Gallina", "Causa", "Anticuchos"],
    tecniche: ["Marinatura acida (leche de tigre)", "Fusione Nikkei", "Cocina novoandina"],
    curiosita: "Il Perù ha oltre 3000 varietà di patate native. Lima è considerata la capitale gastronomica del Sud America."
  },
  "Greece": {
    flag: "GR",
    capital: "Atene",
    materiePrime: ["Olio d'oliva", "Origano", "Feta", "Olive Kalamata", "Miele"],
    prodottiTipici: ["Feta DOP", "Ouzo", "Mastika", "Yogurt greco"],
    piattiIconici: ["Moussaka", "Gyros", "Souvlaki", "Spanakopita", "Tzatziki", "Baklava"],
    tecniche: ["Grill su carbone", "Phyllo", "Marinatura con limone e erbe"],
    curiosita: "La Grecia consuma più olio d'oliva pro capite di qualsiasi altro paese al mondo."
  },
  "Turkey": {
    flag: "TR",
    capital: "Ankara",
    materiePrime: ["Yogurt", "Sumac", "Melograno", "Pistacchio", "Agnello"],
    prodottiTipici: ["Tè turco", "Caffè turco", "Lokum", "Ayran"],
    piattiIconici: ["Kebab", "Lahmacun", "Pide", "Meze", "Baklava", "Köfte"],
    tecniche: ["Grill verticale (döner)", "Cottura in terracotta", "Preparazione meze"],
    curiosita: "La Turchia è il ponte culinario tra Europa e Asia. Il caffè turco è patrimonio UNESCO."
  },
  "Morocco": {
    flag: "MA",
    capital: "Rabat",
    materiePrime: ["Ras el hanout", "Zafferano", "Cumino", "Limone conservato", "Argan"],
    prodottiTipici: ["Olio di argan", "Harissa", "Tè alla menta"],
    piattiIconici: ["Couscous", "Tajine", "Pastilla", "Harira", "Msemen"],
    tecniche: ["Cottura lenta in tajine", "Vapore per couscous", "Conserva di limoni"],
    curiosita: "Il couscous del venerdì è una tradizione sacra. Il tajine prende il nome dal suo recipiente conico."
  },
  "South Korea": {
    flag: "KR",
    capital: "Seoul",
    materiePrime: ["Gochugaru (peperoncino)", "Gochujang", "Doenjang", "Sesamo", "Aglio"],
    prodottiTipici: ["Kimchi", "Soju", "Gim (alghe)", "Tofu"],
    piattiIconici: ["Bibimbap", "Korean BBQ", "Kimchi Jjigae", "Tteokbokki", "Japchae", "Samgyeopsal"],
    tecniche: ["Fermentazione (jang)", "Grill al tavolo", "Banchan (contorni)"],
    curiosita: "I coreani servono sempre banchan (contorni) con ogni pasto. Il kimchi ha oltre 200 varietà."
  },
  "Germany": {
    flag: "DE",
    capital: "Berlino",
    materiePrime: ["Patate", "Cavolo", "Maiale", "Senape", "Rafano"],
    prodottiTipici: ["Würstel", "Pretzel", "Sauerkraut", "Birra"],
    piattiIconici: ["Schnitzel", "Bratwurst", "Currywurst", "Sauerbraten", "Strudel", "Bretzel"],
    tecniche: ["Affumicatura", "Fermentazione (crauti)", "Brasatura"],
    curiosita: "La Germania ha oltre 1500 tipi di würstel e 5000 tipi di birra. La legge sulla purezza della birra risale al 1516."
  },
  "United Kingdom": {
    flag: "GB",
    capital: "Londra",
    materiePrime: ["Agnello", "Manzo", "Patate", "Piselli", "Menta"],
    prodottiTipici: ["Cheddar", "Stilton", "Clotted cream", "Marmite"],
    piattiIconici: ["Fish & Chips", "Roast Beef", "Shepherd's Pie", "Full English Breakfast", "Scones"],
    tecniche: ["Roasting", "Afternoon Tea", "Pie making"],
    curiosita: "L'afternoon tea fu inventato dalla Duchessa di Bedford nel 1840. Il fish & chips nacque negli 1860."
  },
  "Portugal": {
    flag: "PT",
    capital: "Lisbona",
    materiePrime: ["Baccalà", "Olio d'oliva", "Coriandolo", "Piri-piri"],
    prodottiTipici: ["Vinho Verde", "Porto", "Queijo da Serra"],
    piattiIconici: ["Bacalhau à Brás", "Pastéis de Nata", "Francesinha", "Caldo Verde", "Sardine alla griglia"],
    tecniche: ["365 modi di cucinare il baccalà", "Cataplana"],
    curiosita: "I portoghesi dicono di avere 365 ricette di baccalà - una per ogni giorno dell'anno."
  },
  "Brazil": {
    flag: "BR",
    capital: "Brasilia",
    materiePrime: ["Fagioli neri", "Manioca", "Açaí", "Dendê", "Lime"],
    prodottiTipici: ["Cachaça", "Farofa", "Queijo coalho"],
    piattiIconici: ["Feijoada", "Churrasco", "Pão de Queijo", "Caipirinha", "Brigadeiro", "Açaí Bowl"],
    tecniche: ["Churrasco rodizio", "Moqueca baiana"],
    curiosita: "Il Brasile è il maggior produttore mondiale di caffè. La feijoada era originariamente cibo degli schiavi."
  },
  "Argentina": {
    flag: "AR",
    capital: "Buenos Aires",
    materiePrime: ["Manzo grass-fed", "Chimichurri", "Mate", "Dulce de leche"],
    prodottiTipici: ["Vino Malbec", "Provoleta", "Alfajores"],
    piattiIconici: ["Asado", "Empanadas", "Milanesa", "Choripán", "Dulce de Leche"],
    tecniche: ["Asado a la parrilla", "Mate cebado"],
    curiosita: "Gli argentini consumano più carne bovina pro capite al mondo. L'asado è un rituale sociale."
  },
  "Indonesia": {
    flag: "ID",
    capital: "Jakarta",
    materiePrime: ["Latte di cocco", "Galangal", "Tamarindo", "Kecap manis", "Sambal"],
    prodottiTipici: ["Tempeh", "Kecap manis", "Sambal oelek"],
    piattiIconici: ["Nasi Goreng", "Satay", "Rendang", "Gado-gado", "Bakso"],
    tecniche: ["Bumbu (paste di spezie)", "Grill su carbone", "Cottura nel cocco"],
    curiosita: "L'Indonesia ha oltre 17.000 isole, ognuna con tradizioni culinarie uniche. Il rendang fu votato piatto più delizioso del mondo."
  },
  "Russia": {
    flag: "RU",
    capital: "Mosca",
    materiePrime: ["Barbabietola", "Panna acida", "Aneto", "Segale", "Cavolo"],
    prodottiTipici: ["Vodka", "Caviale", "Kefir", "Kvas"],
    piattiIconici: ["Borscht", "Pelmeni", "Blini", "Beef Stroganoff", "Pirogi"],
    tecniche: ["Fermentazione", "Zuppe calde", "Conservazione invernale"],
    curiosita: "Il borscht esiste in oltre 30 varianti regionali. I blini erano originariamente cibo rituale pagano."
  },
  "Poland": {
    flag: "PL",
    capital: "Varsavia",
    materiePrime: ["Segale", "Patate", "Funghi selvatici", "Crauti", "Maiale"],
    prodottiTipici: ["Vodka polacca", "Oscypek", "Kielbasa"],
    piattiIconici: ["Pierogi", "Bigos", "Żurek", "Kotlet schabowy", "Pączki"],
    tecniche: ["Fermentazione acida", "Affumicatura", "Ripieni elaborati"],
    curiosita: "La Polonia ha oltre 100 varietà di pierogi. Lo żurek usa farina di segale fermentata."
  },
  "Australia": {
    flag: "AU",
    capital: "Canberra",
    materiePrime: ["Canguro", "Barramundi", "Macadamia", "Lemon myrtle", "Wattleseed"],
    prodottiTipici: ["Vegemite", "Tim Tam", "Lamington"],
    piattiIconici: ["Meat Pie", "Pavlova", "Barbie (BBQ)", "Fish & Chips", "Lamington"],
    tecniche: ["Bush tucker (cucina aborigena)", "BBQ australiano"],
    curiosita: "L'Australia ha ingredienti unici come il finger lime e il bush tomato. Il vegemite divide il mondo."
  },
  "United States of America": {
    flag: "US",
    capital: "Washington",
    materiePrime: ["Mais", "Manzo", "Burro di arachidi", "Sciroppo d'acero"],
    prodottiTipici: ["Ketchup", "BBQ sauce", "Bourbon"],
    piattiIconici: ["Hamburger", "BBQ", "Mac & Cheese", "Apple Pie", "Hot Dog", "Cheesecake"],
    tecniche: ["Slow smoking BBQ", "Deep frying", "Grill"],
    curiosita: "Gli USA hanno stili BBQ regionali completamente diversi: Texas, Carolina, Kansas City, Memphis."
  },
  "Canada": {
    flag: "CA",
    capital: "Ottawa",
    materiePrime: ["Sciroppo d'acero", "Salmone", "Mirtilli", "Aragosta"],
    prodottiTipici: ["Sciroppo d'acero", "Cheddar canadese", "Ice wine"],
    piattiIconici: ["Poutine", "Tourtière", "Nanaimo Bar", "BeaverTails", "Montreal Smoked Meat"],
    tecniche: ["Affumicatura", "Sugar shack"],
    curiosita: "Il Canada produce l'85% dello sciroppo d'acero mondiale. La poutine nacque in Quebec negli anni '50."
  },
  "Egypt": {
    flag: "EG",
    capital: "Il Cairo",
    materiePrime: ["Fave", "Ceci", "Cumino", "Molokheya", "Ta'ameya"],
    prodottiTipici: ["Tahina", "Dukkah", "Hibiscus"],
    piattiIconici: ["Koshari", "Falafel", "Ful Medames", "Molokhia", "Mahshi"],
    tecniche: ["Cottura lenta delle leguminose", "Frittura profonda"],
    curiosita: "Il koshari è il piatto nazionale - un mix di pasta, riso, lenticchie e salsa. Le fave si mangiano a colazione."
  },
  "Taiwan": {
    flag: "TW",
    capital: "Taipei",
    materiePrime: ["Basilico taiwanese", "Salsa di soia", "Vino di riso", "Anice stellato"],
    prodottiTipici: ["Bubble tea", "Salsa shacha"],
    piattiIconici: ["Bubble Tea", "Beef Noodle Soup", "Xiaolongbao", "Lu Rou Fan", "Gua Bao", "Stinky Tofu"],
    tecniche: ["Night market cooking", "Brodo rosso", "Ripieni di brodo"],
    curiosita: "Taiwan ha inventato il bubble tea negli anni '80. I night market sono patrimonio culinario."
  }
};

// Funzione per ottenere emoji bandiera da codice paese
export function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return "🌍";
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
