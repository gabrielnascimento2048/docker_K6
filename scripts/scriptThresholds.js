import http from 'k6/http';
import { Trend, Rate, Counter, Gauge } from 'k6/metrics';
import { sleep } from 'k6';


export const TrendRTT = new Trend('RTT');
export const RateContentOK = new Rate('Content OK');
export const GaugeContentSize = new Gauge('ContentSize');
export const CounterErrors = new Counter('Errors');
export const options = {
    vus: 20, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
    duration: '30s', // This can be shorter or just a few iterations
  
    thresholds: {
    'Errors': ['count<100'],
    'ContentSize': ['value<4000'],
    'Content OK': ['rate>0.95'],
    'RTT': ['p(99)<300', 'p(70)<550', 'avg<500', 'med<550', 'min<500'],
  },
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/1/');
  const contentOK = res.json('name') === 'Bert';

  TrendRTT.add(res.timings.duration);
  RateContentOK.add(contentOK);
  GaugeContentSize.add(res.body.length);
  CounterErrors.add(!contentOK);

  sleep(1);
}
