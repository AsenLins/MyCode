

class InputStream{
    constructor(str){
        this.pos=0;
        this.line=1;
        this.col=0;
        this.input=str;
    }
    next(){
        const char=this.input.charAt(this.pos++);
        if(char=="\n"){
            this.line++;
        }else{
            this.col++;
        }

        return char;

    }
    peek(){
        return this.input.charAt(this.pos);
    }
    eof(){
        return this.peek()==="";
    }
    croak(){
        throw new Error("inputStream Error,line:",this.line," col:",this.col);
    }
}


const Input=new InputStream("abcdefg");

//console.log(Input.peek());

while(Input.eof()===false){
    console.log(Input.next());
}


module.exports=InputStream;