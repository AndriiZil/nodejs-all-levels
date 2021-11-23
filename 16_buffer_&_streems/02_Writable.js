const fs = require('fs');

const readStream = fs.createReadStream('./doc/file.txt');
const writeStream = fs.createWriteStream('./doc/new-file.txt'); // Directory should be exists

readStream.on('data', (chunk) => {
    console.log('\n---WRITABLE STREAM START');
    writeStream.write(chunk);
    console.log('\n---WRITABLE STREAM END');
});
