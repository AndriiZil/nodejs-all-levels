'use strict';

let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('bar', bar);
});

bar = 5;

/**
 * bar 5
 */
