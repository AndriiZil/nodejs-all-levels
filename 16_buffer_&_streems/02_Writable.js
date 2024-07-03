'use strict';

const fs = require('node:fs');

const readStream = fs.createReadStream('./doc/file.txt');
const writeStream = fs.createWriteStream('./doc/new-file.txt', 'utf-8'); // Directory should be exists

readStream.on('data', (chunk) => {
  console.log('\n---WRITABLE STREAM START');
  writeStream.write(chunk);
  console.log('\n---WRITABLE STREAM END');
});
