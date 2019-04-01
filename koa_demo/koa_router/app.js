var Koa = require('koa')
var Router = require('koa-router')
var app = new Koa()
var router = new Router()
router.get('/',async(ctx) => {
  ctx.body = '这是一个首页'
}).get('/news',async(ctx) => {
  ctx.body = '这是一个新闻网页'
})
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)