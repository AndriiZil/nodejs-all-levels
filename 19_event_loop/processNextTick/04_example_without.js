'use strict';

const { EventEmitter } = require('node:events');

class MyEvents extends EventEmitter {
  constructor() {
    super();
    this.emit('event_loop');
  }
}

const myEmitter = new MyEvents();

myEmitter.on('event_loop', () => {
  console.log('an event occurred!');
});
