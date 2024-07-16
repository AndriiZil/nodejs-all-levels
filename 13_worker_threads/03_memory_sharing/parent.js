'use strict';

const { Worker } = require('node:worker_threads');

const worker = new Worker('./worker.js');
const arrayBuffer = new ArrayBuffer(16);

const dataview = new Int8Array(arrayBuffer, 0, 16); // all 0 by default

console.log('In Parent Before Transfer' + dataview);

worker.postMessage(dataview, [dataview.buffer]);
// console.log('In Parent After Transfer' + dataview)
