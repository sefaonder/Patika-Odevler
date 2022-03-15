/*Soru-1*/
SELECT rating FROM film GROUP BY rating

/*Soru-2*/
SELECT replacement_cost,COUNT(*) FROM film GROUP BY replacement_cost HAVING COUNT(*)>50

/*Soru-3*/
SELECT store_id,COUNT(*) FROM customer GROUP BY store_id

/*Soru-4*/
SELECT country_id,count(city) FROM city GROUP BY country_id ORDER BY count DESC LIMIT 1