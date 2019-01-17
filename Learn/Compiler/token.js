function token(inputStr){
    if(inputStr===undefined||inputStr===""){
        return null;
    }
    
    var current=0;
    var tokens=[];

    while(current<inputStr.length){
        
        var char=inputStr[current];


        if(char==="("){
            tokens.push({
                type:"paren",
                value:"("

            });

            current++;
            continue;
        }

        if(char===")"){
            tokens.push({
                type:"paren",
                value:")"
            });
        }



        /*这里选择的是跳过空白字符 */
        if(/\s/.test(char)){
            current++;
            continue;
        }


        /*验证是否为数字 */
        if(/[0-9]/.test(char)){
            var vaule="";

            vaule=vaule+inputStr[current++];
            while(/[0-9]/.test(char)){
                
            }
            tokens.push({
               type:"number",
               vaule:vaule           
            });
            

        }


       

    }
    



}