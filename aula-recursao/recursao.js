function fatorial(num) {
  if (num > 1) {
    return num * fatorial(num - 1)
  } else return 1
}
console.log(fatorial(10))
