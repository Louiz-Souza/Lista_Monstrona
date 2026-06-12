const prompt = require (`prompt-sync`)()

let ano = parseInt(prompt("digite seu ano de nascimento: "))

if(ano - 2026 >= 18){
    console.log("você é maior de idade")
}else{
    console.log("você é menor de idade")
}