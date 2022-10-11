const arr = [
  'Frodo',
  'Sam',
  'Merry',
  'Pippin',
  'Gandalf',
  'Aragorn',
  'Legolas',
  'Gimli'
]
console.log(arr)

arr.push('Boromir')
arr.unshift('Boromir')
console.log(arr)

arr.pop()
arr.shift()
console.log(arr)

const inclui = arr.includes('Gandalf')
console.log(inclui)

const indice = arr.indexOf('Gandalf')

const hobbits = arr.slice(0, 4)
console.log(hobbits)
const outros = arr.slice(-4)
console.log(outros)

const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)

const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf o cinzento')
console.log(elementosRemovidos)
