/*Soru-1*/
SELECT DISTINCT replacement_cost FROM film

/*Soru-2*/
SELECT Count(DISTINCT replacement_cost) FROM film

/*Soru-3*/
SELECT Count(title) FROM film WHERE title LIKE('T%') AND rating='G'

/*Soru-4*/
SELECT Count(country) FROM country WHERE LENGTH(country)=5

/*Soru-5*/
SELECT Count(city) FROM city WHERE city ILIKE('%r')
