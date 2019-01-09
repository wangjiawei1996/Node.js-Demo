export.getMime = function(fs,extname){
  fs.readFile('./mime.json',function(err,data){
		if (err){
			console.log('mime.json文件不存在')
			return false
		}
		console.log(data)
	})
}