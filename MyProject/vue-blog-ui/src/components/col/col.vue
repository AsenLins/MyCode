
<script>
    
    export default {
        name:"bl-col",
        props:{
            span:{
                type:String,
                default:function(){
                    return "1"
                }
            },
            text:{
                type:String
            },
            align:String
        },
        render:function(createElement){

            console.log("传过来的值是：",this.text);
            return createElement('div',
            {
                class:"bl-col c"+this.span
            },
            this.$slots.default
            );
        }
    }
</script>

<style scoped>

</style>