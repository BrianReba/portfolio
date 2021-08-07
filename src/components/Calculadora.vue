<template>
<div>
  <h1>
    {{titulo}}
  </h1>
  <button class="boton-suma" @click="sumar">  
    Sumar
  </button>
  <input v-model="sumatoria" >
  <button @click="restar">
    Restar
  </button>
  <input v-model="restatoria" >
  <button @click="multiplicar">
    multiplicar
  </button>
  <input v-model="multiplo">
<h2>
  {{total}}
</h2>
</div>
</template>

<script>
export default {
  name: 'Calculadora',
   data() {
    return {
      total: 0,
      multiplo: 0,
      sumatoria: 0,
      restatoria: 0
    }
  },
  props: {
    titulo: String
  },
  methods: {
    sumar(){
      this.total= this.total + parseInt(this.sumatoria) 
    },
    restar(){
      this.total= this.total - parseInt(this.restatoria)
    },
    multiplicar(){
      this.total= this.total * this.multiplo
    }
  } 

}
</script>

<style scoped>

.boton-suma {
  background-color: red;
  color:white;
}

</style>
