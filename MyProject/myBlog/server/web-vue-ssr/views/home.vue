<template>
  <div id="app">
      大苏打撒旦44412321123123xxxxxxxxxx
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