<template>
    <div class="bl-md-editWrap">

            <div class="bl-md-toolbar">
                <input @click="toolBlod" type="button" value="加粗" />
                <input @click="toolItalic" type="button" value="斜体" />
                <input @click="toolLink" type="button" value="链接" />
                <input @click="toolImg" type="button" value="图片" />
                <input @click="toolCode" type="button" value="代码" />
                <input @click="toolList" type="button" value="列表" />
            </div>

            <div class="bl-md-editPanel">
                <div class="bl-md-rowPanel">
                    <div :key="row.index" :style="{height:row.height}" v-for="row in rows" >{{row.index}}</div>
                </div>
                <div @input="input"  @keydown="down"  contenteditable="plaintext-only" class="bl-md-content">{{content}}</div>
            </div>
    </div>
</template>

<script>
import range from './range.js';
import rowText from './rowText.js';


function fontHeight(text){
    this.div=document.createElement("div");
    this.div.setAttribute("id","ts");
    this.div.style.cssText="visibility:hidden;display:inline-block;word-break:break-all;position: absolute; top:0px;";
    document.getElementById("testHeight").appendChild(this.div);
}
fontHeight.prototype={
    getTextHeight(text){      
         document.getElementById("ts").innerText=text;
         var dom=document.getElementById("ts");
        console.log(window.getComputedStyle(dom).height);
    }
}



var rangeObj=null;
   

    export default {
        data() {
            return {
                rows:[
                    {
                        index:1,
                        height:25
                    }
                ],
                content:""
                
            }
        },
        mounted() {
            rangeObj=new range(".bl-md-content");
            rowText.init({
                width:"100%",
                target:".bl-md-editPanel"
            });

           


        },
        methods: {
            down(e){
                return;
                //console.log("down",e);
                const keyCode=e.keyCode;  //8,13
                const code=e.code; //Enter Backspace
                const edit=e.srcElement;
                console.log(e);
                var fontHeights=new fontHeight();
                //var height=fontHeights.getTextHeight(e.srcElement.childNodes[0].data);

                switch(code){
                    case "Backspace":

                    break;

                    case "Enter":
                    const selection = getSelection();
                    var curNode=selection.anchorNode;
                    var newLine=document.createElement("div");
                    newLine.style.cssText="min-height:20px;background-color:green;";
                    newLine.innerText="\n";
                
                    return;
                    console.log("nextSibing",curNode.nodeName);
                    if(curNode.nodeName==="#text"){
                        curNode=curNode.parentNode;
                    }
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
                const edit=e.srcElement;
             
                var newRows=[];

                console.log("the-width",window.getComputedStyle(document.querySelector('.bl-md-rowPanel')).width);
                if(/\n/ig.test(edit.innerText)){
                    var row=edit.innerText.split(/\n/ig);
                    row=row.slice(0,row.length-1);
                    console.log("therow",row);
                    row.forEach((element,index) => {

                        var height=rowText.setText(element).getTextStyle("height");
                        newRows.push({
                            index:index+1,
                            height:height
                        });
                        console.log("height",height);
                    });
                }else{
                    newRows.push({
                        index:1
                    });
                }

                this.rows=newRows;
                //console.log("theHeight",height);
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
            },
            toolBlod(){

            },
            toolItalic(){

            },
            toolLink(){

            },
            toolImg(){

            }, 
            toolCode(){

            },
            
            toolList(){
                
            }


        },

    }
</script>

<style scoped>

</style>