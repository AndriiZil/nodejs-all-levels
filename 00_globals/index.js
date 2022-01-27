console.log(console);
/**
 * log: [Function: log],
 *   warn: [Function: warn],
 *   dir: [Function: dir],
 *   time: [Function: time],
 *   timeEnd: [Function: timeEnd],
 *   timeLog: [Function: timeLog],
 *   trace: [Function: trace],
 *   assert: [Function: assert],
 *   clear: [Function: clear],
 *   count: [Function: count],
 *   countReset: [Function: countReset],
 *   group: [Function: group],
 *   groupEnd: [Function: groupEnd],
 *   table: [Function: table],
 *   debug: [Function: debug],
 *   info: [Function: info],
 *   dirxml: [Function: dirxml],
 *   error: [Function: error],
 *   groupCollapsed: [Function: groupCollapsed],
 *   Console: [Function: Console],
 *   profile: [Function: profile],
 *   profileEnd: [Function: profileEnd],
 *   timeStamp: [Function: timeStamp],
 *   context: [Function: context]
 */

console.log(Buffer.alloc(10)); // <Buffer 00 00 00 00 00 00 00 00 00 00>

console.log(__dirname); // /home/andrii/Documents/refresh-js/node-js-all-levels/00_globals

console.log(__filename); // /home/andrii/Documents/refresh-js/node-js-all-levels/00_globals/index.js

console.log(exports);

console.log(module);
/**
 * Module {
 *   id: '.',
 *   path: '/home/andrii/Documents/refresh-js/node-js-all-levels/00_globals',
 *   exports: {},
 *   filename: '/home/andrii/Documents/refresh-js/node-js-all-levels/00_globals/index.js',
 *   loaded: false,
 *   children: [],
 *   paths: [
 *     '/home/andrii/Documents/refresh-js/node-js-all-levels/00_globals/node_modules',
 *     '/home/andrii/Documents/refresh-js/node-js-all-levels/node_modules',
 *     '/home/andrii/Documents/refresh-js/node_modules',
 *     '/home/andrii/Documents/node_modules',
 *     '/home/andrii/node_modules',
 *     '/home/node_modules',
 *     '/node_modules'
 *   ]
 * }
 */

console.log(URL); // [class URL]

console.log(process); // ***

setTimeout(() => console.log('TimeOut'), 1000);
setImmediate(() => console.log('immediate'));
const interval = setInterval(() => console.log('interval'));

console.log(performance);

clearInterval(interval);
/**
 * Performance {
 *   nodeTiming: PerformanceNodeTiming {
 *     name: 'node',
 *     entryType: 'node',
 *     startTime: 0,
 *     duration: 34.9350949972868,
 *     nodeStart: 0.12590599805116653,
 *     v8Start: 0.8794549964368343,
 *     bootstrapComplete: 21.13347899913788,
 *     environment: 11.252829998731613,
 *     loopStart: -1,
 *     loopExit: -1,
 *     idleTime: 0
 *   },
 *   timeOrigin: 1639317607608.641
 * }
 *
 */
