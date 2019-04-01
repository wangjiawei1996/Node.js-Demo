var Koa = require('koa')
var router = require('koa-router')()
var app = new Koa()
router.get('/', async(ctx) => {
  console.log(ctx.query)
  console.log(ctx.querystring)
  console.log(ctx.request)
  ctx.body='首页'
})
router.get('/news/:aid', async(ctx) => {
  console.log(ctx.params)
  ctx.body="新闻网页"
})
app.use(router.routes())
app.listen(3002)