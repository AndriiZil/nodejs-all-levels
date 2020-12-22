const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.google.com/?page=3&limit=10&category=nodejs&category=javascript');

console.log(parsedUrl);
/*
* {
      protocol: 'http:',
      slashes: true,
      auth: null,
      host: 'www.google.com',
      port: null,
      hostname: 'www.google.com',
      hash: null,
      search: '?page=3&limit=10&category=nodejs&category=javascript',
      query: 'page=3&limit=10&category=nodejs&category=javascript',
      pathname: '/',
      path: '/?page=3&limit=10&category=nodejs&category=javascript',
      href: 'http://www.google.com/?page=3&limit=10&category=nodejs&category=javascript'
  }
* */

const query = querystring.parse(parsedUrl.query);

console.log(query); // { page: '3', limit: '10', category: [ 'nodejs', 'javascript' ] }

console.log(querystring.stringify(query)); // page=3&limit=10&category=nodejs&category=javascript
