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
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

.app {
  display:flex;
  height: 100vh;
  width: 100vw;
  font-family: 'Varela Round', sans-serif;
}
html, body {
  margin: 0px !important;
  padding: 0px !important;
  font-family: 'Varela Round', sans-serif;
  background: rgb(215,215,215);
  background: linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(224,224,224,1) 22%, rgba(237,237,237,1) 39%, rgba(251,251,251,1) 52%, rgba(252,252,252,1) 100%);
   
}




</style>
