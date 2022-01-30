const { setTimeout } = require('timers/promises');

async function myPromise(delay) {
  try {
    console.time('time');
    await setTimeout(delay);
    console.timeEnd('time');
    return new Promise((resolve) => {
      resolve({
        data: `The data from ${delay}`,
      });
    });
  } catch (err) {
    console.log(err);
  }
}

myPromise(500).then(console.log).catch(console.error);
