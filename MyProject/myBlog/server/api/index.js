const apiArticleRouter=require("./article");
const apiAuthorizeRouter=require("./authorize");
const apiErrorLogRouter=require("./errorLog");
const apiVisitorRouter=require("./visitor");



module.exports=[
    apiAuthorizeRouter,
    apiArticleRouter,
    apiErrorLogRouter,
    apiVisitorRouter
]



