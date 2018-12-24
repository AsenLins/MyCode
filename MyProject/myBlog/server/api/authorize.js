const app=require("../config/app");

/*接口授权*/
app.all("/api/*",(req,res,next)=>{

    const secret="45B26236-B60A-4122-AF5B-8FF63D30F8BA";
    const login={
        name:"asen",
        pwd:"asenblog443"
    }

    try{
        console.log("cool");
        console.log(d);        
        res.send("cool");

    }catch(ex){
        console.log("报错了");
       next(ex);
    }    
}); 


app.post("/api/loginBlog",(req,res,next)=>{
    
});




module.exports=app;