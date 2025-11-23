'use strict';

const { monitorEventLoopDelay } = require('node:perf_hooks');

const h = monitorEventLoopDelay({ resolution: 20 });

h.enable();

setInterval(() => {
  console.log('EL delay mean:', h.mean / 1e6, 'ms');
  console.log('EL delay max:', h.max / 1e6, 'ms');
}, 2000);
