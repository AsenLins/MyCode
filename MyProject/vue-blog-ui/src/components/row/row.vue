
<script>
/*行控件*/


import mixin from '../../core/mixin.js';

export default {
    name: "bl-row",
    props: {
        xAlign:String,
        yAlign:{
            type:String, 
            default:function(){
                return "top";
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

        const rowClass={
            default: "bl-row default",
            flex: "bl-row flex",
            inline: "bl-row lineBlock",

            xAlign:{
                left:"left",
                center:"center",
                right:"right"
            },
            yAlign:{
                top:"top",
                middle:"middle",
                bottom:"bottom"
            }
        }

        const classList = {
            default: "bl-row default",
            flex: "bl-row flex",
            inline: "bl-row lineBlock"
        }


        const renderClass = [
            classList[this.type]
        ]

        const buildRowClass={
            scope:this,
            default(){
                return [
                    rowClass.default
                ].join(" ");
            },
            flex(){
                
            },
            inline:function(){

                console.log("inline",this);
                return[
                    rowClass.inline,
                    rowClass.xAlign[this.scope.xAlign]||"",
                    rowClass.yAlign[this.scope.yAlign]||""
                ].join(" ");
            }
        } 
  
        return createElement(
            "div", {
                class: buildRowClass[this.type]()
            },
            this.$slots.default,
        );

    }
}
</script>

<style scoped lang="scss">

</style>