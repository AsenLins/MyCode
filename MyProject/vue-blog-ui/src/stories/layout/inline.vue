<template>
    <div>
        <!--
        <div class="myclass" style="display:inline-block; height:100px; background-color:#eeeeee; width:300px;vertical-align:middle;">
            <div style="display:inline-block">
                    3
            </div>
            <div style="display:inline-block">2</div>
        </div>
        -->

        <bl-row class="demo-box box-1" type="inline">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>
        <!--
        <bl-row type="inline">
            <bl-col>1</bl-col>
        </bl-row>
        -->
    
    </div>
</template>

<script>
import col from '../../components/col/col.vue';
import row from '../../components/row/row.vue';

export default {
    components: {
        "bl-col":col,"bl-row":row
    },
    name: 'inlineView'
}
</script>

<style scoped>
    .myclass{
        text-align: justify;
        text-align-last:justify;
    }
    .myclass::before{
        content:"";
        display:inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .myclass::after{
        content:"";
        display:inline-block;
        /*
        width: 100%;
        height:0px;
        */
    }
    box-1{
        width: 600px;
    }

</style>