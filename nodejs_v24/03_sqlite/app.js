const { DatabaseSync } = require('node:sqlite');

const db = new DatabaseSync('test.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
  )
`);

db.exec(`INSERT INTO USERS (name, age) VALUES ('Andrii', 40)`);
