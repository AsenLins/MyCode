/*
ES6 Map

Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应
Map可以用对象作为值。
*/

var mapObj=new Map();
console.log(mapObj);

mapObj.set("a","a");
mapObj.set("b","b");
mapObj.set("c","c");

mapObj.forEach(function(val,key,map){

    console.log(val);
    console.log(key);
    //console.log(map);

});

console.log(mapObj.size);




