<template>
  <div id="app">
    <Navbar />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>;

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './common/Navbar.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
  },
};
</script>

<style lang="scss" >
   @import './assets/scss/App.scss'
</style>
