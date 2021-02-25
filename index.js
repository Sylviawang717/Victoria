'use strict'

const names = shuffle('Jeremy Dolly Isaih Amelia Yin Danial Yu'.split(' '))
const teamNames = 'unicorn chimera selkies'.split(' ')

const teams = {}
teamNames.forEach((t) => {
  teams[t] = []
})

for (let i = 0; i < names.length; i++) {
  const teamName = teamNames[i % teamNames.length]
  teams[teamName].push(names[i])
}

console.log(JSON.stringify(teams, null, 2))

function shuffle (input) {
  for (let i = input.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const itemAtIndex = input[randomIndex]

    input[randomIndex] = input[i]
    input[i] = itemAtIndex
  }
  return input
}
