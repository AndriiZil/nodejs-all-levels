const fs = require('fs');

const file = 'example.txt';

fs.watchFile(file, (curr, prev) => {
    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
});
