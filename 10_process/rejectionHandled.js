const unhandledRejections = new Map();

Promise.reject('Error')

process.on('unhandledRejection', (reason, promise) => {
    console.log('unhandledRejection', reason); // unhandledRejection Error
    unhandledRejections.set(promise, reason);
});

process.on('rejectionHandled', (promise) => {
    unhandledRejections.delete(promise);
});

console.log(unhandledRejections);
