/*创建一个简单的HTTP服务 */
const http=require("http");
const prot=8080;

const server=http.createServer((req,res)=>{
    res.end("hello world 2018-12-12");
});


server.listen(prot,()=>{
    const sobj={
        name:"asen",
        age:10
    }
    debugger;
    console.log("server is start listen to :",prot);
    const xobj={
        name:"kity"
    }
    debugger;
});