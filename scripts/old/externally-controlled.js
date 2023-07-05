import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import http from 'k6/http';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'externally-controlled',
      vus: 10,
      maxVUs: 50,
      duration: '10m',
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }