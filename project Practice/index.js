const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index");
});

//dynamic route create

app.get("/profile/:username",function(req,res){
    res.send(`welcome, ${req.params.username}`);
});

app.get("/author/:username/:age",function(req,res){
    res.send(`welcome, ${req.params.username} age is ${req.params.age}`);
});

app.listen(3000);