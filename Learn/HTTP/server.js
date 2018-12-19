const express=require("express");
const app=express();
const prot=4981;

app.get("/",(req,res)=>{
    res.send("<a href='/test204'>204</a><a href='/test205'>205</a><a href='/test300'>300</a>");
});

app.get("/resource/hello.txt",(req,res)=>{
    res.send("txt");
});



app.listen(prot);

console.log("server is start",prot);