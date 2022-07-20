CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "category_id" INT REFERENCES "category" DEFAULT 1,
    "url" VARCHAR(300)
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('none'), ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- added later by Tim
INSERT INTO "favorites" ("url")
VALUES ('https://media.giphy.com/media/6xKEa0GnEfJRzo3QId/giphy.gif'), ('https://media.giphy.com/media/yNfIpRlSVjXpW9Nx4i/giphy.gif'),
('https://media.giphy.com/media/8cOkSOuvIChHNYOyP7/giphy.gif');

