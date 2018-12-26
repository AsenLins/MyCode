const visitorRouter=require("express").Router();
const visitorService=require("../services/visitorService");
const visitorModel=require("../model/visitorModel");


function buildParam(name,value,operator){
    
}

visitorRouter.get("/api/getVisitorByPage",(req,res,next)=>{
    const where={};
    if(req.query.startDate!==undefined||req.query.endDate!==undefined){
        where["visitTime"]={};
        if(req.query.startDate!==undefined){
            where["visitTime"]["$gte"]=new Date(req.query.startDate);
        }
        if(req.query.endDate!==undefined){
            where["visitTime"]["$lte"]=new Date(req.query.endDate);
        }   
    }
    visitorService.getListByPage({
        pageIndex:req.query.pageIndex,
        pageSize: req.query.pageSize,
        where,
        orderBy:{visitTime:-1}
    }).then(result=>{
        res.sendSuccess(result);
    }).catch(next);
})


visitorRouter.post("/api/visitor",(req,res,next)=>{
    const visitor=new visitorModel();
    visitor.ip=req.body.ip;
    visitor.reqUrl=req.body.reqUrl;
    visitor.userAgent=req.headers["user-agent"];
 
    visitorService.add({addObj:visitor}).then(result=>{
        res.sendSuccess(result);
    }).catch(next);
});

visitorRouter.get("/api/getPageviews",(req,res,next)=>{
    const where={};
    if(req.query.startDate!==undefined||req.query.endDate!==undefined){
        where["visitTime"]={};
        if(req.query.startDate!==undefined){
            where["visitTime"]["$gte"]=new Date(req.query.startDate);
        }
        if(req.query.endDate!==undefined){
            where["visitTime"]["$lte"]=new Date(req.query.endDate);
        }   
    }

    /*
    visitorService.group({keys:['reqUrl'],where}).then(result=>{
         res.sendSuccess(result);
    }).catch(next);
    */


    
    visitorService.distinct({key:'ip',where}).then(result=>{
        res.sendSuccess(result.length)
    }).catch(next);
    

});



/*
PV、UV、VV、独立 IP 数是** 网站分析 **中最基础、最常见的指标。
你清楚各指标的具体意义吗？你了解他们之间的区别吗？接下来，让腾讯分析和您一起对各项基础指标进行解读吧。
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




module.exports=visitorRouter;