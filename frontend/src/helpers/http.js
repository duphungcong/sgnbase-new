import axios from 'axios';

const BASE_URL = 'http://localhost:8000/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: false,
  params: {}, // do not remove this, its added to add params later in the config
});

// const validStatuses = [
//   200, 201, 202, 203, 204,
//   300, 301, 302, 303, 304,
// ];

instance.interceptors.request.use((config) => {
  /* global window Store */
  const { token } = Store.state.auth;
  console.log('token in request', token);

  if (token) {
    config.headers.common.Authorization = `JWT ${token}`; // One SPACE between JWT and token
    // config.headers.common['Access-Control-Allow-Origin'] = '*';
  } else {
    config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  return config;
}, error => Promise.reject(error));

instance.interceptors.response.use(response => response, error => Promise.reject(error));

export default {
  getData(action) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.get(url);
  },
  postData(action, data) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.post(url, data);
  },
  putData(action, data) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.put(url, data);
  },
  deleteData(action) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.delete(url);
  },
  login(action, data) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.get(url, data);
  },
};
