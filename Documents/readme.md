To run this follow the given steps

1.cd to root directory in terminal run

`npm install`

to download all dependecies

2.cd to client directory in terminal run

`npm install`

to download react dependencies

3.cd to server directory, open index.js in terminal, run 

`npm install`

`npm install mysql cors express`

to download dependencies

4.create a database called reddit in mysql with table called user with commands(this is current, it will change)

`create database reddit;`

`use reddit;`

`create table user(Username varchar(20),First varchar(20),Last varchar(20),Age int,id int auto_increment primary key);`


5.open file index.js in server in variable connection change
username and password to whatever your username and password are
Note:if you using root as user then run this additional command in mysql:


`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`


replace password with your password.

6.open server directory in 1 terminal run

`node index.js`

should give message as
Listening at port 4000
connection

7.open directory client in another terminal run

`npm start`

8.localhost:3000 should open and show the page


