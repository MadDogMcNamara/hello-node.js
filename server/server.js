
var http = require('http');
var port = process.env.PORT || 8124;

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello 2348923478907823409237890234898234790\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:' + port + '/');
