const fs = require('fs')
var readStream = fs.createReadStream('t.txt')
var str = '' //保存数据
var count = 0
readStream.on('data', function(chunk) {
  str += chunk
  count++
})
//读取完成
readStream.on('end', function(chunk) {
  console.log(count)
  console.log(str)
})
//读取失败
readStream.on('error', function(err) {
  console.log(err)
})