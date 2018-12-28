const apiArticleRouter=require("./article");
const apiAuthorizeRouter=require("./authorize");
const apiErrorLogRouter=require("./errorLog");
const apiVisitorRouter=require("./visitor");
const apiLoginLogRouter=require("./loginLog");



module.exports=[
    apiAuthorizeRouter,
    apiArticleRouter,
    apiErrorLogRouter,
    apiVisitorRouter,
    apiLoginLogRouter
]



