const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

const SHOW_USERS = 'select * from user';

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
    connection.query(SHOW_USERS,function(err,data){
        (err)?res.send(err):res.json({users:data});
    });
});

app.get('/users/add',(req,res)=>{
    const {username,first,last,age} = req.query;
    const INSERT = "insert into user(Name,First,Last,Age) values ('"+ username+"','"+ first + "','" +last +"',"+age+");";
    connection.query(INSERT,(err,results) => {
        if(err){
            return(res.send(err))
        }
        else{
            return(res.send('Added user'))
        }
    })
})

app.listen(4000,() =>{
    console.log("Listening at port 4000");
});