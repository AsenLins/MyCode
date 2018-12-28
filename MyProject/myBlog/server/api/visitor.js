const visitorRouter = require("express").Router();
const visitorService = require("../services/visitorService");
const visitorModel = require("../model/visitorModel");
const conditionBuilder = require("../core/conditionBuilder");
const async = require("async");

visitorRouter.get("/api/getVisitorByPage", (req, res, next) => {

    const where = conditionBuilder(req.query)
        .setDateInObj("visitTime", "$gte", "startDate")
        .setDateInObj("visitTime", "$lte", "endDate")
        .result();

    visitorService.getListByPage({
        pageIndex: req.query.pageIndex,
        pageSize: req.query.pageSize,
        where,
        orderBy: { visitTime: -1 }
    }).then(result => {
        res.sendSuccess(result);
    }).catch(next);
})

visitorRouter.post("/api/visitor", (req, res, next) => {
    const visitor = new visitorModel();
    visitor.ip = req.body.ip;
    visitor.reqUrl = req.body.reqUrl;
    visitor.userAgent = req.headers["user-agent"];

    visitorService.add({ addObj: visitor }).then(result => {
        res.sendSuccess(result);
    }).catch(next);
});


/**获取pv ip pv详情 */
visitorRouter.get("/api/getPageviews", (req, res, next) => {

    const where = conditionBuilder(req.query)
        .setDateInObj("visitTime", "$gte", "startDate")
        .setDateInObj("visitTime", "$lte", "endDate")
        .result();

    /*并行获取pvcount,ipcount pvlist */
    async.series([
        callback => {
            async.parallel([
                callback => {
                    visitorService.count({ where }).then(result => {
                        callback(null,result)
                    }).catch(next)
                },
                callback => {
                    visitorService.group({ keys: ['reqUrl'], where }).then(result => {
                        callback(null,result)
                    }).catch(next)
                },

                callback => {
                    visitorService.distinct({ key: 'ip', where }).then(result => {
                        callback(null,result)
                    }).catch(next)
                }

            ], function (err,dataList) {
                if(err) throw err;
                res.sendSuccess({
                    pvCount: dataList[0],
                    ipCount: dataList[2].length,
                    pvList: dataList[1]
                })
            })

        }

    ])
});



/*
PV 即 Page View，网站浏览量
指页面的浏览次数，用以衡量网站用户访问的网页数量。用户没打开一个页面便记录1次PV，多次打开同一页面则浏览量累计；

UV即 Unique Visitor，独立访客数
指1天内访问某站点的人数，以cookie  为依据。1天内同一访客的多次访问只计为1个访客；

VV即 Visit View，访客的访问次数
用以记录所有访客1天内访问了多少次您的网站。当访客完成所有浏览并最终关掉该网站的所有页面时便完成了一次访问，同一访客1天内可能有多次访问行为，访问次数累计；

IP即独立IP(Internet Protocol)数
指1天内使用不同IP地址的用户访问网站的数量，同一IP无论访问了几个页面，独立IP数均为1。

DAU: Dairy Active User。日活跃用户。
*/




module.exports = visitorRouter;