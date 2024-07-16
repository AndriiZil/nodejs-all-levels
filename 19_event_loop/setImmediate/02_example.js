'use strict';

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => console.log('setImmediate'));

setTimeout(() => {
  console.log('setTimeout 2');
}, 0);

Promise.resolve('Promise').then(console.log);

/**
 * Promise
 * setTimeout
 * setTimeout 2
 * setImmediate
 */
