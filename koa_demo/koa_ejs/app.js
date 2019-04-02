var Koa = require('koa')
var router = require('koa-router')()
var views = require('koa-views')
var app = new Koa()
app.use(views('views', {
  extension:'ejs' /*引入ejs模板引擎*/
}))
app.use(async(ctx, next) => {
  ctx.state.userinfo='张三'
  await next()
})
router.get('/',async(ctx) => {
  let title = '你好ejs'
  await ctx.render('index', {
    title
  })
})
router.get('/news',async(ctx) => {
  let list = ['1111', '2222', '3333', '4444']
  let content = "<h2>这是一个h2</h2>"
  let num = 123
  await ctx.render('news', {
    list,
    content,
    num
  })
})
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)