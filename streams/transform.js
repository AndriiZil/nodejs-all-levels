const fs = require('fs');

let readStream = fs.createReadStream('./from.txt');

let writeStream = fs.createWriteStream('./to.txt');

readStream.pipe(writeStream);
