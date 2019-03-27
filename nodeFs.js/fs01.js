var fs = require('fs')

// fs.stat('fs02.js', function(err,stats) {
// 	if (err) {
//     console.log(err)
//     return false
//   }
//   console.log('文件' + stats.isFile())
//   console.log('目录' + stats.isDirectory()) 
// })

//创建目录
// fs.mkdir('css', function(err) {
//   if (err) {
//     console.log(err)
//     return false
//   }
//   console.log('创建目录成功')
// })

//创建写入文件

// fs.writeFile('t.txt', '你好node,js', function(err) {
//   if (err) {
//     console.log(err)
//     return false
//   }
//   console.log('创建文件成功')
// })

//fs.appendFile 追加文件

//fs.readFile 读取文件

// fs.readFile('t.txt', function(err, data) {
//   if (err) {
//     console.log(err)
//     return false
//   }
//   console.log(data.toString())
// })

//fs.readdir读取目录
// fs.readdir('html', function(err, data){
//   if (err) {
//     console.log(err)
//     return false
//   }
//   console.log(data)
// })

//fs.rename重命名
fs.rename('html/index.html', 'html/news.html', function(err) {
  if (err) {
    console.log(err)
    return false
  }
  console.log('修改成功')
})