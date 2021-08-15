<template>
	<div class="sidebar">
		<button  @click="() => redirect('Home')" class="">Home</button>
		<button>Portfolio</button>
		<button>Resume</button>
		<button @click="() => redirect('Contact')" >Contact</button>
	</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  methods: {
    redirect (page) {
      this.$router.push({ name: page })
    }
  }
}
</script>

<style scoped>
.sidebar {
  z-index: 0;
  margin: 0;
  padding: 0;
  width: 150px;
  background-color: #b3b3cc;
  height: 100%;
  overflow: auto;
}

.sidebar button {
	width: 100%;
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar button.active {
  background-color: #c8c8c8;
  color: white;
}

.sidebar button:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar button {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar button {
    text-align: center;
    float: none;
  }
}
</style>
