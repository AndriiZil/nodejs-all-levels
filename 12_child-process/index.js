const { fork } = require('child_process');

const child = fork('child2.js');

child.send({ data: 'Ping child' });

child.on('message', (code) =>
    console.log(`Message to parent: ${JSON.stringify(code)}`)
);

child.on('close', (code) =>
    console.log(`Child process exited. Code: ${code}`)
);
