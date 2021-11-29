// буферы представляют собой пространства фиксированной длины в памяти, хранящие бинарные данные

const firstBuf = Buffer.alloc(1024);
console.log(firstBuf); // 1 kb buffer // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >

const filledBuf = Buffer.alloc(1024, 1);

console.log('filledBuf', filledBuf); // <Buffer 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 ... >

// New Buffer ascii 5 byte
const asciiBuf = Buffer.alloc(5, 'a', 'ascii');
/**
 *   ASCII, представленная как ascii
     UTF-8, представленная как utf-8 или utf8
     UTF-16, представленная как utf-16le или utf16le
     UCS-2, представленная как ucs-2 или ucs2
     Base64, представленная как base64
     Hexadecimal, представленная как hex
     ISO/IEC 8859-1, представленная как latin1 или binary
 */

const stringBuf = Buffer.from('My name is Paul');
console.log('stringBuf', stringBuf); // <Buffer 4d 79 20 6e 61 6d 65 20 69 73 20 50 61 75 6c>

const asciiCopy = Buffer.from(asciiBuf);
console.log('asciiCopy', asciiCopy); // <Buffer 61 61 61 61 61>

// ---------------------- Reading from Buffer ----------------------------

const hiBuf = Buffer.from('Hi!');
console.log('hiBuf', hiBuf); // hiBuf <Buffer 48 69 21>
console.log(hiBuf[0]); // 72 / Целое число 72 соответствует представлению UTF-8 для буквы H

console.log(hiBuf[1]); // 105 / REPL возвращает 105, что представляет собой строчную букву i

console.log(hiBuf[2]); // 33

console.log(hiBuf[3]); // undefined

console.log(hiBuf.toString()); // Hi!

// ------------------------- New Buffer --------------------------------

const tenZeroes = Buffer.alloc(10);

console.log('tenZeroes', tenZeroes.toString()); //

console.log(hiBuf.toString('hex')); // 486921 // это шестнадцатеричное представление байтов, представляющих строку Hi!

console.log(hiBuf.toJSON()); // { type: 'Buffer', data: [ 72, 105, 33 ] }

console.log('tenZeroes2', tenZeroes.toString('hex')); // 00000000000000000000

console.log(tenZeroes.toJSON()); // { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] }

// ------------------------- Changing ---------------------------------

hiBuf[1] = 'e';

console.log('Changed 1:', hiBuf.toString('utf-8')); // H!

hiBuf[1] = 101;

console.log('Changed 2:', hiBuf.toString('utf-8')); // He!

hiBuf[3] = 111;

console.log('Changed 3:', hiBuf.toString('utf-8')); // He!

// ---------------------- Changing with write --------------------------

hiBuf.write('Hi!');

console.log(hiBuf.toString()); // Hi!

const petBuf = Buffer.alloc(3);

petBuf.write('Cats');

console.log(petBuf.toString()); // Cat

const petBuf2 = Buffer.alloc(4);

petBuf2.write('Cats');

petBuf2.write('Hi');

console.log(petBuf2.toString()); // Hits

// -------------------------- Copy ------------------------------------

const wordsBuf = Buffer.from('Banana Nananana');
const catchphraseBuf = Buffer.from('Not sure Turtle!');

console.log(wordsBuf.copy(catchphraseBuf)); // 15 // было записано 15 байтов

console.log(catchphraseBuf.toString()); // 'Banana Nananana!'

catchphraseBuf.write('Not sure Turtle!');

console.log(wordsBuf.copy(catchphraseBuf, 0, 7, wordsBuf.length)); // 8 byte

console.log(catchphraseBuf.toString()); // Nananana Turtle!
