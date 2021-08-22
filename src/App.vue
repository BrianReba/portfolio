<template>
  <div class="app">
    <SideBar class="side-bar"></SideBar>
    <router-view v-slot="{ Component }" class="page">
      <transition name="fade" mode="out-in"> 
        <component :is="Component"> </component>
      </transition>
    </router-view>
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
  background-image: url("https://cdn.discordapp.com/attachments/871510880012099610/878775738503933963/5651978.png");
  background-size: cover;
}
html, body {
  margin: 0px !important;
  padding: 0px !important;
  font-family: 'Varela Round', sans-serif;
  background: rgb(215,215,215);
  background: linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(224,224,224,1) 22%, rgba(237,237,237,1) 39%, rgba(251,251,251,1) 52%, rgba(252,252,252,1) 100%);
   
}

.page{
  width: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
   transition: opacity 0.5s ease-in;
}

</style>
