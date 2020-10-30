const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y); // 3 dontUseMe function is deprecated so do not use!
}, 'dontUseMe function is deprecated so do not use!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64')); // EYHx0Rh8qTmSAveimAtcnKP+fTnk6OMyMZ37Cddr1DhL5JfvUvGgT5k2np4ZNjrlpaDpXcG6GWZSm3FYgz7TvA==
    })
    .catch((error) => {
        console.error(error);
    })