import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 18 }, 
    { duration: '30s', target: 18 }, 
    { duration: '30s', target: 0 }, 
  ],
};

export default () => {
http.get('https://test-api.k6.io');
  sleep(1);
};

