var url = require('url')
function changeRes(res) {
  res.send = function(data) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.end(data)
  }
}
var Server = function() {
  var G = this
  this._get={}
  this._post={}
  var app = function(req, res) {
    changeRes(res)
    var pathname = url.parse(req.url).pathname
    if (!pathname.endsWith('/')){
      pathname = pathname + '/'
    }
    var method = req.method.toLowerCase()
    if (G['_' + method][pathname]) {
      if (method=='post') {
        var postStr = ''
        req.on('data', function(chunk) {
          postStr += chunk
        })
        req.on('end',function(err,chunk) {
          //res.end(postStr);
          req.body = postStr
          G['_' + method][pathname](req, res)
        })
      } else {
        G['_' + method][pathname](req, res)
      }
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
    G._get[string] = callback
  }
  app.post = function(string, callback) {
    if (!string.endsWith('/')){
      string = string + '/'
    }
    if (!string.startsWith('/')) {
      string = '/' + string
    }
    G._post[string] = callback
  }
  return app
}

module.exports = Server()