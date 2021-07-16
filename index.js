const express=require("express");
const app=express();
const server=require("http").Server(app);


app.use(express.static('public'));

app.set('view engine','ejs');




app.get("/",function(req,res){
    console.log("server is runing");
    res.render('room');
})

server.listen(2000);