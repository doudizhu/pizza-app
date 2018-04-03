<template lang='pug'>
  #app
    app-header
    router-view

    router-view(name="orderingGuide")
    router-view(name="delivery")
    router-view(name="history")
</template>

<script>
import Header from './components/Header';

export default {
  components:{
    'app-header':Header
  }  
}
</script>

<style>
</style>
