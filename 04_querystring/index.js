const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.google.com/?page=3&limit=10&category=nodejs&category=javascript');

const query = querystring.parse(parsedUrl.query);

console.log(query); // { page: '3', limit: '10', category: [ 'nodejs', 'javascript' ] }

console.log(querystring.stringify(query)); // page=3&limit=10&category=nodejs&category=javascript