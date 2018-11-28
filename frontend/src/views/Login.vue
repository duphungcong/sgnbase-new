<template>
  <vs-row>
    <!--<vs-row>-->
      <!--<vs-input label="Username" v-model="username"></vs-input>-->
    <!--</vs-row>-->
    <!--<vs-row>-->
      <!--<vs-input type="password" label="Password" v-model="password"></vs-input>-->
    <!--</vs-row>-->

    <!--<vs-button color="primary" type="border" @click="onLogin">Login</vs-button>-->
    <!--<vs-button color="primary" type="border" @click="refreshToken">Refresh</vs-button>-->

    <vs-row><vs-input label="Username" v-model="username"></vs-input></vs-row>
    <vs-row><vs-input label="Password" type="password" v-model="password"></vs-input></vs-row>
    <vs-row><vs-button color="primary" type="border" @click="onLogin">Login</vs-button></vs-row>
  </vs-row>
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
    refreshToken() {
      this.$store.dispatch('auth/refreshToken');
    },
  },
};

</script>

<style scoped>
  vs-row {
    padding-bottom: 10px;
  }
</style>
