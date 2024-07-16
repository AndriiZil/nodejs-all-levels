'use strict';

const fs = require('node:fs');
const { spawn } = require('node:child_process');

const out = fs.openSync('./out.log', 'a');

const subprocess = spawn('node', ['child.js'], {
  detached: true,
  stdio: ['ipc', out, process.stderr],
});

subprocess.unref();
