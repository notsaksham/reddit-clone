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

//api to render posts from given user
app.get('/post/:username',function(req,res){
    const username = req.params.username;
    const QUERY = "select * from post where author = '"+username+"';"
    connection.query(QUERY,(err,results)=>{
         if(err){
             console.log("Error occcoured");
         }
         else{
             res.json({posts:results});
         }
     })
})

//api to render all details of singlepost
app.get('/single/:postid',function(req,res){
    const postid  = req.params.postid;
    const QUERY= "select * from post where post_id = '"+postid+"';"
    connection.query(QUERY,(err,results)=>{
        if(err){
            console.log("Error occcoured");
        }
        else{
            res.json({posts:results});
        }
    })
})

//api to render comments of a single post
app.get('/comment/:postid',function(req,res){
    const postid = req.params.postid;
    const Query = "select * from comments  where  post_id = '"+postid+"';"
    connection.query(Query,(err,results)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json({comment:results})
        }
    })
})

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

//api to add comments
app.get('/comments/add',(req,res)=>{
    const {comm_desc,author,post_id} = req.query;
    const CREATE_COMMENT = "insert into comments(comm_desc,author,post_id) values('"+comm_desc+"','"+ author +"','"+post_id +"');";
    connection.query(CREATE_COMMENT,(err,results) => {
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

//apis to add subreddit
app.get('/sub/add',(req,res)=>{
    const {sub_name,sub_desc} = req.query;
    const CREATE_COMMENT = "insert into sub(sub_title,sub_desc) values('"+sub_name+"','"+ sub_desc +"');";
    connection.query(CREATE_COMMENT,(err,results) => {
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
        res.send('Please enter Username and Password!');
		res .end();
    }
});

//post api ends

app.listen(4000,() =>{
    console.log("Listening at port 4000");
});