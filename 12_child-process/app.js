const { fork } = require('child_process');

const child = fork('child.js', [3]);

child.on('close', (code) => {
    console.log(`Child process 3 exited. Code: ${code}`)
});
