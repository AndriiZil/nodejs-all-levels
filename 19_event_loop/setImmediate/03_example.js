'use strict';

setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

setImmediate(() => console.log('setImmediate'));

setTimeout(() => {
  console.log('setTimeout 2');
}, 0);

process.nextTick(() => console.log('nextTick'));

/**
 * nextTick
 * setTimeout 1
 * setTimeout 2
 * setImmediate
 */
