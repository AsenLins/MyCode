const baseService=require("./baseService");

class articleService extends baseService{
    constructor(){
        super("article");
    }
}

module.exports=new articleService();

