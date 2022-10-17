let pessoa = {
  nome: 'Emanuel',
  idade: '25',
  dizerOla() {
    alert('Meu nome eh: ' + this.nome)
  }
}
console.log(pessoa.nome)
pessoa.dizerOla()
