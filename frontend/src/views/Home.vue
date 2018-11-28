<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="button is-info" @click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/deleteToken');
    },
  },
};
</script>
