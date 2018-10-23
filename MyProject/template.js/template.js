(function(){
    console.log("aaaaabbbb".replace(/a/ig,"c"));
    var div="#for{#if{<div id='#name' bb='123'>#age</div>}} #else{4322} #if(dc){123}";
    console.log(div);
    console.log("test","aaaaa[abb]bbb".match(/\[(.)+\]/ig));
    console.log(div.match(/\#[^for|^if|^else|^else if](\w+)/ig));
    console.log("for",div.match(/\#[for|if|else|else if]+\{+(.)+\}/ig));
    
    var regtest=/\#[for|if|else|else if]+\{+[^\{](.)+\}/ig;
    var regBindKeys=/\#[^for|^if|^else|^else if](\w+)/ig;



    var mixHtml1="#for{ #if{ <div>abc</div> <div></div> <img src='#bg'> }}}#for{aa}<div>abc,123</div>";

    var mixHtml2="<div>"    
    +"#for(a in  dc){"
    +"<div>#name</div>"
    +"<div>#age</div>"
    +"<div>#name</div>"
    +"</div>"
    +"#if{123123}";


    var mixHtml3="#for{ #if{ <div>abc</div> <div></div> <img src='#bg'> }}}";



    var regTemplateBlock=/\#[\w]+\{[\W\w]+?\}[.]?[\#]?|\<[\w\W]+\>/ig;


    
    

    var regs=/\#[\w]+\{[\W\w]+?\}[.]?[\#]?|\<[\w\W]+\>/ig;

    console.log("the new reg:",mixHtml2.match(regs));

    var templateConfig={
        bindKey:"#"  
    };




    /*
    *templateSelector
    *负责查询绑定的数据值对象 
    */
    var templateSelector={
        config:templateConfig,
        /*查找指定对象数据*/
        findData:function(selector,data){
            var regSelector=/\./ig,
            regArrayBlock=/\[+\d\]/ig,
            regArrayIndex=/\[|\]/ig,
            selectorList= selector.split(regSelector),
            result;

            /*处理:普通属性*/
            if(selectorList.length===undefined){
                result=data[selector];
            }
            /*处理:对象或数组 */
            else{
                while(selectorList.length>0){
                    var dataAttr=selectorList.shift();
                    /*处理:数组值*/      
                    if(regArrayBlock.test(dataAttr)){             
                        var aryName=dataAttr.replace(regArrayBlock,""),
                        aryIndex=parseInt(dataAttr.match(regArrayBlock)[0].replace(regArrayIndex,""));
                        data=data[aryName][aryIndex];
                    }
                    /*处理:属性值*/
                    else{
                        data=data[dataAttr];                  
                    }
                }
                result=data;
            }
            return result;
        },
        /*查找绑定数据项*/
        findBindKeys(renderHtml){
            return renderHtml.match(/\#^[(for)]^(else)(\w+)/ig);
        }
    }
    

    /*
    渲染
    逻辑引擎
    循环引擎
    需要一个渲染的栈
    */

    var templateRender={
        /*分隔模板
        *返回一个需要处理的模板数组
        */
        splitTemplateblock:function(templateHtml){
            return templateHtml.match(/\#[\w]+\{[\W\w]+?\}[.]?[\#]?|\<[\w\W]+\>/ig);
        },
        /*处理模板*/
        renderTemplate:function(templateStr){
            var rederList=this.splitTemplateblock(templateStr);
        }
    }


    console.log(templateSelector.findBindKeys(div));

    var templateCore={
        render:function(defineData,renderData,renderHtml){
            var keys=Object.keys(defineData),
            strHtml;
            for(var key in keys){
                strHtml=renderHtml.replace(new RegExp("/"+key+"/",ig),renderData[key]);
            }
            return strHtml;
        }
    }


    var template=function(){
        this.templateData=[];
        this.defineData={};
        this.config=templateConfig;
    }
    template.prototype={
        /*模板配置*/
        define:function(name,templateStr){
            if(this.defineData[name]!==undefined){
                console.warn("模板中已定义‘"+name+"’模板，该模板已被新模板覆盖。");
            }
            var config=this.config;
            
            this.defineData[name]={
                strHtml:templateStr 
            };        
 
        },
        /*配置*/
        config:function(option){
            var config=this.config;
            for(var configKey in option){
                if(config[configKey]!==undefined){
                    config[configKey]=option[configKey];
                }
            }
        },
        /*获取已渲染的模板Html 
        key:模板配置名称
        data:渲染数据行
        */
        get:function(key,data){
            return templateCore.render(this.templateData[key].config,data,this.templateData[key].strHtml);            
        },
        /*
        渲染函数
        key:模板名称
        data:渲染数数据,
        fn:回调函数
        */
        render:function(key,data,fn){
            
        }
    }


    /*
    var templateObj=new template();
    templateObj.add("video",{
        "#a":"sam",
        "#b":"dc",
        "#q":"dc.b[1].a"
    });


    templateObj.add("img",{

    });
    */



})();
