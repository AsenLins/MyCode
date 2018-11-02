

/*Step1 拆分代码块 */

var block="#for(a>b){ if(){b<1} for(a<c){ for(d>0){a>c}  } }#if(a>0){ b<c}";
var regBlock=/\#(for|if|else if|else).*?\{(.*?)[^\#]+\}/ig;
var regInnerBlock=/\#(for|if|else if|else).*?\{(.*?)[^\#]+\}/ig;

var result=block.match(regBlock);

console.log("代码块处理结果",result);
//console.log("blocks",block.match(regBlock));
//console.log("blocks2",block.match(regBlock)[1]);

/*先分离，然后再加#，然后一层一层解析：每一层解析包括：操作符 html，嵌套的if,for，数据参数等。*/


/*Step2 获取代码块 */
var regBlockCode=/\{(.*)\}/ig;
var blockResult=result[0].match(regBlockCode);
console.log("代码块获取",blockResult);





var dc=removeBlock(blockResult[0]);
console.log("处理",dc);



function splitBlock(str){
    var reg=/\#(for|if|else if|else).*?\{(.*?)[^\#]+\}/ig,
    regAry=[],
    loop=true;
    
    while(loop){

    }

}


/*为模板关键字添加特殊’解析符号#’ */
function addSymbol(str){
    var keywords=['for','if','else if','else']; 

    keywords.forEach(function(key,index,ary){
        var reg=new RegExp(key,"ig");
        str=str.replace(reg,"#"+key);
    });
}

/*去除最外层{}符号 */
function removeBlock(str){
    var startBlock=str.indexOf("{"),
    endBlock=str.lastIndexOf("}");

    if(startBlock>-1&&endBlock>-1){
        str=str.substring(startBlock+1,endBlock-1);
    }

    return str;
}

/*获取渲染的html代码块*/
function getHtml(){

}

/*获取操作符*/
function getOperator(){

}

/*获取表达式*/
function getExpress(){

}

function getData(){

}

