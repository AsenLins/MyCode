<template>
    <div>
      <bl-row>
          <h2>栅栏布局：最多8列。</h2>
      </bl-row>
      <bl-row :gutter="5" class="demo-box">
          <bl-col :span="8">col.1</bl-col>
      </bl-row>
      <bl-row :gutter="5" class="demo-box">
          <bl-col :sm="3" :md="3" :span="4">
              <bl-row>
                  <bl-col :sm="1" :md="4" :span="4">1</bl-col>
                  <bl-col :sm="6" :sm-offset="1" :md="3" :span="3">2</bl-col>
              </bl-row>
          </bl-col>
          <bl-col :offset="1" :span="3" :sm="4" :md="4">col.2</bl-col>
      </bl-row>

     <bl-row :gutter="5" class="demo-box">
         <bl-col :span="2">col.1</bl-col>
         <bl-col :span="2">col.2</bl-col>
         <bl-col :span="2">col.3</bl-col>
         <bl-col :span="2">col.4</bl-col>
     </bl-row>

      <bl-row :gutter="13"  class="demo-box">
          <bl-col>col.1</bl-col>
          <bl-col>col.2</bl-col>
          <bl-col>col.3</bl-col>
          <bl-col>col.4</bl-col>
          <bl-col>col.5</bl-col>
          <bl-col>col.6</bl-col>
          <bl-col>col.7</bl-col>
          <bl-col>col.8</bl-col>
      </bl-row>

   
      <bl-row>
          <h2>offset:列偏移</h2>
      </bl-row>

      <bl-row class="demo-box">
          <bl-col :offset="1">offset.1</bl-col>
          <bl-col :offset="1">offset.2</bl-col>
          <bl-col :offset="1">offset.4</bl-col>
          <bl-col :offset="1">offset.3</bl-col>
     
    
      </bl-row>

      <bl-row>
          <h2>gutter:列间距</h2>
      </bl-row>
      <bl-row :gutter="16" class="demo-box">
          <bl-col>col.1</bl-col>
          <bl-col>col.2</bl-col>
          <bl-col>col.3</bl-col>
          <bl-col>col.4</bl-col>

    
      </bl-row>

    </div>
</template>

<script>



import col from '../../components/col/col.vue';
import row from '../../components/row/row.vue';

export default {
    components:{"bl-col":col,"bl-row":row},
    name:"fencesView"
        
}
</script>

<style scoped>

</style>