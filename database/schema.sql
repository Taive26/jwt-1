CREATE TABLE IF NOT EXISTS users (
    id INTEGER NOT NULL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    -- unikaalsed väärtused
    password text NOT NULL,
    email text NOT NULL UNIQUE,
    first_name text NOT NULL,
    last_name text NOT NULL
);