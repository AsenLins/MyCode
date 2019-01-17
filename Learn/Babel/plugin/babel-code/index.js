const babelCore=require("babel-core");

const helloWorld=()=>{

}

const result=babelCore.transform("()=>{console.log('hello world')}");

console.log(result.ast);

