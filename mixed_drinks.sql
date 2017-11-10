DROP DATABASE IF EXISTS drinks;
        CREATE DATABASE drinks;

\c drinks

          CREATE TABLE cocktails (
                    ID SERIAL PRIMARY KEY,
        cocktails_name VARCHAR
);

           CREATE TABLE drinks(
                     ID SERIAL PRIMARY KEY,
          ingredient_id INTEGER,
        ingredient_name VARCHAR
);

           CREATE TABLE orders(
                     id INTEGER,
           cocktails_id VARCHAR REFERENCES cocktails(cocktails_name),
               drinks_id INTEGER REFERENCES drinks(ID)
);


INSERT INTO drinks(ingredient_id, ingredient_name) VALUES (1,'tequila');
INSERT INTO drinks(ingredient_id, ingredient_name) VALUES (2,'lemon juice');
INSERT INTO drinks(ingredient_id, ingredient_name) VALUES (3,'triple sec');

SELECT * FROM cocktails INNER JOIN drink;
