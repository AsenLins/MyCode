

class Input{
    constructor(inputStr){
        this.inputStr=inputStr;
        this.index=0;
       
    }
    /*获取当前字符 */
    peek(){
        return this.inputStr[this.index];
    }
    /*下一个字符 */
    next(){
        return this.inputStr[++this.index];
    }
    /*代表字符结尾 */
    eof(){
        return this.index>=this.inputStr.length;
    }

}



module.exports=Input;