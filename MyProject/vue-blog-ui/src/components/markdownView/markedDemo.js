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


customRender.customClass=customMdClass;

customRender.heading=function(text,level,rawtext){
    return `<h${level} class="${this.customClass.blockClass.h}">${text}</h>`;
}

const blockqutoSource=customRender.blockquote;

customRender.blockquote=function(quto){
   var result=blockqutoSource.call(null,quto);
   return result.replace(/blockquote/ig,`blockquote class="${this.customClass.blockClass.blockquote}"`);
}

customRender.code=function(code,language,isEscaped){
    return `<p><code class="${this.customClass.blockClass.code}"></code></p>`
}

customRender.codespan=function(code){
    return `<code class="${this.customClass.blockClass.code}"></code>`
}

customRender.hr=function(){
    console.log("render hr");
    return `<div class="${this.customClass.blockClass.hr}"></div>`
}

customRender.list=function(body,isOrder,startIndex){
    body=body.replace(/\<li/ig,`<li class=“${this.customClass.blockClass.listitem}" `);
    if(isOrder&&startIndex!==undefined){
        return `<ol class="${this.customClass.blockClass.orderlist}">`+body +'</ol>';
    }
    else if(isOrder===false&&startIndex===''&&body.indexOf("input")==-1){
        return `<ul class="${this.customClass.blockClass.deorderlist}">`+body+"</ul>";
    }
    else{
        body=body.replace(/\<input/,`<input class="${this.customClass.blockClass.todo}"`);
        return `<ul class="${this.customClass.blockClass.deorderlist}">`+body+`</ul>`;
    }
}











var testStr={
    deorderlist:"- 4 \n"
        +"- 2 \n"
        +"- 3 \n",
    orderlist:"4. haha \n"
               +"2. haha \n"
               +"3. haha \n",
    task:"- [ ] undo \n"
        +"- [x] finish \n"
        
}


console.log(marked(testStr.task,{renderer:customRender}));





