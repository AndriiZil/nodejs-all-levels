'use strict';

const { spawn } = require('node:child_process');

const ps = spawn('node child.js', {
  shell: true,
  stdio: 'inherit',
});

/**
 * stdout: total 0
 * lrwxr-xr-x    1 root  wheel    25B May  7 09:01 X11 -> ../private/var/select/X11
 * lrwxr-xr-x    1 root  wheel    25B May  7 09:01 X11R6 -> ../private/var/select/X11
 * drwxr-xr-x  985 root  wheel    31K May  7 09:01 bin
 * drwxr-xr-x   32 root  wheel   1.0K May  7 09:01 lib
 * drwxr-xr-x  363 root  wheel    11K May  7 09:01 libexec
 * drwxr-xr-x    6 root  wheel   192B May 15 07:07 local
 * drwxr-xr-x  230 root  wheel   7.2K May  7 09:01 sbin
 * drwxr-xr-x   42 root  wheel   1.3K May  7 09:01 share
 * drwxr-xr-x    5 root  wheel   160B May  7 09:01 standalone
 *
 * child process exited with code 0
 */
