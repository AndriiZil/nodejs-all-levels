'use strict';

const { Worker, SHARE_ENV } = require('node:worker_threads');

new Worker('./worker.js', { workerData: { num: 5 }, env: SHARE_ENV });

process.env.TEST = 'test'; // env: SHARE_ENV
