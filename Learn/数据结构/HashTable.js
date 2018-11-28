/*
HashTable
散列表

散列表其实就是运用了数组可以直接通过下标读取数据的优势(数组通过下标读取元素不需要遍历)，把键值通过算法转换成数组下标，这样又能使用键值对，又能运用到数组的特性。

数据结构:

put(key,value)：向散列表增加一个新的项（也能更新散列表）。

remove(key)：根据键值从散列表中移除值。

get(key)：返回根据键值检索到的特定的值。

*/

function HashTable(){
    this.items=[];
}

HashTable.prototype={
    put:function(key,value){
        this.items[this.loseloseHashCode(key)]=value;
    },
    remove:function(key){
        this.items[this.loseloseHashCode(key)]=undefined;
    },
    get:function(key){
        return this.items[this.loseloseHashCode(key)];
    },
    loseloseHashCode:function(key){
        var hash=0;
        for(var i=0;i<key.length;i++){
            hash=hash+key.charCodeAt(i);
        }

        return hash%37;
    }
}

var hasTableObj=new HashTable();

hasTableObj.put("sam",4399);
hasTableObj.put("kim",8921);
hasTableObj.put("pop",123123);

hasTableObj.remove("pop");

console.log(hasTableObj.get("kim"));
console.log(hasTableObj.get("pop"));

