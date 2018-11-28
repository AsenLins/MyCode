/*
队列：
先进先出，类似排队

队列结构：

enqueue(element(s))：向队列尾部添加一个（或多个）新的项。

dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。

front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。

isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。

size()：返回队列包含的元素个数，与数组的length属性类似。

*/

function Queue(){
    this.queue=[];
}

Queue.prototype={
    enqueue:function(item){
        this.queue.push(item);
    },
    dequeue:function(){
        return this.queue.shift();
    },
    front:function(){
        return this.queue[0];
    },
    isEmpty:function(){
        return this.queue.length===0;
    },
    size:function(){
        return this.queue.length;
    }
}

var queueTest=new Queue();

queueTest.enqueue(1);
queueTest.enqueue(2);
queueTest.enqueue(3);
queueTest.enqueue(4);

/*
console.log("dequeue 1",queueTest.dequeue());
console.log("dequeue 2",queueTest.dequeue());


console.log(queueTest.queue);


console.log("isEmpty",queueTest.isEmpty());
console.log("size",queueTest.size());

*/

/*击鼓传花*/
/*
function GoFlower(players,num){
    var queen=new Queue();
    queen.queue=players;
    while(queen.size()>1){
        for(var index=0;index<num;index++){
           
            queen.enqueue(queen.dequeue());
        }
        
        console.log(queen.size(),queen.dequeue(),"is lost");
    }
    console.log("winner is",queen.front());
}


GoFlower(['sam','susam','alik','kitim','asen'],5);
*/


module.exports=Queue;





