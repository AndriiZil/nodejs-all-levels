(function async () {
    try {
        console.log('start');

        Promise.resolve('success')
            .then(console.log)

        setImmediate(() => console.log('setImmediate'));

        setTimeout(() => console.log('setTimeout'), 0);

        console.log('end');
    } catch (err) {
        console.log(err);
    }
})()

/**
 * start
 * end
 * success
 * setTimeout
 * setImmediate
 */

/**
 * start
 * end
 * success
 * setImmediate
 * setTimeout
 */
