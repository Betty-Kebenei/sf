<template>
  <div id="navbar">
    <div class="logo">
      <img
        alt="SF logo"
        src="../assets/images/logo.png"
      >
    </div>
    <div class="navlinks">
      <ul>
        <li>Home</li>
        <li>Goals and Achievements</li>
        <li>Activities</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </div>
  </div>
</template>;

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" >
   @import '../assets/scss/Navbar.scss';
</style>
