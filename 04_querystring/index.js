const querystring = require('querystring');

console.log(querystring.parse('foo=bar&abc=xyz&abc=123')); // { foo: 'bar', abc: [ 'xyz', '123' ] }

console.log(querystring.stringify({foo: 'bar', baz: ['qux', 'quux'], corge: ''})); // foo=bar&baz=qux&baz=quux&corge=

console.log(querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':')); // foo:bar;baz:qux
