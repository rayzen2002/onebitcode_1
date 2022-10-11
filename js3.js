let veiA = prompt('Digite o nome e a velocidade do primeiro Veiculo: ')
let veiB = prompt('Digite o nome e a velocidade do segundo Veiculo: ')

let veiAName = veiA.split(',')[0]
let veiBName = veiB.split(',')[0]
let velA = veiA.split(',')[1]
let velB = veiB.split(',')[1]

if (velA[1] > velB[1]) {
  alert(
    'O veiculo ' + veiAName + ' eh mais rapido do que o veiculo ' + veiBName
  )
} else if (velB[1] > velA[1]) {
  alert('O veiculo ' + veiBName + ' é mais rapido do que o veiculo ' + veiAName)
} else if (velA[1] == velB[1]) {
  alert('Os veiculos possuem a mesma velocidade')
}
