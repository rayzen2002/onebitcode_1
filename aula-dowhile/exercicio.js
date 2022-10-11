do {
  const opcao = prompt(
    'Escolha uma opcao: \n1.Opcao 1' +
      '\n2.Opcao 2' +
      '\n3.Opcao 3' +
      '\n4.Opcao 4' +
      '\n5.Opcao 5(Encerrar)'
  )
  opcaoNumerica = parseFloat(opcao)
  switch (opcaoNumerica) {
    case 1:
      alert('Voce escolheu a Opcao 1')
      break
    case 2:
      alert('Voce escolheu a Opcao 2')
      break
    case 3:
      alert('Voce escolheu a Opcao 3')
      break
    case 4:
      alert('Voce escolheu a Opcao 4')
      break
    case 5:
      alert('encerrando...')
      break
    default:
      alert('Opcao invalida')
  }
} while (opcaoNumerica != 5)
