<template>
<div>
  <h1>
    Portfolio
  </h1>
  <button @click="sumar">  
    Sumar
  </button>
  <button @click="restar">
    Restar
  </button>
  <input v-model="multiplo">
  <button @click="multiplicar">
    multiplicar
  </button>
  
<h2>
  {{cantidad}}
</h2>
</div>
</template>
<script>


export default {
  name: 'App',
  data() {
  return {
    cantidad: 0,
    multiplo: 10

  }

  },
  methods: {
    sumar(){
      this.cantidad= this.cantidad+1
    },
    restar(){
      this.cantidad= this.cantidad-1
    },
    multiplicar(){
      this.cantidad= this.cantidad * this.multiplo
    }
  }
}
  

  
  

</script>

<style>

</style>
