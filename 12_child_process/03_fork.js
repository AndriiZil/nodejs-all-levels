'use strict';

const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
  console.log('Message from child', msg);
});

forked.send({ hello: 'world' });

/**
 * Message from parent: { hello: 'world' }
 * Message from child { counter: 0 }
 * Message from child { counter: 1 }
 * Message from child { counter: 2 }
 * Message from child { counter: 3 }
 * Message from child { counter: 4 }
 * Message from child { counter: 5 }
 * ...
 */
