<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
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
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Checks
        </a>

        <a class="navbar-item">
          Documentation
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
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
      console.log('unfollow');
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
