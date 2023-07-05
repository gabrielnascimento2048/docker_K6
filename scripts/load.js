import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 5 },
    { duration: '30s', target: 5 }, 
    { duration: '30s', target: 0 }, 
  ],
};

export default () => {
  http.get('http://test.k6.io');
  sleep(1);
};
