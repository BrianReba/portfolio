<template>
  <div class="about-me">
    <div class="page-container">
      <div class="user-media">

      </div>
      <div class="user-info">
        
      </div>
      <div class="image-container">
        <img src="https://images-ext-2.discordapp.net/external/4lXzfCpv1Ylhcx7Lg-qAOkHSWVtvc62C6EXOSgTSP3E/https/cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png?width=468&height=468" alt="image">
      </div>
      <div class="title-container">
        <h1>About me</h1>
        <div class="title"></div>
      </div>

    </div>
      
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  components: {

  }
}
</script>

<style>
.title-container{
display: flex;
margin-bottom: 40px;
text-align: center;

}

.page-container{
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
}

.image-container{
  position: absolute;
  margin-bottom: 40px;
  align-items: left;
}
</style>
