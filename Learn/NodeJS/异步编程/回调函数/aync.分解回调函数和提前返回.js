
/*分解回调函数和提前返回，降低回调复杂度*/

const http=require("http");
const fs=require("fs");

http.createServer((req,res)=>{
    if(req.url=="/"){
        
        getText(res);

    }

}).listen(5021,"127.0.0.1");


function getText(res){
    fs.readFile("./text.json",(error,result)=>{
        if(error!=null){
            res.end("readfile error");
            return;
        }
        const text=JSON.parse(result);
        getHtml(res,text)
    })
}

function getHtml(res,text) {
    fs.readFile("./template.html",(error,htmlstr)=>{
        if(error!=null){
            res.end("readfile error");
            return;
        }

        /*返回的是二进制字节流,需要转换类型 */
        var html=htmlstr.toString();

        html=html.replace("$text","这是分解的回调函数："+text);

        res.end(html);
        
    });
}

console.log("begin server :",5021);