import http from 'k6/http';
import { sleep } from 'k6';

//init
export const options = {
  vus: 10,
  duration: '30s',
};


//init context: define custom function (Main function)
export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}

