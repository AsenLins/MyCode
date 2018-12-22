
/*这种是最原始的回调函数写法，多个回调函数嵌套*/

const http=require("http");
const fs=require("fs");

http.createServer((req,res)=>{
    if(req.url=="/"){
        
        fs.readFile("./text.json",(error,result)=>{
            if(error!=null){
                console.log("readfile error",error);
                res.end("readfile error");
            }else{

                const text=JSON.parse(result);

                fs.readFile("./template.html",(error,htmlstr)=>{

                    if(error!=null){
                        console.log("read template error",error);
                        res.end("red template error");
                    }
                    /*返回的是二进制字节流,需要转换类型 */
                    var html=htmlstr.toString();
                    
                    html=html.replace("$text",text);

                    res.end(html);
                });

            }


        });


    }




}).listen(5021,"127.0.0.1");
console.log("begin server :",5021);