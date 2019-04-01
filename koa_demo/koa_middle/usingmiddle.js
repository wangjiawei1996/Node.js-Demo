var Koa = require('koa')
var Router = require('koa-router')
var app = new Koa()
var router = new Router()
app.use(async(ctx, next) => {
  console.log(new Date())
  await next()
})
router.get('/',async(ctx) => {
  ctx.body = '这是一个首页'
})
router.get('/news',async(ctx, next) => {
  console.log('这是一个新闻网页')
  await next()
})
router.get('/news',async(ctx) => {
  ctx.body = '这是一个新闻网页'
})
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)