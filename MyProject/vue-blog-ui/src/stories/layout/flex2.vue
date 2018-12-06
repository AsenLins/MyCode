<template>
    <div>
        <h4>flex:左对齐</h4>
        <bl-row class="demo-box" type="flex" flex-x="start" flex-y="start">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>
        <h4>flex:居中</h4>
        <bl-row class="demo-box" type="flex" flex-x="center" flex-y="start">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>
        <h4>flex:右对齐</h4>
        <bl-row class="demo-box" type="flex" flex-x="end" flex-y="start">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>

        <h4>flex:顶部对齐</h4>
        <bl-row class="demo-box" type="flex" flex-x="start" flex-y="start">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>

        <h4>flex:垂直居中</h4>
        <bl-row class="demo-box" type="flex" flex-x="start" flex-y="center">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>

        <h4>flex:底部对齐</h4>
        <bl-row class="demo-box" type="flex" flex-x="start" flex-y="end">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>


        <h4>flex:垂直居中</h4>
        <bl-row class="demo-box" type="flex" flex-x="center" flex-y="center">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>

        <h4>flex:顶部居中</h4>
        <bl-row class="demo-box"  type="flex" flex-x="center" flex-y="start">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>
        <h4>flex:底部居中</h4>
        <bl-row class="demo-box" type="flex" flex-x="center" flex-y="end">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
           <bl-col>col.4</bl-col>
        </bl-row>

        <h4>flex:列</h4>
        <bl-row class="demo-box" :is-col="true" type="flex" flex-x="end" flex-y="center">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
        </bl-row>

        <h4>flex:列倒序</h4>
        <bl-row class="demo-box" :is-col="true" :is-reverse="true"  type="flex" flex-x="end" flex-y="center">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
        </bl-row>

        <h4>flex:行倒序</h4>
        <bl-row class="demo-box" :is-reverse="true"  type="flex" flex-x="end" flex-y="center">
           <bl-col>col.1</bl-col>
           <bl-col>col.2</bl-col>
           <bl-col>col.3</bl-col>
        </bl-row>


        <h4>flex:align-content</h4>
        <bl-row class="demo-box big-col" align-content="center"  :is-reverse="true"  type="flex" flex-x="end" flex-y="center">
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
        name:"flex2View"
    }
</script>

<style scoped>
  .demo-box{
      min-height: 100px;
  }
 .demo-box>div{
    margin-right: 10px;
    padding: 3px;
    margin-top:2px;
    margin-bottom: 2px;
 }
 .demo-box.big-col{
    height: 180px;
 }
 .demo-box.big-col>div{
   width: 450px;
 }
</style>