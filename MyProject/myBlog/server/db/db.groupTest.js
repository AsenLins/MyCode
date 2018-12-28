const mongoDB = require("./mongo");
const uuidv1 = require('uuid/v1');

const articleCollection = new mongoDB({
    collectionName: "article"
});

/*
articleCollection.insertOne({
    condition: { _id: uuidv1(), name: 'a1', age: 10, label: 'js' },
    fn: function (result) {
        console.log("插入article：集合", result.result);
    }
});

articleCollection.findOne({
    condition: { name: "a1" }, fn: function (result) {
        console.log("findOne:", result);
    }
});
*/
articleCollection.find({
    condition: {}, fn: function (result) {
        result.skip(10).toArray(function (err, data) {
            console.log("find", data);
        })
    }
});

/*
articleCollection.findOneAndDelete({
    condition: {_id:"312720a0-0740-11e9-8d68-67636af61538"}, fn: function (result) {
        console.log("删除的result:",result);
    }
})
*/

/*
articleCollection.findOneAndUpdate({
    condition: { _id: "5b5143d0-073e-11e9-ba6f-53c47b94f53c" },update:{name:"goodMan"}, fn:function(result) {
        console.log("findOneAndUpdate:",result);
    }
})
*/


/*
articleCollection.distinct({key:'name',fn:function(result){
    console.log("distinct:",result.length);
}})
*/

articleCollection.count({condition:{_id:'1be19320-0735-11e9-a192-67ae88dfe900'},fn:function(result){
    console.log("count:",result);
}});


/*

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

/*
articleCollection.group({
    keys: ['label'],
    fn: (result) => {
        console.log("得到的result是：", result);
    }
})
*/