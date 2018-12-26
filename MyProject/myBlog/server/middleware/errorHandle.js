


const errorLogService=require("../services/errorLogService");
const errorLogModel=require("../model/errorLogModel");
function errorHandle(err,req,res,next){
    if(err){
        const errorLog=new errorLogModel();
        errorLog.ex=err.stack;
        errorLogService.add({addObj:errorLog}).then(result=>{
            res.status(500).send("server error.");
        }).catch(ex=>{
            res.status(500).send("server error.");
        });
        console.error("======error========",err);
    }
    else{
        next();
    }
}

function notFoundHandle(req,res){
    res.status(404).send("NotFound");
}

module.exports={
    errorHandle,
    notFoundHandle
};