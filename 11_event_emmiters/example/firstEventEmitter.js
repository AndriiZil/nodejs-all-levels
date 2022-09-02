'use strict';

const { EventEmitter } = require('events');

const firstEventEmitter = new EventEmitter();

console.log(firstEventEmitter.emit('my first event')); // false, because no listeners registered
