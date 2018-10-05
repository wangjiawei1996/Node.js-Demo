querystring-util
---

### install

```bash
npm install querystring-util --save
```

### use case

```js
const queryStringUtil = require('querystring-util');

const qsu = queryStringUtil('http://m.sm.cn/s?q=阿里巴巴');

qsu.get('q'); // 阿里巴巴

qsu.set('other', 'test').toString() // http://m.sm.cn/s?q=阿里巴巴&other=test

qsu.set('q', '马云').toString() // http://m.sm.cn/s?q=马云&other=test

qsu.set('test', undefined).toString() // http://m.sm.cn/s?q=马云&other=test

qsu.del('other').toString() // http://m.sm.cn/s?q=马云


```

>Noice: Support chained operation: qsu.set('a', 'a').set('b', 'b').set('c', 'c')...

