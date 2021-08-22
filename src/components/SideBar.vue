<template>
	<div class="sidebar">
    <div class="user-container">
      <img class="my-pic" src="https://images-ext-2.discordapp.net/external/4lXzfCpv1Ylhcx7Lg-qAOkHSWVtvc62C6EXOSgTSP3E/https/cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png?width=468&height=468" alt="image">
      <p class="username">
        Brian Rebagliati
      </p>
    </div>
		<router-link :to="{ name: 'Home' }" class="button-redirect"> <font-awesome-icon class="sidebar-icon" icon="home" />Home</router-link>
    <router-link :to="{ name: 'AboutMe' }" class="button-redirect" > <font-awesome-icon class="sidebar-icon" icon="user-circle" />About Me</router-link>
		<router-link :to="{ name: 'Portfolio' }" class="button-redirect" > <font-awesome-icon class="sidebar-icon" icon="suitcase" />Portfolio</router-link>
		<router-link :to="{ name: 'Resume' }" class="button-redirect" > <font-awesome-icon class="sidebar-icon" icon="id-card" />Resume</router-link>
		<router-link :to="{ name: 'Contact' }" class="button-redirect" > <font-awesome-icon class="sidebar-icon" icon="envelope-open-text" />Contact</router-link>

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
  background-color: #44184d;
  height: 100%;
  overflow: auto;
}

.sidebar .button-redirect {
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  color: white;
  padding: 25px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.sidebar .button-redirect.active {
  background-color: #c8c8c8;
  color: white;
}

.sidebar .button-redirect:hover:not(.active) {
  background-color: #555;
  color: white;
}

.username {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin: 15px 0 15px 0 ;
}

.user-container{
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
}

.my-pic{
  height: 100px;
  width: 100px;
}

.sidebar-icon{
  font-size: 1.3rem;
  margin-bottom: 5px;
}

</style>
