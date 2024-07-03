const EventEmitter = require('events');

class myEmitter extends EventEmitter {
  logIt(eventname, message) {
    this.emit(eventname, message);
  }
}

module.exports = myEmitter;
