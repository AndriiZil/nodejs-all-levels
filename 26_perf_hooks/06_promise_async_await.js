'use strict';

const { performance } = require('perf_hooks');
const { setTimeout } = require('node:timers/promises');

(async () => {
  performance.mark('request-start');

  await setTimeout(300);

  performance.mark('request-end');
  const measure = performance.measure('api-call', 'request-start', 'request-end');

  console.log(`API call took ${measure.duration}ms`);
})();
