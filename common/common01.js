var http = require('http');

var config = require('./config.js')

var app = http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
  res.write('Hello Node.js')
  res.end();
})
app.listen(8003,'127.0.0.1')