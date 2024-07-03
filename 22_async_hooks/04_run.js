'use strict';

const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

const store = { id: 2 };
try {
  asyncLocalStorage.run(store, () => {
    console.log(asyncLocalStorage.getStore()); // Returns the store object { id: 2 }
    setTimeout(() => {
      console.log('setTimeout', asyncLocalStorage.getStore()); // Returns the store object { id: 2 }
    }, 200);

    setImmediate(() => {
      console.log('setImmediate', asyncLocalStorage.getStore()); // Returns the store object { id: 2 }
    });
    throw new Error();
  });
} catch (e) {
  console.log(asyncLocalStorage.getStore()); // Returns undefined
  // The error will be caught here
}
