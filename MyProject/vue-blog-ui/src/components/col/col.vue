
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
        order:{
            type:Number,
            default:function(){
                return 0;
            }
        },
        grow:{
            type:Number,
            default:function(){
                return 0;
            }
        },
        shrink:{
            type:Number,
            default:function(){
                return 0;
            }
        },
        basis:{
            type:Number,
            default:function(){
                return 0
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
        sm:{
            type:Number,
            default:function(){
                return 0;
            }
        },
        md:{
            type:Number,
            default:function(){
                return 0;
            }
        },
        mdOffset:{
            type:Number,
            default:function(){
                return 0;
            }
        },
        smOffset:{
            type:Number,
            default:function(){
                return 0;
            }
        }
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
                inline: {
                    base:"bl-col inline"
                },
                flex:{
                    base:"bl-col flex",
                    aligneSelf:{
                        auto:"set-align-auto",
                        start:"set-align-start",
                        end:"set-align-end",
                        center:"set-align-center",
                        baseline:"set-align-baseline",
                        stretch:"set-align-stretch"                       
                    }
                },
                span:{
                    lg:"lg",
                    md:"md",
                    sm:"sm",
                },
                offset:"offset",
            },

            /*根据当前类型创建不同的class*/
            buildColClass = {
                scope: this,

                /*栅栏布局样式*/
                default () {
                    const renderClass = [
                       
                        colClass.default,
                        colClass.span.lg+" "+colClass.span.lg +"-"+this.scope.span,                       
                        this.scope.sm>0&&colClass.span.sm+" "+colClass.span.sm+"-"+this.scope.sm,
                        this.scope.md>0&&colClass.span.md+" "+colClass.span.md+"-"+this.scope.md,
                        this.scope.mdOffset>0?colClass.span.md+" "+colClass.offset+this.scope.mdOffset:"",
                        this.scope.smOffset>0?colClass.span.sm+" "+colClass.offset+this.scope.smOffset:"",
                        //this.scope.smOffset>0?colClass.span
                       
                        this.scope.offset > 0 ? colClass.offset + this.scope.offset : "",
                        mixin.buildStyleClass([
                            parentProps.gutter > 0 ?
                            //"width:calc(" + 100 / 8 * this.scope.span + "% - " + parentProps.gutter + "px);" +
                            "padding-right:" + parentProps.gutter / 2 + "px;" +
                            "padding-left:" + parentProps.gutter / 2 + "px;" : ""
                        ], this.scope.$options.name + "-" + "g-" + parentProps.gutter + "-s-" + this.scope.span)
                    ];

                    return renderClass.join(" ");
                },

                /*flex布局样式*/
                flex() {
                    
                    const hasSetFlexClass= this.scope.grow+this.scope.basis+this.scope.order+ this.scope.shrink;
                    var flexClassName,
                    flexStyle;
                 
                    if(hasSetFlexClass>0){
                        flexClassName=
                        [
                        "flexCol-",
                        "g-",
                        this.scope.grow,
                        "-s",
                        this.scope.shrink,
                        "-b",
                        this.scope.basis,
                        "-o",
                        this.scope.order
                        ].join(""); 

                        flexStyle=[
                            "flex:",
                            this.scope.grow>0?this.scope.grow+" ":"0 ",
                            this.scope.shrink>0?this.scope.shrink+" ":"1 ",
                            this.scope.basis>0?this.scope.basis:"auto"
                        ].join("");
                    }

                    return[
                        colClass.flex.base,
                        colClass.flex.aligneSelf[this.scope.aligneSelf],
                        hasSetFlexClass>0?mixin.buildStyleClass([
                            flexStyle
                        ],flexClassName):""

                    ]
                },

                /*inline-block布局样式*/
                inline() {
                    const renderClass = [
                        colClass.inline.base,
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