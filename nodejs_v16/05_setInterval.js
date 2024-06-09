const { setInterval } = require('timers/promises');

let count = 0;

async function test() {
  console.log('setInterval start time:', Date.now());
  for await (const startTime of setInterval(100, Date.now())) {
    const now = Date.now();
    console.log('count =', count++, now);
    if (now - startTime > 1000) break;
  }
  console.log('setInterval end time:', Date.now());
}

test().then(console.log);
