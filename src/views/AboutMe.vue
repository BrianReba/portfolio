<template>
  <div class="about-me">
    <div class="card-container">
      <Card class="card">
          <template v-slot:header>
            <h1 class="title-about">  About me </h1>
          </template>
          <template v-slot:body>
          <div class="flex-row">
            <div class="row-image">
                <img class="my-pic" src="https://images-ext-2.discordapp.net/external/4lXzfCpv1Ylhcx7Lg-qAOkHSWVtvc62C6EXOSgTSP3E/https/cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png?width=468&height=468" alt="image">

            </div>
            <div class="row-description" >
              <p class="title-description">Hey!, im a front-end developer from Deliver Games.</p>
              <p class="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam et rutrum nisi. Praesent volutpat est vitae vestibulum consequat. 
                Nulla scelerisque elit non quam porttitor volutpat. Aliquam eget mi augue. Fusce vestibulum felis at enim sollicitudin tempor. 
                Phasellus efficitur pellentesque est. Nullam porttitor purus ut elementum dapibus. 
                </p>
            
            </div>

            <div class="row-media">
              

            </div>
          </div>
            
          </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'AboutMe',
  components: {
    Card
  }
}
</script>

<style>
.about-me {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-about {
  color: white;
}
.card-container {
  height: 90%;
  width: 80%;
}

.flex-row {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  margin-top: 5px;
}

.my-pic {
  max-width: 100%;
}

.row-image {
  width: 100%;
  height: 100%;
  align-items: center;
}

.row-description {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.row-media {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
}

.title-description {
  font-family: sans-serif, arial;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}

.text-description {
  font-family: sans-serif, arial;
  font-size: 1.1rem;
  color: white;
}
</style>
