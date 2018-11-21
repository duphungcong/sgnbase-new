<template>
  <div>
    <form @submit.prevent="onLogin">
      Username: <input type="text" v-model="username"/><br/>
      Password: <input type="password" v-model="password"/><br/>
      <input type="submit" value="Login"/>
    </form>
    <button @click="refreshToken">Refresh</button>
  </div>
</template>

<script>

import authApi from '../api/auth';

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
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password,
      });
      // authApi.login(this.username, this.password, (success, err, data) => {
      //   if (err) {
      //     console.log('login', err);
      //   } else if (success === false) {
      //     console.log('login', success);
      //   } else {
      //     console.log('login', 'success');
      //   }
      // });
    },
    refreshToken() {
      authApi.refreshToken();
    },
  },
};

</script>

<style scoped>

</style>
