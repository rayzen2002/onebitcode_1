const moneyAvaliable = prompt('Digite a quantidade inicial de dinheiro: ')
let moneyAvaliableNumber = parseFloat(moneyAvaliable)

do {
  let menu = prompt(
    'Voce possui ' +
      moneyAvaliableNumber +
      'R$' +
      '\nDeseja: ' +
      '\n1.Adicionar' +
      '\n2.Remover' +
      '\n3.Encerrar'
  )
  menuNumber = parseFloat(menu)
  switch (menuNumber) {
    case 1:
      const moneyAdded = prompt('Quanto deseja adicionar?')
      moneyAddedNumber = parseFloat(moneyAdded)
      moneyAvaliableNumber += moneyAddedNumber
      break
    case 2:
      moneyAvaliableNumber -= parseFloat(prompt('Quanto deseja remover?'))
      break
  }
} while (menuNumber != 3)
