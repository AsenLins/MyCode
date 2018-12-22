
function a(result){
    console.log(result);
    next(null,"b");
}

function b(result){
  
    console.log(result);

    next(null,"c");
   
}

function c(result){
    console.log(result);
    //next(null,"c");
}


const task=[
    a,
    b,
    c
]

const next=function(err,result){
    if(err) throw err;

    const curTask=task.shift();
    if(curTask){
        curTask(result);
    }
}

next(null,"a");
