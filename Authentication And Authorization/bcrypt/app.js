const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

/*app.get("/",(req,res) => {
    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash("Ritik@8858",salt,(err,hash) => {
            res.send(hash);
        });
    });
});*/

app.get("/",(req,res) => {
    bcrypt.compare("Ritik@8858","$2b$10$aj.N2XcSn44If.C87yA55uoaZAI7OAYJsVt1ku2diRZI1Cmm6LRY6",(err,result) => {
        res.send(result);
    })
})

app.listen(3000);