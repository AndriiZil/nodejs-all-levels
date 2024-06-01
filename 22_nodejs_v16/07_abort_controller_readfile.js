const fs = require('node:fs');

const controller = new AbortController();
const { signal } = controller;

fs.readFile('./data.txt', { signal, encoding: 'utf8' }, (error, data) => {
  if (error) {
    if (error.name === 'AbortError') {
      console.log('Read file process aborted');
    } else {
      console.error(error);
    }
    return;
  }
  console.log(data); // Hello world
});

controller.abort(); // Read file process aborted
