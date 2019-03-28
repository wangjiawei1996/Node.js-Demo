exports.getMime = function(fs, extname) {
  fs.readFile('./mime.json', function(err, data) {
    if (err) {
      console.log('mime.json 文件不存在')
      return false
    }
    // console.log(data.toString())
    var Mimes = JSON.parse(data.toString())
    // console.log(Mimes[extname])
    return Mimes[extname || 'text/html']
  })
}