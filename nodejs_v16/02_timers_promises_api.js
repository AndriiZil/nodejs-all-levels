const { setTimeout } = require('timers/promises');

async function doTimeout() {
    await setTimeout(1000);
    console.log('1 second later');
}

doTimeout().catch(console.error); // 1 second later
