<template>
  <div class="app">
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
