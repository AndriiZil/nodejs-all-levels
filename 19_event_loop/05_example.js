console.log(1);

setTimeout(() => {
    console.log(4);
}, 0);

Promise.resolve()
    .then(() => console.log(3));

console.log(2);

/**
 * 1
 * 2
 * 3
 * 4
 */
