var http = require('http')
var url = require('url')
var G = []
var app = function(req, res) {
  var pathname = url.parse(req.url).pathname
  if (!string.endsWith('/')){
    string = string + '/'
  }
  console.log(pathname)
  if (G[pathname]) {
    G[pathname](req, res)  //执行注册的方法
  } else {
    res.end('no router')
  }
}

app.get = function(string, callback) {
  if (!string.endsWith('/')){
    string = string + '/'
  }
  if (!string.startsWith('/')) {
    string = '/' + string
  }
  G[string] = callback
}
http.createServer(app).listen(3000)
app.get('login', function(req, res) {
  console.log('login')
})