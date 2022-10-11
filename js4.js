let personagemA = prompt(
  'Escreva o Nome e o Poder de Ataque do primeiro Personagem'
)
let personagemB = prompt(
  'Escreva o Nome, Hp e poder de defesa do segundo Personagem e  se ele possui um escudo'
)
let dmg = 0

let nomePersonagemA = personagemA.split(',')[0]
let ataquePersonagemA = personagemA.split(',')[1]

let nomePersonagemB = personagemB.split(',')[0]
let hpPersonagemB = personagemB.split(',')[1]
let defesaPersonagemB = personagemB.split(',')[2]
let escudoPersonagemB = personagemB.split(',')[3]

if (escudoPersonagemB == 'nao') {
  if (ataquePersonagemA > defesaPersonagemB) {
    dmg = ataquePersonagemA - defesaPersonagemB
  }
}

if (escudoPersonagemB == 'sim') {
  if (ataquePersonagemA > defesaPersonagemB) {
    dmg = (ataquePersonagemA - defesaPersonagemB) / 2
  }
}

if (ataquePersonagemA <= defesaPersonagemB) {
  dmg = 0
}

hpPersonagemB -= dmg
console.log(
  'O dano causado foi ' +
    dmg +
    '\nPersonagem A: ' +
    personagemA +
    '\nPersonagem B: ' +
    nomePersonagemB +
    ' ' +
    hpPersonagemB +
    ' ' +
    defesaPersonagemB +
    ' ' +
    escudoPersonagemB
)

console.log(hpPersonagemB)
