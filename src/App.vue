<template>
  <div class="app">
    <SideBar class="side-bar"></SideBar>
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style>
.app {
  display:flex;
  height: 100vh;
  width: 100vw;
}
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
