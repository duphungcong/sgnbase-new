import http from '@/helpers/http';

const endpoints = {
  nrcsUrl: 'nrcs/',
};

const nrcList = [
  {
    id: 1,
    number: 1,
    wo: '23456789',
    title: 'RUBSTRIP-FRONTCAP, ENDBAY AT SEAT 2A, 3A, 2G, 3G, 4AC, 4G BROKEN',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 2,
    number: 2,
    wo: '23456789',
    title: 'FOUND NICK ON PROFILE CORNER OF AFT CARGO BTW FR47.2 - FR47.5 AT STR 38 LH',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 3,
    number: 3,
    wo: '23456789',
    title: 'FOUND RECESSED COVERS AND PLASTIC CAPS MISSING AT DOOR 3L, 3R',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 4,
    number: 4,
    wo: '23456789',
    title: 'RUBSTRIP-FRONTCAP, ENDBAY AT SEAT 2A, 3A, 2G, 3G, 4AC, 4G BROKEN',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 5,
    number: 5,
    wo: '23456789',
    title: 'FOUND NICK ON PROFILE CORNER OF AFT CARGO BTW FR47.2 - FR47.5 AT STR 38 LH',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 6,
    number: 6,
    wo: '23456789',
    title: 'FOUND RECESSED COVERS AND PLASTIC CAPS MISSING AT DOOR 3L, 3R',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 7,
    number: 7,
    wo: '23456789',
    title: 'RUBSTRIP-FRONTCAP, ENDBAY AT SEAT 2A, 3A, 2G, 3G, 4AC, 4G BROKEN',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 8,
    number: 8,
    wo: '23456789',
    title: 'FOUND NICK ON PROFILE CORNER OF AFT CARGO BTW FR47.2 - FR47.5 AT STR 38 LH',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 9,
    number: 9,
    wo: '23456789',
    title: 'FOUND RECESSED COVERS AND PLASTIC CAPS MISSING AT DOOR 3L, 3R',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 10,
    number: 10,
    wo: '23456789',
    title: 'RUBSTRIP-FRONTCAP, ENDBAY AT SEAT 2A, 3A, 2G, 3G, 4AC, 4G BROKEN',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 11,
    number: 11,
    wo: '23456789',
    title: 'FOUND NICK ON PROFILE CORNER OF AFT CARGO BTW FR47.2 - FR47.5 AT STR 38 LH',
    zone: '567',
    priority: 'AOG',
  },
  {
    id: 12,
    number: 12,
    wo: '23456789',
    title: 'FOUND RECESSED COVERS AND PLASTIC CAPS MISSING AT DOOR 3L, 3R',
    zone: '567',
    priority: 'AOG',
  },
];

const nrc = {
  id: 1,
  wo: '23456789',
  title: 'RH MLG WHEEL WORN TO LIMIT',
  zone: '567',
  priority: 'AOG',
};

export default {
  getNrcList(payload, cb) {
    // http.getData(endpoints.nrcsUrl, {
    //   params: payload,
    // })
    //   .then((res) => {
    //     console.log('res', res.data);
    //     cb(true, null, res.data);
    //   }, (err) => {
    //     cb(false, err.response.data, null);
    //   });
    cb(true, null, nrcList);
  },
  getNrc(payload, cb) {
    const { id } = payload;
    const endpoint = `${endpoints.nrcsUrl}${id}/`;
    http.getData(endpoint, {})
      .then((res) => {
        console.log('res', res.data);
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
};
