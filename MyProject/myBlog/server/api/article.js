const articleRouter = require("express").Router();
const articleService = require("../services/articleService");
const articleModel = require("../model/articleModel");

/**获取文章列表 */
articleRouter.get("/api/articleList", (req, res, next) => {
    const where={};
    if(req.query.name!==undefined){
        /*正则使用字符串即可*/
        where["name"]={'$regex': req.query.name};
    }
    articleService.getListByPage({
        pageIndex: req.query.pageIndex,
        pageSize: req.query.pageSize,
        where,
        orderBy: { createDate: -1 }
    }).then((result) => {
        res.sendSuccess(result);
    }).catch(next);
});

/**获取文章详情 */
articleRouter.get("/api/article/:id", (req, res, next) => {

    articleService.get({ id: req.params.id }).then((result) => {
        if (result != null) {
            res.sendSuccess(result);
        } else {
            res.sendFail({
                mes: "该文章不存在"
            });
        }
    }).catch(next);

});

/**新增文章或修改文章*/
articleRouter.put("/api/article", (req, res, next) => {
    
    articleService.get({ id: req.body.id }).then((findResult) => {
        
        /*不存在,则添加 */
        if (findResult == null) {
            const article=new articleModel();
            req.mapObj(article);
        
            articleService.add({ addObj:article }).then(addResult=>{              
                res.sendSuccess({
                    mes:"添加成功",
                    addResult
                });
            }).catch(next);
        }

        /*存在则修改 */
        else {
            const updateObj=findResult;
            req.mapObj(updateObj); 
            articleService.updateOne({where:{_id:result._id},update:updateObj}).then(updateResult=>{
                res.sendSuccess({
                    mes:"更新成功",
                    updateResult
                });               
            })
        }

    }).catch(next)


});

/**删除文章 */
articleRouter.delete("/api/article/:id", (req, res, next) => {
    articleService.remove({ id: req.params.id||req.body.id }).then((result) => {
        res.sendSuccess({
            mes:"删除成功",
            result
        });
    }).catch(next);
});

module.exports = articleRouter;