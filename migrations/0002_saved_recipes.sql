-- Saved Recipes Table
-- Stores recipes saved by users from chat

CREATE TABLE IF NOT EXISTS saved_recipes (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  time TEXT,
  servings TEXT,
  ingredients TEXT,  -- JSON array of strings
  steps TEXT,        -- JSON array of strings
  note TEXT,
  is_favorite INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_saved_recipes_user ON saved_recipes(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_recipes_favorite ON saved_recipes(user_id, is_favorite);
CREATE INDEX IF NOT EXISTS idx_saved_recipes_created ON saved_recipes(created_at DESC);
