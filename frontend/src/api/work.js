import http from '@/helpers/http';

const endpoints = {
  getChecks: 'checks/',
  getCheck: 'checks/:id/',
};

export default {
  getChecks(page, cb) {
    http.getData(endpoints.getChecks, {
        params: {
          page: page,
        }
      })
      .then((res) => {
        console.log('res', res.data);
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
};
