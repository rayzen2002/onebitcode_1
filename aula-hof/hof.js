function calcular(a, b, operacao) {
  const resultado = operacao(a, b)
  return resultado
}

function somar(x, y) {
  return x + y
}

function multiplicar(x, y) {
  return x * y
}

//console.log(calcular(3, 5, somar))
//console.log(calcular(3, 5, multiplicar))

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = [1, 2, 3, 4, 5]
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i], i, lista)
}

lista.forEach(exibirElemento)
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})
