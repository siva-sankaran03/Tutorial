var http = require('http');
var dt = require('./date');
http.createServer(function (req, res){
    res.write("the date and time are currently : "+ ' text/html')
    res.writeHead(200, {'content-Type' : 'text/html'});
    res.end('Hello World This is Siva sankaran!');
}).listen(8080);