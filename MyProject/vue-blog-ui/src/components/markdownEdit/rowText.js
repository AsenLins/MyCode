const uuid = require('uuid/v1');
class rowText {
    constructor() {

    }
    init(option){
        const id=uuid();
        const div=document.createElement("div");
     
        const styles=[
            "visibility:hidden",
            "display:inline-block",
            "word-break:break-all",
            "position: absolute", 
            "top:0px",
            "height:auto",
            "padding:0px 10px 0px 55px",
            "left:0px",
            "width:"+(option.width===undefined?"auto":option.width)
        ]
        div.style.cssText=styles.join(";");
        div.setAttribute("id",id);
        document.querySelectorAll(option.target)[0].appendChild(div);
        this.dom=document.getElementById(id);

        return this;
    }
    setText(text){
        this.dom.innerText=text;
        return this;
    }
    getTextStyle(style){
        return window.getComputedStyle(this.dom)[style];
    }
}


const rowTextObj=new rowText;

export default rowTextObj;


