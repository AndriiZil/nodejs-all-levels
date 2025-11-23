'use strict';

const { performance } = require('node:perf_hooks');

function heavyTask() {
  for (let i = 0; i < 1e7; i++) {}
}

const start = performance.now();

heavyTask();

const end = performance.now();
console.log(`Execution time: ${(end - start).toFixed(2)}ms`);
