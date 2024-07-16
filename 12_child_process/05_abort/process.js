'use strict';

const { spawn } = require('node:child_process');

const controller = new AbortController();
const { signal } = controller;

const grep = spawn('grep', ['ssh'], { signal });

grep.on('error', (err) => {
  // This will be called with err being an AbortError if the controller aborts
});
controller.abort(); // Stops the child process
