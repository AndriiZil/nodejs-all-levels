'use strict';

const dnsPromises = require('node:dns').promises;

dnsPromises.lookupService('127.0.0.1', 22).then((result) => {
  console.log(result.hostname, result.service); // Prints: localhost ssh
});
