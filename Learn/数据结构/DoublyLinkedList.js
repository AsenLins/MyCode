/*双向链表
与单项列表一样，不同地方在于多了个指针"指向上一个元素"

插入指定位置:新增的node的next指向下一个，prev等于下一个的prev的项，被插入的下一个项的prev等于新的node
删除也是同理。

*/
function NodeList(){
    var node=function(element){
       this.element=element;
       this.next=null;

       /*双向列表指向上一个元素*/
       this.prev=null;
    },
    length=0,
    head=null

   this.append=function(element){
       var newNode=new node(element),
       current,
       prev;
       if(head==null){
          head=newNode;
       }else{
           current=head;
           while(current.next!=null){
               current=current.next;
               prev=current;
           }
           current.prev=prev;
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
               if(head==null){
                newNode.next=current;
                head=newNode;
               }else{

                 current.prev=newNode;
                 newNode.next=current;
                 head=newNode;
               }

               
           }
           else{
               while(index++<length){
                   prev=current;
                   current=current.next;
               }
               newNode.next=prev;
               newNode.prev=prev.prev;

               current.prev=newNode;
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