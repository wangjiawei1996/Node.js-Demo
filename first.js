var http = require('http');

/*
 req获取url信息 
 res浏览器返回相应的信息
*/
http.createServer(function(req,res){
	//发送HTTP头部
	//HTTP状态值：200 ：OK
	//设置头部 状态码是200 文件类型html 字符集类型utf-8
  res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})
  res.write('node.js');
  res.end(); //结束相应
	
}).listen(8001)