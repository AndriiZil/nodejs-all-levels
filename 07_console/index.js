console.count('default') // default: 1
console.count('default') // default: 2
console.count('default') // default: 3

console.count('asd') // asd: 1
console.count('qwe') // qwe: 1
console.count('asd') // asd: 2

console.error('some error'); // some error (red color)

console.info('Info console') // Info console

const obj = [
    { id: 1, name: 'Igor', age: 40 },
    { id: 2, name: 'Ann', age: 32 },
    { id: 3, name: 'Emma', age: 33 },
    { id: 4, name: 'Liza', age: 27 },
];

console.table(obj);

console.time('100000-elements');
for (let i = 0; i < 100000; i++) {} // 1.674ms
console.timeEnd('100000-elements');

console.trace('Show me here') /*
   Trace: Show me here
    at Object.<anonymous> (/home/andrii/Documents/github/nodejs-all-levels/07_console/files.js:26:9)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
*/

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

// ------------------------------------------

const code = 5;
console.error('error #%d', code); // error #5
