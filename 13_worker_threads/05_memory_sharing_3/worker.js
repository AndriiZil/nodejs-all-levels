'use strict';

const { workerData } = require('node:worker_threads');

// Access the SharedArrayBuffer passed from the main thread
const sharedArray = new Int32Array(workerData);

// Function to increment the shared value every second
function incrementBuffer() {
  sharedArray[0] += 1;
  console.log(`Worker Thread: sharedArray[0] = ${sharedArray[0]}`);
  if (sharedArray[0] < 10) {
    setTimeout(incrementBuffer, 1000); // Increment every second
  }
}

incrementBuffer();
