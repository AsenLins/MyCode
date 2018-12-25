const loginLogRouter = require("express").Router();
const loginLogService = require("../services/loginLogService");
const loginLogModel = require("../model/loginLogModel");

/*获取登录日志记录*/
loginLogRouter.get("/api/LoginList", (req, res) => {
    try {
        loginLogService.getListByPage({
            pageIndex:req.query.pageIndex,
            pageSize:req.query.pageSize,
            orderBy:{loginTime:-1}
            
        }).then((data)=>{
            res.sendSuccess(data);
        });
    }
    catch (ex) {
        throw ex;
    }
});



module.exports=loginLogRouter;