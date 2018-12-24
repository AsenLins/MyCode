const baseService=require("./baseService");

class loginLogService extends baseService{
    constructor(){
        super("loginLog");
    }
}

module.exports=new loginLogService();
