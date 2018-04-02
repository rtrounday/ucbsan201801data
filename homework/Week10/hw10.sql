#Display the first and last name of all actors from the table 'actor'

SELECT first_name, last_name FROM sakila.actor LIMIT 1000;

# Display the first and last name of each actor in a single column named Actor Name

SELECT CONCAT(first_name, ' ', last_name) AS "Actor Name" FROM sakila.actor LIMIT 1000;

#You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe." What is one query would you use to obtain this information?

SELECT actor_id, first_name, last_name FROM sakila.actor WHERE first_name = 'Joe' LIMIT 1000;

# 2b. Find all actors whose last name contain the letters `GEN`:

SELECT actor_id, first_name, last_name FROM sakila.actor WHERE last_name LIKE '%Gen%';

# 2c. Find all actors whose last names contain the letters `LI`. This time, order the rows by last name and first name, in that order:

SELECT actor_id, first_name, last_name FROM sakila.actor WHERE last_name LIKE '%LI%' ORDER BY last_name;

#\2d. Using `IN`, display the `country_id` and `country` columns of the following countries: Afghanistan, Bangladesh, and China

SELECT country_id, country FROM sakila.country WHERE country IN ('Afghanistan', 'Bangladesh' , 'China');

# 3a. Add a `middle_name` column to the table `actor`. Position it between `first_name` and `last_name`. Hint: you will need to specify the data type.

ALTER TABLE sakila.actor ADD middle_name VARCHAR (45);

#UPDATE information_schema.columns SET ORDINAL_POSITION = 3 WHERE TABLE_NAME = 'ACTOR' AND COLUMN_NAME = 'middle_name'
#UPDATE [information_schema].[columns] SET ORDINAL_POSITION = 4 WHERE TABLE_NAME = 'ACTOR' AND COLUMN_NAME = 'last_name'


#* 3b. You realize that some of these actors have tremendously long last names. Change the data type of the `middle_name` column to `blobs`.

ALTER TABLE sakila.actor ALTER COLUMN middle_name blob