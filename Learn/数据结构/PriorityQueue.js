/*
优先队列:也是先进先出，但是会分优先级，优先级越高，则在队列排的越前,同优先级的队列会按照正常队列那样排列。

优先队列结构：

enqueue(element(s))：向队列尾部添加一个（或多个）新的项。

dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。

front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。

isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。

size()：返回队列包含的元素个数，与数组的length属性类似。

*/

function PriorityQueue(){
    this.list=[];
    this.newQueue=function(item,level){
        return{
            item:item,
            level:level
        }
    };

}

PriorityQueue.prototype={
    enqueue:function(item,level){
        var isAdd=false;
        var newQueue=this.newQueue;
        var newQueueObj=new newQueue(item,level);
        for(var index=0,count=this.list.length;index<count;index++){

            if(level>this.list[index].level){
                this.list.splice(index,0,newQueueObj);
                isAdd=true;
                break;
            }

        }
        if(isAdd===false){
            this.list.push(newQueueObj)
        }

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


var PriorityQueueObj=new PriorityQueue();

PriorityQueueObj.enqueue("sam",1);
PriorityQueueObj.enqueue("kitiy",2);
PriorityQueueObj.enqueue("lili",3);


console.log(PriorityQueueObj.list[0]);
console.log(PriorityQueueObj.list[1]);
console.log(PriorityQueueObj.list[2]);