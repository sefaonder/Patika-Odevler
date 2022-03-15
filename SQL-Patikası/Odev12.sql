/*Soru-1*/
SELECT * FROM film
WHERE LENGTH >(
	SELECT AVG(LENGTH) FROM film
)

/*Soru-2*/
SELECT * FROM film
WHERE rental_rate =(
	SELECT MAX(rental_rate) FROM film
)

/*Soru-3*/
SELECT * FROM film
WHERE rental_rate =(
	SELECT MIN(rental_rate) FROM film
) AND replacement_cost = (
	SELECT MIN(replacement_cost) FROM film
)

/*Soru-4*/
SELECT COUNT(payment.customer_id) AS odemeSayısı,payment.customer_id FROM payment
   LEFT JOIN customer ON payment.customer_id = customer.customer_id
   GROUP BY payment.customer_id ORDER BY odemeSayısı DESC;

