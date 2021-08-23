<template>
  <div class="about-me">
    <div class="card-container">
      <Card class="card">
          <template v-slot:header>
            <h1 class="title-about">  About me </h1>
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
.card {
}
.title-about {
  color: white;
}
.card-container {
  height: 90%;
  width: 80%;
}
</style>
