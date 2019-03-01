-- user table
CREATE table userz (
    id serial primary key,
    username varchar(255),
    password varchar(255),
    user_image text,
    balance integer
)
