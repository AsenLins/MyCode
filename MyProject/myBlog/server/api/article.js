const articleRouter=require("express").Router();


articleRouter.get("/test",(req,res)=>{
    res.send("cool");
});


module.exports=articleRouter;