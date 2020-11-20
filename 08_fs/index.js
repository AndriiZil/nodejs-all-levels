const fs = require('fs');

const { promises: fsPromises } = require('fs'); // promise api

const file = 'example.txt';
const test = 'test.html';

// Check if the file exists in the current directory.
fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
fs.access(file, fs.constants.R_OK, (err) => {
    console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
fs.access(file, fs.constants.W_OK, (err) => {
    console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

fs.access('apple', function(err) {
    if (err && err.code === 'ENOENT') {
        console.log('Not exists');
        //Create dir in case not found
    }
});

// Write data to existing file or create new
fs.appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});

// Create new file destination.txt
fs.copyFile(file, 'destination.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});

// If file exists
fs.exists('/etc/passwd', (exists) => {
    console.log(exists ? 'it\'s there' : 'no passwd!');
});

// Create dir if it not exists
fs.mkdir('apple', { recursive: true }, (err) => {
    if (err) throw err;
});

// Read dir
fs.readdir(__dirname, (err, data) => {
    if (err) console.log(err);
    console.log(data);
});
/*
    [
      'example.txt',
      'index.js',
      'message.txt',
      'node.txt',
      'tmp',
      'watch-dir.js',
      'watch-file.js'
    ]
* */

// the first argument si path to file or filename if it in the same directory
fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename file
fs.rename('destination.txt', 'newFile.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});

// delete directory
fs.rmdir('apple', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});

// Delete file
fs.unlink('newFile.txt', (err) => {
    if (err) throw err;
    console.log('newFile.txt deleted');
});

// Create file and write data there
fs.writeFile('node.txt', 'Hello Node.js', 'utf8', (err) => {
    if (err) throw err;
    console.log('file was writen');
});

// Statistic of file
fs.stat('node.txt', (err, data) => {
    if (err) console.log(err);
    console.log(data);
}); /*
    {
      dev: 2050,
      mode: 33204,
      nlink: 1,
      uid: 1000,
      gid: 1000,
      rdev: 0,
      blksize: 4096,
      ino: 2360712,
      size: 13,
      blocks: 8,
      atimeMs: 1605268349126.944,
      mtimeMs: 1605268343610.9622,
      ctimeMs: 1605268343610.9622,
      birthtimeMs: 1605268309179.0745,
      atime: 2020-11-13T11:52:29.127Z,
      mtime: 2020-11-13T11:52:23.611Z,
      ctime: 2020-11-13T11:52:23.611Z,
      birthtime: 2020-11-13T11:51:49.179Z
    }
*/
