const marked=require("marked");


var render=new marked.Renderer();


const customMdClass={
    blockClass:{
        h:"bl-md-heading",
        blockquote:"bl-md-blockquote",
        code:"bl-md-code",
        hr:"bl-md-hr",
        orderlist:"bl-md-orderlist",
        deorderlist:"bl-md-deorderlist",
        listitem:"bl-md-listitem",
    },
    inlineClass:{
        strong:"bl-md-strong",
        em:"bl-md-em",
        del:"bl-md-del",
        link:"bl-md-link",
        image:"bl-md-image",
    }
};

render.heading=function(text,level,rawtext){
    console.log(text);
    console.log(level);
    //console.log("rawtext:",rawtext);
    return `123123123`;
}

render.blockquote=function(){
    
}

render.code=function(){

}





console.log(marked(`
### abcd123


`,{renderer:render}));

