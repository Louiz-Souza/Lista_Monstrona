const prompt = require(`prompt-sync`)()
repetir = true
let numero = 0
let acumuladora = 0

do {numero = parseInt(prompt("adicione um número: "))
    acumuladora += numero
}
while( numero != 0);




console.log(`O resultado é ${acumuladora}`)

