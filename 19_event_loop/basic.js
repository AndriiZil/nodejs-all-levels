const fs = require('fs');

console.log('start'); // 1

setImmediate(() => console.log('setImmediate')); // 4

setTimeout(() => console.log('setTimeout'), 0); // 3

fs.readFile('./file.txt', (err, data) => {

    console.log('log 1'); // 5

    setTimeout(() => console.log('setTimeout 2'), 0); // 10

    setImmediate(() => console.log('setImmediate 2')); // 9

    Promise.resolve('success').then(console.log); // 8

    process.nextTick(() => console.log('process.nextTick')); // 7

    console.log('log 2'); // 6
});

console.log('end'); // 2
/**
 * start
 * end
 * setTimeout
 * setImmediate
 * log 1
 * log 2
 * process.nextTick
 * success
 * setImmediate 2
 * setTimeout 2
 */
