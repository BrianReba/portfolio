<template>
    <div :class="{ 'disable': !showNavBar }" class="topnav" id="myTopnav">
        <button class="option">Proyectos</button>
        <button class="option">Noticias</button>
        <button class="option">Contacto</button>
        <button class="option">Sobre mi</button>
        <button @click="showNavBar = !showNavBar" class="icon-hide"> <font-awesome-icon icon="chevron-up" /> </button>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
      return {
          showNavBar: true
      }
  }
}
</script>

<style scoped>
 /* Add a black background color to the top navigation */
.topnav {
  background-color: #b56eff;
  overflow: hidden;
}

.disable {
    visibility: hidden;
}

.topnav .icon-hide {
 background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;   
}

/* Style the links inside the navigation bar */
.topnav .option {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav button:hover {
  background-color: #ddd;
  color: black;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
} 
</style>
