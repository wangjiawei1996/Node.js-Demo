var fs = require('fs');

fs.stat('html',function(err,state){  //stat这个方法检测文件的类型
  if(err){
		console.log(err);
		return false
	}

	console.log('文件' + stats.isFile());
	console.log('目录' + state.isDirectory());
})

//fs.mkdir 创建目录
fs.mkdir('css', function(err){
	if(err){
		console.log(err)
		return false
	}
	console.log('创建目录完成')
})

//fs.writeFile 创建写入文件
fs.writeFile('t.txt','你好node.js',function(err){
	if(err){
		console.log(err)
		return false
	}
	console.log('写入成功')
})