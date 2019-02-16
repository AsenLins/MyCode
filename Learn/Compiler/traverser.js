function traverser(ast,visitor){
    function traverserArray(array,parent){

        array.forEach(child => {
            traverseNode(child,parent);
        });
    }
    function traverseNode(node,parent){
        var methods=visitor[node.type];

        if(methods&&methods.enter){

            methods.enter(node,parent);
        }

        switch(node.type){
            case "Program":
            traverserArray(node.body,node)
            break;

            case "CallExpression":
            traverserArray(node.params,node)
            break;

            case 'NumberLiteral':
            case 'StringLiteral':
              break;
            default:
            throw new TypeError(node.type)

  

        }

        if(methods&&methods.exit){
            methods.exit(node,parent);
        }
    }

    traverseNode(ast,null);

}


module.exports=traverser;