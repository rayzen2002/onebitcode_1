function areaTriangulo() {
  let base = prompt('Digite a base do Triangulo')
  let altura = prompt('Digite a altura do triangulo')
  return base * altura
}

function areaQuadrado() {
  let lado = prompt('Digite o lado do quadrado')
  return lado * lado
}

function areaTrapezio() {
  let baseMaior = parseFloat(prompt('Digite a base maior do Trapzeio'))
  let baseMenor = parseFloat(prompt('Digite a base menor do Trapzeio'))
  return (baseMaior + baseMenor) / 2
}

function areaCirculo() {
  let raio = prompt('Digite o raio do Circulo')
  return 3.14 * raio * raio
}

function exibirMenu() {
  return prompt(
    'Calculadora \n' +
      'Escolha uma opcao com a area desejada: \n' +
      '1.Triangulo\n' +
      '2.Quadrado\n' +
      '3.Trapzeio\n' +
      '4.Circulo\n' +
      '5.Sair'
  )
}

function executar() {
  let opcao = ''
  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case '1':
        resultado = areaTriangulo()
        break
      case '2':
        resultado = areaQuadrado()
        break
      case '3':
        resultado = areaTrapezio()
        break
      case '4':
        resultado = areaCirculo()
        break
      case '5':
        alert('Saindo...')
        break
      default:
        alert('Opcao Invalida')
    }
    if (resultado) {
      alert('Resultado = ' + resultado)
    }
  } while (opcao !== '5')
}

executar()
