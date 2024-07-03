const myString = 'foobar';
const regex = /(foo)(bar)/d;

const result = regex.exec(myString);

console.log(result.indices);
