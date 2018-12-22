const app=require("./app");

app.use((err,req,res,next)=>{
    console.log("custom error");
    res.send("server error");
});

module.exports=app;