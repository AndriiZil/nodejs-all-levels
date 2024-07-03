console.log(1); // 1

setTimeout(() => {
  console.log(2); // 3
}, 0);

console.log(3); // 2

/**
 * 1
 * 3
 * 2
 */
