'use strict';

const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

function handler(req, res) {
  // Run the request handling logic within the context of AsyncLocalStorage
  asyncLocalStorage.run({ requestId: generateRequestId() }, () => {

    // Access the stored data within this asynchronous context
    const requestId = asyncLocalStorage.getStore().requestId;
    console.log(`Request ID for this operation: ${requestId}`);

    // Simulate some asynchronous operation
    setTimeout(() => {
      const currentRequestId = asyncLocalStorage.getStore().requestId;
      console.log(`Request ID after async operation: ${currentRequestId}`);
      res.end(`Hello from request ${currentRequestId}`);
    }, 100);
  });
}

function generateRequestId() {
  return Math.random().toString(36).substring(2, 9);
}

// Example usage with a simple HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
  handler(req, res);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
