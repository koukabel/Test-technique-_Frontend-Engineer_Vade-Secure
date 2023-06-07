<template>
  <CocktailsApp/>
</template>

<script>
import CocktailsApp from './components/CocktailsApp.vue'

export default {
  name: 'App',
  components: {
   CocktailsApp
  }
}
</script>
<style scoped>
#app{
 background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}
</style>