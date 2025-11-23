const express = require('express');
const { PerformanceObserver, performance } = require('node:perf_hooks');

const app = express();

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(`[PERF][${entry.name}] ${entry.duration.toFixed(2)}ms`);
  });
});
obs.observe({ entryTypes: ['measure'] });

app.get('/users', (req, res) => {
  performance.mark('users-start');

  setTimeout(() => {
    performance.mark('users-end');
    performance.measure('GET /users', 'users-start', 'users-end');
    res.send('done');
  }, 150);
});

app.listen(3000);
