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
        <li>
          <router-link to="#">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/goals">
            Goals and Achievements
          </router-link>
        </li>
        <li>
          <router-link to="/activities">
            Activities
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/contacts">
            Contacts
          </router-link>
        </li>
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
