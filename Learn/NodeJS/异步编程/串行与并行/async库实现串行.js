const async=require("async");

async.series([
    callback=>{
        console.log("i am a");
        callback(null,"a");
    },

    callback=>{
        console.log("i am b");
        callback(new Error("b is error"),"b");
    },

    callback=>{
        console.log("i am c");
        console.log("prev is ",this);
        callback(null,"c");
        //console.log("prev is ",result);
    }

],function(err,result){
    console.log(err);
    console.log(result);
})