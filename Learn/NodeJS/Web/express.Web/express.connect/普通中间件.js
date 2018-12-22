const app=require("connect")();

app.use((req,res,next)=>{
    res.end("service is start");
});

app.listen(3000);
console.log("service is start:",3000);