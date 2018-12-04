<template>
    <div>
      <bl-row>
          <h2>栅栏布局：最多8列。</h2>
      </bl-row>
      <bl-row  class="demo-box">
          <bl-col span="8">col.1</bl-col>
      </bl-row>
      <bl-row class="demo-box">
          <bl-col span="4">col.1</bl-col>
          <bl-col span="4">col.2</bl-col>
      </bl-row>

     <bl-row :gutter="5" class="demo-box">
         <bl-col span="2">col.1</bl-col>
         <bl-col span="2">col.2</bl-col>
         <bl-col span="2">col.3</bl-col>
         <bl-col span="2">col.4</bl-col>
     </bl-row>

      <bl-row class="demo-box">
          <bl-col>col.1</bl-col>
          <bl-col>col.2</bl-col>
          <bl-col>col.3</bl-col>
          <bl-col>col.4</bl-col>
          <bl-col>col.5</bl-col>
          <bl-col>col.6</bl-col>
          <bl-col>col.7</bl-col>
          <bl-col>col.8</bl-col>
      </bl-row>

    </div>
</template>

<script>



import col from '../../../components/col/col.vue';
import row from '../../../components/row/row.vue';

export default {
    components:{"bl-col":col,"bl-row":row},
    name:"rowView"
        
}
</script>

<style scoped>

</style>