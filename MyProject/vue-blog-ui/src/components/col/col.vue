
<script>
    /** */
    export default {
        name:"bl-col",
        props:{
            span:{
                type:Number,
                default:function(){
                    return 1;
                }
            },
            offset:{
                type:Number,
                default:function(){
                    return 0;
                }
            },

            align:String
        },
        render:function(createElement){
            
            console.log("parent",this.$parent);
            const parentProps={
                gutter:this.$parent.gutter
            },
            renderClass=[
                "bl-col",
                "c"+this.span,
                this.offset>0?"offset"+this.offset:""
            ],
            renderStyle=[
                parentProps.gutter>0?" margin-left:"+(parentProps.gutter/2)+"px":""
            ];
            console.log("style",renderStyle.join(" "));

            return createElement('div',
            {
                class:renderClass.join(" "),
                style:renderStyle.join(" ")
            },
            this.$slots.default
            );
        }
    }
</script>

<style scoped>

</style>