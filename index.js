'use strict';

const express = require('express');
const server = express();

function sleep(ms) {
  const future = Date.now() + ms;
  while (Date.now() < future);
}

const arr = [];

setInterval(() => {
  arr.push(new Array(1000000).fill('x'));
}, 1000);

server.get('/', function (req, res, next) {
  sleep(30);

  res.send({});
  next();
});

server.listen(3000, () => console.log(`Server was started.`));

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.');
  server.close();
});
