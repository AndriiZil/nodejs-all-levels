'use strict';

const net = require('node:net');

console.log(net.isIP('::1')); // returns 6
console.log(net.isIP('127.0.0.1')); // returns 4
console.log(net.isIP('127.000.000.001')); // returns 0
console.log(net.isIP('127.0.0.1/24')); // returns 0
console.log(net.isIP('fhqwhgads')); // returns 0

console.log(net.isIPv4('127.0.0.1')); // returns true
console.log(net.isIPv4('127.000.000.001')); // returns false
console.log(net.isIPv4('127.0.0.1/24')); // returns false
console.log(net.isIPv4('fhqwhgads')); // returns false

console.log(net.isIPv6('::1')); // returns true
console.log(net.isIPv6('fhqwhgads')); // returns false
