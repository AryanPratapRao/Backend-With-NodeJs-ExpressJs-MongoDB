const express = require('express')
const app = express();
const userModel = require('./usermodel');

app.get("/",(req,res) => {
    res.send("hey");
});


app.get("/create",async (req,res) => {
    let createduser =  await userModel.create({
        name: "shivam",
        email: "shivam@gmail.com",
        username: "shivam"
    });
    res.send(createduser);
});

app.get("/update",async (req,res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "shivam"},{name: "shivam rai"},{new: true});
    res.send(updateduser);
});

app.get("/read",async (req,res) => {
    let user = await userModel.find();
    res.send(user);
});

app.get("/delete",async (req,res) => {
    let user = await userModel.findOneAndDelete({username: "shivam"});
    res.send(user);
});


app.listen(3000);