'use strict';

const { EventEmitter } = require('node:events');
const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();
const emitter = new EventEmitter();

const store = { id: 1 };

emitter.on('my-event', () => {
  asyncLocalStorage.enterWith(store);
});

emitter.on('my-event', () => {
  console.log('emitter.on', asyncLocalStorage.getStore()); // Returns the same object { id: 1 }
});

console.log(asyncLocalStorage.getStore()); // Returns undefined
emitter.emit('my-event');
console.log(asyncLocalStorage.getStore()); // Returns the same object
