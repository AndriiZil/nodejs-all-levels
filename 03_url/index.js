const url = require('url');

const myURL =
    url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL);

/**
 * Url {
 *   protocol: 'https:',
 *   slashes: true,
 *   auth: 'user:pass',
 *   host: 'sub.example.com:8080',
 *   port: '8080',
 *   hostname: 'sub.example.com',
 *   hash: '#hash',
 *   search: '?query=string',
 *   query: 'query=string',
 *   pathname: '/p/a/t/h',
 *   path: '/p/a/t/h?query=string',
 *   href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
 * }
 */

