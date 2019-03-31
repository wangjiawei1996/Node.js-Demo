var http = require('http')
var ejs = require('ejs')
var app = require('./model/express-route')

http.createServer(app).listen(3000)

app.get('/login', function(req, res) {
  console.log('login')
  ejs.renderFile('views/form.ejs',{},function(err, data) {
    res.end(data)
  })
  res.end('login')
})
app.post('/dologin', function(req,res) {
  console.log(req.body)
  res.send("<script>alert('登录成功');history.back();</script>")
})
app.get('register', function(req, res) {
  console.log('register')
  res.send('register')
})