var url = require('url')
var Server = function() {
  var G = this
  var app = function(req, res) {
    var pathname = url.parse(req.url).pathname
    if (!pathname.endsWith('/')){
      pathname = pathname + '/'
    }
    if (G[pathname]) {
      G[pathname](req, res)  //执行注册的方法
    } else {
      res.end('no router')
    }
    // console.log(req.url)
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
  return app
}

module.exports = Server()