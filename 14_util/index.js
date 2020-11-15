const util = require('util');
const EventEmitter = require('events');
const { inspect } = require('util');
const fs = require('fs');

async function fn() {
    return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});

console.log(util.format('%s:%s', 'foo', 'bar', 'baz'));

console.log(util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 }));

// ============================================================================================================

function MyStream() {
    EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
    this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
    console.log(`Received data: "${data}"`);
});
stream.write('It works!'); // Received data: "It works!"

// ===========================================================

const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(inspect(obj));

// <ref *1> {
//   a: [ [Circular *1] ],
//   b: <ref *2> { inner: [Circular *2], obj: [Circular *1] }
// }

const obj2 = { a: 1 };
const obj3 = { b: 2 };
const weakSet = new WeakSet([obj2, obj3]);

console.log(inspect(weakSet, { showHidden: true })); // WeakSet { { a: 1 }, { b: 2 } }

// ===================================================================================

const stat = util.promisify(fs.stat);

async function callStat() {
    const stats = await stat('.');
    console.log(`This directory is owned by ${stats.uid}`);
}

callStat() // This directory is owned by 1000

// ===================================================================================

console.log('isAnyArrayBuffer', util.types.isAnyArrayBuffer(new ArrayBuffer()));  // Returns true
console.log('isAnyArrayBuffer', util.types.isAnyArrayBuffer(new SharedArrayBuffer()));  // Returns true
console.log('isArrayBufferView', util.types.isArrayBufferView(Buffer.from('hello world'))); // true
console.log('isArrayBuffer', util.types.isArrayBuffer(new ArrayBuffer())); // Returns true
console.log('isAsyncFunction', util.types.isAsyncFunction(async function foo() {
}));  // Returns true
console.log('isBooleanObject', util.types.isBooleanObject(new Boolean(false))); // Returns true
console.log('isBooleanObject', util.types.isBooleanObject(new Boolean(true)));  // Returns true
console.log('isDate', util.types.isDate(new Date()));  // Returns true
console.log('isGeneratorFunction', util.types.isGeneratorFunction(function* foo() {
}));  // Returns true
console.log('isMap', util.types.isMap(new Map()));  // Returns true
console.log('isPromise', util.types.isPromise(Promise.resolve(42)));  // Returns true
const target = {};
const proxy = new Proxy(target, {});
console.log('isProxy', util.types.isProxy(proxy));  // Returns true
console.log('isRegExp', util.types.isRegExp(new RegExp('abc')));  // Returns true
console.log('isSet', util.types.isSet(new Set()));  // Returns true
console.log('isWeakMap', util.types.isWeakMap(new WeakMap()));  // Returns true
console.log('isWeakSet', util.types.isWeakSet(new WeakSet()));  // Returns true
console.log('isNativeError', util.types.isNativeError(new Error()));  // Returns true
