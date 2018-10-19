(function(){
    console.log("aaaaabbbb".replace(/a/ig,"c"));
    var div="#for{<div id='#name' bb='123'>#age</div>}";
    console.log(div);
    console.log(div.match(/\#(\w+)/ig));

    var templateConfig={
        bindKey:"#"  
    };

    var templateSelector={
        config:templateConfig,
        find:function(selector,data){
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
        /*查找模板绑定的数据项*/
        findBindKeys(renderHtml){
            return renderHtml.match(/\#^[(for)]^(else)(\w+)/ig);
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
