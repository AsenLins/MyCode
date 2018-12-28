
const mongo=require("./mongo");

const dbProxy={
    mongo(collectionName){
        return new mongo(collectionName);
    }
}


module.exports=dbProxy;