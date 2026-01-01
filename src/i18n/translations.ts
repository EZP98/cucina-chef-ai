// Translations for Gusto app
// Supported languages: it, en, zh-TW, fr, ja, es

export type Language = 'it' | 'en' | 'zh-TW' | 'fr' | 'ja' | 'es';

export const languageNames: Record<Language, string> = {
  'it': 'Italiano',
  'en': 'English',
  'zh-TW': '繁體中文',
  'fr': 'Français',
  'ja': '日本語',
  'es': 'Español',
};

export const translations: Record<Language, Record<string, string>> = {
  // ============================================
  // ITALIANO
  // ============================================
  'it': {
    // Header titles
    'header.home': 'Cosa cuciniamo?',
    'header.chat': 'Chat con Gusto',
    'header.recipes': 'Le tue ricette',
    'header.pantry': 'La tua dispensa',

    // Navigation
    'nav.chat': 'Chat',
    'nav.recipes': 'Ricette',
    'nav.pantry': 'Dispensa',
    'nav.menu': 'Menu',

    // Home
    'home.placeholder': 'Dimmi cosa hai voglia di mangiare, cosa c\'è nel frigo, o chiedi un consiglio...',
    'home.inputPlaceholder': 'es: "ho delle uova e pomodori"',
    'home.ask': 'Chiedi',
    'home.thinking': 'Penso...',
    'home.suggested': 'suggeriti per te',
    'home.expiring': 'in scadenza!',

    // Chat
    'chat.newChat': 'Nuova chat',
    'chat.startConversation': 'Inizia una conversazione!',
    'chat.askMe': 'Chiedimi una ricetta, consigli sugli ingredienti, o cosa cucinare stasera...',
    'chat.send': 'Invia',
    'chat.thinking': 'Penso...',
    'chat.inputPlaceholder': 'Scrivi un messaggio...',
    'chat.menuPlaceholder': 'Descrivi il menu che vuoi...',
    'chat.dish': 'Piatto',
    'chat.menu': 'Menu',
    'chat.noConversations': 'Nessuna conversazione',
    'chat.startFirst': 'Inizia la tua prima chat con Gusto',
    'chat.recentChats': 'Le tue chat',
    'chat.allChats': 'Tutte le chat',

    // Skills
    'skill.stellato': 'Stellato',
    'skill.stellatoDesc': 'ricette da chef stellato',
    'skill.recupero': 'Recupero',
    'skill.recuperoDesc': 'riusa gli avanzi',

    // Recipes
    'recipes.favorites': 'preferite',
    'recipes.all': 'tutte le ricette',
    'recipes.add': '+ aggiungi ricetta',
    'recipes.empty': 'Nessuna ricetta salvata',
    'recipes.emptyHint': 'Chiedi una ricetta in chat e salvala qui',
    'recipes.loginRequired': 'Accedi per salvare le ricette',
    'recipes.saved': 'Salvata nel ricettario',
    'recipes.save': 'Salva nel ricettario',

    // Recipe detail
    'recipe.ingredients': 'ingredienti',
    'recipe.steps': 'preparazione',

    // Pantry
    'pantry.takePhoto': 'Scatta una foto',
    'pantry.analyzing': 'Analizzo la foto...',
    'pantry.aiRecognizes': 'L\'AI riconosce gli ingredienti automaticamente',
    'pantry.ingredients': 'ingredienti',
    'pantry.expiring': 'in scadenza',
    'pantry.useNow': 'usa presto!',
    'pantry.inPantry': 'in dispensa',
    'pantry.shoppingList': 'lista della spesa',
    'pantry.empty': 'La tua dispensa e vuota',
    'pantry.emptyHint': 'Scatta una foto per aggiungere ingredienti',
    'pantry.suggestDishes': 'Cosa posso cucinare?',

    // Auth
    'auth.login': 'accedi',
    'auth.register': 'registrati',
    'auth.loginToGusto': 'accedi a Gusto',
    'auth.createAccount': 'crea il tuo account',
    'auth.name': 'nome (opzionale)',
    'auth.namePlaceholder': 'il tuo nome',
    'auth.email': 'email',
    'auth.emailPlaceholder': 'la tua email',
    'auth.password': 'password',
    'auth.passwordPlaceholder': 'la tua password',
    'auth.noAccount': 'non hai un account?',
    'auth.haveAccount': 'hai già un account?',
    'auth.loading': 'un attimo...',
    'auth.logout': 'esci',
    'auth.syncedChats': 'chat sincronizzate',

    // Diet options
    'diet.none': 'Nessuna dieta',
    'diet.lowcarb': 'Low carb',
    'diet.keto': 'Keto',
    'diet.vegetarian': 'Vegetariano',
    'diet.vegan': 'Vegano',
    'diet.glutenfree': 'Senza glutine',
    'diet.lactosefree': 'Senza lattosio',
    'diet.highprotein': 'Proteico',

    // Misc
    'misc.poweredByAi': 'powered by AI',
    'misc.favorite': 'preferita',
  },

  // ============================================
  // ENGLISH
  // ============================================
  'en': {
    'header.home': 'What shall we cook?',
    'header.chat': 'Chat with Gusto',
    'header.recipes': 'Your recipes',
    'header.pantry': 'Your pantry',

    'nav.chat': 'Chat',
    'nav.recipes': 'Recipes',
    'nav.pantry': 'Pantry',
    'nav.menu': 'Menu',

    'home.placeholder': 'Tell me what you\'d like to eat, what\'s in your fridge, or ask for advice...',
    'home.inputPlaceholder': 'e.g. "I have eggs and tomatoes"',
    'home.ask': 'Ask',
    'home.thinking': 'Thinking...',
    'home.suggested': 'suggested for you',
    'home.expiring': 'expiring soon!',

    'chat.newChat': 'New chat',
    'chat.startConversation': 'Start a conversation!',
    'chat.askMe': 'Ask me for a recipe, ingredient tips, or what to cook tonight...',
    'chat.send': 'Send',
    'chat.thinking': 'Thinking...',
    'chat.inputPlaceholder': 'Write a message...',
    'chat.menuPlaceholder': 'Describe the menu you want...',
    'chat.dish': 'Dish',
    'chat.menu': 'Menu',
    'chat.noConversations': 'No conversations',
    'chat.startFirst': 'Start your first chat with Gusto',
    'chat.recentChats': 'Your chats',
    'chat.allChats': 'All chats',

    // Skills
    'skill.stellato': 'Starred',
    'skill.stellatoDesc': 'Michelin-star recipes',
    'skill.recupero': 'Salvage',
    'skill.recuperoDesc': 'reuse leftovers',

    'recipes.favorites': 'favorites',
    'recipes.all': 'all recipes',
    'recipes.add': '+ add recipe',
    'recipes.empty': 'No saved recipes',
    'recipes.emptyHint': 'Ask for a recipe in chat and save it here',
    'recipes.loginRequired': 'Login to save recipes',
    'recipes.saved': 'Saved to cookbook',
    'recipes.save': 'Save to cookbook',

    // Recipe detail
    'recipe.ingredients': 'ingredients',
    'recipe.steps': 'preparation',

    'pantry.takePhoto': 'Take a photo',
    'pantry.analyzing': 'Analyzing photo...',
    'pantry.aiRecognizes': 'AI automatically recognizes ingredients',
    'pantry.ingredients': 'ingredients',
    'pantry.expiring': 'expiring',
    'pantry.useNow': 'use soon!',
    'pantry.inPantry': 'in pantry',
    'pantry.shoppingList': 'shopping list',
    'pantry.empty': 'Your pantry is empty',
    'pantry.emptyHint': 'Take a photo to add ingredients',
    'pantry.suggestDishes': 'What can I cook?',

    'auth.login': 'login',
    'auth.register': 'register',
    'auth.loginToGusto': 'login to Gusto',
    'auth.createAccount': 'create your account',
    'auth.name': 'name (optional)',
    'auth.namePlaceholder': 'your name',
    'auth.email': 'email',
    'auth.emailPlaceholder': 'your email',
    'auth.password': 'password',
    'auth.passwordPlaceholder': 'your password',
    'auth.noAccount': 'don\'t have an account?',
    'auth.haveAccount': 'already have an account?',
    'auth.loading': 'just a moment...',
    'auth.logout': 'logout',
    'auth.syncedChats': 'chats synced',

    'diet.none': 'No diet',
    'diet.lowcarb': 'Low carb',
    'diet.keto': 'Keto',
    'diet.vegetarian': 'Vegetarian',
    'diet.vegan': 'Vegan',
    'diet.glutenfree': 'Gluten free',
    'diet.lactosefree': 'Lactose free',
    'diet.highprotein': 'High protein',

    'misc.poweredByAi': 'powered by AI',
    'misc.favorite': 'favorite',
  },

  // ============================================
  // 繁體中文 (Traditional Chinese)
  // ============================================
  'zh-TW': {
    'header.home': '今天做什麼？',
    'header.chat': '與 Gusto 聊天',
    'header.recipes': '你的食譜',
    'header.pantry': '你的食材庫',

    'nav.chat': '聊天',
    'nav.recipes': '食譜',
    'nav.pantry': '食材庫',
    'nav.menu': '菜單',

    'home.placeholder': '告訴我你想吃什麼、冰箱裡有什麼，或者請我給建議...',
    'home.inputPlaceholder': '例如：「我有雞蛋和番茄」',
    'home.ask': '詢問',
    'home.thinking': '思考中...',
    'home.suggested': '為你推薦',
    'home.expiring': '即將過期！',

    'chat.newChat': '新聊天',
    'chat.startConversation': '開始對話！',
    'chat.askMe': '問我食譜、食材建議，或今晚吃什麼...',
    'chat.send': '發送',
    'chat.thinking': '思考中...',
    'chat.inputPlaceholder': '輸入訊息...',
    'chat.menuPlaceholder': '描述你想要的菜單...',
    'chat.dish': '單品',
    'chat.menu': '菜單',
    'chat.noConversations': '沒有對話',
    'chat.startFirst': '開始你與 Gusto 的第一次對話',
    'chat.recentChats': '你的對話',
    'chat.allChats': '所有對話',

    // Skills
    'skill.stellato': '星級',
    'skill.stellatoDesc': '米其林星級食譜',
    'skill.recupero': '剩食利用',
    'skill.recuperoDesc': '重新利用剩餘食材',

    'recipes.favorites': '收藏',
    'recipes.all': '所有食譜',
    'recipes.add': '+ 新增食譜',
    'recipes.empty': '沒有已儲存的食譜',
    'recipes.emptyHint': '在聊天中詢問食譜並儲存到這裡',
    'recipes.loginRequired': '登入以儲存食譜',
    'recipes.saved': '已儲存到食譜本',
    'recipes.save': '儲存到食譜本',

    // Recipe detail
    'recipe.ingredients': '食材',
    'recipe.steps': '做法',

    'pantry.takePhoto': '拍照',
    'pantry.analyzing': '分析照片中...',
    'pantry.aiRecognizes': 'AI 自動辨識食材',
    'pantry.ingredients': '食材',
    'pantry.expiring': '即將過期',
    'pantry.useNow': '盡快使用！',
    'pantry.inPantry': '食材庫存',
    'pantry.shoppingList': '購物清單',
    'pantry.empty': '你的食材庫是空的',
    'pantry.emptyHint': '拍照來添加食材',
    'pantry.suggestDishes': '我可以煮什麼？',

    'auth.login': '登入',
    'auth.register': '註冊',
    'auth.loginToGusto': '登入 Gusto',
    'auth.createAccount': '建立帳號',
    'auth.name': '姓名（選填）',
    'auth.namePlaceholder': '你的姓名',
    'auth.email': '電子郵件',
    'auth.emailPlaceholder': '你的電子郵件',
    'auth.password': '密碼',
    'auth.passwordPlaceholder': '你的密碼',
    'auth.noAccount': '還沒有帳號？',
    'auth.haveAccount': '已有帳號？',
    'auth.loading': '請稍候...',
    'auth.logout': '登出',
    'auth.syncedChats': '聊天已同步',

    'diet.none': '無飲食限制',
    'diet.lowcarb': '低碳水',
    'diet.keto': '生酮',
    'diet.vegetarian': '素食',
    'diet.vegan': '純素',
    'diet.glutenfree': '無麩質',
    'diet.lactosefree': '無乳糖',
    'diet.highprotein': '高蛋白',

    'misc.poweredByAi': 'AI 驅動',
    'misc.favorite': '收藏',
  },

  // ============================================
  // FRANÇAIS
  // ============================================
  'fr': {
    'header.home': 'Qu\'est-ce qu\'on cuisine ?',
    'header.chat': 'Chat avec Gusto',
    'header.recipes': 'Tes recettes',
    'header.pantry': 'Ton garde-manger',

    'nav.chat': 'Chat',
    'nav.recipes': 'Recettes',
    'nav.pantry': 'Garde-manger',
    'nav.menu': 'Menu',

    'home.placeholder': 'Dis-moi ce que tu as envie de manger, ce qu\'il y a dans ton frigo, ou demande un conseil...',
    'home.inputPlaceholder': 'ex: "j\'ai des œufs et des tomates"',
    'home.ask': 'Demander',
    'home.thinking': 'Je réfléchis...',
    'home.suggested': 'suggestions pour toi',
    'home.expiring': 'bientôt périmé !',

    'chat.newChat': 'Nouveau chat',
    'chat.startConversation': 'Commence une conversation !',
    'chat.askMe': 'Demande-moi une recette, des conseils sur les ingrédients, ou quoi cuisiner ce soir...',
    'chat.send': 'Envoyer',
    'chat.thinking': 'Je réfléchis...',
    'chat.inputPlaceholder': 'Écris un message...',
    'chat.menuPlaceholder': 'Décris le menu que tu veux...',
    'chat.dish': 'Plat',
    'chat.menu': 'Menu',
    'chat.noConversations': 'Aucune conversation',
    'chat.startFirst': 'Commence ta première conversation avec Gusto',
    'chat.recentChats': 'Tes conversations',
    'chat.allChats': 'Toutes les conversations',

    // Skills
    'skill.stellato': 'Etoilé',
    'skill.stellatoDesc': 'recettes de chef étoilé',
    'skill.recupero': 'Anti-gaspi',
    'skill.recuperoDesc': 'réutiliser les restes',

    'recipes.favorites': 'favoris',
    'recipes.all': 'toutes les recettes',
    'recipes.add': '+ ajouter recette',
    'recipes.empty': 'Aucune recette sauvegardée',
    'recipes.emptyHint': 'Demande une recette dans le chat et sauvegarde-la ici',
    'recipes.loginRequired': 'Connecte-toi pour sauvegarder des recettes',
    'recipes.saved': 'Sauvegardée dans le livre de recettes',
    'recipes.save': 'Sauvegarder dans le livre de recettes',

    // Recipe detail
    'recipe.ingredients': 'ingrédients',
    'recipe.steps': 'préparation',

    'pantry.takePhoto': 'Prends une photo',
    'pantry.analyzing': 'Analyse en cours...',
    'pantry.aiRecognizes': 'L\'IA reconnaît les ingrédients automatiquement',
    'pantry.ingredients': 'ingrédients',
    'pantry.expiring': 'bientôt périmé',
    'pantry.useNow': 'à utiliser vite !',
    'pantry.inPantry': 'dans le garde-manger',
    'pantry.shoppingList': 'liste de courses',
    'pantry.empty': 'Ton garde-manger est vide',
    'pantry.emptyHint': 'Prends une photo pour ajouter des ingrédients',
    'pantry.suggestDishes': 'Que puis-je cuisiner ?',

    'auth.login': 'connexion',
    'auth.register': 'inscription',
    'auth.loginToGusto': 'connecte-toi à Gusto',
    'auth.createAccount': 'crée ton compte',
    'auth.name': 'nom (optionnel)',
    'auth.namePlaceholder': 'ton nom',
    'auth.email': 'email',
    'auth.emailPlaceholder': 'ton email',
    'auth.password': 'mot de passe',
    'auth.passwordPlaceholder': 'ton mot de passe',
    'auth.noAccount': 'pas de compte ?',
    'auth.haveAccount': 'déjà un compte ?',
    'auth.loading': 'un instant...',
    'auth.logout': 'déconnexion',
    'auth.syncedChats': 'chats synchronisés',

    'diet.none': 'Aucun régime',
    'diet.lowcarb': 'Faible en glucides',
    'diet.keto': 'Keto',
    'diet.vegetarian': 'Végétarien',
    'diet.vegan': 'Végan',
    'diet.glutenfree': 'Sans gluten',
    'diet.lactosefree': 'Sans lactose',
    'diet.highprotein': 'Hyperprotéiné',

    'misc.poweredByAi': 'propulsé par IA',
    'misc.favorite': 'favori',
  },

  // ============================================
  // 日本語 (Japanese)
  // ============================================
  'ja': {
    'header.home': '何を作りましょう？',
    'header.chat': 'Gusto とチャット',
    'header.recipes': 'あなたのレシピ',
    'header.pantry': 'あなたの食材庫',

    'nav.chat': 'チャット',
    'nav.recipes': 'レシピ',
    'nav.pantry': '食材庫',
    'nav.menu': 'メニュー',

    'home.placeholder': '食べたいもの、冷蔵庫の中身、またはアドバイスを聞いてください...',
    'home.inputPlaceholder': '例：「卵とトマトがあります」',
    'home.ask': '聞く',
    'home.thinking': '考え中...',
    'home.suggested': 'おすすめ',
    'home.expiring': 'もうすぐ期限切れ！',

    'chat.newChat': '新しいチャット',
    'chat.startConversation': '会話を始めましょう！',
    'chat.askMe': 'レシピ、食材のヒント、今夜何を作るか聞いてください...',
    'chat.send': '送信',
    'chat.thinking': '考え中...',
    'chat.inputPlaceholder': 'メッセージを入力...',
    'chat.menuPlaceholder': '欲しいメニューを説明してください...',
    'chat.dish': '料理',
    'chat.menu': 'メニュー',
    'chat.noConversations': '会話がありません',
    'chat.startFirst': 'Gusto との最初の会話を始めましょう',
    'chat.recentChats': 'あなたの会話',
    'chat.allChats': 'すべての会話',

    // Skills
    'skill.stellato': 'スター級',
    'skill.stellatoDesc': 'ミシュラン星付きレシピ',
    'skill.recupero': '残り物活用',
    'skill.recuperoDesc': '残り物を再利用',

    'recipes.favorites': 'お気に入り',
    'recipes.all': 'すべてのレシピ',
    'recipes.add': '+ レシピを追加',
    'recipes.empty': '保存されたレシピはありません',
    'recipes.emptyHint': 'チャットでレシピを聞いてここに保存しよう',
    'recipes.loginRequired': 'ログインしてレシピを保存',
    'recipes.saved': 'レシピブックに保存済み',
    'recipes.save': 'レシピブックに保存',

    // Recipe detail
    'recipe.ingredients': '材料',
    'recipe.steps': '作り方',

    'pantry.takePhoto': '写真を撮る',
    'pantry.analyzing': '写真を分析中...',
    'pantry.aiRecognizes': 'AIが自動で食材を認識',
    'pantry.ingredients': '食材',
    'pantry.expiring': '期限間近',
    'pantry.useNow': '早めに使って！',
    'pantry.inPantry': '食材庫',
    'pantry.shoppingList': '買い物リスト',
    'pantry.empty': '食材庫は空です',
    'pantry.emptyHint': '写真を撮って食材を追加',
    'pantry.suggestDishes': '何が作れる？',

    'auth.login': 'ログイン',
    'auth.register': '登録',
    'auth.loginToGusto': 'Gusto にログイン',
    'auth.createAccount': 'アカウント作成',
    'auth.name': '名前（任意）',
    'auth.namePlaceholder': 'あなたの名前',
    'auth.email': 'メール',
    'auth.emailPlaceholder': 'あなたのメール',
    'auth.password': 'パスワード',
    'auth.passwordPlaceholder': 'あなたのパスワード',
    'auth.noAccount': 'アカウントがない？',
    'auth.haveAccount': 'アカウントをお持ち？',
    'auth.loading': 'しばらくお待ちください...',
    'auth.logout': 'ログアウト',
    'auth.syncedChats': 'チャット同期済み',

    'diet.none': '制限なし',
    'diet.lowcarb': '低炭水化物',
    'diet.keto': 'ケト',
    'diet.vegetarian': 'ベジタリアン',
    'diet.vegan': 'ビーガン',
    'diet.glutenfree': 'グルテンフリー',
    'diet.lactosefree': '乳糖フリー',
    'diet.highprotein': '高タンパク',

    'misc.poweredByAi': 'AI搭載',
    'misc.favorite': 'お気に入り',
  },

  // ============================================
  // ESPAÑOL
  // ============================================
  'es': {
    'header.home': '¿Qué cocinamos?',
    'header.chat': 'Chat con Gusto',
    'header.recipes': 'Tus recetas',
    'header.pantry': 'Tu despensa',

    'nav.chat': 'Chat',
    'nav.recipes': 'Recetas',
    'nav.pantry': 'Despensa',
    'nav.menu': 'Menú',

    'home.placeholder': 'Dime qué te apetece comer, qué hay en la nevera, o pide un consejo...',
    'home.inputPlaceholder': 'ej: "tengo huevos y tomates"',
    'home.ask': 'Preguntar',
    'home.thinking': 'Pensando...',
    'home.suggested': 'sugeridos para ti',
    'home.expiring': '¡próximo a caducar!',

    'chat.newChat': 'Nuevo chat',
    'chat.startConversation': '¡Empieza una conversación!',
    'chat.askMe': 'Pídeme una receta, consejos sobre ingredientes, o qué cocinar esta noche...',
    'chat.send': 'Enviar',
    'chat.thinking': 'Pensando...',
    'chat.inputPlaceholder': 'Escribe un mensaje...',
    'chat.menuPlaceholder': 'Describe el menú que quieres...',
    'chat.dish': 'Plato',
    'chat.menu': 'Menú',
    'chat.noConversations': 'Sin conversaciones',
    'chat.startFirst': 'Empieza tu primera conversación con Gusto',
    'chat.recentChats': 'Tus conversaciones',
    'chat.allChats': 'Todas las conversaciones',

    // Skills
    'skill.stellato': 'Estrellado',
    'skill.stellatoDesc': 'recetas de chef estrellado',
    'skill.recupero': 'Aprovechamiento',
    'skill.recuperoDesc': 'reutiliza las sobras',

    'recipes.favorites': 'favoritos',
    'recipes.all': 'todas las recetas',
    'recipes.add': '+ añadir receta',
    'recipes.empty': 'No hay recetas guardadas',
    'recipes.emptyHint': 'Pide una receta en el chat y guárdala aquí',
    'recipes.loginRequired': 'Inicia sesión para guardar recetas',
    'recipes.saved': 'Guardada en el recetario',
    'recipes.save': 'Guardar en el recetario',

    // Recipe detail
    'recipe.ingredients': 'ingredientes',
    'recipe.steps': 'preparación',

    'pantry.takePhoto': 'Toma una foto',
    'pantry.analyzing': 'Analizando foto...',
    'pantry.aiRecognizes': 'La IA reconoce los ingredientes automáticamente',
    'pantry.ingredients': 'ingredientes',
    'pantry.expiring': 'próximo a caducar',
    'pantry.useNow': '¡usar pronto!',
    'pantry.inPantry': 'en la despensa',
    'pantry.shoppingList': 'lista de compras',
    'pantry.empty': 'Tu despensa está vacía',
    'pantry.emptyHint': 'Toma una foto para agregar ingredientes',
    'pantry.suggestDishes': '¿Qué puedo cocinar?',

    'auth.login': 'iniciar sesión',
    'auth.register': 'registrarse',
    'auth.loginToGusto': 'inicia sesión en Gusto',
    'auth.createAccount': 'crea tu cuenta',
    'auth.name': 'nombre (opcional)',
    'auth.namePlaceholder': 'tu nombre',
    'auth.email': 'email',
    'auth.emailPlaceholder': 'tu email',
    'auth.password': 'contraseña',
    'auth.passwordPlaceholder': 'tu contraseña',
    'auth.noAccount': '¿no tienes cuenta?',
    'auth.haveAccount': '¿ya tienes cuenta?',
    'auth.loading': 'un momento...',
    'auth.logout': 'cerrar sesión',
    'auth.syncedChats': 'chats sincronizados',

    'diet.none': 'Sin dieta',
    'diet.lowcarb': 'Bajo en carbohidratos',
    'diet.keto': 'Keto',
    'diet.vegetarian': 'Vegetariano',
    'diet.vegan': 'Vegano',
    'diet.glutenfree': 'Sin gluten',
    'diet.lactosefree': 'Sin lactosa',
    'diet.highprotein': 'Alto en proteínas',

    'misc.poweredByAi': 'impulsado por IA',
    'misc.favorite': 'favorito',
  },
};

export default translations;
