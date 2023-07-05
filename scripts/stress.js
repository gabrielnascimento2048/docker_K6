import http from 'k6/http';
import {sleep} from 'k6';

export const options = {

  stages: [
   
   { duration: '20s', target: 10 },
   { duration: '40s', target: 10 },
   { duration: '10s', target: 0 }



  ],
};

export default () => {
  http.get('https://test-api.k6.io');
  sleep(1);

};

