const nomeTurista = prompt('Digite seu nome: ')
let doTurista = prompt('Voce ja visitou alguma cidade?')
let cidadeTurista = ''
let cidades = ''
let k = 0

while (
  doTurista === 'sim' ||
  doTurista === 'Sim' ||
  doTurista === 'ja' ||
  doTurista === 'já'
) {
  cidadeTurista = prompt('Qual cidade voce visitou?')
  cidades += ' - ' + cidadeTurista + '\n'
  k++
  doTurista = prompt('Voce visitou alguma outra cidade?')
}
alert(
  'Turista: ' +
    nomeTurista +
    '\nQuantidade de cidades visitadas: ' +
    k +
    '\nCidades visitadas:\n' +
    cidades
)
