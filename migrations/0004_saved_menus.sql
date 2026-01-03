-- Menus Table
-- Stores menus saved by users from chat (menu mode)

CREATE TABLE IF NOT EXISTS menus (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  occasion TEXT,          -- Occasione (Cena romantica, Pranzo domenicale, etc.)
  courses TEXT,           -- JSON array of courses: [{type, name, description}]
  wine_pairing TEXT,      -- Suggerimenti vini
  note TEXT,
  is_favorite INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_menus_user ON menus(user_id);
CREATE INDEX IF NOT EXISTS idx_menus_favorite ON menus(user_id, is_favorite);
CREATE INDEX IF NOT EXISTS idx_menus_created ON menus(created_at DESC);
