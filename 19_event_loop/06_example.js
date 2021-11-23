console.log('start script');

setTimeout(() => console.log('timeout:1 0'), 0);

setTimeout(() => {
    console.log('timeout:2 0')
    Promise.resolve()
        .then(() => console.log('promise'));
    process.nextTick(() => console.log('process.nextTick()'));
}, 0);

setTimeout(() => console.log('timeout:3 0'), 0);

console.log('end script');

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
