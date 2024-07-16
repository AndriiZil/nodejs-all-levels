'use strict';

const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start'); // 1

  setImmediate(baz);

  new Promise((resolve, reject) => {
    resolve('bar'); // 3
  }).then((resolve) => {
    console.log(resolve); // 5
    process.nextTick(zoo); // 4
  });

  process.nextTick(foo); // 2
};

start();
