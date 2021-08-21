<template>
  <div class="home">
     <div class="title-container">
       <h1 class="title-color"> Brian Rebagliati </h1>
        <h2 class="subtitle-color">Front-end developer</h2>
     </div> 
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
.title-container{
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  

}
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url("https://cdn.discordapp.com/attachments/871510880012099610/878775738503933963/5651978.png");
  background-size: 100%;
}

.title-color{
  font-family: Arial, sans-serif;
  font-size: 50px;
  background: rgb(186,118,244);
  background: linear-gradient(90deg, rgba(186,118,244,1) 19%, rgba(136,59,169,1) 43%, rgba(73,13,88,1) 71%); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0px;
}

.subtitle-color{
  font-family: Arial, sans-serif;
  font-size: 30px;
  background: rgb(186,118,244);
  background: linear-gradient(270deg, rgba(186,118,244,1) 19%, rgba(136,59,169,1) 43%, rgba(73,13,88,1) 71%); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
