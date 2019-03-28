var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')
var mimeModel = require('./model/getmimefromFile')
console.log(mimeModel.getMime(fs, '.zip'))

// http.createServer(function(req, res) {
  
//   var pathname = url.parse(req.url).pathname
//   if (pathname = '/') {
//     pathname = '/index.html'
//   }
//   var extname = path.extname(pathname)
//   if (pathname != '/favicon.ico'){
//     console.log(pathname)
//     fs.readFile('static/' + pathname,function(err, data) {
//       if (err) {
//         console.log('404')
//         fs.readFile('static/ximgs.html', function(error, data404) {
//           if (error) {
//             console.log(error)
//           }
//           res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"})
//           res.write(data404)
//           res.end();
//         })
//       } else {
//         var mime = mimeModel.getMime(extname)
//         res.writeHead(200,{"Content-Type":""+mime+";charset=UTF-8"})
//         res.write(data)
//         res.end();
//       }
//     })
//   }
//   console.log(pathname)
// }).listen(8002)