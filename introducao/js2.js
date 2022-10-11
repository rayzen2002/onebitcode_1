let firstValue = prompt('Digite o primeiro valor')
let secondValue = prompt('Digite o segundo valor: ')
let result
let x = parseFloat(firstValue)
let y = parseFloat(secondValue)

let operation = prompt('Digite a operacao desejada')

switch (operation) {
  case '+':
    result = x + y
    break
  case '-':
    result = x - y
    break
  case '*':
    result = x * y
    break
  case '/':
    result = x / y
    break
}
alert(result)
