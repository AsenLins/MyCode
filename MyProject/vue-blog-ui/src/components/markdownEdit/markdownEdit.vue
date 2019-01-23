<template>
    <div>
        <div class="bl-md-edit">
            <div class="bl-md-toolbar">
                <div>链接</div>
                <div>图片</div>
            </div>

            <div class="bl-md-editPanel">
                <div @input="input"  contenteditable="true" class="bl-md-content">
                    
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
    export default {
        data() {
            return {
                rowIndex:1,
                row:[1],
                content:""
                
            }
        },

        methods: {
            input(e){

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
               


                if(line.test(editText)){
                    textAry=editText.split(line);
                    console.log("textAry",textAry);
                }else{
                    textAry.push(editText);
                }
              
                for(var index=0;index<textAry.length;index++){
                    result+="<div style='height:30px;'>"+textAry[index]+"</div>";
                }

                console.log("reslt",result);


                
                /*已\n作分割 */
            }
        },

    }
</script>

<style scoped>

</style>