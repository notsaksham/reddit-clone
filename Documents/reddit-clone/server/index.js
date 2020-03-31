const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

const RENDER = 'select * from post';

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

app.get('/',function(req,res){
    connection.query(RENDER,function(err,data){
        (err)?res.send(err):res.json({posts:data});
    });
});

app.get('/users/add',(req,res)=>{
    const {title,content,author} = req.query;
    const INSERT = "insert into post(post_title,post_content,author) values('"+ title+"','"+ content + "','" +author+"');";
    connection.query(INSERT,(err,results) => {
        if(err){
            return(res.send(err))
        }
        else{
            return(res.send('Added post'))
        }
    })
})

app.listen(4000,() =>{
    console.log("Listening at port 4000");
});