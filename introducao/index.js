let firstName = prompt('Digite seu primeiro nome: ')
let secondName = prompt('Digite seu sobrenome: ')
let studyField = prompt('Digite seu campo de Estudos: ')
let birthday = prompt('Digite seu ano de nascimento: ')

let age = 2022 - birthday

alert(
  'Nome Completo: ' +
    firstName +
    ' ' +
    secondName +
    '\nSeu Campo de estudo eh: ' +
    studyField +
    '\nSua data de nascimento eh:' +
    age
)
