DROP DATABASE IF EXISTS drinks;
        CREATE DATABASE drinks;

\c drinks



           CREATE TABLE ingredients(
          ingredient_id SERIAL PRIMARY KEY,
        ingredient_name VARCHAR
);

          CREATE TABLE cocktails (
                    ID SERIAL PRIMARY KEY,
        cocktails_name VARCHAR,
           cocktail_id INTEGER REFERENCES ingredients(ingredient_id),
        ingredient_ids integer ARRAY[3]

);


INSERT INTO ingredients(ingredient_name) VALUES ('tequila');
INSERT INTO ingredients(ingredient_name) VALUES ('lemon juice');
INSERT INTO ingredients(ingredient_name) VALUES ('triple sec');

