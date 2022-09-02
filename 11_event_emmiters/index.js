const MyEmitter = require('./emiter');

const myEmitter = new MyEmitter();

myEmitter.on('process', (data) => console.log(data));

myEmitter.logIt('process', 'System example log');
