import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
 
  stages: [
    { duration: '2m', target: 200 }, // fast ramp-up to a high point
 
    { duration: '1m', target: 0 }, // quick ramp-down to 0 users
  ],
};

export default () => {
 http.get('https://test-api.k6.io');
  sleep(1);

};
