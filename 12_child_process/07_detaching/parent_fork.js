'use strict';

const fs = require('node:fs');
const { fork } = require('node:child_process');
const out = fs.openSync('./out.log', 'a');

const subprocess = fork('child.js', [], {
  detached: true,
  stdio: ['ipc', out, process.stderr],
});

subprocess.unref();
