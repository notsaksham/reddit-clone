const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser =require('body-parser');

const app = express();

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


app.get('/posts',function(req,res){
    connection.query(GET_POSTS,function(err,data){
        (err)?res.send(err):res.json({posts:data});
    });
});

app.get('/users',function(req,res){
    connection.query(GET_USERS,function(err,data){
        (err)?res.send(err):res.json({users:data});
    })
});



app.get('/users/add',(req,res)=>{
    const {username,password} = req.query;
    const INSERT_USER = "insert into users(username,password) values('"+username+"','"+ password + "');";
    connection.query(INSERT_USER,(err,results) => {
        if(err){
            return(res.send(err))
        }
        else{
            return(res.send('Added user'))
        }
    })
})

app.get('/posts/add',(req,res)=>{
    const {post_title,post_content,author} = req.query;
    const CREATE_POST = "insert into post(post_title,post_content,author) values('"+post_title+"','"+ post_content +"','"+author +"');";
    connection.query(CREATE_POST,(err,results) => {
        if(err){
            return(res.send(err))
        }
        else{
            return(res.send('Added post'))
        }
    })
})

//post apis
app.post("/login",(req,res)=>{
    const data = req.body;
    console.log(data);
    return(res.send('Recieved Data'));
});


app.listen(4000,() =>{
    console.log("Listening at port 4000");
});