<template>

  <div class="container has-text-centered">
    <div class="column is-4 is-offset-4">
      <h4 class="title has-text-grey">Login</h4>
      <p class="subtitle has-text-grey">Please login to proceed</p>
      <div class="box">

          <div class="field">
            <div class="control">
                <input class="input" v-model="username" placeholder="Username" autofocus="">
            </div>
          </div>

          <div class="field">
            <div class="control">
                <input class="input" v-model="password" type="password" placeholder="Your Password">
            </div>
          </div>

          <div class="field">
            <label class="checkbox">
              <input type="checkbox">  Remember me
            </label>
          </div>

          <button class="button is-info is-fullwidth" @click="onLogin">Login</button>

      </div>

      <p class="has-text-grey">
        <a href="../">Sign Up</a> &nbsp;·&nbsp;
        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
        <a href="../">Need Help?</a>
      </p>
    </div>
  </div>

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
