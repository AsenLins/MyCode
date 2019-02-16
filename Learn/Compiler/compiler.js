var tokenizer = require('./token');
var parser = require('./parse');
// Note: The traverser is only used inside of the transformer...
var transformer = require('./transformer');
var codeGenerator = require('./codeGenerator');

console.log("gggggggg",codeGenerator);
function compiler(input) {
    let tokens = tokenizer(input);
    let ast    = parser(tokens);
    let newAst = transformer(ast);
    let output = codeGenerator(newAst);
  
    // and simply return the output!
    return output;
  }

  

  module.exports=compiler;