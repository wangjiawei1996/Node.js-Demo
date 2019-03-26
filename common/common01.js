var http = require('http')
var config = require('./config.js')
var app = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})

  res.write('你好 node.js')
  console.log(config.str)
  res.end()
})
app.listen(8003, '127.0.0.1')