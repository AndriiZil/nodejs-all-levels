let x = 0;
let y = 1;

console.log((x &&= 0));
console.log((x &&= 1));
console.log((y &&= 1));
console.log((y &&= 0));

console.log('----------------------------------------------');
// -----------------------------------------------------------

console.log((x ||= 0)); // 0
console.log((x ||= 1)); // 1
console.log((y ||= 1)); // 1
console.log((y ||= 0)); // 1

console.log('----------------------------------------------');
// ------------------------------------------------------------

let w = undefined;
let e = '';

console.log((w ??= null)); // null
console.log((w ??= 'a value')); // a value
console.log((e ??= undefined)); // ''
console.log((e ??= null)); // ''
