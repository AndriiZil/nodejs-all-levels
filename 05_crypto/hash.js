'use strict';

const {
  createHash
} = require('node:crypto');

const hash1 = createHash('sha256');

hash1.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = hash1.read();
  if (data) {
    console.log('HASH', data.toString('hex')); // HASH 6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
  }
});

hash1.write('some data to hash');
hash1.end();

// ---------------------------------------------------------------

const { createReadStream } = require('fs');
const { stdout } = require('node:process');

const hash = createHash('sha256');

const input = createReadStream('test.js');
input.pipe(hash).setEncoding('hex').pipe(stdout); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

// ---------------------------------------------------------------

const hash3 = createHash('sha256');

hash3.update('some data to hash');
console.log('HASH3', hash3.digest('hex')); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
