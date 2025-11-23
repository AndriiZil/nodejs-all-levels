'use strict';

const { performance } = require('node:perf_hooks');

performance.mark('start');

setTimeout(() => {
  performance.mark('end');

  const measure = performance.measure('my-measure', 'start', 'end');
  console.log(`Measured: ${measure.duration}ms`);
}, 500);
