const EventEmmiter = require('events');
const util = require('util');

class Logger {
  log(msg) {
    console.log(msg);
    this.emit('some_event', { id: 1, text: 'Event test text!' });
  }
}

util.inherits(Logger, EventEmmiter);

module.exports = Logger;
