var G = []
var app = function(req, res) {
  if (G['login']) {
    G['login'](req, res)  //执行注册的方法
  }
}
app.get = function(string, callback) {
  G[string] = callback
}
app.get('login', function(req, res) {
  console.log('login')
})
setTimeout(function(){
  app('req', 'res')
},1000)
// app.post = function() {
//   console.log('app.post')
// }