## Vue语法

createElement(元素,可选参数,子元素);

```
createElement(
            "div",
            {
                style:{
                    width:"30px",
                    height:"30px",
                    "background-color":"yellow"
                },
                /*里面使用innerHTML和innerText会覆盖他的子组件 */
                domProps:{
                    
                }
                
            },
            this.$slots.default,            
            );
```

