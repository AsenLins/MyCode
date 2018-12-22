const redis=require("redis");
const db=redis.createClient();

class Entry{
    constructor(obj){
        for(let key in obj){
            this[key]=obj[key];
        }
    }
    /*获取 */
    getRang(from,to,cb){
        db.lrange('entries',from,to,(err,items)=>{
            if(err) return cb(err)
            let entries=[];
            items.forEach(item=>{
                entries.push(JSON.parse(item))
            });
            cb(null,entries);

        })

    }
    /*新增*/
    save(cb){
        const entryJson=JSON.stringify(this);
        db.lpush('entries'),
        entryJson,
        (err)=>{
            if(err) return cb(err);
            cb();
        }
    }
}


module.exports=Entry;
