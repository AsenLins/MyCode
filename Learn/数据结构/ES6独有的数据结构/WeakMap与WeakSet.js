/*

WeakSet和WeakMap是弱化的（用对象作为键），没有强引用的键.

*/


var wekeSetObj=new WeakSet();
wekeSetObj.add({
    a:1,
    b:2
})

console.log(wekeSetObj);
console.log(wekeSetObj.has("a"));


var keyObj={
    c:1,
    d:0
}
var wekeMapObj=new WeakMap();
wekeMapObj.set(keyObj,"this is obj");


console.log(wekeMapObj.get(keyObj));


