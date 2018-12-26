const uuidv1 = require('uuid/v1');

class visitorModel{
    constructor(option={}){
        this._id=option._id||uuidv1();
        this.ip=option.ip||"";
        this.reqUrl=option.reqUrl||"";
        this.userAgent="";
        this.visitTime=option.vistTime||new Date();
    }
}