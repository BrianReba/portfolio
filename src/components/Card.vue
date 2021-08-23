<template>
  <div class="card">
    <div class="deco-border"></div>
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
    width: 80%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.deco-border {
    margin-left: 30px;
    height: 20%;
    width:9%;
    border-top: 3px solid orange;
    border-left: 3px solid orange;
}
.header {
    width: 100%;
}
</style>
