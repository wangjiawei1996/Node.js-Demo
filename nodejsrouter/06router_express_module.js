var http = require('http')
var app = require('./model/express-route')

http.createServer(app).listen(3000)

app.get('/login', function(req, res) {
  res.end('login')
})