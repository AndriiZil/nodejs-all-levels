const fs = require('fs');

const stream = fs.createReadStream('./data.txt');

setTimeout(() => {
    stream.on('data', data => {
        console.log(data.toString());
    })
}, 2000);
