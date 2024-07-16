'use strict';

/**
 * setImmediate() is designed to execute a script once the current poll phase completes.
 * setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.
 */

setImmediate(() => console.log('setImmediate'));

setTimeout(() => console.log('setTimeout'), 0);

/**
 * setImmediate
 * setTimeout
 */

/**
 * setTimeout
 * setImmediate
 */
