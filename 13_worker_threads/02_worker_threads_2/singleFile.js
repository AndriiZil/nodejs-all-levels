'use strict';

const { Worker, isMainThread, parentPort, workerData } = require('node:worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename, {
    workerData: null,
  });
  worker.on('message', (data) => {
    console.log('Received:', { data, threadId: worker.threadId }); // Received: { data: 'Done!', threadId: 1 }
  });
  worker.on('error', (err) => {
    console.log({ err });
  });
} else {
  parentPort.postMessage('Done!');
}
