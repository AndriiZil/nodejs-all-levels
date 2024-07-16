'use strict';

let fs = require('node:fs');
let cp = require('node:child_process');

let outFd = fs.openSync('./outputlogs', 'a');

let errFd = fs.openSync('./errorslogs', 'a');
let child = cp.spawn('ls', [], {
  stdio: ['ignore', outFd, errFd],
});
