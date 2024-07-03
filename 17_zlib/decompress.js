'use strict';

const { deflate, unzip } = require('node:zlib');
const { promisify } = require('node:util');

const input = '..............TO_ZIP...............';

deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log('BUFFER:', buffer.toString('base64'));
});

const buffer = Buffer.from('eJzT00MGIf7xUZ4BeqgAAIGvByw=', 'base64');

unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log('Buffer', buffer.toString());
});

// Or, Promisified

const do_unzip = promisify(unzip);

do_unzip(buffer)
  .then((buf) => console.log('Promise::', buf.toString()))
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });
