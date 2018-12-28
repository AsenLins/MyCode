
function _buildSendObj(message="success",state=true,data={}){
    return{
        state,
        message,
        data
    }
}

function customSend(req,res,next){
    res.sendSuccess=(sendObj)=>{
        res.send(_buildSendObj("success",true,sendObj));
    }

    res.sendFail=(sendObj)=>{
        res.send(_buildSendObj("fail",false,sendObj));
    }
    next();
}


module.exports=customSend;