function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1
  }
  return produto
}

const notebook = criarProduto('Notebook core i5', '3000')
console.log(notebook)
