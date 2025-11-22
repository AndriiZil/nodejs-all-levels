import { setTimeout, setImmediate } from 'timers/promises';

async function logTimers() {
  console.log('Do something');

  await setTimeout(1000);

  const res = await setImmediate('Test');

  console.log('Do something else', { res });
}


logTimers()
