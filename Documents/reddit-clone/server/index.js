const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser =require('body-parser');

const app = express();

//Queries to get all users and posts
const GET_POSTS = 'select * from post';
const GET_USERS = 'select * from users';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'151997',
    database:'reddit'
});

connection.connect(function(err){
    err?console.log(err):console.log('connection');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//get apis begine here
//api to render all posts
app.get('/posts',function(req,res){
    connection.query(GET_POSTS,function(err,data){
        (err)?res.send(err):res.json({posts:data});
    });
});

//api to render all users
app.get('/users',function(req,res){
    connection.query(GET_USERS,function(err,data){
        (err)?res.send(err):res.json({users:data});
    })
});

//api to add users 
app.get('/users/add',(req,res)=>{
    const {username,password} = req.query;
    const INSERT_USER = "insert into users(username,password) values('"+username+"','"+ password + "');";
    connection.query(INSERT_USER,(err,results) => {
        if(err){
            res.status = 201;
            res.end();
        }
        else{
            res.status =200;
            res.end();
        }
    })
})

//api to add posts
app.get('/posts/add',(req,res)=>{
    const {post_title,post_content,author} = req.query;
    const CREATE_POST = "insert into post(post_title,post_content,author) values('"+post_title+"','"+ post_content +"','"+author +"');";
    connection.query(CREATE_POST,(err,results) => {
        if(err){
            res.status = 201;
            res.end();
        }
        else{
            res.status =200;
            res.end();
        }
    })
})
//get apis end here



//post apis begin here
//api to authenticate login
app.post("/login",(req,res)=>{
    const body = req.body;
    const username = req.body.Username;
    const password = req.body.Password;
    // console.log(body);
    if(username  && password){
        const CHECK_LOGIN = "select username from users where username = '"+username+"' and password = '"+password+"';"
        connection.query(CHECK_LOGIN,(err,results,fields) => {
            if(results.length === 1){
                res.status(200);
            }
            else{
                res.status(201);
            }
            res.end();
        });
    }
    else{
        response.send('Please enter Username and Password!');
		response.end();
    }
});
//post apis end here

app.listen(4000,() =>{
    console.log("Listening at port 4000");
});