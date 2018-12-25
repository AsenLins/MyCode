const authorizeRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const loginLogService=require("../services/loginLogService");
const loginLogModel=require("../model/loginLogModel");

const secret = "45B26236-B60A-4122-AF5B-8FF63D30F8BA";


/*调用api必须授权*/
/*
authorizeRouter.all("/api/*[^loginBlogManger]", (req, res, next) => {
    try{
        const token=req.query.token||req.body.token;
        if(token===undefined||token===""){
            res.status(403).send("Forbidden");
        }
        jwt.verify(token,secret,(err,data)=>{
            if(err) {
                res.status(403).send(err.message);   
                return;
            }
            next();
        });
    }
    catch(ex){
        throw ex;
    }
});
*/

authorizeRouter.get("/api/apitest",(req,res)=>{
    res.send("this is api test");
});

/**后台登录*/
authorizeRouter.post("/api/loginBlogManger", (req, res) => {
    try {
        const login = req.body;
        if (login.loginName === undefined || login.pwd === undefined) {
            res.status(403).send("Forbidden");
        }
        else if (login.loginName !== "asen" || login.pwd != "asenblog443") {
            res.status(403).send("Forbidden");
        }
     
        payLoad = {
                admin: true,
                exp: Math.floor(Date.now() / 1000) + (60 * 5),
                jti: uuid.v1()
        }

        const loginLog=new loginLogModel();
        loginLog.loginUser=login.loginName;
        loginLog.ip=req.ip;
        loginLogService.add({addObj:loginLog}).then((result)=>{
            res.sendSuccess({
                mes: "登录成功",
                token: jwt.sign(payLoad, secret)
            });
    
        });

    }
    catch (ex) {
        throw ex;
    }
});




module.exports = authorizeRouter;