const uuidv1 = require('uuid/v1');
class loginLogModel{
    constructor(option={}){
        this._id=option._id||uuidv1();
        this.loginUser=option.logUser||"";
        this.ip=option.logUser||"",
        this.loginTime=option.loginTime||new Date();
    }
}

module.exports=loginLogModel;