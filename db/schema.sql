CREATE TABLE houses (
id SERIAL PRIMARY KEY,
name VARCHAR(30),
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip integer
)

SELECT * FROM houses

INSERT INTO houses (name, address, city, state, zip)
VALUES ('name', 'address', 'city', 'CA', 91780)

ALTER TABLE houses
ADD column image VARCHAR(1000);

ALTER TABLE houses
ADD column mortgage integer;

ALTER TABLE houses
ADD column rent integer;

SELECT * FROM houses