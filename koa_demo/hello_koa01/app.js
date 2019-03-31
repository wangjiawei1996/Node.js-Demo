var koa = require('koa')
var app = new koa()

app.use( async (ctx) => {
  ctx.body = '你好 koa2.x'
})
app.listen(3000)