'use strict';

const util = require('node:util');

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, data) => {
  if (err) throw err;
  console.log('MESSAGE:', data); // MESSAGE: hello world
});
