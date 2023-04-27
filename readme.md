# making tests and MVC

## Installation and Usage

- clone this repo
- npm install
- npm run dev, app will run [3000](http://localhost:3000/)

## flow

model/DB -> controller -> router -> app.js

## when debugging -> opposite to flow

3000/ -> app -> router -> controller -> models/db

## coding steps

RESTful HTTP:

index /goats - GET
show /goats/:id - GET
create /goats - POST
update /goats/:id - Patch
destoy /goats/:id - delete

## useful tip

difference between goat.all() and goat.all is that the first one is a method and the latter one is a property \
to make the fucntion goat.all(), you write it as static goat all(){//code}\
to make the function goat.all, you write it as static goat get all(){//code}

https://jestjs.io/docs/asynchronous

## testing flow

setup -> execution -> verification\
Three A's

1. Arrange
2. Act
3. Assert
