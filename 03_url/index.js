const url = require('url');

const myURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL); /*
{
  protocol: 'https:',
  slashes: true,
  auth: 'user:pass',
  host: 'sub.example.com:8080',
  port: '8080',
  hostname: 'sub.example.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
}
*/

const myURL2 = url.parse('https://www.integralist.co.uk/posts/cognito/#authentication-vs-authorization');

console.log(myURL2); /*
  {
      protocol: 'https:',
      slashes: true,
      auth: null,
      host: 'www.integralist.co.uk',
      port: null,
      hostname: 'www.integralist.co.uk',
      hash: '#authentication-vs-authorization',
      search: null,
      query: null,
      pathname: '/posts/cognito/',
      path: '/posts/cognito/',
      href: 'https://www.integralist.co.uk/posts/cognito/#authentication-vs-authorization'
  }
*/
