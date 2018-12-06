<template>
    <div>
        <bl-row>
            <h2>inline布局</h2>
        </bl-row>

        <bl-row>
            <h3>左对齐</h3>
        </bl-row>
        <bl-row class="demo-box box-2" type="inline" align-x="left">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>

        <bl-row>
            <h3>居中对齐</h3>
        </bl-row>

        <bl-row class="demo-box box-2" type="inline" align-x="center">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>
        <bl-row>
            <h3>右对齐</h3>
        </bl-row>
        <bl-row class="demo-box box-2" type="inline" align-x="right">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>

        <bl-row>
            <h3>垂直左对齐</h3>
        </bl-row>

         <bl-row class="demo-box box-2" type="inline" align-x="left" align-y="middle">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row> 
        <bl-row>
            <h3>垂直居中</h3>
        </bl-row>

         <bl-row class="demo-box box-2" type="inline" align-x="center" align-y="middle">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>       

        <bl-row>
            <h3>垂直右对齐</h3>
        </bl-row>

         <bl-row class="demo-box box-2" type="inline" align-x="right" align-y="middle">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>  


        <bl-row>
            <h3>垂直两边对齐</h3>
        </bl-row>

         <bl-row class="demo-box box-2" type="inline" align-x="justify" align-y="middle">
            <bl-col>col.1</bl-col>
            <bl-col>col.2</bl-col>
            <bl-col>col.3</bl-col>
        </bl-row>

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