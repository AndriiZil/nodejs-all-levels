setTimeout(() => {
    console.log('timeout2');
}, 0);

setImmediate(() => {
    console.log('immediate2');
});

/**
     timeout2
     immediate2
 */

/**
     immediate2
     timeout2
 */
