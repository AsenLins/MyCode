class range{
    constructor(inputSelector){
        this.input=document.querySelectorAll(inputSelector)[0];
    }
    replaceText(text){
        const selection=window.getSelection();
        const range = selection.getRangeAt(0); 
        const textNode = range.startContainer;  
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
      }
      insertText(text){
        const selection=window.getSelection();
        const range = selection.getRangeAt(0);     
        const textNode = range.startContainer;  
        const rangeStartOffset = range.startOffset;
        textNode.insertData(rangeStartOffset,text);
      }
      setTextPosition(start,end){
        this.input.focus();
        const selection=window.getSelection();
        const range=selection.getRangeAt(0); 
        const textNode = range.startContainer;

        range.setStart(textNode,start);
        if(arguments.length>1){
          range.setEnd(textNode,end);
         }else{
           range.collapse(true);
         } 
        selection.removeAllRanges();
        selection.addRange(range);       
       
      }
      setDomRange(dom,start,end){
        const range = document.createRange();
        const selection=window.getSelection();
        range.selectNodeContents(newLine);
        range.setStart(newLine,0);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);    
      }

}


export default range;