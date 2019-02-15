<template>
  <div id="app">
    <Navbar />
    <section>
      <router-view />
    </section>
  </div>
</template>;

<script>
import Navbar from './common/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" >
   @import './assets/scss/App.scss'
</style>
