var Koa = require('koa')
var router = require('koa-router')()
var views = require('koa-views')
var common = require('./module/common')
var app = new Koa()
app.use(views('views', {
  extension:'ejs' /*引入ejs模板引擎*/
}))
router.get('/',async(ctx) => {
  await ctx.render('index')
})
router.post('/doAdd',async(ctx) => {
  var data = await common.getPostData(ctx)
  console.log(data)
  ctx.body = data
})
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)