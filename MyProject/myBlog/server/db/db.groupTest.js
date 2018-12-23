const mongoDB=require("./mongo");
const uuidv1 = require('uuid/v1');

const articleCollection=new mongoDB({
    collectionName:"article"
});


/*
articleCollection.insert({_id:uuidv1(),name:'a1',age:10,label:'js'},function(result){
    console.log("插入article：集合",result.result);
});
articleCollection.insert({_id:uuidv1(),name:'a1',age:10,label:'js'},function(result){
    console.log("插入article：集合",result.result);
});

articleCollection.insert({_id:uuidv1(),name:'a3',age:10,label:'css'},function(result){
    console.log("插入article：集合",result.result);
});

articleCollection.insert({_id:uuidv1(),name:'a4',age:10,label:'vue'},function(result){
    console.log("插入article：集合",result.result);
});
*/

/*
articleCollection.group(['label'],(result)=>{
    console.log("得到的result是：",result);
});
*/



articleCollection.groupNew({
    keys:['label'],
    fn:(result)=>{
    console.log("得到的result是：",result);
}});
