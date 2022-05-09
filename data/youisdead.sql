DROP TABLE IF EXISTS "games", "bosses", "roles", "users";

CREATE TABLE "games" (
    "id"            INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"          TEXT NOT NULL,
    "image"         TEXT NOT NULL,
    "description"   TEXT NOT NULL,
    "year"          INTEGER NOT NULL, 
    "created_at"    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at"    TIMESTAMPTZ
);

CREATE TABLE "bosses" (
    "id"            INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"          TEXT NOT NULL,
    "image"         TEXT NOT NULL,
    "description"   TEXT NOT NULL,
    "games_id"      INTEGER REFERENCES games("id"),
    "created_at"    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at"    TIMESTAMPTZ
);

CREATE TABLE "roles" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "users" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT,
    "email"      TEXT NOT NULL,
    "password"   TEXT NOT NULL,
    "role_id"    INTEGER REFERENCES roles("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

INSERT INTO "games" ("name", "image", "description", "year") VALUES
('Demons Souls', '../images/demonsouls.gif', 'You re dead. And again. Aaaand again', 2009),
('Dark Souls 1', '../images/darksouls.gif', 'ANCORA TUTTO BUIO !', 2011 ),
('Dark Souls 2', '../images/darksouls2.gif', 'Le jeu qu on a tous oublié', 2014),
('Bloodborne', '../images/bloodborne.gif', 'Regarde chérie, un orphelin !', 2015),
('Dark Souls 3', '../images/darksouls3.gif', 'Un peu plus de poison dans ton marais ?', 2016 ),
('Sekiro', '../images/sekiro.gif', 'Hesitation is defeat.', 2019),
('Elden Ring', '../images/eldenring.gif', 'Come take a hug !', 2022);