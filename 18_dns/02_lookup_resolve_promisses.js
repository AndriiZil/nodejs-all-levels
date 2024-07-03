'use strict';

const dns = require('node:dns');

const dnsPromises = dns.promises;

const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dnsPromises.lookup('example.com', options).then((result) => {
  console.log('address: %j family: IPv%s', result.address, result.family);
  // address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6
});

// When options.all is true, the result will be an Array.
options.all = true;
dnsPromises.lookup('example.com', options).then((result) => {
  console.log('addresses: %j', result);
  // addresses: [{"address":"2606:2800:21f:cb07:6820:80da:af6b:8b2c","family":6}]
});
