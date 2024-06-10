const crypto = require('node:crypto');

const string = 'a sentence to encrypt';

const cipher = crypto.createCipher('aes-256-cbc', 'key12');
let result = cipher.update(string, 'utf8', 'base64');
result += cipher.final('base64');

console.log('encryption:', result); // lxiXXOtkXXfz5+GczTE61DRCsU0c1+ANaBjwbuLwnxc=

const decipher = crypto.createDecipher('aes-256-cbc', 'key12');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');

console.log('decryption:', result2); // decryption: a sentence to encrypt