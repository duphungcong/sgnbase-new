import http from '@/helpers/http';

const endpoints = {
  obtainToken: 'auth/obtain-token',
  refreshToken: 'auth/refresh-token',
};

export default {
  login(username, password, cb, ...args) {
    const cbz = args[args.length - 1];
    const data = {
      username,
      password,
    };
    http.postData(endpoints.obtainToken, data)
      .then((res) => {
        Store.dispatch('auth/obtainToken', res.data.token);
        console.log('res token', res.data.token);
        if (cbz) cb(true, null);
        this.onChange(true);
      }, (err) => {
        console.log(err);
        if (cbz) cb(false, err);
        this.onChange(false);
      });
  },
  refreshToken() {
    const data = {
      token: Store.state.auth.token,
    };
    console.log('token to refresh', data.token);
    http.postData(endpoints.refreshToken, data)
      .then((res) => {
        Store.dispatch('auth/obtainToken', res.data.token);
        console.log('res token', res.data.token);
      }, (err) => {
        console.log(err);
      });
  },
  onChange() {},
};
