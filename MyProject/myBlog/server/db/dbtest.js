const mongoDB=require("./mongo");
const uuidv1 = require('uuid/v1');


//console.log("===== mongo is ====",mongoDB);
const articleCollection=new mongoDB({
    collectionName:"article"
});

/*
articleCollection.insert({_id:uuidv1(),name:'kill',age:10},function(result){
    console.log("插入article：集合",result.result);
});
*/


/*
articleCollection.update({"_id":"9924d610-04e9-11e9-b3b1-c7ca4dd5622e"},{"name":"这是修改之后的名字"},function(result){
    console.log("修改之后结果：",result);
})
*/


articleCollection.remove({"_id":"9924d610-04e9-11e9-b3b1-c7ca4dd5622e"},(result)=>{
    console.log("删除之后的结果:",result);
});

articleCollection.getList({},(list)=>{
    console.log("获取的数据集是:",list);
});

articleCollection.getOne({"_id":"9924d610-04e9-11e9-b3b1-c7ca4dd5622e"},(obj)=>{
    console.log("查找的单个元素是",obj);
});









