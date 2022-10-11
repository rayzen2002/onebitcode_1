const lista = ['Emanuel', 'Antonia', 'Matheus', 'Geraldo', 'Beatriz']
let menu = ''
while (menu != '3') {
  let pacientes = ''
  for (i = 0; i < lista.length; i++) {
    pacientes += i + 1 + 'º - ' + lista[i] + '\n'
  }
  menu = prompt(
    'Pacientes: \n' +
      pacientes +
      '\n' +
      '\nEscolha uma opcao: \n' +
      '1. Novo Paciente\n' +
      '2. Consultar Paciente\n' +
      '3. Sair'
  )
  if (menu == '1') {
    const novoPaciente = prompt('Digite o nome do novo paciente: ')
    lista.push(novoPaciente)
  }
  if (menu == '2') {
    const consultaPaciente = lista.shift()
    if (consultaPaciente) {
      alert('O paciente: ' + consultaPaciente + ' sera consultado')
    } else alert('Nao ha pacientes na fila.')
  }
}

console.log(lista)
