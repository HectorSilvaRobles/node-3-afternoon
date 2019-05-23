-- Will be responsible for deleting a specific product by product_id
DELETE from products
WHERE product_id = $1;