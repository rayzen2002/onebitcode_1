const palavra = prompt('Digite uma palavra: ')
let palavraInvertida = ''
for (i = 1; i <= palavra.length; i++) {
  palavraInvertida += palavra[palavra.length - i]
}
if (palavraInvertida === palavra) {
  alert(palavra + ' eh um palindromo')
} else
  alert('nao eh um palindromo' + '\n\n' + palavra + ' !== ' + palavraInvertida)
