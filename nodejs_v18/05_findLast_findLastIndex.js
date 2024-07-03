'use strict';

const inputArray = [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }, { v: 5 }];

console.log(inputArray.find((element) => element.v % 2 === 0)); // { v: 2 }
console.log(inputArray.find((element) => element.v % 7 === 0)); // undefined
console.log(inputArray.findIndex((element) => element.v % 2 === 0)); // 1
console.log(inputArray.findIndex((element) => element.v % 7 === 0)); // -1
console.log(inputArray.findLast((element) => element.v % 2 === 0)); // { v: 4 }
console.log(inputArray.findLast((element) => element.v % 7 === 0)); // undefined
console.log(inputArray.findLastIndex((element) => element.v % 2 === 0)); // 3
console.log(inputArray.findLastIndex((element) => element.v % 7 === 0)); // -1
