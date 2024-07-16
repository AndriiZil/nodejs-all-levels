'use strict';

setTimeout(() => console.log('setTimeout'), 0);

console.log('start');

function logTime() {
  console.log('log Time:');
}

logTime();

console.log('finish');

/**
 * start
 * log Time:
 * finish
 * setTimeout
 */
