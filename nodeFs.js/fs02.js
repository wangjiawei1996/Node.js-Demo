var fs = require('fs')
//判断服务器上有没有upload,若没有创建这个目录
// fs.stat('upload', function(err, stats) {
//   if (err) {
//     console.log(err)
//     return false
//   }
//   console.log(stats.isDirectory())
// })
// fs.stat('upload', function(err, stats) {
//   if (err) {
//     fs.mkdir('upload', function(error) {
//       if (error) {
//         console.log(error)
//         return false
//       }
//       console.log('创建成功')
//     })
//   } else {
//     console.log('目录已经存在')
//     console.log(stats.isDirectory())
//   }
// })


//找出html下的所有目录，并打印出来
var fs = require('fs');
var filesArr=[];
fs.readdir('html',function(err,files){
	if (err){
		console.log(error)
	}else{
		console.log(files);
		(
			function getFile(i){
				if(i==files.length){
					console.log(filesArr);
					return false;
				} 
				fs.stat('html/'+ files[i],function(error,stats){
					if( stats.isDirectory()){
						filesArr.push(files[i]);
					}
					//递归操作
					getFile(i+1); 
				})
			})(0)
	}
})