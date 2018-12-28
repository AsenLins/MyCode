const loginLogRouter = require("express").Router();
const loginLogService = require("../services/loginLogService");
const loginLogModel = require("../model/loginLogModel");
const conditionBuilder=require("../core/conditionBuilder");

/*获取登录日志记录*/
loginLogRouter.get("/api/LoginList", (req, res, next) => {
    const where=conditionBuilder(req.query)
    .setDateInObj("loginTime","$gte","startDate")
    .setDateInObj("loginTime","$lte","endDate")
    .result();


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