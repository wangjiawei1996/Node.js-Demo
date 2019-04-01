// import { resolve } from "url";

// function getDate() {
//   return '这是一个数据'
// }
// console.log(getDate())

// async异步方法获取数据的第一种方法
// async function getDate() {
//   return '这是一个数据'
// }
// var p = getDate()
// p.then((data) => {
//   console.log(data)
// })

// async异步方法获取数据的第二种方法
// async function getDate() {
//   return '这是async获取的数据'
// }
// async function test() {
//   var d = await getDate()
//   console.log(d)
// }
// test()
// async异步方法获取Promise对象
// function getDate() {
//   return new Promise((resolve,reject) => {
//     setTimeout(()=> {
//       var username = '张三'
//       resolve(username)
//     }, 1000)
//   })
// }
// var p = getDate()
// p.then(function(d){
//   console.log(d)
// })

function getDate() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      var username='张三'
      resolve(username)
    }, 1000)
  })
}
async function test() {
  var p = await getDate()
  console.log(p)
}
test()