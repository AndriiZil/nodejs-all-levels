'use strict';

setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

Promise.resolve('Promise 2').then(console.log);

setTimeout(() => {
  console.log('setTimeout 2');
}, 0);

Promise.resolve('Promise 1').then(console.log);

process.nextTick(() => console.log('nextTick'));

/**
 * nextTick
 * Promise 2
 * Promise 1
 * setTimeout 1
 * setTimeout 2
 */
