const marked=require("marked");

var customRender = new marked.Renderer();

const customMdClass={
    blockClass:{
        h:"bl-md-heading",
        blockquote:"bl-md-blockquote",
        code:"bl-md-code",
        hr:"bl-md-hr",
        orderlist:"bl-md-orderlist",
        deorderlist:"bl-md-deorderlist",
        listitem:"bl-md-listitem",
        todo:"bl-md-todo"
    },
    inlineClass:{
        strong:"bl-md-strong",
        em:"bl-md-em",
        del:"bl-md-del",
        link:"bl-md-link",
        image:"bl-md-image",
    }
};



class customStyle{
    constructor(option){
        this.customClass=option.customClass;
        this.render=option.render;
    }
    heading(){
        this.render.heading=function(text,level){

        }
    }
}



customRender.customClass=customMdClass;




customRender.heading=function(text,level,rawtext){
    return `<h${level} class="${this.customClass.blockClass.h}">${text}</h>`;
}



const blockqutoSource=customRender.blockquote;

customRender.blockquote=function(quto){
   var result=blockqutoSource.call(null,quto);
   return result.replace(/blockquote/ig,`blockquote class="${this.customClass.blockClass.blockquote}"`);
}





customRender.code=function(){

}



console.log(marked(`>>>this is h2`,{renderer:customRender}));





