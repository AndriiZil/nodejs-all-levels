'use strict';

const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

const runInAsyncScope = asyncLocalStorage.run(123, () => AsyncLocalStorage.snapshot());
const result = asyncLocalStorage.run(321, () => runInAsyncScope(() => asyncLocalStorage.getStore()));

console.log(result); // returns 123
