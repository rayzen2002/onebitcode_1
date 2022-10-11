let baralho = ['8 de copas', 'rainha de pau', 'rei de ouro']
let menu = ''
while (menu != '3') {
  menu = prompt(
    'Cartas no baralho: ' +
      baralho.length +
      '\n' +
      '\n' +
      'Escolha: \n' +
      '1. Adicionar uma carta \n' +
      '2. Retirar uma carta \n' +
      '3. Sair'
  )
  if (menu == '1') {
    const addBaralho = prompt('Qual carta deseja adicionar no baralho? ')
    baralho.push(addBaralho)
  }
  if (menu == '2') {
    const removeBaralho = baralho.pop()
    if (!removeBaralho) {
      alert('Nao ha nenhuma carta no baralho')
    } else {
      alert('Voce puxou um(a): ' + removeBaralho)
    }
  }
}
