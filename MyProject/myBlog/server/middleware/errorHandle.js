
function errorHandle(err,req,res,mext){
    console.log("custom error");
    res.send("server error");
    next();
}

module.exports=errorHandle;