const fs = require('fs');

const readStream = fs.createReadStream('./doc/file.txt');

readStream.on('data', (chunk) => {
    console.log('n\--- READABLE STREAM START');
    console.log(chunk.toString());
    console.log('n\--- READABLE STREAM END');
});
