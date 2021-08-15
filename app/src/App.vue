<template>
  <div class="container">
    <Header class="row header" />
    <div class="row content">
      <Sidebar class="sidebar col-3 p-0 border vh-100" />
      <div class="main col-9 p-3">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Sidebar from './views/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<style scoped>
.content {
  display: flex;
}
</style>