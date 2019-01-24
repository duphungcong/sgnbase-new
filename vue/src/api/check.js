import http from '@/helpers/http';

const endpoints = {
  checksUrl: 'checks/',
  getAircraftList: 'aircraft/',
};

export default {
  getChecks(payload, cb) {
    http.getData(endpoints.checksUrl, {
      params: payload,
    })
      .then((res) => {
        console.log('res', res.data);
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  getCheck(payload, cb) {
    const { id } = payload;
    const endpoint = `${endpoints.checksUrl}${id}/`;
    http.getData(endpoint, {})
      .then((res) => {
        console.log('res', res.data);
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  getAircraftList(cb) {
    http.getData(endpoints.getAircraftList, {})
      .then((res) => {
        console.log('res', res.data);
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  createCheck(payload, cb) {
    const { check } = payload;
    http.postData(endpoints.checksUrl, check)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  updateCheck(payload, cb) {
    const { id, check } = payload;
    const endpoint = `${endpoints.checksUrl}${id}/`;
    http.putData(endpoint, check)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  deleteCheck(payload, cb) {
    const { id } = payload;
    const endpoint = `${endpoints.checksUrl}${id}/`;
    http.deleteData(endpoint)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
};
