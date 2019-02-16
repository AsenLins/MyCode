const traverser=require("./traverser");

console.log("cccccccccc",traverser);

function transformer(ast){
    var newAst={
        type:"Program",
        body:[]
    };

    ast._context=newAst.body;
    
    traverser(ast,{
        NumberLiteral:{
            enter(node,parent){
                parent._context.push({
                    type:"NumberLiteral",
                    value:node.value
                });

            }

        },
        StringLiteral:{
            enter(node,parent){
                parent._context.push({
                    type:"StringLiteral",
                    value:node.value
                });               
            }
        },
        CallExpression:{
            enter(node,parent){
                var expression={
                    type:"CallExpression",
                    callee:{
                        type:"Identifier",
                        name:node.name
                    },
                    arguments:[]
                }
                node._context=expression.arguments;


                if(parent.type!=="CallExpression"){
                    expression={
                        type:"ExpressionStatement",
                        expression:expression
                    }
                }

                parent._context.push(expression);
            }



       

        }



    });

    return newAst;
}

module.exports=transformer;