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
