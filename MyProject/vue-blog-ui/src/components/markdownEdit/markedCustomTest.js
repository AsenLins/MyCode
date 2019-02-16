const marked=require("marked");
const customRender = require("./markedCustomRender");
const http=require("http");


http.get("http://labfile.oss.aliyuncs.com/courses/569/test.md",function(resp){
    var data="";
    resp.on("data",(str)=> {
        data+=str;
    });

    resp.on("end",()=>{
        console.log(marked(data,{renderer:customRender}));
    });
});

/*
var testStr={
    deorderlist:"- 4 \n"
        +"- 2 \n"
        +"- 3 \n",
    orderlist:"4. haha \n"
               +"2. haha \n"
               +"3. haha \n",
    task:"- [ ] undo \n"
        +"- [x] finish \n",
    blockquote:" ```123123\n 44552323 \n 9898``` ",


    a:"[测试链接](http://baidu.com)",
    img:"![测试](http://test.jpg 'abcasd')",
    blod:"**abc**",
    italcs:"*ab*",
    del:"~~abc~~"


}
*/

