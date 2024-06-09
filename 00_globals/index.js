console.log('console', console);
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

const ac = new AbortController();
console.log({ ac }); // { ac: AbortController { signal: AbortSignal { aborted: false } } }

console.log(Buffer.alloc(10)); // <Buffer 00 00 00 00 00 00 00 00 00 00>

console.log('__dirname', __dirname); // /home/andrii/Documents/refresh-js/node-js-all-levels/00_globals

console.log('__filename', __filename); // /home/andrii/Documents/refresh-js/node-js-all-levels/00_globals/01_unhandled_rejections.js

console.log('exports', exports); // {}

console.log('module', module);
/**
 * module {
 *   id: '.',
 *   path: '/Users/adnriizilnyk/Documents/github-learning/nodejs-all-levels/00_globals',
 *   exports: {},
 *   filename: '/Users/adnriizilnyk/Documents/github-learning/nodejs-all-levels/00_globals/index.js',
 *   loaded: false,
 *   children: [],
 *   paths: [
 *     '/Users/adnriizilnyk/Documents/github-learning/nodejs-all-levels/00_globals/node_modules',
 *     '/Users/adnriizilnyk/Documents/github-learning/nodejs-all-levels/node_modules',
 *     '/Users/adnriizilnyk/Documents/github-learning/node_modules',
 *     '/Users/adnriizilnyk/Documents/node_modules',
 *     '/Users/adnriizilnyk/node_modules',
 *     '/Users/node_modules',
 *     '/node_modules'
 *   ]
 * }
 */

console.log(URL);
/**
 * [class URL] {
 *   canParse: [Function: canParse],
 *   createObjectURL: [Function: createObjectURL],
 *   revokeObjectURL: [Function: revokeObjectURL]
 * }
 */

console.log(process); // ***

setTimeout(() => console.log('TimeOut'), 1000);
setImmediate(() => console.log('immediate'));
const interval = setInterval(() => console.log('interval'));

console.log('performance', performance);
/**
 *  performance Performance {
 *   nodeTiming: PerformanceNodeTiming {
 *     name: 'node',
 *     entryType: 'node',
 *     startTime: 0,
 *     duration: 34.60271000023931,
 *     nodeStart: 0.13702800031751394,
 *     v8Start: 0.8627310004085302,
 *     bootstrapComplete: 21.309073000214994,
 *     environment: 11.460630999878049,
 *     loopStart: -1,
 *     loopExit: -1,
 *     idleTime: 0
 *   },
 *   timeOrigin: 1644651082222.904
 * }
 */

clearInterval(interval);
