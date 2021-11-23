const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./doc/file.txt');
const writeStream = fs.createWriteStream('./doc/new-file.txt');
const compressStream = zlib.createGzip();

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');
}

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError);

