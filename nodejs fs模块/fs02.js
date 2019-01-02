//判断服务器上有没有upload,若没有创建这个目录
var fs = require('fs');
fs.stat('upload',function(err,stats){
  if (err) {
		fs.mkdir('upload', function(error){
			if (error) {
				console.log(error)
				return false
			}
			console.log('创建成功')
		})

	}else{
		console.log('目录已经存在');
		console.log(stats.isDirecyory());
	}
})