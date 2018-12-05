
<script>
/*列控件*/


import mixin from '../../core/mixin';

export default {
    name: "bl-col",
    props: {
        span: {
            type: Number,
            default: function() {
                return 1;
            }
        },
        offset: {
            type: Number,
            default: function() {
                return 0;
            }
        },

        align: String
    },
    render: function(createElement) {

        /*当前父组件的配置参数*/
        const parentProps = {
                gutter: this.$parent.gutter,
                type:this.$parent.type,
                xAlign:this.$parent.xAlign,
                yAlign:this.$parent.yAlign
        },

        /*row控件类型 */
        layoutType={
            default:"default",
            flex:"flex",
            inline:"inline"
        },

        /*当前渲染row类型*/
        curLayoutType=layoutType[parentProps.type],

        /*根据当前类型创建不同的class*/
        buildColClass={
                /*栅栏布局样式*/
                default:()=>{
                    const renderClass = [
                        "bl-col default",
                        "c" + this.span,
                        this.offset > 0 ? "offset" + this.offset : "",
                        mixin.buildStyleClass([
                            parentProps.gutter > 0 ?
                            "width:calc(" + 100 / 8 * this.span + "% - " + parentProps.gutter + "px);" +
                            "margin-right:" + parentProps.gutter / 2 + "px;" +
                            "margin-left:" + parentProps.gutter / 2 + "px;" : ""
                        ], this.$options.name + "-" + "g-" + parentProps.gutter + "-s-" + this.span)
                    ];

                    return renderClass.join(" ");
                },
                /*flex布局样式*/
                flex:()=>{

                },
                /*inline-block布局样式*/
                inline:()=>{
                    const renderClass = [
                        "bl-col inline"                      
                    ]
                    return renderClass.join(" ");
                }
        },
        
        /*获取建造好的class */
        curRenderClass=buildColClass[curLayoutType]();

        console.log("当前x是",parentProps);

        return createElement('div', {
                class: curRenderClass
            },
            this.$slots.default
        );
    }
}
</script>

<style scoped>

</style>