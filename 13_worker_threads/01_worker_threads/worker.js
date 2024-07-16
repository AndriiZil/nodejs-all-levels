'use strict';

const { parentPort, workerData } = require('node:worker_threads');

console.log(process.env.TEST);

parentPort.postMessage(workerData.num * workerData.num);
