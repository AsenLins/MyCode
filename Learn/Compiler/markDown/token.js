



blockRule={
    h:{
        reg:"",
        value:""
    },
    code:{

    },
    ul:{

    },
    ol:{

    },
    li:{

    }

}




class mdToken {
    constructor(Input){
        this.Input=Input;
        this.index=0;
        this.tokens=[];
        
        buildToken();


        
        function buildToken(){

            while(Input.eof()===false){
                var char=this.Input.peek();
                if(char==="\n"){
    
                }
    
    
    
                this.Input.next();
    
            }
        }


    }


    buildToken(){

    }

    

    getToken(){
        return this.tokens[this.index];
    }

}