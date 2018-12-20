const app=require("../config/app");

/*所有api接口都要授权 */
app.all("/api/*",(req,res,next)=>{
    try{
        console.log("cool");
        console.log(d);        
        res.send("cool");

    }catch(ex){
        console.log("报错了");
       next(ex);
    }    
}); 




module.exports=app;