'use strict';

const { Worker } = require('node:worker_threads');

// Create a SharedArrayBuffer
const sharedBuffer = new SharedArrayBuffer(4); // 4 bytes
const sharedArray = new Int32Array(sharedBuffer);

// Initialize the buffer with a value
sharedArray[0] = 0;

// Create a new worker and pass the SharedArrayBuffer
const worker = new Worker('./worker.js', {
  workerData: sharedBuffer,
});

// Function to monitor the shared buffer
function monitorBuffer() {
  console.log(`Main Thread: sharedArray[0] = ${sharedArray[0]}`);
  if (sharedArray[0] < 10) {
    setTimeout(monitorBuffer, 1000); // Check every second
  }
}

monitorBuffer();
