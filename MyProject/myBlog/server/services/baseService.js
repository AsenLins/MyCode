
const dbProxy=require("../db/dbProxy");

class baseService{
    constructor(collectionName){
        this.db=dbProxy.mongo(collectionName);
    }

    getListByPage({pageIndex=1,pageSize=10,where={},orderBy={}}){
        return new Promise((resolve,reject)=>{
            this.db.find({where,fn:function(err,result){
                if(err) reject(err);
                
                pageIndex=parseInt(pageIndex);
                pageSize=parseInt(pageSize);

                result.sort(orderBy).skip((pageIndex-1)*pageSize).limit(pageSize).toArray((err,result)=>{
                    if(err) reject(err);
                    resolve(result);
                });
            }})
        });
    }
    get({id}){
        return new Promise((resolve,reject)=>{
            this.db.findOne({where:{_id:id},fn:(err,result)=>{
                if(err) reject(err);
                resolve(result);
            }})
        });
    }
    add({addObj={}}){
        return new Promise((resolve,reject)=>{
            this.db.insertOne({addObj,fn:(err,result)=>{
                if(err) reject(err);
                resolve(result);
            }})
        });
    }
    update({where={},update={}}){
        return new Promise((resolve,reject)=>{
            this.db.findOneAndUpdate({where,update,fn:(err,result)=>{
                if(err) reject(err);
                resolve(result);
            }})
        });
    }
    remove({id}){
        return new Promise((resolve,reject)=>{
            this.db.findOneAndDelete({where:{_id:id},fn:(err,result)=>{
                if(err) reject(err);
                resolve(result);
            }})
        })
    }

    group(
        {
        keys=[],
        where={},
        initial={"count":0},
        reduce=(obj,prev)=>{prev.count++;}})
        {
        return new Promise((resolve,reject)=>{
            this.db.group({keys:keys,where,initial,reduce,fn:(err,result)=>{
                if(err) reject(err);
                resolve(result);
            }});
        })
    }

    distinct({key="",where={}}){
        return new Promise((resolve,reject)=>{
            this.db.distinct({key,where,fn:(err,result)=>{
                if(err) reject(err);
                resolve(result);
            }})
        })
    }

    count({where={}}){
        return new Promise((resolve,reject)=>{
            this.db.count({where,fn:(err,result)=>{
                if(err) reject(err);
                resolve(result);
            }});
        });
    }
}


module.exports=baseService;
