'use strict';

/**
 * Why use process.nextTick()?
 * Allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event
 * loop continues. At times it's necessary to allow a callback to run after the call stack has unwound
 * but before the event loop continues.
 *
 * When we pass a function to process.nextTick(), we instruct the engine to invoke this function
 * at the end of the current operation, before the next event loop tick starts:
 *
 * A function passed to process.nextTick() is going to be executed on the current iteration of the event loop,
 * after the current operation ends. This means it will always execute before setTimeout and setImmediate.
 *
 * Calling setTimeout(() => {}, 0) will execute the function at the end of next tick, much later than when using
 * nextTick() which prioritizes the call and executes it just before the beginning of the next tick.
 *
 * process.nextTick() fires immediately on the same phase
 * setImmediate() fires on the following iteration or 'tick' of the event loop
 */

console.log('Hello => number 1');

setImmediate(() => {
  console.log('Running before the timeout => number 3');
});

setTimeout(() => {
  console.log('The timeout running last => number 4');
}, 0);

process.nextTick(() => {
  console.log('Running at next tick => number 2');
});

/**
 * Hello => number 1
 * Running at next tick => number 2
 * Running before the timeout => number 3
 * The timeout running last => number 4
 */

/**
 * Hello => number 1
 * Running at next tick => number 2
 * The timeout running last => number 4
 * Running before the timeout => number 3
 */
