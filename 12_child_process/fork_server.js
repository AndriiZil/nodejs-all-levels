'use strict';

const http = require('node:http');
const { fork } = require('node:child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('compute.js');
    compute.send('start');
    compute.on('message', (sum) => {
      res.end(`Sum is ${sum}`);
    });
  } else {
    res.end('Ok');
  }
});

server.listen(3000);
