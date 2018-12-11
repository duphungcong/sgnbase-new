<template>
  <div class="container is-fluid">
    <nav-bar v-if="loggedIn" :followed="followed"></nav-bar>
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
    followed() {
      return this.$store.getters.followed;
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
    followed(value) {
      if (!value) {
        this.$router.push({ name: 'home' });
      } else {
        this.$router.push({ name: 'dashboard' });
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
