'use strict';

const { Worker, SHARE_ENV } = require('node:worker_threads');

const worker = new Worker('./worker.js', { workerData: { num: 5 }, env: SHARE_ENV });

process.env.TEST = 'test'; // env: SHARE_ENV

worker.on('message', (result) => {
  console.log('square of 5 is :', result);
});

worker.on('error', (msg) => {
  console.log(msg);
});

console.log('hurreyy');
