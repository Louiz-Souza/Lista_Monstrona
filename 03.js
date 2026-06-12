const prompt = require(`prompt-sync`)()

const salario = 1500

console.log(`você recebeu ${salario} e ganhara 15% de aumento`)

console.log (`seu salario deu ${(salario*1.15).toFixed(2)}`)