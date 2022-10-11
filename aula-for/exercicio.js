const number = prompt('Digite o numero desejado: ')
let tabuada = ''

for (i = 1; i <= 20; i++) {
  tabuada += '=>' + number + ' * ' + i + ' = ' + number * i + '\n '
}
alert('Tabuada do ' + number + ': ' + tabuada)
