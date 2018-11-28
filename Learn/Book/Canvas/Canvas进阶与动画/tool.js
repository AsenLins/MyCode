
/*


*/

(function(window){
    var tool={
        getPosition:function(dom){
            var mouse={
                x:0,
                y:0
            };
            dom.addEventListener("mousemove",function(e){
                var event=e||window.event,
                x,y;
       
                if(event.pageX||event.pageY){
                    x=e.pageX;
                    y=e.pageY;
                }else{
                    x=e.clientX;
                    y=e.clientY;
                }
           
                mouse.x=x-dom.offsetLeft;
                mouse.y=y-dom.offsetTop;

                console.log(mouse);
            },false);
         
            return mouse;
        },
        getKey:function(){
            var code={
                direction:""
            }
            window.addEventListener("keydown",function(e){
                var keyCode=e.keyCode;
                this.console.log(keyCode);
                if(keyCode===38||keyCode===87){
                    code.direction="up";
                }
                else if(keyCode===40||keyCode===83){
                    code.direction="down";
                }
                else if(keyCode===37||keyCode===65){
                    code.direction="left";
                }
                else if(keyCode===39||keyCode===68){
                    code.direction="right";
                }

                

            },false);
            
            return code; 
        }   
    }

    window.tool=tool;

})(window);