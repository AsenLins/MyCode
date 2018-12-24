const app=require("express")(),
errorHandle=require("./middleware/errorHandle"),
thirdParty=require("./middleware/third-party"),
apiRouters=require("./api/index"),
controllerRouter=require("./controller/index");
port=3000;

/*第三方中间件*/
app.use(thirdParty.multer);
app.use(thirdParty.cors);
app.use(thirdParty.compression());
app.use(thirdParty.bodyParse);
/*api路由*/
app.use(apiRouters);
/*mvc路由*/
//app.use(controllerRouter);
/*自定义错误路由*/
app.use(errorHandle);

app.listen(port,()=>{
    console.log("server is start:",port);
});





