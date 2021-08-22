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
  

}

.title-color{
  font-family: Arial, sans-serif;
  font-size: 50px;
  background: rgb(186,118,244);
  background: linear-gradient(90deg, rgba(186,118,244,1) 20%, rgb(120, 52, 180) 60%, rgb(186,118,244,1) 80%); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0px;
}

.subtitle-color{
  font-family: Arial, sans-serif;
  font-size: 30px;
  background: rgb(186,118,244);
  background: linear-gradient(270deg, rgb(130, 62, 189) 19%, rgba(120, 52, 180) 43%, rgb(132, 62, 194) 71%); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
