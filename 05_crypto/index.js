'use strict';

const {
  createHmac,
  scrypt,
  randomFill,
  createCipheriv
} = require('node:crypto');

const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
  .update('I love cupcakes')
  .digest('hex');

console.log('HASH', hash); // c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

// -----------------------------------------------------------------------------------

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

scrypt(password, 'salt', 24, (err, key) => {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) => {
    if (err) throw err;

    // Once we have the key and iv, we can create and use the cipher...
    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = '';
    cipher.setEncoding('hex');

    cipher.on('data', (chunk) => encrypted += chunk);
    cipher.on('end', () => console.log('KEY', encrypted)); // KEY ef244a23ebcb2ca5bd8850690f92a5b10cf74041a79008eff99d9c9938469899

    cipher.write('some clear text data');
    cipher.end();
  });
});
