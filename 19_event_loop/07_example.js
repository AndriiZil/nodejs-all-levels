console.log('Start script'); // 1

const interval = setInterval(() => {

    console.log('setInterval'); // 5 // 9 --- 2 times
    
});

setTimeout(() => {
    console.log('setTimeout 1'); // 6

    Promise.resolve().then(() => {

        console.log('promise 3'); // 7

    }).then(() => {

        console.log('promise 4'); // 8

    }).then(() => {
        setTimeout(() => {

            console.log('setTimeout 2'); // 10

            Promise.resolve().then(() => {
                console.log('promise 5'); // 11
            }).then(() => {
                console.log('promise 6'); // 12
            }).then(() => {
                clearInterval(interval);
            });

        }, 0)
    })
}, 0);

Promise.resolve().then(() => {

    console.log('promise 1'); // 3

}).then(() => {

    console.log('promise 2'); // 4

});

console.log('End Script'); // 2

/*
*   Start script
    End Script
    promise 1
    promise 2
    setInterval
    setTimeout 1
    promise 3
    promise 4
    setInterval
    setTimeout 2
    promise 5
    promise 6
* */

