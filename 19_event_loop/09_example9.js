const f = (a) => console.log(a);

console.log('1'); // 1
f('2'); // 2

const promise = new Promise((resolve, reject) => {
    console.log('3'); // 3
    f('4'); // 4
    resolve();
    f('5'); // 5
}).then(() => {
    f('6'); // 8
    console.log('7'); // 9
});

f('8'); // 6
console.log('9'); // 7

/**
 *   1
     2
     3
     4
     5
     8
     9
     6
     7
 */
