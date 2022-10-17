/*function ola() {
  console.log('hello dog')
}
*/
function ola(name = 'Mundo') {
  alert('Ola, ' + name + '!')
}
//ola('Emanuel')
//ola()

function soma(a, b) {
  alert('Resultado = ' + (a + b))
}

function criarUsuario(nome, email, senha, tipo = 'admin') {
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

function novoUsuario(nome, tipo = 'admin', email, senha) {
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}
//criarUsuario('Emanuel', 'emanuel@email.com', '123456')
//novoUsuario('Emanuel', 'emanuel@email.com', '123456')

function muitosParametros(nome, email, senha, endereco, numero, tipo) {}
function objetosComoParametro(usuario) {
  console.log(usuario)
}
const dadosUsuario = {
  nome: '',
  email: '',
  senha: '',
  endereco: '',
  numero: '',
  tipo: ''
}
objetosComoParametro(dadosUsuario)
