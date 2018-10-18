/**
 * 栈
 * 后进先出，就像一本本层叠的书或盘子
 * 
 * 一个栈的结构：
 * 
 */
 class Stack{
     constructor(){
        this.stack=[];
     }

     /*新增元素,可多个*/
     push(){
       
        for(var i=0;i<arguments.length;i++){
            this.stack.push(arguments[i]);
        }
        
     }

     /*移除顶层的元素，并返回 */
     pop(){

        return this.stack.pop();
     }  

     /*返回栈顶层的元素 */
     peek(){
        return this.stack[this.stack.length-1];
     }

     /*栈里没任何元素则返回true,有则返回false*/
     isEmpty(){
        return this.stack.length==0;
     }

     /*清除栈里的所有元素*/
     clear(){
        this.stack=[];
     }

     /*返回栈里元素个数 */
     size(){
        return this.stack.length;
     }
 }



module.exports=new Stack();

