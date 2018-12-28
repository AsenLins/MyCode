
const uuidv1 = require('uuid/v1');

class errorLogModel{
    constructor(option={}){
        this._id=option._id||uuidv1();
        this.ex=option.ex||"";
        this.createDate=option.createDate||new Date();
        this.isRead=option.isRead||false
    }   
}


module.exports=errorLogModel;