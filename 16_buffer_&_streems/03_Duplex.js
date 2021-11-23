const fs = require('fs');

const readStream = fs.createReadStream('./doc/file1.txt');
const writeStream = fs.createWriteStream('./doc/new-file.txt');

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');
}

readStream
    .on('error', handleError)
    .pipe(writeStream)
    .on('error', handleError);
