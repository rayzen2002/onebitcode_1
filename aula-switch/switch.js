const resultado = prompt('Escolha uma alternativa: \na) \nb) \nc)')
const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
  case 1:
    alert('O resultado é A')
    break
  case 2:
    alert('O resultado é B')
    break
  case 3:
    alert('O resultado é C')
    break
  default:
}
