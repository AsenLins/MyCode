
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
        aligneSelf:{
            type:String,
            default:function(){
                return "auto";
            }
        },
        flex:{
            type:String
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
                type: this.$parent.type,
                xAlign: this.$parent.xAlign,
                yAlign: this.$parent.yAlign
            },

            /*col class */
            colClass = {
                default: "bl-col default",
                inline: "bl-col inline",
                flex:{
                    aligneSelf:{
                        auto:"set-align-auto",
                        start:"set-align-start",
                        end:"set-align-end",
                        center:"set-align-center",
                        baseline:"set-align-baseline",
                        stretch:"set-align-stretch"                       
                    }
                },
                span: "c",
                offset: "offset",
            },

            /*根据当前类型创建不同的class*/
            buildColClass = {
                scope: this,

                /*栅栏布局样式*/
                default () {
                    const renderClass = [
                        colClass.default,
                        colClass.span + this.scope.span,
                        this.scope.offset > 0 ? colClass.offset + this.scope.offset : "",
                        mixin.buildStyleClass([
                            parentProps.gutter > 0 ?
                            "width:calc(" + 100 / 8 * this.scope.span + "% - " + parentProps.gutter + "px);" +
                            "margin-right:" + parentProps.gutter / 2 + "px;" +
                            "margin-left:" + parentProps.gutter / 2 + "px;" : ""
                        ], this.scope.$options.name + "-" + "g-" + parentProps.gutter + "-s-" + this.scope.span)
                    ];

                    return renderClass.join(" ");
                },

                /*flex布局样式*/
                flex() {
                    return[
                        colClass.flex
                    ]
                },

                /*inline-block布局样式*/
                inline() {
                    const renderClass = [
                        colClass.inline
                    ]
                    return renderClass.join(" ");
                }
            }

        return createElement('div', {
                class: buildColClass[parentProps.type]()
            },
            this.$slots.default
        );
    }
}
</script>

<style scoped>

</style>