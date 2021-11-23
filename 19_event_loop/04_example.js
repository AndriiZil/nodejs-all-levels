console.log(1); // 1

setTimeout(() => {
    console.log('setTimeout 3000'); // 5
}, 3000);

setTimeout(() => {
    console.log('setTimeout 1500'); // 4
}, 1500);

setTimeout(() => {
    console.log('setTimeout 0');
}, 0);

for (const value of ['A', 'B']) { // 2
    console.log(value);
}

function two() {
    console.log(2); // 3
}

two();
/**
 *   1
     A
     B
     2
     setTimeout 0
     setTimeout 1500
     setTimeout 3000
 */
