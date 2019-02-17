<template>
  <div id="app">
    this is homepage ggg424244444444444444444444111
  </div>
</template>

<script>
  export default {
    asyncData ({ store, route: { params: { id }}}) {
      
      return store.dispatch('test', { ids: [id] })
    }
  }
</script>

<style scoped>

</style>