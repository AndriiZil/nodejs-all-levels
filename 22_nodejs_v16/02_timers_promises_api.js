const { setTimeout, setImmediate } = require('timers/promises');

async function testTimeOut() {
    try {
        console.log('testTimeOut start time:', Date.now());
        const time = await setTimeout(2000, Date.now());
        console.log('testTimeOut execute time:', time);
        console.log('testTimeOut end time:', Date.now());
    } catch (err) {
        console.log(err);
    }
}

async function testSetImmediate() {
    try {
        console.log('testSetImmediate start time:', Date.now());
        const time = await setImmediate(Date.now());
        console.log('testSetImmediate execute time:', time);
        console.log('testSetImmediate end time:', Date.now());
    } catch (err) {
        console.log(err);
    }
}

testTimeOut().then(console.log);
testSetImmediate().then(console.log);
