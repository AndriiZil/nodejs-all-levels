'use strict';

setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

setTimeout(() => {
  console.log('setTimeout 2');
}, 0);

Promise.resolve('Promise').then(console.log);

/**
 * Promise
 * setTimeout 1
 * setTimeout 2
 */
