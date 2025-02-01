function foo(a, b) {
  a = (a === undefined) ? 0 : a;
  b = (b === undefined) ? 0 : b;
  return a + b;
}

console.log(foo(undefined, 2)); // 2
console.log(foo(null, 2)); // 2
console.log(foo(1, undefined)); // 1
console.log(foo(1, null)); // 1