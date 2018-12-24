const queryStringUtil = require('querystring-util');
 
const qsu = queryStringUtil('http://m.sm.cn/s?q=阿里巴巴&uc=1');
 
const qs = qsu.get('uc');

console.log(qs)