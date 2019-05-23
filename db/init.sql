

CREATE table if not exists products(
product_id serial primary key,
name varchar(40),
description varchar(80),
price integer not null,
image_url text not null
)