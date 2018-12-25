
function errorHandle(err,req,res,next){
    if(err){
        res.status(500).send("server error.");
    }
    next();
}

function notFoundHandle(req,res){
    res.status(404).send("NotFound");
}

module.exports={
    errorHandle,
    notFoundHandle
};