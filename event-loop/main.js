const fs = require('fs');

fs.readFile(__filename, () => {
    console.log('readFile');

    setTimeout(() => console.log('timeout1'));

    setImmediate(() => console.log('immediate1'));

    Promise.resolve()
        .then(() => console.log('Promise.resolve1'));

    process.nextTick(() => console.log('process.nextTick1'));
});

setTimeout(() => console.log('timeout2'));

setImmediate(() => console.log('immediate2'));

Promise.resolve()
    .then(() => console.log('Promise.resolve2'));

process.nextTick(() => console.log('process.nextTick2'));

console.log('sync code');
