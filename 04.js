const prompt = require(`prompt-sync`)()

let numero = parseInt(prompt("Digite um número: "))

if (numero % 2 == 0){
    console.log("seu número é PAR")
}else{
    console.log("seu número é IMPAR")
}