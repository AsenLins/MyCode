const app=require("express")(),
handles=require("./middleware/errorHandle"),
customSend=require("./middleware/customSend");
objectMap=require("./middleware/objectMap");
thirdParty=require("./middleware/third-party"),
apiRouters=require("./api/index"),
controllerRouter=require("./controller/index");
port=3000;

/*第三方中间件*/
app.use(thirdParty.bodyParse.json());
app.use(thirdParty.bodyParse.raw());
app.use(thirdParty.bodyParse.urlencoded({extended:false}));
/*
app.use(thirdParty.multer);
app.use(thirdParty.cors);
app.use(thirdParty.compression());
app.use(thirdParty.bodyParse);
*/
app.use(customSend);
app.use(objectMap);

/*api路由*/
app.use(apiRouters);
/*mvc路由*/
//app.use(controllerRouter);
/*自定义错误路由*/
app.use(handles.errorHandle);
app.use("*",handles.notFoundHandle);

app.listen(port,()=>{
    console.log("server is start:",port);
});





