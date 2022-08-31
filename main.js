var add = function (n, m) {
  if (n, m) {
    return n + m
  } else {
    function f(m) {
      return n + m
    }
    return f //這必須返回的是整個函數，而不是函數的調用f();
  }
}

var a = add(1)(2)
var b = add(1, 2)
console.log(a)
console.log(b)

console.log('add something')
console.log('add feature')
