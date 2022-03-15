/*Soru-1*/
SELECT AVG(rental_rate) FROM film

/*Soru-2*/
SELECT COUNT(title) FROM film WHERE title LIKE('C%')

/*Soru-3*/
SELECT MAX(length) FROM film WHERE rental_rate=0.99

/*Soru-4*/
SELECT COUNT(replacement_cost) FROM film WHERE length>150