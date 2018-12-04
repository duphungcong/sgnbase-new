<template>
  <div class="container is-fluid">
    <nav-bar v-if="loggedIn"></nav-bar>
    <router-view></router-view>
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
</style>
