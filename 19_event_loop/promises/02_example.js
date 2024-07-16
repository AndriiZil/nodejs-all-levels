'use strict';

let a = 5;

console.log('start');

setTimeout(() => {
  console.log('A2', a);
  a = 10;
}, 0);

const p = new Promise((resolve, reject) => {
  console.log('A1', a);
  a = 25;
  resolve();
});

p.then(() => {
  console.log('text');
});

console.log('end');

/**
 * start
 * A1 5
 * end
 * text
 * A2 25
 */
