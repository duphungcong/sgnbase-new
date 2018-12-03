<template>
  <div class="container is-fluid">
    <nav-bar></nav-bar>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
  computed: {
    loggedIn() {
      return this.$store.getters['auth/loggedIn'];
    },
  },
  watch: {
    loggedIn(value) {
      if (!value) {
        this.$router.push({ name: 'login' });
      } else {
        this.$router.push({ name: 'home' });
      }
    },
  },
  mounted() {
    this.$store.dispatch('auth/inspectToken');
  },
};

</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/
/*#nav {*/
  /*padding: 30px;*/
/*}*/

/*#nav a {*/
  /*font-weight: bold;*/
  /*color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
  /*color: #42b983;*/
/*}*/
</style>
