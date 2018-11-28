/*集合
集合以[值，值]的形式存储元素

集合是由一组无序，且值不重复的项组成。

集合可以进行：并集、交集、差集等数学操作。

ECMScript6的Set对象

集合结构：
add(value)：向集合添加一个新的项。

delete(value)：从集合移除一个值。

has(value)：如果值在集合中，返回true，否则返回false。

clear()：移除集合中的所有项。

size()：返回集合所包含元素的数量。与数组的length属性类似。

values()：返回一个包含集合中所有值的数组。

intersection(list):返回一个交集的集合。

difference(list):返回一个差集。

subset(list)判断当前集合是否是子集,集的元素个数需要小于或等于要比较的集合。

*/
function List(){
    this.items={};
}

List.prototype={
    add:function(value){
        this.items[value]=value;
    },
    delete:function(value){
        delete this.items[value];
    },
    has:function(value){
        return this.items.hasOwnProperty(value)
    },
    clear:function(){
        this.items={};
    },
    size:function(){
        return Object.keys(this.items).length;
    },
    values:function(){
        var result=[];
        for(var item in this.items){
            result.push(item);
        }
        return result;
    },
     
    intersection:function(set){
        var result=[];
        for(var key in set.items){
            if(this.items.hasOwnProperty(key)){
                result.push(this.items[key]);
            }
        }
        return result;
    },
    difference:function(set){
        var result=[];
        for(var key in this.items){
            console.log("===",this.items.hasOwnProperty(key));
            if(set.items.hasOwnProperty(key)==false){
                result.push(this.items[key]);
            }
        }
        return result;
    },
    subset:function(set){
        var isSubSet=true;
        if(set.size()>this.size()){
            return isSubSet=false;
        }
        for(var key in set.items){
            if(this.items.hasOwnProperty(key)==false){
                return isSubSet=false;
            }
        }
        return isSubSet;
    }

    
}


var setObj=new List();

setObj.add("1");
setObj.add("2");
setObj.add("3");
setObj.add("4");
setObj.add("5");

setObj.delete("5");

console.log("size",setObj.size());
console.log("has", setObj.has(3));
console.log(setObj.values());




var setObj2=new List();

setObj2.add("1");
setObj2.add("2");



console.log("交集", setObj.intersection(setObj2));
console.log("差集",setObj.difference(setObj2));
console.log("是否子集",setObj.subset(setObj2));
/*集合的操作*/

