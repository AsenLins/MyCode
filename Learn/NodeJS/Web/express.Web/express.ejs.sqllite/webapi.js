const express=require("express");
const app=express();
const bodyparse=require("body-parser");

/*express加载消息解析载体 */
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));


const article={title:"demo"};

app.set("port",process.env.PORT||4012);

app.get("/article",(req,res)=>{
    res.send("ok");
})

app.post("/article",(req,res)=>{
    const title=req.body.title;
    console.log("title is",title);
    res.send("addarticle ok");
})

app.get("/article/:id",(req,res)=>{
    const id=req.params.id;
  
    res.send("get article is:"+id);
});
app.delete("/article/:id",(req,res)=>{
    const id=req.params.id;
    res.send("delete artice is"+id);
})

app.listen(app.get("port"),()=>{
    console.log("web api server is start:",app.get("port"));
})