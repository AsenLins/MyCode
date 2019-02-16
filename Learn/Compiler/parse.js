

const token=require("./token");

function parse(tokens){
    var current=0;

    function walk(){
        var token=tokens[current];

        if(token.type==="number"){
            current++;

            return {
                type:"NumberLiteral",
                value:token.value
            }
        }


        if(token.type==="string"){
            current++;
            return {
                type:"StringLiteral",
                value:token.value
            }
        }

        /*方法的开始 */
        if(token.type==="paren"&&token.value==="("){
            token=tokens[++current];

            var node={
                type:'CallExpression',
                name:token.value,
                params:[]
            };


            token=tokens[++current];

            /*这里就是为了遍历每个嵌套的方法 */
            while((token.type!=="paren")||(token.type==="paren"&&token.value!==")")){

                node.params.push(walk());
                token=tokens[current];


            }
            current++;

            return node;
        }


        throw TypeError(token.type);

    }




    var ast={
        type:'Program',
        body:[]
    }

    while(current<tokens.length){
        ast.body.push(walk());
    }

    return ast;
}


var tokensObj=token("(add 2 (subtract 4 2))");

console.log(tokensObj);



console.log("ast:",parse(tokensObj),tokensObj);



module.exports=parse;