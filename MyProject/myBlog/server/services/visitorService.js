const baseService=require("./baseService");

class visitorService extends baseService{
    constructor(){
        super("visitor");
    }
}

module.exports=new visitorService();
