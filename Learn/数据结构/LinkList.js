/*
单向链表：
链表:每个项都链接下一个项，若没有，则为空
链表的好处：删除和添加元素不需要重新排列其他元素，使用数组则会，Js的数组帮我们处理了这点。
链表的特性：最后一个元素的next总指向next,链表其实就是利用的【对象的指针】。

链表的结构：
=====私有属性和方法=====
node:function(){

}



length

=====暴露的接口方法=====
append 添加到列表最后
insert 添加元素到指定位置
removeAt 根据索引删除指定元素
remove  删除符合条件的元素
indexOf 找到符合条件的元素的索引
isEmpty 判断列表是否为空
size    返回列表长度
getHead 获取列表head
print 打印列表所有元素

*/


function NodeList(){
     var node=function(element){
        this.element=element;
        this.next=null;
     },
     length=0,
     head=null

    this.append=function(element){
        var newNode=new node(element),
        current;
        if(head==null){
           head=newNode;
        }else{
            current=head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=newNode;
        }
        length++;
    };
    this.insert=function(index,element){
        var current=head,
        prev,
        newNode=new node(element);
        if(index>-1&&index<length){
            if(index==0){
                newNode.next=current;
                head=newNode;
                
            }else{
                while(index++<length){
                    prev=current;
                    current=current.next;
                }
                newNode.next=current;
                prev.next=newNode;
            }

            length++;
            return true;
        }
        else{
            return false;
        }
    };

    this.removeAt=function(index){
        var prev,current;
        current=head;
        if(index>-1&&index<length){

            if(index==0){
                head=current.next;
            }
            else{
                while(index++<length){
                    prev=current;
                    current=current.next;   
                }

                prev.next=current.next;
                
            }

            length--;
            return current.element;
        }else{
            return null;
        }
        
        

    }
    this.remove=function(element){
        var index=this.indexOf(element);
        return this.removeAt(index);

    }
    this.indexOf=function(element){
        var current=head;
        var index=0;
        while(current.next!=null){
            if(current.element==element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    }
    this.isEmplty=function(){
       return length===0;
    }
    this.size=function(){
       return length;
    }

    this.getHead=function() {
       return head;   
    }

    this.print=function(){
        var str="",
        current=head;
     
        if(length>0){
            while(current!=null){
                str=str+","+current.element;
                current=current.next;
                console.log(str);
            }
        }
        if(str.indexOf(',')>-1){
            return str.substring(1);
        }
    }
}


var node=new NodeList();
console.log(node);

node.append("asen");
node.append("kim");
node.append("susan");
node.append("kaerma");
node.append("long");

node.insert(2,"kim");
node.insert(0,"father");
node.removeAt(2);
node.remove("kim");


console.log(node.print());
console.log("size",node.size());
console.log("isEmplty",node.isEmplty());
console.log("head",node.getHead());