


const mixinFn={
    /*自定义Style的Id*/
    styleId: Date.parse(new Date()),    

    /**
     *创建自定义样式
     *把内联样式放入到一个自定义的Class中，再把Class放到自定义Style中
     *
     * @param {内联样式:数组} styleList:Array
     * @param {自定义的ClassName:字符串} name:String
     * @returns ClassName
     */
    buildStyleClass(styleList,name){
        const styleStr=styleList.join();
        if(styleStr===""){
            return "";
        }
        
        /*创建style */
        var style=document.getElementById(this.styleId);
        if(style===null){
            style=document.createElement("style");
            style.setAttribute("type","text/css");
            style.setAttribute("Id",this.styleId);
            document.getElementsByTagName("head")[0].appendChild(style);
        }
        
        /*创建class */
        const  sourceStyle=style.innerHTML,
        appendStyleClassName=name+".customStyle",
        returnClassName=name+" customStyle";
        if(sourceStyle.indexOf(appendStyleClassName)===-1){
            const newStyle="."+appendStyleClassName+"{"+styleStr+"}";
            style.innerHTML=sourceStyle+newStyle;    
        }
     
        return returnClassName;
    }
}


export default mixinFn;