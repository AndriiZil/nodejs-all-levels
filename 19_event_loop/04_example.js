console.log(1);

setTimeout(() => {
    console.log('setTimeout 3000');
}, 3000);

setTimeout(() => {
    console.log('setTimeout 1500');
}, 1500);

setTimeout(() => {
    console.log('setTimeout 0');
}, 0);

for (const value of ['A', 'B']) {
    console.log(value);
}

function two() {
    console.log(2);
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
