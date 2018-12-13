const express=require("express");
const app=express();
const port=process.env.PORT||5044;



app.get('/',(req,res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log("server is start:",port);
});