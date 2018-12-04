
<script>

    import mixin from '../../core/mixin.js';

    export default {
        name:"bl-row",
        props:{
            align:String,
            justify:String,
            type:{
                type:String,
                default:function(){
                    return 'default';
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

            const classList={
                default:"bl-row default",
                flex:"bl-row flex",
                inBlock:"bl-row lineBlock",
                offset:"offset" 
            }
          
            const renderClass=[
                classList[this.type],
            ]

            return createElement(
                "div",
                {
                class:renderClass.join(),
                },
                this.$slots.default,            
            );

        }
    }
</script>

<style scoped lang="scss">

</style>