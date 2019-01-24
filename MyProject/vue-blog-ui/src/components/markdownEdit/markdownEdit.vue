<template>
    <div>
        <div class="bl-md-edit">
            <div class="bl-md-toolbar">
                <div>链接</div>
                <div>图片</div>
            </div>

            <div class="bl-md-editPanel">
                <div @input="input" @click="select" @keydown="down"  contenteditable="plaintext-only" class="bl-md-content">
                    
                    {{content}}
                    </div>
            </div>
        </div>
        <!--
        <div class="bl-markdown-prewview">

        </div>
        -->
    </div>
</template>

<script>

    function range(){
        this.range = document.createRange();
        this.selection=window.getSelection();
        this.start=null;
        this.end=null;
    }

    range.prototype={
        create(){
            this.range = document.createRange();
            return this;
        },
        get(){
            this.selection=window.getSelection();
            return this;
        },
        setCollapse(val){
            this.range.collapse(val);
            return this;
        },
        setStart(node,position){
            this.range.setStart(node,position);
            return this;
        },
        setEnd(){
            
            this.range.setStart(node,position);
            return this;
        },
        /*设置光标的位置*/
        setPosition(){
            this.selection.removeAllRanges();
            this.selection.addRange(this.range);
        },
        replaceRange(){
            
        },
        insertBefore(){
            
        },
        insertAfter(){

        }
    }


   

    export default {
        data() {
            return {
                rowIndex:1,
                row:[1],
                content:""
                
            }
        },

        methods: {

            select(){
                var selection = getSelection();

                console.log("selection",selection);

            },
            down(e){
                console.log("down",e);
                const keyCode=e.keyCode;  //8,13
                const code=e.code; //Enter Backspace
                const edit=e.srcElement;
                switch(code){
                    case "Backspace":

                    break;

                    case "Enter":
                    const selection = getSelection();
                    const curNode=selection.anchorNode;
                    var newLine=document.createElement("div");
                    newLine.style.cssText="min-height:20px;background-color:gary;";
                    newLine.innerText="\n";

                

                    /*插入到最后节点*/
                    if(curNode.nextSibling==null){
                        console.log("insert last");
                        edit.appendChild(newLine); 
                    }
                    /*插入到当指定节点后*/
                    else{
                        console.log("insert nextSibling");
                        edit.insertBefore(newLine,curNode.nextSibling);
                    }


                    /*设置光标在新的一行 */
                    
                    var range = document.createRange()
                    range.selectNodeContents(newLine)
                    range.setStart(newLine,0)
                    range.collapse(true)
                    selection.removeAllRanges()
                    selection.addRange(range)  
                    
                    e.preventDefault();
                    break;
                }

            },
            input(e){
                /*
                const edit=e.srcElement;
                const editText=edit.innerText;


                var result="";
                var line=/\n/ig;
                var textAry=[];
                console.log("編輯的text",editText);
                console.log("data",e.data,e);
                if(e.data===null){
                    var selection = getSelection()
                    var newLine=document.createElement("div");
                    newLine.style.cssText="min-height:20px;background-color:red;";
                    edit.appendChild(newLine); 
                    
                    var range = document.createRange()
                    // 光标对象的范围界定为新建的表情节点
                    range.selectNodeContents(newLine)
                    // 光标位置定位在表情节点的最大长度
                    range.setStart(newLine,0)
                    // 使光标开始和光标结束重叠
                    range.collapse(true)
                    // 清除选定对象的所有光标对象
                    selection.removeAllRanges()
                    // 插入新的光标对象
                    selection.addRange(range)  

                  
                }
               
                */
                /*
                if(line.test(editText)){
                    textAry=editText.split(line);
                    console.log("textAry",textAry);
                }else{
                    textAry.push(editText);
                }
              
                for(var index=0;index<textAry.length;index++){
                    result+="<div style='height:30px;'>"+textAry[index]+"</div>";
                }
                */

                /*
                console.log("reslt",result);
                */

                
                /*已\n作分割 */
            }
        },

    }
</script>

<style scoped>

</style>