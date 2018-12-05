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
        <bl-row>
            <h2>inline布局</h2>
        </bl-row>

        <bl-row>
            <h3>左对齐</h3>
        </bl-row>
        <bl-row class="demo-box box-2" type="inline" x-align="left">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>

        <bl-row>
            <h3>居中对齐</h3>
        </bl-row>

        <bl-row class="demo-box box-2" type="inline" x-align="center">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>
        <bl-row>
            <h3>右对齐</h3>
        </bl-row>
        <bl-row class="demo-box box-2" type="inline" x-align="right">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>

        <bl-row>
            <h3>垂直左对齐</h3>
        </bl-row>

         <bl-row class="demo-box box-2" type="inline" x-align="left" y-align="middle">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row> 
        <bl-row>
            <h3>垂直居中</h3>
        </bl-row>

         <bl-row class="demo-box box-2" type="inline" x-align="center" y-align="middle">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>       

        <bl-row>
            <h3>垂直右对齐</h3>
        </bl-row>

         <bl-row class="demo-box box-2" type="inline" x-align="right" y-align="middle">
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

    .box-1{
        width: 100%;
    }
    .box-2{
        width: 100%;
        height: 120px;
    }
    .box-2>div{
        width: 160px;
    }
</style>