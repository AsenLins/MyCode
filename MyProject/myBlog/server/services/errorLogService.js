const baseService=require("./baseService");

class errorLogService extends baseService{
    constructor(){
        super("errorLog");
    }
}

module.exports=new errorLogService();

