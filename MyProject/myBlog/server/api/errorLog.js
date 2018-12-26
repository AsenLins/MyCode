const errorLogRouter = require("express").Router();
const errorLogService = require("../services/errorLogService");

/**获取错误日志 */
errorLogRouter.get("/api/getErrorList", (req, res, next) => {
    const where={};
    if(req.query.startDate!==undefined||req.query.endDate!==undefined){
        where["createDate"]={};
        if(req.query.startDate!==undefined){
            where["createDate"]["$gte"]=new Date(req.query.startDate);
        }
        if(req.query.endDate!==undefined){
            where["createDate"]["$lte"]=new Date(req.query.endDate);
        }   
    }

    errorLogService.getListByPage({
        pageIndex: req.query.pageIndex,
        pageSize: req.query.pageSize,
        where,
        orderBy: { createDate: -1 }
    }).then(result => {
        res.sendSuccess({
            result
        })
    }).catch(next);
});

/**设置错误日志为已阅 */
errorLogRouter.put("/api/errorLogIsRead", (req, res, next) => {
    errorLogService.update({ update: { isRead: true } }).then(result => {
        res.sendSuccess({
            result
        })
    }).catch(next);
});



module.exports = errorLogRouter;