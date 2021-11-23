const fs = require('fs');

console.log('start:1'); // 1

setImmediate(() => {
    console.log('immediate:1 second'); // 4
});

setTimeout(() => {
    console.log('timeout:1 first'); // 3
}, 0);

console.log('end:1'); // 2

fs.readFile('./file.txt', (err, data) => {
    console.log('start:2'); // 5

    setTimeout(() => console.log('setTimeout:2 second'), 0); // 8

    setImmediate(() => console.log('setImmediate:2 first')); // 7

    console.log('end:2'); // 6
});

/**
 *   start:1
 end:1
 timeout:1
 immediate:1
 start:2
 end:2
 setImmediate:2 // pernamently first
 setTimeout:2
 */
