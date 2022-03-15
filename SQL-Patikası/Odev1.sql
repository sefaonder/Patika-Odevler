/*Soru-1*/
SELECT * FROM film WHERE length > 60 and length <75

/*Soru-2*/
SELECT * FROM film 
WHERE rental_rate = 0.99 AND replacement_cost = 12.99 OR replacement_cost=28.99

/*Soru-3*/
SELECT first_name,last_name FROM customer WHERE first_name = 'Mary'

/*Soru-4*/
SELECT * FROM film WHERE film.length < 50 AND NOT( film.rental_rate =2.99 or film.rental_rate =4.99)