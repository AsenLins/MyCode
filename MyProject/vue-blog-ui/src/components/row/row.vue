
<script>


    import mixin from '../../core/mixin.js';


    export default {
        name:"bl-row",
        props:{

            type:{
                type:String,
                default:function(){
                    return 'default';
                }
            },

            align:String,
            justify:String,
            offset:{
                type:Number,
                default:function(){
                    return 0;
                }
            },

            gutter:{
                type:Number,
                default:function(){
                    return 0;
                }
            }
        },
        render:function(createElement){

            console.log("this scope=========",this.$scopedSlots.default);

            const renderStyle={
                default:"bl-row default",
                flex:"bl-row flex",
                inBlock:"bl-row lineBlock" 
            }
          
           

            const buildStyle=[
                this.gutter>0?"margin-left:"+this.gutter+"px;":""
            ].join('');

            console.log("style",buildStyle);

            this.$slots.default.forEach(element => {
                console.log("element",element);
                if(element.elm!==undefined&&element.tag.indexOf('col')>-1){
                    console.log("good",element);
                    element.elm.style.cssText+="margin-left:20px;";
                }
            });

            return createElement(
            "div",
            {
              class:renderStyle[this.type],
              style:buildStyle,
            },
            this.$slots.default,            
            );

        }
    }
</script>

<style scoped lang="scss">

</style>