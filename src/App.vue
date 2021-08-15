<template>
  <div class="app">
    <SideBar></SideBar>
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
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
