const express=require("express");
const app=express();

const prot=5021;

/*发送text*/
app.get('/',(req,res)=>{
    
    res.send("this is home page");
});

/*发送对象*/
app.get("/apiResult",(req,res)=>{
    res.send({
        mes:"helloWorld"
    });
});

/*发送二进制*/
app.get("/buffer",(req,res)=>{
    
    res.send(new Buffer("123456"));
});

/*发送错误码*/
app.get("/state-404",(req,res)=>{
    res.send(404);
});

/*发送错误码*/
app.get("/state-500",(req,res)=>{
    res.send(500);
});

app.get("/hello",(req,res)=>{
    res.end("hello word");
});

app.listen(prot,()=>{
    console.log("sever is ready port is:",prot);
});