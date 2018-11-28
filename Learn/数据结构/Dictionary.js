/*
Dictionary
字典

集合以[值，值]的形式存储元素，字典则是以[键，值]的形式来存储元素

字典结构：

set(key,value)：向字典中添加新元素。

delete(key)：通过使用键值来从字典中移除键值对应的数据值。

has(key)：如果某个键值存在于这个字典中，则返回true，反之则返回false。

get(key)：通过键值查找特定的数值并返回。

clear()：将这个字典中的所有元素全部删除。

size()：返回字典所包含元素的数量。与数组的length属性类似。

keys()：将字典所包含的所有键名以数组形式返回。

values()：将字典所包含的所有数值以数组形式返回。

*/


function Dictionary(){
    this.items={};
}
Dictionary.prototype={
    set:function(key,value){
        this.items[key]=value;
    },
    delete:function(key){
        if(this.has(key)){
            delete this.items[key];
            return true;
        }
        return false;
        
    },
    has:function(key){
        return key in this.items;
    },
    get:function(key){
        return this.items[key];
    },
    clear:function(){
        this.items={};
    },
    size:function(){
        return Object.keys(this.items).length;
    },
    keys:function(){
        return Object.keys(this.items);
    },
    values:function(){
        var result=[];
        for(var key in this.items){
            if(this.has(key)){
                result.push(this.items[key]);
            }
        }

        return result;
    }
}

var diObj=new Dictionary();


diObj.set("a","123");
diObj.set("b","456");
diObj.set("c","789");
diObj.set("d","101112");

diObj.delete("d");
console.log("has",diObj.has("a"));
console.log("size",diObj.size());
console.log("keys",diObj.keys());
console.log("get",diObj.get("a"));

console.log("values",diObj.values());


module.exports=Dictionary;