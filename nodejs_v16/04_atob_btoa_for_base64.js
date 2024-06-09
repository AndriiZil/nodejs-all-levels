const base64 = atob('foobar');
console.log(base64); // ~

const initialString = btoa(base64);
console.log(initialString); // foobag==
