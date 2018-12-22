<template>
  <div id="app">
    <bl-row>
      <bl-col :span="1">
          <div><router-link to="/articleList">main:跳转到articleList</router-link></div>
          <div><router-link to="/editArticle">main:跳转到editArticle</router-link></div>
      </bl-col>
      <bl-col :span="7">
        <keep-alive>
          <router-view name="main"></router-view>
        </keep-alive>
       </bl-col>
    </bl-row>
  </div>
</template>

<script>
//import articleList from './views/articleList.vue'
 


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>

</style>
