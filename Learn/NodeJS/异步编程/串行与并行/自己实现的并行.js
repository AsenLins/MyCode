
function a(){
    console.log("a");
}

function b(){
    console.log("b");

}

function c(){
    console.log("c");
}



const Task=[];
Task.push(c);
Task.push(b);
Task.push(a);

Task.forEach(task=>{
    task();
});