const arr = [];

setInterval(() => {
  arr.push(new Array(1000000).fill('x'));
}, 1000);
