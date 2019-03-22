var count = 1
var container = document.getElementById('container')

function updateCount (e) {
  container.innerHTML = count++
}

// step 1
// 节流：函数每隔一段时间执行一次
// 时间戳的形式
// function throttle (fn, n) {
//   var previous = 0
//   return function () {
//     var now = +new Date()
//     if (now - previous > n) {
//         fn.apply(this, arguments)
//         previous = now
//     }
//   }
// }

// 定时器的形式
// function throttle (fn, n) {
//   var timeout
//   return function () {
//     if (!timeout) {
//       timeout = null
//       timeout = setTimeout(() => {
//         timeout = null
//         fn.apply(this, arguments)
//       }, n)
//     }
//   }
// }


// step 2
// 综合上述两种方式，有头有尾
function throttle (fn, n) {
  var timeout
  var previous = 0
  return function () {
    var now = +new Date()
    if (now - previous > n ) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      fn.apply(this, arguments)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = now
        timeout = null
        fn.apply(this, arguments)
      }, n)
    }
  }
}

container.onmousemove = throttle(updateCount, 1000)
