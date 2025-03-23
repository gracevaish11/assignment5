var http = require('http');

var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello My name is Vaishnavi Rajput!\n');
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000...');
