const async=require("async");

var sum=1;

async.series([
    callback=>{
        async.parallel([
            callback=>{
                sum=sum+2;
                callback(null,sum);
            },
            callback=>{
                sum=sum+3;
                callback(null,sum)
            }
        ],callback)
    }

],function(err,result){
    console.log("结果",result);
})