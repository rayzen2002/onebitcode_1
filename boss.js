let vagas = []
function menu() {
  const opc = prompt(
    'Escolha uma opção: ' +
      '\n1. Listar vagas disponiveis' +
      '\n2. Criar uma nova vaga' +
      '\n3. Visualizar uma vaga' +
      '\n4. Inscrever um candidato na vaga' +
      '\n5. Excluir uma vaga' +
      '\n6. Sair'
  )
  return opc
}
/*do (opc !== '6') {
    switch (opc) {
      case '1':
        listar()
        break
      case '2':
        criarVaga()
        break
      case '3':
        visualisarVaga()
        break
      case '4':
        inscreverVaga()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert('saindo...')
        break
      default:
    }
  }while(opc !== '6')*/

function listar() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + '. '
    textoFinal += vaga.nome
    textoFinal += ' (' + vaga.candidatos.length + 'candidatos)\n'
    return textoFinal
  }, '')
  alert(vagasEmTexto)
}
function criarVaga() {
  const nome = prompt('Digite um nome para a vaga: ')
  const descricaoDaVaga = prompt('Digite uma descrição para a vaga')
  const dataLimite = prompt('Digite uma data limite(dd/mm/aa')
  const confirmacao = confirm(
    'Deseja salvar a vaga?' +
      '\nNome: ' +
      nome +
      '\nDescricao: ' +
      descricaoDaVaga +
      '\nData limite: ' +
      dataLimite
  )

  if (confirmacao) {
    const novaVaga = { nome, descricaoDaVaga, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert('Vaga Criada')
  }
}

function exibirVaga() {
  let indice = prompt('Digite o indice da vaga: ')
  const vaga = vagas[indice]

  if (indice >= vagas.length || indice < 0) {
    alert('Indice invalido')
    return
  }
  /*vaga.indice.forEach(function () {
    if (vaga.indice == indice) {
      alert(
        'Indice: ' +
          vaga.indice +
          '\nNome: ' +
          vaga.nomeDaVaga +
          '\nDescrição: ' +
          vaga.descricaoDaVaga +
          '\nData limite: ' +
          vaga.dataLimite
      )
    } else {
      alert('Nao há vagas regristradas com este indice')
    }
  })*/
  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + '\n - ' + candidato
  },
  '')

  alert(
    'Vaga numero ' +
      indice +
      '\nNome da vaga: ' +
      vaga.nome +
      '\nDescricao da vaga: ' +
      vaga.descricaoDaVaga +
      '\nData limite: ' +
      vaga.dataLimite +
      '\nQuantidade de candidatos: ' +
      vaga.candidatos.length +
      '\nCandidatos inscritos: ' +
      candidatosEmTexto
  )
}

function inscreverVaga() {
  /*
  vaga.indice.forEach(function () {
    if (indice == vaga.indice) {
      vaga.candidatos.candidato.nomeDoCandidato.push(candidato)
      confirm(
        'Deseja confirmar inscrição para a vaga ' +
        vaga.indice +
        '\nDescrição: ' +
        vaga.descricaoDaVaga
        )
      }
    })*/
  const candidato = prompt('Digite o nome do candidato: ')
  const indice = prompt('Digite o indice da vaga desejada: ')
  const vaga = vagas[indice]
  const confirmacao = confirm(
    'Deseja inscrever o candidato: ' +
      candidato +
      '\nNa vaga: ' +
      indice +
      '?' +
      '\nNome: ' +
      vaga.nome +
      '\nDescricao: ' +
      vaga.descricaoDaVaga +
      '\nData limite: ' +
      vaga.dataLimite
  )
  if (confirmacao) {
    candidatos.push(candidato)
    alert('Inscricao realizada')
  }
}

function excluirVaga() {
  let indice = prompt('Digite o indice da vaga')
  const vaga = vagas[indice]
  const confirmacao = confirm(
    'Deseja excluir a vaga ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescricao: ' +
      vaga.descricaoDaVaga +
      '\nData limite: ' +
      vaga.dataLimite
  )
  if (confirmacao) {
    vagas.splice(indice, 1)
    alert('Vaga excluida')
  }
}

function executar() {
  let opc = ''
  do {
    opc = menu()

    switch (opc) {
      case '1':
        listar()
        break
      case '2':
        criarVaga()
        break
      case '3':
        exibirVaga()
        break
      case '4':
        inscreverVaga()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert('saindo...')
        break
      default:
        alert('Opcao invalida..')
    }
  } while (opc !== '6')
}
//Vagas de emprego => Nome, Vaga, descricao, data
executar()
