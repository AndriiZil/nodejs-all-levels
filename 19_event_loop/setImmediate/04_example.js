'use strict';

const fs = require('node:fs');

/**
 * The main advantage to using setImmediate() over setTimeout() is setImmediate() will always be executed before any
 * timers if scheduled within an I/O cycle, independently of how many timers are present.
 */

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate');
  });
});
