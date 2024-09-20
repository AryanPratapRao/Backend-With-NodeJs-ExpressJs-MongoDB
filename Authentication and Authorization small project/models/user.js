const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/tempdatabase");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

module.exports = mongoose.model("user",userSchema);