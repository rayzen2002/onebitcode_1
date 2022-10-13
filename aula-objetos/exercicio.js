let imoveis = {
  proprietario: [],
  quartos: [],
  banheiros: [],
  garagem: []
}
let menu = ''

do {
  menu = prompt(
    'A quantidade de imoveis cadastrados é: ' +
      imoveis.proprietario.length +
      '\nEscolha uma Opção: ' +
      '\n1. Salvar um Imovel' +
      '\n2. Mostrar dados dos imoveis' +
      '\n3. Sair'
  )
  switch (menu) {
    case '1':
      imoveis.proprietario.push(prompt('Digite o nome do proprietario'))
      imoveis.quartos.push(prompt('Quantos quartos?'))
      imoveis.banheiros.push(prompt('Quantos banheiros?>'))
      imoveis.garagem.push(prompt('Possui Garagem?'))
      break
    case '2':
      if (imoveis.proprietario.length > 1) {
        for (let i = 0; i < imoveis.proprietario.length; i++) {
          alert(
            'O imovel ' +
              (i + 1) +
              ' é do proprietario: ' +
              imoveis.proprietario[i] +
              '\nPossui ' +
              imoveis.quartos[i] +
              ' quartos' +
              '\nPossui ' +
              imoveis.banheiros[i] +
              ' banheiros' +
              '\nPossui garagem = ' +
              imoveis.garagem[i]
          )
        }
      }

      break
    case '3':
      break
  }
} while (menu !== '3')

console.log(imoveis)
