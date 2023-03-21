drop database sulnaeeum;
create database sulnaeeum;


use sulnaeeum;


create table drink_type(
	drink_type_id int auto_increment,
    drink_type_name varchar(50),
    
    primary key(drink_type_id)
);


create table drink(
	drink_id int auto_increment,
    drink_name varchar(50),
    drink_info varchar(2000),
    drink_image varchar(500),
    drink_sale_url varchar(500),
    drink_price varchar(200),
    drink_amount varchar(50),
    drink_level int,
    drink_type_id int,
    like_cnt int,
    review_cnt int,
    
    FOREIGN KEY (drink_type_id)
    REFERENCES drink_type (drink_type_id),
    primary key(drink_id)
);


create table ingredient_type(
	ingredient_type_id int auto_increment,
    ingredient_name varchar(50),
    
    primary key(ingredient_type_id)
);


create table ingredient(
	ingredient_id int auto_increment,
    drink_id int,
    ingredient_type_id int,
    
    FOREIGN KEY (ingredient_type_id)
    REFERENCES ingredient_type (ingredient_type_id),
    FOREIGN KEY (drink_id)
    REFERENCES drink (drink_id),
    primary key(ingredient_id)
);


create table dish(
	dish_id int auto_increment,
    dish_name varchar(50),
    dish_category varchar(50),
    
    primary key(dish_id)
);


create table dish_drink(
	dish_drink_id int auto_increment,
    dish_id int,
    drink_id int,
    
    FOREIGN KEY (dish_id)
    REFERENCES dish (dish_id),
    FOREIGN KEY (drink_id)
    REFERENCES drink (drink_id),
    primary key(dish_drink_id)
);


create table taste_type(
	taste_type_id int auto_increment,
    taste_name varchar(50),
    
    primary key(taste_type_id)
);


create table taste(
	taste_id int auto_increment,
    drink_id int,
    taste_type_id int,
    score int,
    
    FOREIGN KEY (taste_type_id)
    REFERENCES taste_type (taste_type_id),
    FOREIGN KEY (drink_id)
    REFERENCES drink (drink_id),
    primary key(taste_id)
);

# 술 전체 맛
-- dic_all_taste = {"단맛":1, "신맛":2, "바디감":3, "청량감":4, "향":5, "목넘김":6}
insert into taste_type (taste_name) values ("단맛");
insert into taste_type (taste_name) values ("신맛");
insert into taste_type (taste_name) values ("바디감");
insert into taste_type (taste_name) values ("청량감");
insert into taste_type (taste_name) values ("향");
insert into taste_type (taste_name) values ("목넘김");

ALTER TABLE drink_type AUTO_INCREMENT = 1;

ALTER TABLE drink AUTO_INCREMENT = 1;

ALTER TABLE ingredient_type AUTO_INCREMENT = 1;

ALTER TABLE ingredient AUTO_INCREMENT = 1;

ALTER TABLE dish AUTO_INCREMENT = 1;

ALTER TABLE dish_drink AUTO_INCREMENT = 1;

ALTER TABLE taste_type AUTO_INCREMENT = 1;

ALTER TABLE taste AUTO_INCREMENT = 1;

select * from drink_type;

select * from drink;

select * from ingredient_type;

select * from dish;

select * from dish_drink;

select * from taste_type;

select * from taste;
