const path = require('path');

console.log('__filename', __filename); // /home/andrii/Documents/github/nodejs-all-levels/02_path/index.js

console.log('__dirname', __dirname); // /home/andrii/Documents/github/nodejs-all-levels/02_path

console.log('path.basename(__filename)', path.basename(__filename)); // index.js

console.log('path.dirname(__filename)', path.dirname(__filename)); // /home/andrii/Documents/github/nodejs-all-levels/02_path

console.log('path.extname()', path.extname(__filename)); // .js

console.log(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
})); // /home/user/dir/file.txt

console.log('path.isAbsolute(__filename)', path.isAbsolute(__filename)); // true

console.log('path.join()', path.join(__dirname, '../.env')); // /home/andrii/Documents/github/nodejs-all-levels/.env

console.log('path.normalize(\'/foo/bar//baz/asdf/quux/..\')', path.normalize('/foo/bar//baz/asdf/quux/..')); // /foo/bar/baz/asdf

console.log('path.parse(__filename)', path.parse(__filename)); /*
    {
        root: '/',
        dir: '/home/andrii/Documents/github/nodejs-all-levels/02_path',
        base: 'index.js',
        ext: '.js',
        name: 'index'
     }
*/
