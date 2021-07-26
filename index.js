const express=require("express");
const app=express();
const server=require("http").Server(app);
const {v4:uuidv4}=require("uuid");

app.use(express.static('public'));

app.set('view engine','ejs');




app.get("/",function(req,res){
    console.log("server is runing");
    // res.render('room');
    res.redirect(`/${uuidv4()}`);
});

app.get("/:room",function(req,res)
{
    res.render("room",{roomId:req.param.room});
});

server.listen(2000);