const express = require('express');
const app =  express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/",(req,res) => {
    let token = jwt.sign({email: "ritik3334@gmail.com"},"secret");
    console.log(token);
    res.cookie("token",token);
    res.send("done");
});

app.get("/read",(req,res) => {
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send("read")
});

app.listen(3000)