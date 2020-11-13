console.log('start');

setTimeout(() => console.log('setTimeout'));

setImmediate(() => console.log('setImmediate1'));

process.nextTick(() => console.log('process.nextTick'));

setImmediate(() => console.log('setImmediate2'));

console.log('end');
