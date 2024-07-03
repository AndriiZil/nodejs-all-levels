'use strict';

const util = require('node:util');
const crypto = require('node:crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y); // 3 dontUseMe function is deprecated so do not use!
}, 'dontUseMe function is deprecated so do not use!');
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });
