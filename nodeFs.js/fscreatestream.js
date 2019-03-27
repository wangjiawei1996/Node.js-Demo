const fs = require('fs');

var readStream = fs.createReadStream('input.txt');
var str=''; /*保存数据 */
var count=0; /*次数*/
readStream.on('data',function(chunk){
	str+=chunk;
	count++;
})
//读取完成
readStream.on('end',function(chunk){
  console.log(etr)
})
//读取失败
readStream.on('error',function(chunerr){
	console.log(count)
  console.log(err)
})