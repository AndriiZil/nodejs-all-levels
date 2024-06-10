'use strict';

const { spawn } = require('node:child_process');

const controller = new AbortController();
const { signal } = controller;

const ls = spawn('ls', ['-lh', '/usr'], { signal });

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

/**
 * const child = spawn('echo $ANSWER', {
 *   stdio: 'inherit',
 *   shell: true,
 *   env: { ANSWER: 42 },
 * });
 */
