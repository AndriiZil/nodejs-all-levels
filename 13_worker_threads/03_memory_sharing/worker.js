'use strict';

const { parentPort } = require('node:worker_threads');

parentPort.on('message', (msg) => {
  console.log('In worker after transfer' + msg);
});
