-- Pantry Items Table
-- Stores ingredients in user's pantry

CREATE TABLE IF NOT EXISTS pantry_items (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  quantity TEXT,
  unit TEXT,
  category TEXT,  -- vegetables, fruits, dairy, meat, etc.
  expiring INTEGER DEFAULT 0,  -- 1 if expiring soon
  expires_at INTEGER,  -- optional expiration timestamp
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_pantry_items_user ON pantry_items(user_id);
CREATE INDEX IF NOT EXISTS idx_pantry_items_expiring ON pantry_items(user_id, expiring);
CREATE INDEX IF NOT EXISTS idx_pantry_items_category ON pantry_items(user_id, category);
