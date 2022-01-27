let a = 5;

console.log('start'); // 1

setTimeout(() => {
    console.log('A2', a); // 5
    a = 10;
}, 0);

const p = new Promise((resolve, reject) => {
    console.log('A1', a); // 2
    a = 25;
    resolve();
});

p.then(() => {
    console.log('text'); // 4
});

console.log('end'); // 3
/**
 * start
 * A1 5
 * end
 * text
 * setTimeout
 * A2 25
 */
