'use strict';

const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
  setTimeout(() =>
    res.sendFile(path.join(__dirname, '../build', 'index.html')), 1000);
});

const server = app.listen(8080);

// NodeJS v16.15.0
console.log('headersTimeout =', server.headersTimeout); // headersTimeout = 60000 (1 minute)
console.log('requestTimeout =', server.requestTimeout); // requestTimeout = 0

// NodeJS v18.1.0
console.log('headersTimeout =', server.headersTimeout); // headersTimeout = 60000 (1 minute)
console.log('requestTimeout =', server.requestTimeout); // requestTimeout = 300000  (5 minutes)
