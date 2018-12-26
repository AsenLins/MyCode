const loginLogRouter = require("express").Router();
const loginLogService = require("../services/loginLogService");
const loginLogModel = require("../model/loginLogModel");

/*获取登录日志记录*/
loginLogRouter.get("/api/LoginList", (req, res, next) => {
    const where={};
    if (req.query.startDate !== undefined || req.query.endDate !== undefined) {
        where["loginTime"] = {};
        if (req.query.startDate !== undefined) {
            where["loginTime"]["$gte"] = new Date(req.query.startDate);
        }
        if (req.query.endDate !== undefined) {
            where["loginTime"]["$lte"] = new Date(req.query.endDate);
        }
    }

    loginLogService.getListByPage({
        pageIndex: req.query.pageIndex,
        pageSize: req.query.pageSize,
        where,
        orderBy: { loginTime: -1 }

    }).then((data) => {
        res.sendSuccess(data);
    }).catch(next);

});



module.exports = loginLogRouter;