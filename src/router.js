import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Goals from './components/Goals.vue';
import ContactUs from './components/ContactUs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/goals',
      name: 'goals',
      component: Goals,
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: ContactUs,
    },
  ],
});
