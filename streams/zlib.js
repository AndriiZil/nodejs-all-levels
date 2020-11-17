const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('./data.txt');

const writebleStream = fs.createWriteStream('data.txt.gz');

const glib = zlib.createGzip();

readableStream.pipe(glib).pipe(writebleStream);
