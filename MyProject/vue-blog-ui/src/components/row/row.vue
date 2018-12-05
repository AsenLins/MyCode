
<script>
/*行控件*/


import mixin from '../../core/mixin.js';

export default {
    name: "bl-row",
    props: {
        align: String,
        justify: String,
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

        const classList = {
            default: "bl-row default",
            flex: "bl-row flex",
            inline: "bl-row lineBlock"
        }

        const renderClass = [
            classList[this.type],
        ]

        console.log(renderClass);
        
        return createElement(
            "div", {
                class: renderClass.join(" "),
            },
            this.$slots.default,
        );

    }
}
</script>

<style scoped lang="scss">

</style>