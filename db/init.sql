drop table if exists profile;
drop table if exists users;

create table users(
    user_id serial primary key,
    username varchar(32) not null,
    password text not null,
    email text not null unique
);

insert into users(username, password, email)
values('danielhong', 'test', 'danhong13@gmail.com');

create table profile(
    profile_id serial primary key,
    picture text default 'https://res.cloudinary.com/saturnslist/image/upload/q_auto/v1561159141/kcopfm6ygbyzgdu2mzxb.jpg',
    alive boolean default true,
    distance float,
    user_id integer references users(user_id)
);

insert into profile(distance, user_id)
values(5.6, 1);

-- selecting user with their profile
select * from users join profile
on (users.user_id = profile.user_id); 