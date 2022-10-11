const medida = prompt('Digite a medida em metros a ser convertida: ')
const medidaNumerica = parseFloat(medida)
const unidade = prompt(
  'Digite a unidade a ser convertida' +
    '\n1.mm' +
    '\n2.cm' +
    '\n3.dm' +
    '\n4.dam' +
    '\n5.hm ' +
    '\n6.km'
)

switch (unidade) {
  case '1':
    const medidaMM = medidaNumerica * 10 ** 3
    alert(medidaNumerica + 'm = ' + medidaMM + 'mm')
    break
  case '2':
    const medidaCM = medidaNumerica * 10 ** 2
    alert(medidaNumerica + 'm = ' + medidaCM + 'cm')
    break
  case '3':
    const medidaDM = medidaNumerica * 10
    alert(medidaNumerica + 'm = ' + medidaDM + 'dm')
    break
  case '4':
    const medidaDAM = medidaNumerica * 10 ** -1
    alert(medidaNumerica + 'm = ' + medidaDAM + 'dam')
    break
  case '5':
    const medidaHM = medidaNumerica * 10 ** -2
    alert(medidaNumerica + 'm = ' + medidaHM + 'hm')
    break
  case '6':
    const medidaKM = medidaNumerica * 10 ** -3
    alert(medidaNumerica + 'm = ' + medidaKM + 'km')
    break
  default:
    alert('Opção inválida')
}
