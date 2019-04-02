var Koa = require('koa')
var router = require('koa-router')()
var views = require('koa-views')
var bodyParser = require('koa-bodyparser')
var app = new Koa()
app.use(views('views', {
  extension:'ejs' /*引入ejs模板引擎*/
}))
app.use(bodyParser())
router.get('/',async(ctx) => {
  await ctx.render('index')
})
router.post('/doAdd',async(ctx) => {
  ctx.body = ctx.request.body
})
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)