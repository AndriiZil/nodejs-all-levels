setTimeout(() => console.log('timeout1'));

setTimeout(() => {
    console.log('timeout2')
    Promise.resolve()
        .then(() => console.log('promise'));
    process.nextTick(() => console.log('process.nextTick()'));
});

setTimeout(() => console.log('timeout3'));