const express = require('express')
const app = express();
const userModel = require('./models/user');
const postModel = require("./models/post");

app.get("/",(req,res) => {
    res.send("hello");
});

app.get("/create",async (req,res) => {
    let user = await userModel.create({
        username: "shivam",
        email: "shivam@gmail.com",
        age: 23
    });
    res.send(user);
});

app.get("/create/post", async (req,res) => {
    let post = await postModel.create({
        postData: "hello yrr kya haal hai..",
        user: "66eb16c767b5ea48c7638daa"
    });

    let user = await userModel.findOne({_id: "66eb16c767b5ea48c7638daa"});

    user.posts.push(post._id);
    user.save();

    res.send({user, post});


})

app.listen(3000);