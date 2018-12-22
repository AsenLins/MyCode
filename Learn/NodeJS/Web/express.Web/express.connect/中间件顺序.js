const app=require("connect")();


function log(req,res,next){
    console.log("log");
    next();
}

function respone(req,res,next){
    console.log("response");
    res.end("success");
}

app.use(log);
app.use(respone);

app.listen(3000);


console.log("server is start:",3000);