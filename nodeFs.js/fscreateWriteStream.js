var fs = require('fs');
var data = '我是从数据库获取的数据，我要保存起来\n';

//创建一个可以写入的流，写入到文件onput.txt中
var writerStream = fs.createWriteStream('onput.txt')

writerStream.write(data,'utf8');

//标记写入完成
writerStream.end();

writerStream.on('finish',function() {
    console.log('写入完成');
})

//写入失败
writerStream.on('error',function() {
    console.log('写入失败');
})