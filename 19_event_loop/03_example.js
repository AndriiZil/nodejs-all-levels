console.log(1); // 1

setTimeout(() => {
    console.log('setTimeout 1000');
}, 1000); // 3

setTimeout(() => {
    console.log('setTimeout 1500');
}, 1500); // 4

console.log(2); // 2

/**
 * 1
   2
   setTimeout 1000
   setTimeout 1500
 *
 */
