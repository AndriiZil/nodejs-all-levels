const f = (a) => console.log(a);

f('1'); // 1

const promise = new Promise((resolve, reject) => {
    f('2'); // 2

    resolve();

    f('3'); // 3

}).then(() => {

    f('4'); // 5

});

f('5'); // 4
