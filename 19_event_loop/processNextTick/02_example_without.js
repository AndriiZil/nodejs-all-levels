'use strict';

let bar;

function someAsyncApiCall(callback) {
  callback();
}

someAsyncApiCall(() => {
  console.log('bar', bar);
});

bar = 5;

/**
 * bar undefined
 */
