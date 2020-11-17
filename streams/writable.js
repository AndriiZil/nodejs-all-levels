const fs = require('fs')

let writableStream = fs.createWriteStream('./example.txt');

writableStream.write('Something important data');
writableStream.end();

writableStream.on('finish', () => console.log('Data was written.'));

writableStream.on('error', (err) => console.log(err));
