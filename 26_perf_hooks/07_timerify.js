'use strict';

const { performance, PerformanceObserver } = require('node:perf_hooks');

function slowFunction() {
  for (let i = 0; i < 1e8; i++) {}
}

const wrapped = performance.timerify(slowFunction);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0]);
});

obs.observe({ entryTypes: ['function'] });

wrapped();

/**
 * PerformanceNodeEntry {
 *   name: 'slowFunction',
 *   entryType: 'function',
 *   startTime: 11.179625,
 *   duration: 44.46525,
 *   detail: []
 * }
 */
