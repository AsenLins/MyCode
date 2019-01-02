<template>
<div class="testWrap">
    <div id="testDemo"  class="testDemo" contenteditable="true"></div>
    <input type="button" @click="getHtml()" value="获取HTML" />
</div>
</template>

<script>
    export default {
        name:"markdownView",
        data() {
            return {
                html:"443"
            }
        },
        watch: {
            html:function(oldval,newval){
                console.log(oldval,newval);
            }
        },
        methods: {
          getHtml(){
            const markdownPanel=document.getElementById("testDemo");
            const html=markdownPanel.innerText;

            const regs=/\n/;
            const markdownAry=html.split(regs);
            const markdownResult=[];

            markdownAry.forEach((row,index)=>{
                //console.log("row",index,": ",row);
                //console.log(row.replace(/\s/ig,""));

                //const blockReg=/^\s*\#{1,6}|^\s*\>{1}|^\s*\- \[ \]|^\s*\-\[x\]|^\s*\- |^\s*\d+\. |^\s*\`\`\`|^\s*\-{3,}$|^\s*\*{3,}$|^\s*(\*\s){2}\*$/;
                const blogRegAry=[
                "^\s*\\#{1,6}",
                "|^\s*\\>{1}",
                "|^\s*\\- \\[ \\]",
                "|^\s*\\-\\[x\\]",
                "|^\s*\\-", 
                "|^\s*\d+\\.",
                "|^\s*\\\`\\\`\\\`$",
                "|^\s*\\-{3,}$",
                "|^\s*\\*{3,}$",
                "|^\s*(\\*\s){2}\\*$"
                ];


                //const inlineReg=/\*{2}[^\*]+?\*{2}|\*{1}[^\*]+?\*{1}|\_{2}[^\_]+?\_{2}/ig;
                const inlineRegAry=[
                    "\\*{2}[^\\*]+?\\*{2}",
                    "|\\*{1}[^\\*]+?\\*{1}",
                    "|\\_{2}[^\\_]+?\\_{2}",
                    "|\\_{1}[^\\_]+?\\_{1}",
                    "|\\`{1}[^\\`]\\`{1}",
                    "|http(s)?://[^ ]+",
                    "|\\[.*\\]\\(http(s)?://[^ ]+\\)",
                    "|\\!\\[.*\\](http(s)?//[^ ]+\\)"
                ]

             


                const blockReg=new RegExp(blogRegAry.join(""));
                const inlineReg=new RegExp(inlineRegAry.join(""));
                console.log(inlineReg.test(row));
                console.log("match",row.match(inlineReg))
                console.log("replace:",row.replace(inlineReg,""));   

                /*
                console.log(blockReg.test(row));
                console.log("replace:",row.replace(blockReg,""));
                */
                //row=row.replace(/\s/ig,"");
                //row.rep

            });



            /*
                块属性，必须要在首字母定义
                内联属性：可以在内容中定义
            */

           
            /*
            console.log("markdownary",markdownAry);
            console.log(regs.test(html));

            console.log(html);
            */
            //console.log(markdownPanel.innerHTML);
          }          
        }

    }
</script>

<style scoped>
    .testDemo{
        background-color: #eeeeee;
        min-height: 400px;
        outline: none;
    }
    .testWrap{
        padding: 10px;
        background-color: #424141;
    }

</style>