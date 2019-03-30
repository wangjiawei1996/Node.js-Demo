var http = require('http')

var url = require('url')

var ejs = require('ejs')
http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})
  var pathname = url.parse(req.url).pathname

  if (pathname == '/login') {
    var data = '你好我是后台数据管理员'
    var list = [
      '1111',
      '2222',
      '3333'
    ]
    var h = "<h2>这是一个h2</h2>"
    ejs.renderFile('views/login.ejs', {msg: data, list:list, h: h}, function(err, data) {
      res.end(data)
    })
  } else {
    res.end('index')
  }
}).listen(8001)