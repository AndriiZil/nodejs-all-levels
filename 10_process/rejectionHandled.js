const unhandledRejections = new Map();

Promise.reject('Unhandled Error');

process.on('unhandledRejection', (reason, promise) => {
    console.log('unhandledRejection:promise', promise); //  Promise { <rejected> 'Unhandled Error' }
    console.log('unhandledRejection:reason', reason); // unhandledRejection Unhandled Error
    unhandledRejections.set(promise, reason);
});

process.on('rejectionHandled', (promise) => {
    unhandledRejections.delete(promise);
});

console.log('unhandledRejections', unhandledRejections);
