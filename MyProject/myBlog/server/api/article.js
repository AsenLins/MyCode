const articleRouter=require("express").Router();
const articleService=require("../services/articleService");

/**获取文章列表 */
articleRouter.get("/api/articleList",(req,res)=>{
    try{
        articleService.getListByPage({
            pageIndex:req.url.pageIndex,
            pageSize:req.url.pageSize,
            orderBy:{createDate:-1}
        }).then((result)=>{
            res.send(result);
        });
    }
    catch(ex){
        throw ex;
    }
});
/**获取文章详情 */
articleRouter.get("api/article/:id",(req,res)=>{
    try{

    }
    catch(ex){

    }
});

/**新增文章或修改文章*/
articleRouter.put("api/article/:id",(req,res)=>{
    try{

    }
    catch(ex){

    }
});

/**删除文章 */
articleRouter.delete("api/article/:id",(req,res)=>{
    try{

    }
    catch(ex){

    }
});

module.exports=articleRouter;