var count = 1
var container = document.getElementById('container')

function updateCount (e) {
  container.innerHTML = count++
}

// step 1
// 节流：函数每隔一段时间执行一次
function throttle (fn, n) {
  var timeout
  return function () {
    if (!timeout) {
      timeout = null
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(this, arguments)
      }, n)
    }
  }
}

container.onmousemove = throttle(updateCount, 3000)
