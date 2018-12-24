const dbConnect=require("mongodb").MongoClient;



class mongoDB{
    constructor(collectionName){

        /*mongo地址*/
        this.url="mongodb://localhost:27017";
        /*数据库名称*/
        this.dbName="asenblog";
        /*集合名称*/
        this.collectionName=collectionName;
        /*数据库连接配置 */
        this.config={
            useNewUrlParser: true
        }
        /*api名称 */
        this.apiName={
            insertOne:"insertOne",
            find:"find",
            findOne:"findOne",
            findOneAndUpdate:"findOneAndUpdate",
            findOneAndDelete:"findOneAndDelete",
            group:"group",
            distinct:"distinct",
            count:"count"
        }

     
    }
    /**
     *初始化mongodb数据库连接
     *
     * @param {*} fn
     * @memberof mongoDB
     */
    _initDB(fn){
        dbConnect.connect(this.url,this.config,(err,client)=>{
            if(err) throw err;
            const db = client.db(this.dbName).collection(this.collectionName);
            fn(db,client);
            client.close();
        })
    }

    _actionBuilder(){
        /*
        console.log("参数列表是：",arguments);
        console.log("参数长度是：",arguments.length);
        */
        if(arguments.length<2){
            throw new Error("调用mongo方法参数不正确,至少要有一个条件列和调用方法名称。");
        }
        if(arguments[0].length<1){
            throw new Error("参数必须有条件和回调函数");
        }

        /*包装调用参数*/
        const paramArg=arguments[0],
        methodName=arguments[arguments.length-1],
        methodParams=[],
        callBack=paramArg[paramArg.length-1],
        wrapCallBack=function(err,data){
            //if(err) throw err;
            if(data.result!==undefined){
                callBack(err,data.result);
            }else{
                callBack(err,data);
            }
          
        }
        
        /*把arguments对象转换成数组 */
        for(var index=0,argLenght=paramArg.length;index<argLenght-1;index++){
            methodParams.push(paramArg[index]);
        }

        /*添加自定义的回调方法*/
        methodParams.push(wrapCallBack);
       
        /*调用mongo*/
        return this._initDB((db,client)=>{
            //console.log("mongo param is",methodParams);       
            return db[methodName].apply(db,methodParams);           
        });
    }

    /**
     *插入文档
     *
     * @param {*} obj
     * @param {*} fn
     * @memberof mongoDB
     */
    insertOne({addObj={},fn}){
        this._actionBuilder.call(this,[addObj,fn],this.apiName.insertOne);
    }

    /**
     *获取多个文档
     *
     * @param {*} [where={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    find({where={},fn}){
        this._actionBuilder.call(this,[where,fn],this.apiName.find);
    }

    /**
     *获取单个文档
     *
     * @param {*} [where={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    findOne({where={},fn}){
        this._actionBuilder.call(this,[where,fn],this.apiName.findOne);
    }


    /**
     *更新文档
     *
     * @param {*} [where={}]
     * @param {*} [update={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    findOneAndUpdate({where={},update={},fn}){
        this._actionBuilder.call(this,[where,{$set:update},fn],this.apiName.findOneAndUpdate);
    }

    /**
     *删除文档
     *
     * @param {*} [where={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    findOneAndDelete({where={},fn}){
        this._actionBuilder.call(this,[where,fn],this.apiName.findOneAndDelete)
    }

    /**
     *获取分组
     *
     * @param {*} {
     *         keys=[],
     *         where={},
     *         initial={"count":0},
     *         reduce=(obj,prev)=>{prev.count++;},
     *         fn=null}
     * @memberof mongoDB
     */
    group({
        keys=[],
        where={},
        initial={"count":0},
        reduce=(obj,prev)=>{prev.count++;},
        fn=null})
    {

        this._actionBuilder.call(this,[keys,where,initial,reduce,fn],this.apiName.group);
    }

    /**
     *获取唯一文档
     *
     * @param {*} [where={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    distinct({key="",where={},fn}){
        this._actionBuilder.call(this,[key,where,fn],this.apiName.distinct);
    }

    /**
     *获取文档数
     *
     * @param {*} [where={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    count({where={},fn}){
        this._actionBuilder.call(this,[where,fn],this.apiName.count);
    }
}

module.exports=mongoDB;





