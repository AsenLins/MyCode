
<script>
    import '../style/row.scss';

    export default {
        name:"row",
        props:{
            type:String,
            align:String,
            justify:String,
            space:Number
        },
        render:function(createElement){


            console.log('sloat',this.$slots.default);
            const renderStyle={
                default:"bl-row.default",
                flex:"bl-row.flex",
                inBlock:"bl-row.lineBlock" 
            }

            return createElement(
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

        }
    }
</script>

<style scoped lang="scss">

</style>