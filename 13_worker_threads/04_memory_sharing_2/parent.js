'use strict';

const { Worker } = require('node:worker_threads');

const worker = new Worker('./worker.js');
const sharedArrayBuffer = new SharedArrayBuffer(16);

const dataview = new Int8Array(sharedArrayBuffer, 0, 16); // all 0 by default
console.log('In Parent Before Sharing' + dataview);
worker.postMessage(dataview);
console.log('In Parent After Sharing' + dataview);
