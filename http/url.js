var http = require('http');

/*
 req获取url信息 
 res浏览器返回相应的信息
*/
http.createServer(function(req,res){
	//发送HTTP头部
	//HTTP状态值：200 ：OK
		//设置头部 状态码是200 文件类型html 字符集类型utf-8
		//req.url 获取浏览器url输入的信息
  // console.log(req.url) 
  // var query = url.parse(req.url, true) 第一个参数是地址 第二个参数但是true的话把get传值转化为对象
  // console.log(query)
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
  res.write('node.js');
  res.write('这是我的第一个node');
  res.end(); //结束相应
	
}).listen(8002)