/*
---fileSysstem----

const fs = require('fs');

------Create a file-----

fs.writeFile("hey.txt","kya haal chal hai",function(err){
    if(err){
        console.error(err);
    }else{
        console.log("done");
    }
})
    */

/*
----appned any text in same existing file----

fs.appendFile("hey.txt","sab mast hai apna batao",function(err){
    if(err){
        console.error(err);
    }else{
        console.log("done");
    }
})
    */


/*
----Rename the same existing file----
fs.rename("hey.txt","hello.txt",function(err){
    if(err){
        console.error(err);
    }else{
        console.log("done");
    }
})
    */

/*
----copy same exsiting file in other folder----
fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
    if(err){
        console.error(err);
    }else{
        console.log("done");
    }
})
    */


/*
----unlink delete the file----
fs.unlink("hello.txt",function(err){
    if(err){
        console.error(err);
    }else{
        console.log("done");
    }
})
    */

/*
----rmdir delete the folder----

fs.rmdir("./copy",{recursive:true},function(err){
    if(err){
        console.error(err);
    }else{
        console.log("done");
    }
})
    */

//----flieSystem End----


//-----Create Server----

/*const http = require('http');

const servre = http.createServer(function(req,res){
    res.end("hello Aryan..!");
})

servre.listen(3000);
*/

//setting up basic express application

const express = require('express');
const app = express();
//middileware create

app.use(function(req,res,next){
    console.warn('middleware chala');
    next();
});

app.use(function(req,res,next){
    console.warn('middleware ek baar fir chala');
    next();
});

//route create
app.get('/',function(req,res){
    res.send('hello aryan kya hal');
});

app.get('/profile',function(req,res){
    res.send('ye profile hai');
});

app.get('/about',function(req,res){
    res.send('ye about hai');
});

//error handeling

app.get('/menu',function(req,res,next){
    return next(new Error("not implement"));
});

app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('something broke');
});

app.listen(3000);
