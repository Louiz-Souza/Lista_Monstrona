const prompt = require('prompt-sync')()

let idade = parseInt(prompt("Por favor digite sua idade: "))

const dias = 365

console.log(`Você tem ${dias*idade} de idade`)