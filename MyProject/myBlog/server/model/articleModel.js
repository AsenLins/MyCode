
const uuidv1 = require('uuid/v1');

class ArticleModel{
    constructor(option){
        this._id=option._id||uuidv1();           //文章ID
        this.name=option.name||'';              //文章名称
        this.routerName=option.routerName||'';  //文章路由(年/月/日/文章拼音或英文)
        this.content=option.content||'';        //文章内容
        this.pic=option.pic||'';                //文章Banner
        this.label=option.label||'';            //文章标签
        this.seoTitle=option.seoTitle||'';      //文章SEO标题
        this.seoDesc=option.seoDesc||'';        //文章SEO内容
        this.vcount=option.vcount||0;           //访问次数
        this.like=option.like||0;               //顶的人数(预留)
        this.isDraft=option.isDraft||true;      //是否为草稿 
        this.createDate=option.createDate||new Date();  //创建日期
        this.releaseDate=option.releaseDate||null;//发布日期
    }
}

module.exports=ArticleModel;