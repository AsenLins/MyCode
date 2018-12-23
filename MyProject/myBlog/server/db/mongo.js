const dbConnect=require("mongodb").MongoClient;





class mongoDB{
    constructor(option){
        
        /*mongo地址*/
        this.url="mongodb://localhost:27017";
        /*数据库名称*/
        this.dbName="asenblog";
        /*集合名称*/
        this.collectionName=option.collectionName;
    }
    /**
     *初始化mongodb数据库连接
     *
     * @param {*} fn
     * @memberof mongoDB
     */
    _initDB(fn){
        dbConnect.connect(this.url,(err,client)=>{
            if(err) throw err;
            const db = client.db(this.dbName).collection(this.collectionName);
            fn(db,client);
            client.close();
        })
    }

    _buildMethod(){
        console.log("参数列表是：",arguments);
        console.log("参数长度是：",arguments.length);
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
        wrapCallBack=function(err,result){
            if(err) throw err;
            callBack(result);
        }
        
        /*把arguments对象转换成数组 */
        for(var index=0,argLenght=paramArg.length;index<argLenght-1;index++){
            methodParams.push(paramArg[index]);
        }

        /*添加自定义的回调方法*/
        methodParams.push(wrapCallBack);
 
        /*调用mongo*/
        this._initDB((db,client)=>{
            console.log("mongo param is",methodParams);       
            db[methodName].apply(db,methodParams);           
        });
    }

    /**
     *插入文档
     *
     * @param {*} obj
     * @param {*} fn
     * @memberof mongoDB
     */
    insert(condition={},fn){
        this._initDB((db,client)=>{
            db.insertOne(condition,(err,result)=>{
                if(err) throw err;
                fn(result); 
            });
        });
    }

    /**
     *获取多个文档
     *
     * @param {*} [condition={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    getList(condition={},fn){
        this._initDB((db,client)=>{
            db.find(condition).toArray((err,result)=>{
                if(err) throw err;
                fn(result);
            })
        });
    }

    /**
     *后去单个文档
     *
     * @param {*} [condition={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    getOne(condition={},fn){
        this._initDB((db,client)=>{
            db.findOne(condition,function(err,result){
                if(err) throw err;
                fn(result);
            });
        });
    }

    /**
     *更新文档
     *
     * @param {*} [condition={}]
     * @param {*} [updateObj={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    update(condition={},updateObj={},fn){
        this._initDB((db,client)=>{

            db.findOneAndUpdate(condition,{$set:updateObj},(err,result)=>{
                if(err) throw err;
                fn(result);
            });
        });
    }

    /**
     *删除文档
     *
     * @param {*} [condition={}]
     * @param {*} fn
     * @memberof mongoDB
     */
    remove(condition={},fn){
        this._initDB((db,client)=>{
            db.findOneAndDelete(condition,(err,result)=>{
                if(err) throw err;
                fn(result);
            })
        });
    }

    testFn({a,b=1,c=3}={}){
        console.log(b)
        console.log("参数",arguments);
    }

    groupNew({
        keys=[],
        condition={},
        initial={"count":0},
        reduce=(obj,prev)=>{prev.count++;},
        fn=null}){

        this._buildMethod.call(this,[keys,condition,initial,reduce,fn],"group");
    }

    /*获取分组*/
    group(condition=[],fn){
        const params=[
            condition,
            {},
            {"count":0},
            (obj,prev)=>{prev.count++;},
            fn
        ]
        console.log("外层参数",params);
        this._buildMethod.call(this,params,"group");

        /*
        this._initDB((db,client)=>{
            db.group(condition,{},{"count":0}, (obj,prev)=>{ prev.count++; },(err,result)=>{
                if(err) throw err;
                fn(result);
            });    
        })
        */
  
    }
    /*获取唯一的文档 */
    distinct(condition={},fn){
        this._initDB((db,client)=>{
            db.distinct(condition,(err,result)=>{
                if(err) throw err;
                fn(result);
            });
        });
    }
    /*获取文档数 */
    count(condition={},fn){
        db.count(condition,(err,result)=>{
            if(err) throw err;
            fn(result);
        });
    }
}

module.exports=mongoDB;





