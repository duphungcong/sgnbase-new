<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a @click="activeMenu" role="button" class="navbar-burger burger" aria-label="menu"
         aria-expanded="false"
         v-bind:class="{ 'is-active': activator }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" v-bind:class="{ 'is-active': activator }">
      <div class="navbar-start" v-if="followed">
        <a class="navbar-item" href="/dashboard">Dashboard</a>
        <a class="navbar-item" href="/zonedivision">Zone Division</a>
        <a class="navbar-item" href="/nrcs">NRC</a>
        <a class="navbar-item" href="/">RQF</a>
        <a class="navbar-item" href="/">TAR</a>
        <a class="navbar-item" href="/">Barcode</a>
      </div>

      <div class="navbar-start" v-else>
        <a class="navbar-item" href="/">Checks</a>

        <a class="navbar-item">Tools</a>
        <a class="navbar-item">Spares</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Task</a>
            <a class="navbar-item">EO</a>
            <hr class="navbar-divider">
            <a class="navbar-item">Report an issue</a>
          </div>

        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-info" v-if="followed" @click="unfollow">UnFollow</button>
        </div>
        <div class="navbar-item">
          <button class="button is-light" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {
      activator: false,
    };
  },
  props: {
    followed: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/deleteToken');
    },
    unfollow() {
      this.$store.dispatch('unfollow');
    },
    activeMenu() {
      this.activator = !this.activator;
    },
  },
};

</script>

<style scoped>
  .navbar {
    padding-bottom: 1em;
  }
</style>
