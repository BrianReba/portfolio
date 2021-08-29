<template>
  <div class="card">
    <div class="header-container">
        <slot class="header" name="header"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {

  }
}
</script>

<style>
.card {
    height: 100%;
    width: 100%;
    background-color: #333;
    display:flex;
}
.header-container {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header {
    width: 100%;
}
</style>
