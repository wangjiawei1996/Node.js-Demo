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

//fs.appendFile 追加文件
fs.appendFile('t1.txt','这是写入的内容',function(err){
	if (err){
		console.log(err);
		return false
	}
	console.log('写入成功')
})

//fs.readFile 读取文件
fs.readFile('index.txt',function(err,data){
	if (err) {
		console.log(err)
		return false
	}
	console.log(data.toString)
})

//fs.readdir 读取目录
fs.readdir('html',function(err,data){
	if (err) {
		console.log(err)
		return false
	}
	console.log(data)
})

//fs.rename 重命名
//1.改名
fs.rename('html/index.html','html/news.html',function(err){
	if (err) {
		console.log(err);
		return false;
	}
	console.log('修改名字成功')
})
//2.剪切文件
fs.rename('html/style.css','html/css/basic.css',function(err){
	if (err) {
		console.log(err);
		return false;
	}
	console.log('剪切名字成功')
})

//fs.rmdir 删除目录
fs.rmdir('js',function(err){
	if (err) {
		console.log(err);
		return false;
	}
	console.log('删除目录成功')
})

//fs.unlink 删除文件 
fs.unlink('index.txt',function(err){
	if (err) {
		console.log(err);
		return false;
	}
	console.log('删除文件成功')
})