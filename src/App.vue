<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <Counter :start="101"/>
<!--v-bind: ocupa JS en las properties. se puede resumir
como dos puntos : <Counter v-bind:start="15" />
-->


<!--Properties o atributos. Si se define en props se reconoce como prop y no como atributo
<Counter /> 
-->
  

</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components:{
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
