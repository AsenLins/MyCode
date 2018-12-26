/*未完成 
使用其他操作符只是添加到当前构造列表里。
使用build才真正返回result,

*/
const buildMongoParma={
    set(params){
        return new buildMongoParmaObj(params);
    }
}

class buildMongoParmaObj{
    constructor(params={}){
        this.params=params;
        this.paramsBuildList=[];
        this.result={};
    }
    like(name,reg=""){       
        return this;
    }
    gt(){
        return this;
    }
    gte(){
        return this;
    }
    lt(){
        return this;
    }
    lte(){
        return this;
    }
    equal(){

        return this;
    }
    result(){

    }

}

const b=buildMongoParma.set({name:"asen"});

console.log();



module.exports=buildMongoParma;

