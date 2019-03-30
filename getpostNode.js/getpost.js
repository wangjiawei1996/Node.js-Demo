var url = require('url')
var http = require('http')
var ejs = require('ejs')
var fs = require('fs')
http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})
  var method = req.method.toLowerCase()
  console.log(method)
  var pathname = url.parse(req.url, true).pathname

  if (pathname == '/login') {
    ejs.renderFile('views/form.ejs',{},function(err, data){
      res.end(data)
    })
  } else if (pathname=='/dologin' && method =='get'){
    console.log(url.parse(req.url, true).query)
    res.end('dologin')
  } else if (pathname=='/dologin' && method == 'post'){
    var postStr = ''
    res.on('data', function(chunk) {
      postStr += chunk
    })
    res.on('end', function(err, chunk) {
      console.log(postStr)
      fs.appendFile('login.txt',postStr+'\n',function(err){
        if (err) {
          console.log(err)
          return
        }
        console.log('写入文件成功')
      })
      res.end("<script>alert('登录成功');history.back();</script>")
    })
  } else {
    ejs.renderFile('views/index.ejs', {}, function(err, data) {
      res.end(data)
    })
  }
}).listen(8001)