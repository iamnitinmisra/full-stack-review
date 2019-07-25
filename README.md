# Area 51 kill counter

## client

### dependencies

- axios
- react-router-dom (BrowserRouter)
- redux
- react-redux
- node-sass
- react-icons/fa
- http-proxy-middleware
- redux-promise-middleware

### routes

- home => / => Login.js
- profile => /profile => Profile.js
- killMap => /kill_map => KillMap.js

### file-structure

- src/
  - components
    - profile
      - Profile.js
      - Profile.css / .scss
    - killMap
        - KillMap.js
        - KillMap.css /.scss
    - home
        - Login.js
        - Login.css /.scss
- App.js
- index.js
- reset.css
- setupProxy.js
- redux
    - store.js
    - reducer.js


## server

### dependencies

- express
- massive
- dotenv
- express-session
- bcrypt

### server file structure

- server/
  - index.js
  - middlewares
    - middleware.js
  - controller
    - killCountController
    - authController

### endpoints

**auth**

- login: => /api/login
- register: => /api/register
- logout: => /api/logout
- userSession: => /api/user_session

**kill Count Endpoints**

- getAllUsers: => /api/users
- killUser: => /api/kill_user
- updateDistance: => /api/distance
- deleteUser: => /api/obliterate

## database

- users

```sql
create table users(
    user_id serial primary key,
    username varchar(32) not null,
    password text not null,
    email text not null
);
```

-user profile

```sql
create table profile(
    profile_id serial primary key,
    picture text default 'https://res.cloudinary.com/saturnslist/image/upload/q_auto/v1561159141/kcopfm6ygbyzgdu2mzxb.jpg',
    alive boolean default true,
    distance float,
    user_id integer references users(user_id)
);
```
-join the tables
```
select * from users join profile
on(users.user_id = profile.user_id);
```