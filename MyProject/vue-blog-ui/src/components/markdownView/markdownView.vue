<template>
    <div class="testWrap">
    
    
    
        <div id="testDemo" class="testDemo" contenteditable="true">
           
        </div>
  
     
    
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
            var html = markdownPanel.innerText;
            var html2=html;
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



            const markDownDomBuild={
                h1:null,
                h2:null,
                h3:null,
                h4:null,
                h5:null,
                h6:null,                               
                ul:null,
                ol:null,
                li:null,
                div:null,
                code:null,
                a:null,
                img:null,
                wrap:document.createElement("div"),
                em:null,
                _buildDom(domName){
                    if(this[domName]===null){
                        this[domName]=document.createElement(domName);
                    }else{
                        this[domName].innerText="";
                        this[domName].innerHTML="";
                        this[domName].className="";
                        if(domName=="img"||domName=="a"){
                            this[domName].removeAttribute("src");
                            this[domName].removeAttribute("href");
                        }                        
                    }
                },
                _getDomHtml(dom){
                    this.wrap.appendChild(dom);
                    const innerHTML=this.wrap.innerHTML;
                    this.wrap.removeChild(dom);
                    return innerHTML;
                },
                getDom(domName,className,innerHTML){           
                    this._buildDom(domName);
                    this[domName].className=className;
                    this[domName].innerHTML=innerHTML;                
                    return this._getDomHtml(this[domName]);
                },               
                getLink(href,text){
                    const domName="a";
                    this._buildDom(domName);
                    this[domName].setAttribute("href",href);
                    if(text!==undefined&&text!=""){
                        this[domName].innerText=text;
                    }
                    return this._getDomHtml(this[domName]);
                },
                getImg(src){
                    const domName="img";
                    this._buildDom(domName);
                    this[domName].setAttribute("src",src);
                    return this._getDomHtml(this[domName]);
                }
            };


            const inlineRegObj={

                blod:{
                    reg:/\*{2}[^\*]+?\*{2}|\_{2}[^\_]+?\_{2}/ig,
                    replaceReg:/\*{2}|\_{2}/ig,
                    dom:"em",
                    class:"bl-mdblod"
                },

                italic:{
                    reg:/\*{1}[^\*]+?\*{1}|\_{1}[^\_]+?\_{1}/ig,
                    replaceReg:/\*|\_/ig,
                    dom:"em",
                    class:"bl-mditalic"
                },

                backquote:{
                    reg:/\`{1}[^\`]+?\`{1}/,
                    replaceReg:/\`/ig,
                    dom:"em",
                    class:"bl-mdbackquote"
                },
                link:{
                    reg:/\b((?<!\=\")(?<!\>)http(s)?:\/\/[^ ]+)\b|\[.*\]\(http(s)?:\/\/[^\s]+\)/ig,
                    replaceFn(text=""){
                        const href=text.match(/http(s)?\:\/\/[^ \)]+/)[0];
                        const hrefText=text.match(/\[.*\]/);
                        const innerText=hrefText!=null?hrefText.replace(/\[|\]/ig,""):href;
                        //console.log(markDownDomBuild.getLink(href,innerText));
                        console.log("href",href);
                        console.log("hrefText",hrefText);
                        console.log("innerText",innerText);

                        console.log("a",markDownDomBuild.getLink(href,innerText));
                        return markDownDomBuild.getLink(href,innerText);
                    },
                    dom:"a",
                    class:"bl-mdlink"
                },
                img:{
                    reg:/\!\[.*\]\(http(s)?:\/\/[^\s]+\)/,
                    replaceFn(text=""){
                        const src=text.match(/http(s)?:\/\/[^ \)]+/)[0];
                        return markDownDomBuild.getImg(src);
                    },
                    dom:"img",
                    class:"bl-mdimg"
                }

            }

            const resultReplace=[];
            const resultReplace2=[];

            Object.keys(inlineRegObj).forEach((key,index)=>{
                const curinlineReg=inlineRegObj[key];
               
                var curexec=null;
               

                while(curexec=curinlineReg.reg.exec(html)){

                    var curextext=curexec[0];
                    var replaceText=curextext.replace(curinlineReg.replaceReg,"");
                    var innerHtml;
                    if(curinlineReg.replaceFn!==undefined){
                        innerHtml=curinlineReg.replaceFn(curextext);
                    }else{
                        innerHtml=markDownDomBuild.getDom(curinlineReg.dom,curinlineReg.class,replaceText);                    
                    }
                    console.log("curextext",curextext);
                    html=html.replace(curextext,innerHtml);
                    console.log("the html",html);
                   
                }
            });


        
            return;

            Object.keys(inlineRegObj).forEach((key,index)=>{
                
            });

            console.log("baidu",inlineRegObj.link.replaceFn("[](http://baidu.com/page?a=123&b=443)"));


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
                var replaceVal;
             
                console.log("inlineVal",inlineVal);
                if(inlineStrReg.italic.test(inlineVal)){
                    console.log("is italic");
                    replaceVal=/\*{2}|\*/ig;
                }

                else if(inlineStrReg.blod.test(inlineVal)){
                     console.log("is blod");
                }
                else if(inlineStrReg.backquote.test(inlineVal)){
                     console.log("is backquote");
                     replaceVal=inlineStrReg.backquote;
                }
                else if(inlineStrReg.link.test(inlineVal)){
                     console.log("is link");
                }
                else if(inlineStrReg.img.test(inlineVal)){
                     console.log("is img");
                }
                /*回调有问题 */
                console.log("curInlineMatch",inlineReg.exec(inlineText));
                inlineText=inlineText.replace(replaceVal,"<em>");
                console.log("replace val",inlineText);
                buildInline(inlineText);
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