<template>
    <form @submit.prevent="onLogin">
      Username: <input type="text" v-model="username"/><br/>
      Password: <input type="password" v-model="password"/><br/>
      <input type="submit" value="Login"/>
    </form>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onLogin() {
      this.$store.dispatch('auth/obtainToken', {
        username: this.username,
        password: this.password,
      });
    },
  },
};

</script>

<style scoped>

</style>
