
<script>
/*行控件*/


import mixin from '../../core/mixin.js';

export default {
    name: "bl-row",
    props: {
        AlignX: String,
        AlignY: {
            type: String,
            default: function() {
                return "top";
            }
        },
        flexX:{
            type:String,
            default:function(){
                return "start";
            }
        },
        flexY:{
            type:String,
            default:function(){
                return "start";
            }
        },
        isReverse:{
            type:Boolean,
            default:function(){
                return false;
            }
        },
        isCol:{
            type:Boolean,
            default:function(){
                return false;
            }
        },
        isNowrap:{
            type:Boolean,
            default:function(){
                return false;
            }
        },      
        type: {
            type: String,
            default: function() {
                return 'default';
            }
        },
        gutter: {
            type: Number,
            default: function() {
                return 0;
            }
        }
    },
    render: function(createElement) {

        const rowClass = {
            default: "bl-row default",
            inline:{
                base:"bl-row lineBlock",
                AlignX:{
                    left: "left",
                    center: "center",
                    right: "right",
                    justify:"justify"                   
                },
                AlignY:{
                    top: "top",
                    middle: "middle",
                    bottom: "bottom"                   
                }
            },
           flex:{
              row:{
                base:"bl-row flex set-row",
                reverse:"set-row-reverse"
              },
              col:{
                base:"bl-row flex set-col",
                reverse:"set-col-reverse"
              },
              common:{
                wraps:{
                    wrap:"set-wrap",
                    nowrap:"set-no-wrap",
                    wrapReverse:"set-wrap-reverse"
                },
                justify:{
                    start:"set-justify-start",
                    end:"set-justify-end",
                    center:"set-justify-center",
                    between:"set-justify-between",
                    around:"set-justify-around",
                },
                align:{
                    start:"set-align-start",
                    end:"set-align-end",
                    center:"set-align-center",
                    baseline:"set-align-baseline",
                    stretch:"set-align-stretch",
                }
              }
           }
        }


        
        const buildRowClass = {
            scope: this,
            default () {
                return [
                    rowClass.default
                ].join(" ");
            },
            flex() {
                return[
                    this.scope.isCol===true?rowClass.flex.col.base:rowClass.flex.row.base,
                    rowClass.flex.common.align[this.scope.flexY],
                    rowClass.flex.common.justify[this.scope.flexX],
                    this.scope.isReverse===true&&this.scope.isCol===true?rowClass.flex.col.reverse:"",
                    this.scope.isReverse===true&&this.scope.isCol===false?rowClass.flex.row.reverse:"",
                    this.scope.isNowrap===true?rowClass.flex.common.wraps.nowrap:"",
                    this.scope.isNowrap===true&&this.isReverse===true? rowClass.flex.common.wraps.wrapReverse:""
                ].join(" ")
            },
            inline: function() {
                return [
                    rowClass.inline.base,
                    rowClass.inline.AlignX[this.scope.AlignX] || "",
                    rowClass.inline.AlignY[this.scope.AlignY] || ""
                ].join(" ");
            }
        }

        console.log("flex",buildRowClass[this.type]());


        return createElement(
            "div", {
                class: buildRowClass[this.type]()
            },
            this.$slots.default
        );

    }
}
</script>

<style scoped lang="scss">

</style>