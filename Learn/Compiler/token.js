function token(inputStr){
    if(inputStr===undefined||inputStr===""){
        return null;
    }
    
    var current=0;
    var tokens=[];
  
    while(current<inputStr.length){
        
        var char=inputStr[current];

        console.log(char,current);
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
            current++;
            continue;
        }

      

        /*这里选择的是跳过空白字符 */
        if(/\s/.test(char)){
            current++;
            continue;
        }

 
        /*验证是否为数字 */
        if(/[0-9]/.test(char)){
            var value="";
            while(/[0-9]/.test(char)){
                value+=char;
                char=inputStr[++current];
            }

<<<<<<< HEAD

            tokens.push({
                type:"number",
                value
=======
            vaule=vaule+inputStr[current++];
            while(/[0-9]/.test(char)){
                
            }
            tokens.push({
               type:"number",
               vaule:vaule           
>>>>>>> 3b97f9a25dc71a23fca015eeb6532975481c040c
            });
            
            continue;

        }
    
        if(char==='"'){
            var value="";
            char=inputStr[++current];
            while(char!='"'){
                value+=char;
            }



            /*跳过当前 " */
            char=inputStr[++current];
            tokens.push({
                type:"String",
                value
            });

            continue;

        }
        console.log(/[a-z]/i.test(undefined));

        if(/[a-z]/.test(char)){
            var value="";

            while(/[a-z]/i.test(char)){
                value+=char;
                console.log("对的",value);
                
                char=inputStr[++current];
                if(char===undefined){
                    char="";
                }
            }

            tokens.push({type:"name",value});



            continue;
        }


        throw new TypeError("无法识别的字符",char);

    }

  
    return tokens;


    
}



var tokenObj=token(`add 1 2`);

console.log("token",tokenObj);

module.exports=token;