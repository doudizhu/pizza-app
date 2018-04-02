<template lang='pug'>
  #app
    app-header
    router-view
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
