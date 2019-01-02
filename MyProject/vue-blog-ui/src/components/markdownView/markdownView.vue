<template>
    <div class="testWrap">
    
    
    
        <div id="testDemo" class="testDemo" contenteditable="true"></div>
    
    
    
        <input type="button" @click="getHtml()" value="获取HTML" />
    
    
    
    </div>
</template>

<script>
export default {
    name: "markdownView",
    data() {
        return {
            html: "443"
        };
    },
    watch: {
        html: function(oldval, newval) {
            console.log(oldval, newval);
        }
    },
    methods: {
        getHtml() {
            const markdownPanel = document.getElementById("testDemo");
            const html = markdownPanel.innerText;
            const regs = /\n/;
            const markdownAry = html.split(regs);
            const markdownResult = [];

            const markdownBlockHtml = {
                "#": {
                    class: "bl-mdh1"
                },
                "##": {
                    class: "bl-mdh2"
                },
                "###": {
                    class: "bl-mdh3"
                },
                "####": {
                    class: "bl-mdh4"
                },
                "#####": {
                    class: "bl-mdh5"
                },
                "######": {
                    class: "bl-mdh6"
                },
                ">": {
                    class: "bl-mdrefer"
                },
                "- ": {
                    element: "ul",
                    child: "li",
                    class: "bl-mdlilist"
                },
                "-[ ]": {
                    class: "bl-mdtodo-undo"
                },
                "-[x]": {
                    class: "bl-mdtodo-finish"
                },
                "num.": {
                    element: "ol",
                    child: "li",
                    class: "bl-mdollist"
                },
                "```": {
                    element: "code",
                    class: "bl-mdcode"
                },
                "---": {
                    class: "bl-mdline"
                },
                "***": {
                    class: "bl-mdline"
                },
                "* * *": {
                    class: "bl-mdline"
                },
                "italic": {
                    element: "em",
                    class: "bl-mditalic"
                },
                "blod": {
                    element: "em",
                    class: "bl-mdblod"
                },
                "backquote": {
                    element: "em",
                    class: "bl-mdbackquote"
                },
                "link": {
                    element: "a",
                    class: "bl-mdlink"
                },
                "img": {
                    element: "img",
                    class: "bl-mdimg"
                }
            };

            const blockStrReg = {
                h: new RegExp("^\\s*\\#{1,6}"),
                refer:new RegExp("^\\s*\\>{1}"),
                todo: new RegExp("^\\s*\\- \\[ \\]"),
                finish:new RegExp("^\\s*\\-\\[x\\]"),
                lilist:new RegExp("^\\s*\\-"),
                ollist:new RegExp("^\\s*\\d+\\."),
                code:new RegExp("^\\s*\\`\\`\\`$"),
                line1:new RegExp("^\\s*\\-{3,}$|^\\s*\\*{3,}$|\\s*(\\*\\s){2}\\*$")
            };

            const inlineStrReg = {
                italic: new RegExp("\\*{2}[^\\*]+?\\*{2}|\\*{1}[^\\*]+?\\*{1}"),
                blod:new RegExp("\\_{2}[^\\_]+?\\_{2}|\\_{1}[^\\_]+?\\_{1}"),
                backquote: new RegExp("\\`{1}[^\\`]\\`{1}"),
                link: new RegExp("http(s)?://[^ ]+|\\[.*\\]\\(http(s)?://[^\\s]+\\)"),
                img: new RegExp("\\!\\[.*\\]\\(http(s)?://[^\\s]+\\)")
            };

            const blockRegAry = [];
            const inlineRegAry = [];


            Object.keys(blockStrReg).map(key => {
                blockRegAry.push(blockStrReg[key].toString());
            });

            Object.keys(inlineStrReg).map(key => {
                inlineRegAry.push(inlineStrReg[key].toString().replace(/\//ig,""));
            });

            const blockReg = new RegExp(blockRegAry.join("|"));
            const inlineReg = new RegExp(inlineRegAry.join("|"));


            const result = "";



            markdownAry.forEach((row,index)=>{
                   console.log("inlineRegAry:",inlineRegAry);
                   console.log("index:", index,"row:",row);
                   buildInline(row);
                /*
                const curBlockMatch=row.match(blockReg);

                if(curBlockMatch==null||curBlockMatch.length>0===false){
                    return;
                }
                const blockVal=curBlockMatch[0].replace(/^\s\s*|\s\s*$/,"");
                const blockObj=markdownBlockHtml[blockVal];
                const blockDom=document.createElement(blockObj.element||"div");
                const blockContent=row.replace(curBlockMatch[0],"");

                const inlineContent=row.replace(curBlockMatch[0],"");

                blockDom.innerHTML=blockContent;
                console.log("dom",blockDom);
 */
            });

            function buildBlock(){

            }



         

            function buildInline(inlineText){
                const curInlineMatch=inlineText.match(inlineReg);
                if(curInlineMatch==null||curInlineMatch.length<=0){
                    return inlineText;
                }

                const inlineVal=curInlineMatch[0].replace(/^\s\s*|\s\s*$/,"");
                const inlineContent=inlineText.replace(curInlineMatch[0],"");
                var inlineObj={};
             
                console.log("inlineVal",inlineVal);
                if(inlineStrReg.italic.test(inlineVal)){
                    console.log("is italic");
                }

                else if(inlineStrReg.blod.test(inlineVal)){
                     console.log("is blod");
                }
                else if(inlineStrReg.backquote.test(inlineVal)){
                     console.log("is backquote");
                }
                else if(inlineStrReg.link.test(inlineVal)){
                     console.log("is link");
                }
                else if(inlineStrReg.img.test(inlineVal)){
                     console.log("is img");
                }
                /*回调有问题 */

                //buildInline(inlineText);


            }

            function buildMarkDown(ary, index, action, isChild) {

            }

            buildMarkDown(markdownAry,0);


            /*

            markdownAry.forEach((row, index) => {
                console.log("ary", blockRegAry);



                console.log(blockReg);

                console.log("row", row.match(blockReg));
                console.log("row", blockReg.exec(row));

                console.log("inline", row.match(inlineReg));
                console.log("inline", inlineReg.exec(row));
            });
            */
        }
    }
};
</script>

<style scoped>
.testDemo {
    background-color: #eeeeee;
    min-height: 400px;
    outline: none;
}

.testWrap {
    padding: 10px;
    background-color: #424141;
}
</style>