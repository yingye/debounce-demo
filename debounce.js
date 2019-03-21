var count = 1
var container = document.getElementById('container')

function updateCount (e) {
  container.innerHTML = count++
}

// step 0
// container.onmousemove = updateCount

// step 1
// 防抖：函数触发后一段之后再执行，触发多次的话，以最后一次触发为准
// function debounce (fn, n) {
//   var timeout
//   return function () {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(() => {
//       fn.apply(this, arguments)
//     }, n)
//   }
// }

// container.onmousemove = debounce(updateCount, 100)

// // step 2
// 立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function debounce (fn, n, immediate) {
  var timeout
  return function () {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, n)
      if (callNow) fn.apply(this, arguments)
    } else {
      timeout = setTimeout(() => {
        fn.apply(this, arguments)
      }, n)
    }
  }
}

container.onmousemove = debounce(updateCount, 100, true)
