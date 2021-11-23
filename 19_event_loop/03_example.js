console.log(1);

setTimeout(() => {
    console.log('setTimeout 1000');
}, 1000);

setTimeout(() => {
    console.log('setTimeout 1500');
}, 1500);

console.log(2);

/**
 * 1
   2
   setTimeout 1000
   setTimeout 1500
 *
 */
