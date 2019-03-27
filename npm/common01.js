var sd = require('silly-datetime')
var http = require('http')
var app = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})
  
  var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  res.write('你好 node.js' + d)
  res.end()
})
app.listen(8003, '127.0.0.1')