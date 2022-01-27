console.log('start script'); // 1

setTimeout(() => console.log('timeout:1 0'), 0); // 3

setTimeout(() => {
    console.log('timeout:2 0'); // 4

    Promise.resolve()
        .then(() => console.log('promise')); // 6

    process.nextTick(() => console.log('process.nextTick()')); // 5
}, 0);

setTimeout(() => console.log('timeout:3 0'), 0); // 7

console.log('end script'); // 2

/**
 *   start script
     end script
     timeout:1 0
     timeout:2 0
     process.nextTick()
     promise
     timeout:3 0
 *
 */
